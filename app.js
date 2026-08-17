(function () {
  "use strict";

  const data = window.ATLAS_DATA;
  if (!data || !window.L) {
    document.body.innerHTML = "<p style='padding:24px;font-family:sans-serif'>地图资源加载失败，请联网后刷新页面。</p>";
    return;
  }

  const categoryConfig = {
    main: { label: "主线程", color: "#a5412d" },
    side: { label: "顺路补充", color: "#c38b20" },
    weather: { label: "天气替代", color: "#66717a" },
    transfer: { label: "交通节点", color: "#1f7480" },
    constraint: { label: "限制条件", color: "#8e3048" },
    base: { label: "住宿基地", color: "#274f45" }
  };

  const modeConfig = {
    flight: { label: "航班 / 机场线", color: "#715486" },
    rail: { label: "铁路", color: "#3d5262" },
    bus: { label: "公交", color: "#bd5b32" },
    boat: { label: "船", color: "#258aa0" },
    cable: { label: "缆车 / 齿轨", color: "#b98218" },
    walk: { label: "步行", color: "#697447" },
    metro: { label: "市内交通", color: "#596b7d" },
    tram: { label: "电车 / 公交", color: "#8a5d3c" }
  };

  const tileOptions = {
    maxZoom: 19,
    attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\" rel=\"noopener\">OpenStreetMap</a> contributors"
  };

  const mapOptions = {
    zoomControl: true,
    scrollWheelZoom: false,
    preferCanvas: true
  };

  const overviewMap = L.map("overview-map", mapOptions);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", tileOptions).addTo(overviewMap);
  L.control.scale({ imperial: false, position: "bottomleft" }).addTo(overviewMap);

  const dailyMap = L.map("daily-map", mapOptions);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", tileOptions).addTo(dailyMap);
  L.control.scale({ imperial: false, position: "bottomleft" }).addTo(dailyMap);

  const groups = {};
  Object.keys(categoryConfig).forEach((category) => {
    groups[category] = L.featureGroup();
  });

  let selectedDay = 1;
  let selectedFocus = "play";
  let currentDay = data.days[0];
  let markerLookup = {};
  let layerState = {};

  const elements = {
    rail: document.getElementById("day-rail"),
    kicker: document.getElementById("day-kicker"),
    title: document.getElementById("day-title"),
    subtitle: document.getElementById("day-subtitle"),
    meta: document.getElementById("day-meta"),
    counter: document.getElementById("day-counter"),
    stopList: document.getElementById("stop-list"),
    summary: document.getElementById("day-summary"),
    decisions: document.getElementById("decision-list"),
    sources: document.getElementById("source-row"),
    guide: document.getElementById("guide-brief"),
    guideTheme: document.getElementById("guide-theme"),
    guideScript: document.getElementById("guide-script"),
    guideSights: document.getElementById("guide-sights"),
    guideFood: document.getElementById("guide-food"),
    guideCulture: document.getElementById("guide-culture"),
    guideFieldNote: document.getElementById("guide-field-note"),
    guideSources: document.getElementById("guide-sources"),
    layers: document.getElementById("layer-switches"),
    prev: document.getElementById("prev-day"),
    next: document.getElementById("next-day"),
    focus: document.getElementById("focus-control"),
    print: document.getElementById("print-button")
  };

  function markerIcon(point, overview) {
    const category = overview ? (point.category === "base" ? "base" : "side") : point.category;
    const config = categoryConfig[category] || categoryConfig.main;
    const markerClass = overview
      ? (point.category === "base" ? "overview-base" : "overview-side")
      : (point.category === "constraint" ? "constraint" : "");
    const text = overview ? point.n : (point.category === "constraint" ? "!" : point.n);
    const size = overview && point.category === "side" ? 20 : (overview ? 32 : 30);

    return L.divIcon({
      className: "",
      html: `<span class="atlas-marker ${markerClass}" style="--cat-color:${config.color}">${text}</span>`,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      popupAnchor: [0, -size / 2]
    });
  }

  function labelPlacement(point, overview) {
    const directions = ["top", "right", "left", "bottom"];
    const direction = point.labelDirection || (overview ? "top" : directions[(Number(point.n) - 1) % directions.length]);
    const offsets = {
      top: [0, -10],
      right: [12, 0],
      bottom: [0, 10],
      left: [-12, 0]
    };
    return { direction, offset: offsets[direction] || offsets.top };
  }

  function declutterLabels(map) {
    window.requestAnimationFrame(() => {
      const labels = Array.from(map.getContainer().querySelectorAll(".atlas-label"));
      const occupied = [];
      labels.forEach((label) => label.classList.remove("is-hidden"));
      labels.forEach((label) => {
        const rect = label.getBoundingClientRect();
        const padded = {
          left: rect.left - 3,
          right: rect.right + 3,
          top: rect.top - 3,
          bottom: rect.bottom + 3
        };
        const overlaps = occupied.some((other) => (
          padded.left < other.right && padded.right > other.left &&
          padded.top < other.bottom && padded.bottom > other.top
        ));
        if (overlaps) {
          label.classList.add("is-hidden");
        } else {
          occupied.push(padded);
        }
      });
    });
  }

  function popupHtml(point) {
    const category = categoryConfig[point.category] || categoryConfig.main;
    const osmUrl = `https://www.openstreetmap.org/?mlat=${point.lat}&mlon=${point.lng}#map=16/${point.lat}/${point.lng}`;
    return [
      `<span class="popup-category">${category.label}</span>`,
      `<strong class="popup-title">${point.name}</strong>`,
      `<p class="popup-note">${point.note || ""}</p>`,
      `<a class="popup-link" href="${osmUrl}" target="_blank" rel="noopener">在OpenStreetMap查看</a>`
    ].join("");
  }

  function pointMap(points) {
    return points.reduce((acc, point) => {
      acc[point.id] = point;
      return acc;
    }, {});
  }

  function segmentCoordinates(segment, pointsById) {
    const start = pointsById[segment.from];
    const end = pointsById[segment.to];
    if (!start || !end) return [];
    return [[start.lat, start.lng]].concat(segment.via || [], [[end.lat, end.lng]]);
  }

  function segmentStyle(segment, outline) {
    const mode = modeConfig[segment.mode] || modeConfig.walk;
    const kind = segment.kind || "main";
    const styles = {
      main: { weight: 4, opacity: 0.9, dashArray: null },
      side: { weight: 3, opacity: 0.82, dashArray: "8 7" },
      weather: { weight: 3, opacity: 0.72, dashArray: "2 7" },
      constraint: { weight: 2.5, opacity: 0.75, dashArray: "1 8" }
    };
    const style = styles[kind] || styles.main;
    if (outline) {
      return { color: "#ffffff", weight: style.weight + 3, opacity: 0.68, interactive: false };
    }
    return {
      color: mode.color,
      weight: style.weight,
      opacity: style.opacity,
      dashArray: style.dashArray,
      lineCap: "round",
      lineJoin: "round"
    };
  }

  function addSegment(map, group, segment, pointsById) {
    const coordinates = segmentCoordinates(segment, pointsById);
    if (coordinates.length < 2) return;
    L.polyline(coordinates, segmentStyle(segment, true)).addTo(group);
    const line = L.polyline(coordinates, segmentStyle(segment, false)).addTo(group);
    const mode = modeConfig[segment.mode] || modeConfig.walk;
    line.bindTooltip(segment.label || mode.label, { sticky: true, direction: "top" });
  }

  function renderOverview() {
    const pointsById = pointMap(data.overview.points);
    const routeGroup = L.featureGroup().addTo(overviewMap);

    data.overview.segments.forEach((segment) => addSegment(overviewMap, routeGroup, segment, pointsById));
    data.overview.points.forEach((point) => {
      const marker = L.marker([point.lat, point.lng], { icon: markerIcon(point, true), riseOnHover: true }).addTo(routeGroup);
      const placement = labelPlacement(point, true);
      marker.bindPopup(`<strong class="popup-title">${point.name}</strong><p class="popup-note">${point.note}</p>`, { className: "atlas-popup" });
      marker.bindTooltip(point.name, {
        permanent: point.category === "base",
        direction: placement.direction,
        offset: placement.offset,
        className: "atlas-label"
      });
    });

    overviewMap.fitBounds(routeGroup.getBounds(), { padding: [28, 28], maxZoom: 7 });
    declutterLabels(overviewMap);
  }

  function buildDayRail() {
    elements.rail.innerHTML = data.days.map((day) => `
      <button class="day-button" type="button" data-day="${day.id}" aria-current="${day.id === selectedDay}">
        <b>${String(day.id).padStart(2, "0")}</b>
        <span><strong>${day.title}</strong><small>${day.date} · ${day.weekday}</small></span>
      </button>
    `).join("");

    elements.rail.addEventListener("click", (event) => {
      const button = event.target.closest("[data-day]");
      if (!button) return;
      selectDay(Number(button.dataset.day), true);
    });
  }

  function clearDailyLayers() {
    Object.values(groups).forEach((group) => {
      group.clearLayers();
      if (dailyMap.hasLayer(group)) dailyMap.removeLayer(group);
    });
    markerLookup = {};
  }

  function groupForSegment(segment) {
    if (segment.kind === "side") return "side";
    if (segment.kind === "weather") return "weather";
    if (segment.kind === "constraint") return "constraint";
    return "main";
  }

  function renderDailyMap(day) {
    clearDailyLayers();
    const pointsById = pointMap(day.points);

    day.segments.forEach((segment) => {
      addSegment(dailyMap, groups[groupForSegment(segment)], segment, pointsById);
    });

    day.points.forEach((point) => {
      const placement = labelPlacement(point, false);
      const marker = L.marker([point.lat, point.lng], {
        icon: markerIcon(point, false),
        riseOnHover: true,
        keyboard: true,
        title: point.name
      }).addTo(groups[point.category]);
      marker.bindPopup(popupHtml(point), { className: "atlas-popup", maxWidth: 260 });
      marker.bindTooltip(point.name, {
        permanent: point.category === "main",
        direction: placement.direction,
        offset: placement.offset,
        className: "atlas-label"
      });
      markerLookup[point.id] = marker;
    });

    const usedCategories = new Set(day.points.map((point) => point.category));
    day.segments.forEach((segment) => usedCategories.add(groupForSegment(segment)));
    layerState = {};
    usedCategories.forEach((category) => {
      layerState[category] = true;
      groups[category].addTo(dailyMap);
    });
    renderLayerSwitches(usedCategories);
    fitDailyMap(selectedFocus);
    declutterLabels(dailyMap);
  }

  function renderLayerSwitches(usedCategories) {
    const order = ["main", "side", "weather", "transfer", "constraint"];
    elements.layers.innerHTML = order.filter((category) => usedCategories.has(category)).map((category) => {
      const config = categoryConfig[category];
      return `
        <label class="layer-switch" style="--layer-color:${config.color}">
          <input type="checkbox" data-layer="${category}" checked>
          <span class="layer-dot" aria-hidden="true"></span>
          <span>${config.label}</span>
        </label>
      `;
    }).join("");
  }

  function fitDailyMap(focus) {
    selectedFocus = focus;
    const points = focus === "play"
      ? currentDay.points.filter((point) => point.scope === "play")
      : currentDay.points;
    const visiblePoints = points.filter((point) => layerState[point.category] !== false);
    const target = visiblePoints.length ? visiblePoints : points;
    if (!target.length) return;

    if (target.length === 1) {
      dailyMap.setView([target[0].lat, target[0].lng], 14);
    } else {
      const bounds = L.latLngBounds(target.map((point) => [point.lat, point.lng]));
      dailyMap.fitBounds(bounds, { paddingTopLeft: [36, 36], paddingBottomRight: [150, 42], maxZoom: 14 });
    }

    elements.focus.querySelectorAll("button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.focus === focus));
    });
  }

  function renderStopList(day) {
    elements.stopList.innerHTML = day.points.map((point) => {
      const category = categoryConfig[point.category] || categoryConfig.main;
      const mode = modeConfig[point.mode] || modeConfig.walk;
      return `
        <li class="stop-item" style="--cat-color:${category.color}">
          <span class="stop-number">${point.category === "constraint" ? "!" : point.n}</span>
          <button class="stop-button" type="button" data-point="${point.id}">
            <span class="stop-copy">
              <strong>${point.name}</strong>
              <p>${point.note}</p>
            </span>
          </button>
          <span class="stop-tags">
            <span class="stop-tag">${category.label}</span>
            <span class="stop-tag">${mode.label}</span>
            ${point.duration ? `<span class="stop-tag">${point.duration}</span>` : ""}
          </span>
        </li>
      `;
    }).join("");
  }

  function renderDayContent(day) {
    const guide = data.guides?.[day.id];
    elements.kicker.textContent = `DAY ${String(day.id).padStart(2, "0")} · ${day.date} · ${day.weekday}`;
    elements.title.textContent = day.title;
    elements.subtitle.textContent = day.subtitle;
    elements.counter.textContent = `${String(day.id).padStart(2, "0")} / 15`;
    elements.meta.innerHTML = `
      <span>住宿 <b>${day.base}</b></span>
      <span>节奏 <b>${day.tempo}</b></span>
      <span>人流 <b>${day.crowd}</b></span>
    `;
    elements.summary.textContent = day.summary;
    elements.decisions.innerHTML = day.decisions.map((item) => `
      <div><dt>${item.term}</dt><dd>${item.detail}</dd></div>
    `).join("");
    elements.sources.innerHTML = day.sources.map((source) => `
      <a href="${source.url}" target="_blank" rel="noopener">${source.label}</a>
    `).join("");
    elements.guide.hidden = !guide;
    if (guide) {
      elements.guideTheme.textContent = guide.theme;
      elements.guideScript.textContent = guide.script;
      elements.guideSights.textContent = guide.sights;
      elements.guideFood.textContent = guide.food;
      elements.guideCulture.textContent = guide.culture;
      elements.guideFieldNote.textContent = guide.fieldNote;
      elements.guideSources.innerHTML = guide.sources.map((source) => `
        <a href="${source.url}" target="_blank" rel="noopener">${source.label}</a>
      `).join("");
    }
    renderStopList(day);
  }

  function selectDay(dayId, updateHash) {
    const day = data.days.find((item) => item.id === dayId);
    if (!day) return;
    selectedDay = dayId;
    selectedFocus = "play";
    currentDay = day;

    renderDayContent(day);
    renderDailyMap(day);

    elements.rail.querySelectorAll("[data-day]").forEach((button) => {
      button.setAttribute("aria-current", String(Number(button.dataset.day) === dayId));
    });
    const activeButton = elements.rail.querySelector(`[data-day="${dayId}"]`);
    if (updateHash) {
      activeButton?.scrollIntoView({ block: "nearest", inline: "center" });
    }

    elements.prev.disabled = dayId === 1;
    elements.next.disabled = dayId === data.days.length;
    elements.prev.style.opacity = dayId === 1 ? "0.35" : "1";
    elements.next.style.opacity = dayId === data.days.length ? "0.35" : "1";

    if (updateHash) {
      history.replaceState(null, "", `#day-${dayId}`);
    }
    window.setTimeout(() => dailyMap.invalidateSize(false), 80);
  }

  elements.layers.addEventListener("change", (event) => {
    const input = event.target.closest("[data-layer]");
    if (!input) return;
    const category = input.dataset.layer;
    layerState[category] = input.checked;
    if (input.checked) {
      groups[category].addTo(dailyMap);
    } else if (dailyMap.hasLayer(groups[category])) {
      dailyMap.removeLayer(groups[category]);
    }
  });

  elements.focus.addEventListener("click", (event) => {
    const button = event.target.closest("[data-focus]");
    if (!button) return;
    fitDailyMap(button.dataset.focus);
  });

  elements.stopList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-point]");
    if (!button) return;
    const point = currentDay.points.find((item) => item.id === button.dataset.point);
    const marker = markerLookup[button.dataset.point];
    if (!point || !marker) return;

    if (layerState[point.category] === false) {
      layerState[point.category] = true;
      groups[point.category].addTo(dailyMap);
      const input = elements.layers.querySelector(`[data-layer="${point.category}"]`);
      if (input) input.checked = true;
    }
    dailyMap.flyTo([point.lat, point.lng], Math.max(dailyMap.getZoom(), 14), { duration: 0.65 });
    window.setTimeout(() => marker.openPopup(), 650);
  });

  elements.prev.addEventListener("click", () => {
    if (selectedDay > 1) selectDay(selectedDay - 1, true);
  });

  elements.next.addEventListener("click", () => {
    if (selectedDay < data.days.length) selectDay(selectedDay + 1, true);
  });

  elements.print.addEventListener("click", () => {
    overviewMap.invalidateSize(false);
    dailyMap.invalidateSize(false);
    window.setTimeout(() => window.print(), 100);
  });

  window.addEventListener("keydown", (event) => {
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if (event.key === "ArrowLeft" && selectedDay > 1) selectDay(selectedDay - 1, true);
    if (event.key === "ArrowRight" && selectedDay < data.days.length) selectDay(selectedDay + 1, true);
  });

  window.addEventListener("hashchange", () => {
    const match = window.location.hash.match(/^#day-(\d+)$/);
    if (match) selectDay(Math.min(15, Math.max(1, Number(match[1]))), false);
  });

  const resizeObserver = new ResizeObserver(() => {
    overviewMap.invalidateSize(false);
    dailyMap.invalidateSize(false);
  });
  resizeObserver.observe(document.querySelector(".overview-map-shell"));
  resizeObserver.observe(document.querySelector(".daily-map-shell"));

  overviewMap.on("moveend zoomend resize", () => declutterLabels(overviewMap));
  dailyMap.on("moveend zoomend resize", () => declutterLabels(dailyMap));

  renderOverview();
  buildDayRail();
  const initialMatch = window.location.hash.match(/^#day-(\d+)$/);
  const initialDay = initialMatch ? Math.min(15, Math.max(1, Number(initialMatch[1]))) : 1;
  selectDay(initialDay, false);

  if (window.lucide) window.lucide.createIcons();
})();
