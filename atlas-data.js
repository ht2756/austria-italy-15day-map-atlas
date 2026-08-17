window.ATLAS_DATA = {
  overview: {
    points: [
      { id: "vienna", n: "01", name: "维也纳 Vienna", lat: 48.2085, lng: 16.3731, category: "base", labelDirection: "top", note: "D1–D2 · 帝国城市、老城与博物馆" },
      { id: "salzburg", n: "02", name: "萨尔茨堡 Salzburg", lat: 47.8000, lng: 13.0432, category: "base", labelDirection: "left", note: "D3–D4 · 老城基地与国王湖门户" },
      { id: "konigssee", n: "", name: "国王湖 Königssee", lat: 47.5907, lng: 12.9870, category: "side", note: "D4 · 跨境自然支线" },
      { id: "stwolfgang", n: "03", name: "圣沃尔夫冈 St. Wolfgang", lat: 47.7387, lng: 13.4466, category: "base", labelDirection: "right", note: "D5–D6 · 湖区两晚基地" },
      { id: "hallstatt", n: "", name: "哈尔施塔特 Hallstatt", lat: 47.5623, lng: 13.6493, category: "side", note: "D5 · 半日支线，不承担住宿" },
      { id: "innsbruck", n: "04", name: "因斯布鲁克 Innsbruck", lat: 47.2681, lng: 11.3935, category: "base", labelDirection: "left", note: "D7–D8 · 蒂罗尔城市与Nordkette" },
      { id: "bolzano", n: "05", name: "博尔扎诺 Bolzano", lat: 46.4980, lng: 11.3548, category: "base", labelDirection: "left", note: "D9–D10 · 南蒂罗尔文化基地" },
      { id: "carezza", n: "", name: "卡雷扎湖 Lago di Carezza", lat: 46.4096, lng: 11.5751, category: "side", note: "D10 · 低门槛山湖支线" },
      { id: "ortisei", n: "06", name: "奥蒂塞伊 Ortisei", lat: 46.5758, lng: 11.6711, category: "base", labelDirection: "right", note: "D11–D13 · 多洛米蒂三晚基地" },
      { id: "seceda", n: "", name: "Seceda", lat: 46.6005, lng: 11.7262, category: "side", note: "D12 · 高山主景" },
      { id: "siusi", n: "", name: "Alpe di Siusi", lat: 46.5480, lng: 11.6480, category: "side", note: "D13 · 高山草甸" },
      { id: "milan", n: "07", name: "米兰 Milano", lat: 45.4642, lng: 9.1916, category: "base", labelDirection: "top", note: "D14–D15 · 城市收尾与返程" },
      { id: "mxp", n: "", name: "Malpensa机场 MXP", lat: 45.6301, lng: 8.7231, category: "side", note: "D15 · 暂按主要国际机场标注，最终以机票为准" }
    ],
    segments: [
      { from: "vienna", to: "salzburg", mode: "rail", kind: "main", via: [[48.2038, 15.6247], [48.3069, 14.2858]] },
      { from: "salzburg", to: "konigssee", mode: "bus", kind: "side", via: [[47.7610, 13.0040], [47.6327, 13.0038]] },
      { from: "salzburg", to: "stwolfgang", mode: "bus", kind: "main", via: [[47.7660, 13.3650], [47.7236, 13.4830]] },
      { from: "stwolfgang", to: "hallstatt", mode: "bus", kind: "side", via: [[47.7102, 13.6212], [47.6428, 13.6161]] },
      { from: "stwolfgang", to: "innsbruck", mode: "rail", kind: "main", via: [[47.7102, 13.6212], [47.8095, 13.0550], [47.5833, 12.1628]] },
      { from: "innsbruck", to: "bolzano", mode: "rail", kind: "main", via: [[47.0037, 11.5079], [46.7169, 11.6560]] },
      { from: "bolzano", to: "carezza", mode: "bus", kind: "side", via: [[46.4760, 11.4520], [46.4280, 11.5370]] },
      { from: "bolzano", to: "ortisei", mode: "bus", kind: "main", via: [[46.5510, 11.5210], [46.5980, 11.5270], [46.5660, 11.6420]] },
      { from: "ortisei", to: "seceda", mode: "cable", kind: "side", via: [[46.5898, 11.6948], [46.5979, 11.7249]] },
      { from: "ortisei", to: "siusi", mode: "cable", kind: "side", via: [[46.5650, 11.6640], [46.5550, 11.6567]] },
      { from: "ortisei", to: "milan", mode: "rail", kind: "main", via: [[46.4980, 11.3548], [45.4384, 10.9916], [45.4859, 9.2043]] },
      { from: "milan", to: "mxp", mode: "flight", kind: "main", via: [[45.5000, 9.0780], [45.5900, 8.8500]] }
    ]
  },

  days: [
    {
      id: 1,
      date: "06月05日",
      weekday: "周六",
      title: "抵达维也纳",
      subtitle: "把第一晚当作时差缓冲：完成进城、入住和一条短老城步行线。",
      base: "维也纳 · 1/2晚",
      tempo: "轻松",
      crowd: "老城中高",
      summary: "今天的主线程只有“顺利抵达并建立城市方向感”，不为晚到航班追加硬性景点。",
      decisions: [
        { term: "航班", detail: "国际航班和落地机场尚未确定，地图暂按VIE与Wien Mitte进城线表示。" },
        { term: "体力", detail: "出现延误或明显疲劳时，直接入住；史蒂芬大教堂夜景可无损移到D2。" },
        { term: "交通", detail: "机场线可能选择S7、Railjet或CAT，按住宿位置决定，不提前锁死。" }
      ],
      sources: [
        { label: "维也纳机场交通", url: "https://www.viennaairport.com/en/passengers/arrival__parking/airport_to_from_vienna" }
      ],
      points: [
        { id: "vie", n: 1, name: "维也纳国际机场 VIE", lat: 48.1103, lng: 16.5697, category: "transfer", mode: "flight", duration: "入境+取行李", note: "实际落地时间决定今晚是否进老城。", scope: "journey" },
        { id: "wienmitte", n: 2, name: "Wien Mitte", lat: 48.2066, lng: 16.3846, category: "transfer", mode: "rail", duration: "机场换乘点", note: "住老城东侧可在此换乘；住中央车站则选直达Wien Hbf的列车。", scope: "journey" },
        { id: "base", n: 3, name: "住宿区：Karlsplatz / Hauptbahnhof", lat: 48.1949, lng: 16.3726, category: "main", mode: "metro", duration: "入住", note: "首要任务是放下行李、补水和简单进食。", scope: "play" },
        { id: "stephansdom", n: 4, name: "圣史蒂芬大教堂", lat: 48.2085, lng: 16.3731, category: "main", mode: "walk", duration: "20–30分钟", note: "只看外观与夜景，内部参观留给D2。", scope: "play" },
        { id: "graben", n: 5, name: "Graben与黑死病纪念柱", lat: 48.2087, lng: 16.3698, category: "side", mode: "walk", duration: "20–40分钟", note: "顺路散步；不再增加普拉特或远端街区。", scope: "play" }
      ],
      segments: [
        { from: "vie", to: "wienmitte", mode: "rail", kind: "main", via: [[48.1467, 16.4700], [48.1850, 16.4120]] },
        { from: "wienmitte", to: "base", mode: "metro", kind: "main" },
        { from: "base", to: "stephansdom", mode: "walk", kind: "main", via: [[48.2017, 16.3708]] },
        { from: "stephansdom", to: "graben", mode: "walk", kind: "side" }
      ]
    },

    {
      id: 2,
      date: "06月06日",
      weekday: "周日",
      title: "维也纳：宫殿与老城",
      subtitle: "上午美泉宫，下午只选一条城市主线；街区与博物馆作为互斥分支。",
      base: "维也纳 · 2/2晚",
      tempo: "中高",
      crowd: "周日中高",
      summary: "美泉宫与老城构成主线程。艺术馆、百水公寓和本地街区不能全部叠加，只选一个方向。",
      decisions: [
        { term: "周日", detail: "Naschmarkt市场摊位关闭，仅部分餐厅营业，因此不把它列为今日主线。" },
        { term: "雨天", detail: "下午优先艺术史博物馆或美景宫，取消街区步行。" },
        { term: "人文", detail: "若不进茜茜博物馆，把时间留给Freihausviertel或Weißgerberviertel，比继续刷宫殿更平衡。" }
      ],
      sources: [
        { label: "Naschmarkt开放日", url: "https://www.wien.info/en/dine-drink/markets/naschmarkt-353536" },
        { label: "美泉宫", url: "https://www.schoenbrunn.at/en/" }
      ],
      points: [
        { id: "schonbrunn", n: 1, name: "美泉宫 Schönbrunn", lat: 48.1845, lng: 16.3122, category: "main", mode: "metro", duration: "3–4小时", note: "预约首批或早场，宫殿与花园合并游览。", scope: "play" },
        { id: "gloriette", n: 2, name: "Gloriette观景轴线", lat: 48.1788, lng: 16.3085, category: "side", mode: "walk", duration: "30–45分钟", note: "体力允许才上坡；不必购买所有花园小景点。", scope: "play" },
        { id: "hofburg", n: 3, name: "霍夫堡与英雄广场", lat: 48.2064, lng: 16.3648, category: "main", mode: "metro", duration: "45分钟", note: "外观与城市史主线；是否进入茜茜博物馆现场取舍。", scope: "play" },
        { id: "stephansdom", n: 4, name: "圣史蒂芬大教堂", lat: 48.2085, lng: 16.3731, category: "main", mode: "walk", duration: "40–60分钟", note: "教堂内部、北塔或南塔三者不必全选。", scope: "play" },
        { id: "peterskirche", n: 5, name: "圣彼得教堂", lat: 48.2095, lng: 16.3707, category: "side", mode: "walk", duration: "15分钟", note: "位于老城主线旁，可无成本顺入。", scope: "play" },
        { id: "ankeruhr", n: 6, name: "Ankeruhr", lat: 48.2108, lng: 16.3745, category: "side", mode: "walk", duration: "10分钟", note: "不为错过正午表演折返。", scope: "play" },
        { id: "stadtpark", n: 7, name: "城市公园 Stadtpark", lat: 48.2047, lng: 16.3807, category: "side", mode: "walk", duration: "20–40分钟", note: "适合作为傍晚收尾与休息点。", scope: "play" },
        { id: "khm", n: 8, name: "艺术史博物馆 KHM", lat: 48.2037, lng: 16.3614, category: "weather", mode: "walk", duration: "2.5–3小时", note: "雨天下午首选；选择它就放弃大部分老城加项。", scope: "play" },
        { id: "hundertwasser", n: 9, name: "百水公寓与Weißgerberviertel", lat: 48.2074, lng: 16.3941, category: "side", mode: "tram", duration: "1–1.5小时", note: "晴天、体力尚可时作为本地街区分支。", scope: "play" },
        { id: "naschmarkt", n: 10, name: "Naschmarkt", lat: 48.1986, lng: 16.3634, category: "constraint", mode: "walk", duration: "本日不安排", note: "周日市场摊位关闭；仅餐厅可能营业。", scope: "play" }
      ],
      segments: [
        { from: "schonbrunn", to: "gloriette", mode: "walk", kind: "side", via: [[48.1811, 16.3105]] },
        { from: "schonbrunn", to: "hofburg", mode: "metro", kind: "main", via: [[48.1900, 16.3380], [48.2003, 16.3583]] },
        { from: "hofburg", to: "stephansdom", mode: "walk", kind: "main", via: [[48.2080, 16.3690]] },
        { from: "stephansdom", to: "peterskirche", mode: "walk", kind: "side" },
        { from: "peterskirche", to: "ankeruhr", mode: "walk", kind: "side" },
        { from: "ankeruhr", to: "stadtpark", mode: "walk", kind: "side" },
        { from: "hofburg", to: "khm", mode: "walk", kind: "weather" },
        { from: "stadtpark", to: "hundertwasser", mode: "tram", kind: "side" },
        { from: "hofburg", to: "naschmarkt", mode: "walk", kind: "constraint" }
      ]
    },

    {
      id: 3,
      date: "06月07日",
      weekday: "周一",
      title: "维也纳 → 萨尔茨堡",
      subtitle: "上午铁路转场，下午完成萨尔茨堡老城纵轴；两座莫扎特博物馆只选一座。",
      base: "萨尔茨堡 · 1/2晚",
      tempo: "中高",
      crowd: "老城中等",
      summary: "主线是米拉贝尔—河桥—粮食胡同—大教堂—要塞；Steingasse或Mönchsberg只做一个。",
      decisions: [
        { term: "博物馆", detail: "初访优先莫扎特出生地；故居作为音乐研究兴趣较强时的替换项。" },
        { term: "天气", detail: "要塞观景依赖能见度；雨天可缩短山上时间，增加教堂和咖啡馆。" },
        { term: "晚间", detail: "Mönchsberg与Mülln二选一，不在长途转场日继续堆步数。" }
      ],
      sources: [
        { label: "莫扎特出生地", url: "https://www.salzburg.info/en/sights/top10/mozarts-birthplace" },
        { label: "萨尔茨堡要塞", url: "https://www.salzburg-burgen.at/en/hohensalzburg-castle/" }
      ],
      points: [
        { id: "wienhbf", n: 1, name: "Wien Hauptbahnhof", lat: 48.1850, lng: 16.3760, category: "transfer", mode: "rail", duration: "上车", note: "跨城票以2027时刻表为准。", scope: "journey" },
        { id: "salzburghbf", n: 2, name: "Salzburg Hauptbahnhof", lat: 47.8131, lng: 13.0458, category: "transfer", mode: "rail", duration: "抵达+寄存/入住", note: "先解决行李，再开始步行线。", scope: "play" },
        { id: "mirabell", n: 3, name: "米拉贝尔花园", lat: 47.8059, lng: 13.0418, category: "main", mode: "walk", duration: "30–45分钟", note: "从火车站进老城的顺路起点。", scope: "play" },
        { id: "mozartresidence", n: 4, name: "莫扎特故居", lat: 47.8028, lng: 13.0430, category: "weather", mode: "walk", duration: "约1小时", note: "与出生地二选一；不作为默认必去。", scope: "play" },
        { id: "makartsteg", n: 5, name: "Makartsteg河桥", lat: 47.8012, lng: 13.0430, category: "main", mode: "walk", duration: "10分钟", note: "连接新城与老城的自然动线。", scope: "play" },
        { id: "mozartbirth", n: 6, name: "莫扎特出生地", lat: 47.8000, lng: 13.0431, category: "main", mode: "walk", duration: "约1小时", note: "主线博物馆；预约或避开团队集中时段。", scope: "play" },
        { id: "cathedral", n: 7, name: "萨尔茨堡大教堂", lat: 47.7979, lng: 13.0455, category: "main", mode: "walk", duration: "30分钟", note: "与主教广场、圣彼得区域一起理解宗教城市。", scope: "play" },
        { id: "fortress", n: 8, name: "Hohensalzburg要塞", lat: 47.7952, lng: 13.0477, category: "main", mode: "cable", duration: "1.5–2小时", note: "下午核心；预留末班下山余量。", scope: "play" },
        { id: "steingasse", n: 9, name: "Steingasse", lat: 47.8023, lng: 13.0490, category: "side", mode: "walk", duration: "30–45分钟", note: "比粮食胡同更安静，适合晚饭前后。", scope: "play" },
        { id: "monchsberg", n: 10, name: "Mönchsberg低段步道", lat: 47.8000, lng: 13.0358, category: "side", mode: "walk", duration: "45–75分钟", note: "只在天气和体力都良好时加入。", scope: "play" }
      ],
      segments: [
        { from: "wienhbf", to: "salzburghbf", mode: "rail", kind: "main", via: [[48.2038, 15.6247], [48.3069, 14.2858]] },
        { from: "salzburghbf", to: "mirabell", mode: "walk", kind: "main" },
        { from: "mirabell", to: "makartsteg", mode: "walk", kind: "main" },
        { from: "mirabell", to: "mozartresidence", mode: "walk", kind: "weather" },
        { from: "makartsteg", to: "mozartbirth", mode: "walk", kind: "main" },
        { from: "mozartbirth", to: "cathedral", mode: "walk", kind: "main" },
        { from: "cathedral", to: "fortress", mode: "cable", kind: "main" },
        { from: "makartsteg", to: "steingasse", mode: "walk", kind: "side" },
        { from: "fortress", to: "monchsberg", mode: "walk", kind: "side" }
      ]
    },

    {
      id: 4,
      date: "06月08日",
      weekday: "周二",
      title: "国王湖与Obersee",
      subtitle: "跨境公交接游船，先完成Salet与Obersee，再在回程停圣巴托罗美。",
      base: "萨尔茨堡 · 2/2晚",
      tempo: "高",
      crowd: "中等，晴天升高",
      summary: "自然主线程已经足够完整；盐矿、鹰巢和魔法森林都不应与Obersee同日叠加。",
      decisions: [
        { term: "顺序", detail: "官方建议先到Salet，回程再停圣巴托罗美，优先保障最受末班船约束的上湖段。" },
        { term: "天气", detail: "雾、强风、雷暴或高水位可能导致临时停航；出发前同时看船务状态和山区天气。" },
        { term: "加项", detail: "只有在14:30前回到主码头且公交余量充分时，才到贝希特斯加登老城短停。" }
      ],
      sources: [
        { label: "国王湖船务", url: "https://www.seenschifffahrt.de/en/koenigssee" },
        { label: "船务问答", url: "https://www.seenschifffahrt.de/en/koenigssee/visitor-information/questions-answers" }
      ],
      points: [
        { id: "salzburghbf", n: 1, name: "Salzburg Hbf · 840路", lat: 47.8131, lng: 13.0458, category: "transfer", mode: "bus", duration: "早出发", note: "跨境段携带护照；站台和班次以当日信息为准。", scope: "journey" },
        { id: "berchtesgaden", n: 2, name: "Berchtesgaden Hbf", lat: 47.6264, lng: 13.0002, category: "transfer", mode: "bus", duration: "换乘", note: "换841/842等当地公交前往码头。", scope: "play" },
        { id: "seelande", n: 3, name: "Königssee Seelände码头", lat: 47.5907, lng: 12.9870, category: "main", mode: "boat", duration: "购票+排队", note: "优先乘可直达Salet的班次。", scope: "play" },
        { id: "salet", n: 4, name: "Salet码头", lat: 47.5225, lng: 12.9775, category: "main", mode: "boat", duration: "约1小时船程", note: "记录最后返航时间，不把它当作随到随走的城市公交。", scope: "play" },
        { id: "obersee", n: 5, name: "Obersee湖畔", lat: 47.5187, lng: 12.9753, category: "main", mode: "walk", duration: "15分钟抵达", note: "湖岸路可能湿滑；雷暴或强降雨时缩短。", scope: "play" },
        { id: "fischunkelalm", n: 6, name: "Fischunkelalm", lat: 47.5085, lng: 12.9709, category: "side", mode: "walk", duration: "往返约1.5小时", note: "步道状况良好才继续；不把更远瀑布当默认目标。", scope: "play" },
        { id: "stbartholoma", n: 7, name: "St. Bartholomä", lat: 47.5446, lng: 12.9721, category: "main", mode: "boat", duration: "30–60分钟", note: "安排在回程，避免先停留后压缩上湖时间。", scope: "play" },
        { id: "markt", n: 8, name: "贝希特斯加登老城", lat: 47.6327, lng: 13.0038, category: "side", mode: "walk", duration: "45分钟", note: "仅作为早收工后的顺路补充，不牺牲返程余量。", scope: "play" }
      ],
      segments: [
        { from: "salzburghbf", to: "berchtesgaden", mode: "bus", kind: "main", via: [[47.7610, 13.0040], [47.7020, 13.0470]] },
        { from: "berchtesgaden", to: "seelande", mode: "bus", kind: "main" },
        { from: "seelande", to: "salet", mode: "boat", kind: "main", via: [[47.5680, 12.9800], [47.5446, 12.9721]] },
        { from: "salet", to: "obersee", mode: "walk", kind: "main" },
        { from: "obersee", to: "fischunkelalm", mode: "walk", kind: "side", via: [[47.5140, 12.9730]] },
        { from: "salet", to: "stbartholoma", mode: "boat", kind: "main" },
        { from: "stbartholoma", to: "seelande", mode: "boat", kind: "main", via: [[47.5680, 12.9800]] },
        { from: "berchtesgaden", to: "markt", mode: "walk", kind: "side" }
      ]
    },

    {
      id: 5,
      date: "06月09日",
      weekday: "周三",
      title: "萨尔茨堡 → 圣沃尔夫冈 → Hallstatt",
      subtitle: "先完成湖区入住，再做Hallstatt半日往返；公共交通换乘是当天核心约束。",
      base: "圣沃尔夫冈 · 1/2晚",
      tempo: "高",
      crowd: "Hallstatt高",
      summary: "Hallstatt只承担老镇与湖岸，不承担盐矿。真正值得慢下来的地方是晚间的圣沃尔夫冈。",
      decisions: [
        { term: "交通", detail: "圣沃尔夫冈往返Hallstatt通常需经Bad Ischl换乘，单程按约1.5小时级别留余量。" },
        { term: "Hallstatt", detail: "选择晚到避开部分团队，就接受只有约2小时老镇时间；想上Skywalk则必须更早抵达。" },
        { term: "行李", detail: "先到住宿放行李，不带大箱换乘Hallstatt支线。" }
      ],
      sources: [
        { label: "湖区公交网络", url: "https://www.salzkammergut.at/en/oesterreich-poi/detail/430002854/bahnhof-bad-ischl-railway-station-and-bus-station.html" },
        { label: "Hallstatt公交到达", url: "https://www.hallstatt.net/service-eng/anreise-en-US/austria-by-bus/" }
      ],
      points: [
        { id: "salzburghbf", n: 1, name: "Salzburg Hbf", lat: 47.8131, lng: 13.0458, category: "transfer", mode: "bus", duration: "出发", note: "走150路方向进入Salzkammergut。", scope: "journey" },
        { id: "stgilgen", n: 2, name: "St. Gilgen", lat: 47.7660, lng: 13.3650, category: "transfer", mode: "boat", duration: "公交转船", note: "若船班衔接不好，可继续公交经Strobl进入圣沃尔夫冈。", scope: "play" },
        { id: "stwolfdock", n: 3, name: "St. Wolfgang码头", lat: 47.7390, lng: 13.4464, category: "main", mode: "boat", duration: "抵达+入住", note: "先完成行李交接，再判断Hallstatt出发时点。", scope: "play" },
        { id: "badischl", n: 4, name: "Bad Ischl Bahnhof", lat: 47.7102, lng: 13.6212, category: "transfer", mode: "bus", duration: "关键换乘", note: "546与542/543或火车的实际衔接以2027时刻表为准。", scope: "play" },
        { id: "hallstattlahn", n: 5, name: "Hallstatt Lahn", lat: 47.5566, lng: 13.6499, category: "transfer", mode: "bus", duration: "下车入镇", note: "公交到此无需再坐跨湖渡船。", scope: "play" },
        { id: "postcard", n: 6, name: "北侧明信片视角", lat: 47.5627, lng: 13.6495, category: "main", mode: "walk", duration: "20分钟", note: "尊重居民与私宅边界，不等待无人空镜。", scope: "play" },
        { id: "marktplatz", n: 7, name: "Hallstatt集市广场", lat: 47.5623, lng: 13.6493, category: "main", mode: "walk", duration: "30分钟", note: "与湖岸步行合并，不继续堆收费项目。", scope: "play" },
        { id: "skywalk", n: 8, name: "Salzbergbahn / Skywalk", lat: 47.5612, lng: 13.6430, category: "constraint", mode: "cable", duration: "默认取消", note: "晚到半日与盐矿时间不兼容；仅在更早抵达时重排。", scope: "play" },
        { id: "church", n: 9, name: "圣沃尔夫冈朝圣教堂", lat: 47.7384, lng: 13.4469, category: "side", mode: "walk", duration: "30–45分钟", note: "返程后慢逛老镇与湖边，作为当天人文收尾。", scope: "play" }
      ],
      segments: [
        { from: "salzburghbf", to: "stgilgen", mode: "bus", kind: "main", via: [[47.8120, 13.1560], [47.7990, 13.2600]] },
        { from: "stgilgen", to: "stwolfdock", mode: "boat", kind: "main", via: [[47.7500, 13.3950]] },
        { from: "stwolfdock", to: "badischl", mode: "bus", kind: "main", via: [[47.7236, 13.4830], [47.7180, 13.5550]] },
        { from: "badischl", to: "hallstattlahn", mode: "bus", kind: "main", via: [[47.6428, 13.6161]] },
        { from: "hallstattlahn", to: "postcard", mode: "walk", kind: "main", via: [[47.5600, 13.6485]] },
        { from: "postcard", to: "marktplatz", mode: "walk", kind: "main" },
        { from: "hallstattlahn", to: "skywalk", mode: "cable", kind: "constraint" },
        { from: "stwolfdock", to: "church", mode: "walk", kind: "side" }
      ]
    },

    {
      id: 6,
      date: "06月10日",
      weekday: "周四",
      title: "沙夫山与沃尔夫冈湖",
      subtitle: "天气清楚就把上午交给齿轨铁路；下午留给湖上与村落，不追求第二座山。",
      base: "圣沃尔夫冈 · 2/2晚",
      tempo: "中等",
      crowd: "工作日中等",
      summary: "这是湖区的天气决策日：山顶有视野才上山，没有视野就把费用与体力留给湖岸。",
      decisions: [
        { term: "天气", detail: "低云、强风或持续雨时取消山顶，把湖船、Bad Ischl或低海拔步行作为替代。" },
        { term: "车次", detail: "齿轨列车为定时座位；常规班次不保证使用百年蒸汽机车。" },
        { term: "下午", detail: "Ried湖边步行与St. Gilgen船线二选一，避免重复赶船。" }
      ],
      sources: [
        { label: "SchafbergBahn", url: "https://www.5schaetze.at/en/schafbergbahn/prices-and-timetables.html" },
        { label: "车辆说明", url: "https://www.5schaetze.at/en/schafbergbahn/facts-and-pictures/fleet.html" }
      ],
      points: [
        { id: "base", n: 1, name: "St. Wolfgang SchafbergBahn", lat: 47.7396, lng: 13.4456, category: "main", mode: "cable", duration: "定时上车", note: "早餐后先看山顶实时摄像头与运行状态。", scope: "play" },
        { id: "summitstation", n: 2, name: "Schafbergspitze山站", lat: 47.7766, lng: 13.4339, category: "main", mode: "cable", duration: "约35分钟", note: "抵达后先确认返程座位与末班时间。", scope: "play" },
        { id: "summitview", n: 3, name: "山顶主观景区", lat: 47.7757, lng: 13.4328, category: "main", mode: "walk", duration: "45–75分钟", note: "湿滑、积雪或强风时不靠近无防护边缘。", scope: "play" },
        { id: "himmelspforte", n: 4, name: "Himmelspforte", lat: 47.7769, lng: 13.4345, category: "side", mode: "walk", duration: "休息/简餐", note: "是否营业与座位均需当日确认。", scope: "play" },
        { id: "ried", n: 5, name: "Ried湖边村落", lat: 47.7541, lng: 13.4510, category: "side", mode: "walk", duration: "往返1–1.5小时", note: "不坐下午湖船时选择的低压散步。", scope: "play" },
        { id: "stgilgen", n: 6, name: "St. Gilgen湖船支线", lat: 47.7653, lng: 13.3697, category: "side", mode: "boat", duration: "半日内", note: "与Ried步行二选一，按船班和天气决定。", scope: "play" },
        { id: "badischl", n: 7, name: "Bad Ischl雨天替代", lat: 47.7110, lng: 13.6180, category: "weather", mode: "bus", duration: "半日", note: "帝国温泉城、咖啡馆与城市博物馆比雨中上山更有价值。", scope: "play" }
      ],
      segments: [
        { from: "base", to: "summitstation", mode: "cable", kind: "main", via: [[47.7510, 13.4430], [47.7650, 13.4380]] },
        { from: "summitstation", to: "summitview", mode: "walk", kind: "main" },
        { from: "summitstation", to: "himmelspforte", mode: "walk", kind: "side" },
        { from: "base", to: "ried", mode: "walk", kind: "side" },
        { from: "base", to: "stgilgen", mode: "boat", kind: "side", via: [[47.7500, 13.4100]] },
        { from: "base", to: "badischl", mode: "bus", kind: "weather", via: [[47.7236, 13.4830]] }
      ]
    },

    {
      id: 7,
      date: "06月11日",
      weekday: "周五",
      title: "湖区 → 因斯布鲁克",
      subtitle: "跨城后走一条紧凑老城线；若下午山顶异常通透，可提前完成Nordkette。",
      base: "因斯布鲁克 · 1/2晚",
      tempo: "中等",
      crowd: "老城中等",
      summary: "今天先保证顺利转场。老城主轴步行不费脑；Wilten与Nordkette都是条件型加项。",
      decisions: [
        { term: "转场", detail: "圣沃尔夫冈—Bad Ischl—萨尔茨堡—因斯布鲁克包含多次换乘，按4小时级别规划。" },
        { term: "天气窗口", detail: "若D7下午清澈而D8预报转差，可直接上Nordkette，把D8改为城市文化日。" },
        { term: "人文", detail: "Wilten比继续堆老城地标更有当地生活感，但不与提前上山同时安排。" }
      ],
      sources: [
        { label: "ÖBB", url: "https://www.oebb.at/en/" },
        { label: "Innsbruck官方", url: "https://www.innsbruck.info/en/" }
      ],
      points: [
        { id: "stwolf", n: 1, name: "St. Wolfgang", lat: 47.7390, lng: 13.4464, category: "transfer", mode: "bus", duration: "出发", note: "搭546方向进入Bad Ischl。", scope: "journey" },
        { id: "badischl", n: 2, name: "Bad Ischl Bahnhof", lat: 47.7102, lng: 13.6212, category: "transfer", mode: "rail", duration: "换乘", note: "根据2027时刻选择经萨尔茨堡或其他铁路组合。", scope: "journey" },
        { id: "salzburghbf", n: 3, name: "Salzburg Hbf", lat: 47.8131, lng: 13.0458, category: "transfer", mode: "rail", duration: "主要换乘", note: "避免极短接续，给湖区公交可能的延误留余量。", scope: "journey" },
        { id: "innsbruckhbf", n: 4, name: "Innsbruck Hbf", lat: 47.2632, lng: 11.4009, category: "transfer", mode: "rail", duration: "抵达+入住", note: "放下行李后开始步行主线。", scope: "play" },
        { id: "triumphpforte", n: 5, name: "凯旋门", lat: 47.2630, lng: 11.3946, category: "main", mode: "walk", duration: "10分钟", note: "老城纵轴起点。", scope: "play" },
        { id: "mariatheresia", n: 6, name: "玛丽亚·特蕾西亚大街", lat: 47.2658, lng: 11.3948, category: "main", mode: "walk", duration: "30分钟", note: "顺路经过安娜柱进入历史中心。", scope: "play" },
        { id: "goldenroof", n: 7, name: "金色屋顶", lat: 47.2681, lng: 11.3935, category: "main", mode: "walk", duration: "20分钟", note: "地标停留，不必为小博物馆挤压河岸时间。", scope: "play" },
        { id: "innbridge", n: 8, name: "Innbrücke与彩色房屋", lat: 47.2709, lng: 11.3911, category: "main", mode: "walk", duration: "30–45分钟", note: "晚光下适合作为主线终点。", scope: "play" },
        { id: "cathedral", n: 9, name: "圣雅各伯主教座堂", lat: 47.2693, lng: 11.3950, category: "side", mode: "walk", duration: "20分钟", note: "位于老城内，可按开放状态顺入。", scope: "play" },
        { id: "wilten", n: 10, name: "Wiltener Platzl", lat: 47.2553, lng: 11.3949, category: "side", mode: "walk", duration: "45–75分钟", note: "咖啡馆与社区街区；只在不提前上山时加入。", scope: "play" }
      ],
      segments: [
        { from: "stwolf", to: "badischl", mode: "bus", kind: "main", via: [[47.7236, 13.4830]] },
        { from: "badischl", to: "salzburghbf", mode: "rail", kind: "main", via: [[47.9020, 13.1900]] },
        { from: "salzburghbf", to: "innsbruckhbf", mode: "rail", kind: "main", via: [[47.5833, 12.1628]] },
        { from: "innsbruckhbf", to: "triumphpforte", mode: "walk", kind: "main" },
        { from: "triumphpforte", to: "mariatheresia", mode: "walk", kind: "main" },
        { from: "mariatheresia", to: "goldenroof", mode: "walk", kind: "main" },
        { from: "goldenroof", to: "innbridge", mode: "walk", kind: "main" },
        { from: "goldenroof", to: "cathedral", mode: "walk", kind: "side" },
        { from: "triumphpforte", to: "wilten", mode: "walk", kind: "side" }
      ]
    },

    {
      id: 8,
      date: "06月12日",
      weekday: "周六",
      title: "Nordkette与蒂罗尔城市日",
      subtitle: "上午抓高山能见度，下午按兴趣选择动物园、城堡或Wilten—Bergisel。",
      base: "因斯布鲁克 · 2/2晚",
      tempo: "中等",
      crowd: "周六中高",
      summary: "Nordkette是唯一主线。下午三个方向互斥；六月普通周六无法等到山上日落后再乘常规缆车下山。",
      decisions: [
        { term: "末班", detail: "当前夏季常规时刻中Hafelekar与Seegrube末班明显早于六月日落；2027须重新核实。" },
        { term: "雪况", detail: "Hafelekar海拔超过2300米，六月仍可能有积雪、强风和接近冰点体感。" },
        { term: "下午", detail: "亲子/自然选Alpenzoo，艺术史选Ambras，当地城市感选Wilten—Bergisel。" }
      ],
      sources: [
        { label: "Nordkette时刻", url: "https://nordkette.com/en/facilities-/-timetable/" },
        { label: "Nordkette步道", url: "https://nordkette.com/en/summer/hiking-trails/" }
      ],
      points: [
        { id: "altstadtstation", n: 1, name: "Nordkette Altstadt站", lat: 47.2701, lng: 11.3954, category: "main", mode: "cable", duration: "上山起点", note: "从市中心进入Hungerburgbahn。", scope: "play" },
        { id: "hungerburg", n: 2, name: "Hungerburg", lat: 47.2868, lng: 11.3987, category: "transfer", mode: "cable", duration: "换乘", note: "按标识换乘Seegrubenbahn。", scope: "play" },
        { id: "seegrube", n: 3, name: "Seegrube · 1905m", lat: 47.3069, lng: 11.3796, category: "main", mode: "cable", duration: "30–60分钟", note: "云底较低时，这里可能比最高点更有视野。", scope: "play" },
        { id: "hafelekar", n: 4, name: "Hafelekar · 2334m", lat: 47.3120, lng: 11.3835, category: "main", mode: "cable", duration: "45–75分钟", note: "只走开放且安全的短步道，不默认进入Goetheweg。", scope: "play" },
        { id: "alpenzoo", n: 5, name: "Alpenzoo", lat: 47.2800, lng: 11.3976, category: "side", mode: "walk", duration: "1.5–2小时", note: "顺着下山线安排，适合自然主题。", scope: "play" },
        { id: "ambras", n: 6, name: "Ambras城堡", lat: 47.2565, lng: 11.4347, category: "weather", mode: "tram", duration: "2小时", note: "雨天文化替代，但与Alpenzoo、Bergisel互斥。", scope: "play" },
        { id: "wiltenbasilica", n: 7, name: "Wilten Basilica", lat: 47.2532, lng: 11.3999, category: "side", mode: "tram", duration: "30分钟", note: "连接当地街区与Bergisel的文化节点。", scope: "play" },
        { id: "bergisel", n: 8, name: "Bergisel跳台", lat: 47.2493, lng: 11.3998, category: "side", mode: "walk", duration: "1–1.5小时", note: "建筑与城市视角路线；不与Ambras同时安排。", scope: "play" }
      ],
      segments: [
        { from: "altstadtstation", to: "hungerburg", mode: "cable", kind: "main" },
        { from: "hungerburg", to: "seegrube", mode: "cable", kind: "main" },
        { from: "seegrube", to: "hafelekar", mode: "cable", kind: "main" },
        { from: "hungerburg", to: "alpenzoo", mode: "walk", kind: "side" },
        { from: "altstadtstation", to: "ambras", mode: "tram", kind: "weather", via: [[47.2632, 11.4009]] },
        { from: "altstadtstation", to: "wiltenbasilica", mode: "tram", kind: "side", via: [[47.2630, 11.3946]] },
        { from: "wiltenbasilica", to: "bergisel", mode: "walk", kind: "side" }
      ]
    },

    {
      id: 9,
      date: "06月13日",
      weekday: "周日",
      title: "因斯布鲁克 → 博尔扎诺",
      subtitle: "穿越布伦纳山口进入意大利，下午以冰人与双语老城为核心。",
      base: "博尔扎诺 · 1/2晚",
      tempo: "中等",
      crowd: "周日中等",
      summary: "周日最适合把时间给冰人博物馆；不要期待水果市场和本地小店呈现工作日状态。",
      decisions: [
        { term: "周日", detail: "Piazza delle Erbe水果市场不营业，多数独立小店也可能关闭。" },
        { term: "博物馆", detail: "冰人博物馆周日开放、周一关闭，因此今天必须优先；高峰期建议预约。" },
        { term: "城堡", detail: "若列车早到且体力足，可把周一关闭的Runkelstein提前到今天；否则直接放弃。" }
      ],
      sources: [
        { label: "冰人博物馆", url: "https://www.iceman.it/en/the-museum/opening-times-and-fees" },
        { label: "博尔扎诺市场", url: "https://www.bolzano-bozen.it/en/shopping-bolzano.htm" },
        { label: "Runkelstein", url: "https://www.runkelstein.info/en/runkelstein-castle-hours-and-prices" }
      ],
      points: [
        { id: "innsbruckhbf", n: 1, name: "Innsbruck Hbf", lat: 47.2632, lng: 11.4009, category: "transfer", mode: "rail", duration: "出发", note: "选择直达或少换乘的布伦纳通道列车。", scope: "journey" },
        { id: "brenner", n: 2, name: "Brennero / Brenner", lat: 47.0037, lng: 11.5079, category: "transfer", mode: "rail", duration: "跨境山口", note: "奥意边界节点；车上即可观察语言与景观转换。", scope: "journey" },
        { id: "bolzanohbf", n: 3, name: "Bolzano/Bozen Bahnhof", lat: 46.4966, lng: 11.3580, category: "transfer", mode: "rail", duration: "抵达+入住", note: "车站步行可达老城。", scope: "play" },
        { id: "waltherplatz", n: 4, name: "Waltherplatz", lat: 46.4980, lng: 11.3548, category: "main", mode: "walk", duration: "20分钟", note: "从广场开始观察德语、意大利语并置的城市。", scope: "play" },
        { id: "duomo", n: 5, name: "博尔扎诺大教堂", lat: 46.4975, lng: 11.3545, category: "side", mode: "walk", duration: "20分钟", note: "位于主线旁，按礼拜与开放状态进入。", scope: "play" },
        { id: "iceman", n: 6, name: "南蒂罗尔考古博物馆", lat: 46.5005, lng: 11.3495, category: "main", mode: "walk", duration: "1.5–2小时", note: "今日人文核心；不要推迟到周一。", scope: "play" },
        { id: "portici", n: 7, name: "Via dei Portici", lat: 46.4995, lng: 11.3515, category: "main", mode: "walk", duration: "30–45分钟", note: "中世纪商贸城市主轴；周日店铺状态有限。", scope: "play" },
        { id: "erbe", n: 8, name: "Piazza delle Erbe", lat: 46.4998, lng: 11.3503, category: "constraint", mode: "walk", duration: "仅看空间", note: "周日水果市场关闭。", scope: "play" },
        { id: "runkelstein", n: 9, name: "Runkelstein Castle", lat: 46.5164, lng: 11.3517, category: "side", mode: "bus", duration: "约2小时", note: "只有早到才能加入；周一关闭，所以无法移到D10。", scope: "play" }
      ],
      segments: [
        { from: "innsbruckhbf", to: "brenner", mode: "rail", kind: "main" },
        { from: "brenner", to: "bolzanohbf", mode: "rail", kind: "main", via: [[46.7169, 11.6560]] },
        { from: "bolzanohbf", to: "waltherplatz", mode: "walk", kind: "main" },
        { from: "waltherplatz", to: "duomo", mode: "walk", kind: "side" },
        { from: "waltherplatz", to: "iceman", mode: "walk", kind: "main", via: [[46.4994, 11.3520]] },
        { from: "iceman", to: "portici", mode: "walk", kind: "main" },
        { from: "portici", to: "erbe", mode: "walk", kind: "constraint" },
        { from: "iceman", to: "runkelstein", mode: "bus", kind: "side", via: [[46.5060, 11.3485]] }
      ]
    },

    {
      id: 10,
      date: "06月14日",
      weekday: "周一",
      title: "卡雷扎湖与博尔扎诺机动半日",
      subtitle: "早去卡雷扎湖，午后根据体力选择Renon或Talvera；不安排周一闭馆的城堡。",
      base: "博尔扎诺 · 2/2晚",
      tempo: "中等",
      crowd: "湖区中等",
      summary: "主线程是卡雷扎湖。下午保留为开放式机动，不强行用第二个远端项目填满。",
      decisions: [
        { term: "光线", detail: "早去的主要价值是较少团队和较稳定天气，不把“10点前必定最好看”当定律。" },
        { term: "周一", detail: "Runkelstein明确关闭，冰人博物馆也关闭；不要把它们当雨天后备。" },
        { term: "下午", detail: "晴朗且有余力选Renon；疲劳或天气一般就在Talvera与老城慢走。" }
      ],
      sources: [
        { label: "南蒂罗尔交通", url: "https://www.suedtirolmobil.info/en/" },
        { label: "Runkelstein开放日", url: "https://www.runkelstein.info/en/runkelstein-castle-hours-and-prices" }
      ],
      points: [
        { id: "busstation", n: 1, name: "Bolzano Autostazione", lat: 46.4959, lng: 11.3571, category: "transfer", mode: "bus", duration: "出发", note: "2027线路编号和站台以Südtirolmobil为准。", scope: "journey" },
        { id: "welschnofen", n: 2, name: "Nova Levante / Welschnofen", lat: 46.4280, lng: 11.5370, category: "transfer", mode: "bus", duration: "沿途节点", note: "部分班次可能在此衔接或停靠。", scope: "play" },
        { id: "carezza", n: 3, name: "Lago di Carezza", lat: 46.4096, lng: 11.5751, category: "main", mode: "bus", duration: "1–1.5小时", note: "绕湖、看倒影与地质景观；不跨越围栏。", scope: "play" },
        { id: "carezzawalk", n: 4, name: "卡雷扎湖环线", lat: 46.4089, lng: 11.5729, category: "side", mode: "walk", duration: "30–45分钟", note: "雨后防滑；能见度差时不必久等。", scope: "play" },
        { id: "rittenbase", n: 5, name: "Renon缆车山下站", lat: 46.4977, lng: 11.3640, category: "side", mode: "cable", duration: "下午分支", note: "晴朗且返程较早时选择。", scope: "play" },
        { id: "soprabolzano", n: 6, name: "Soprabolzano / Oberbozen", lat: 46.5288, lng: 11.4043, category: "side", mode: "cable", duration: "1.5–2.5小时", note: "不再追求长距离窄轨铁路全程。", scope: "play" },
        { id: "talvera", n: 7, name: "Talvera河谷步道", lat: 46.5050, lng: 11.3472, category: "weather", mode: "walk", duration: "45–90分钟", note: "低压替代；轻雨也可进行。", scope: "play" },
        { id: "runkelstein", n: 8, name: "Runkelstein Castle", lat: 46.5164, lng: 11.3517, category: "constraint", mode: "bus", duration: "本日关闭", note: "周一关闭，不能作为下午选项。", scope: "play" }
      ],
      segments: [
        { from: "busstation", to: "welschnofen", mode: "bus", kind: "main", via: [[46.4760, 11.4520]] },
        { from: "welschnofen", to: "carezza", mode: "bus", kind: "main" },
        { from: "carezza", to: "carezzawalk", mode: "walk", kind: "side" },
        { from: "busstation", to: "rittenbase", mode: "walk", kind: "side" },
        { from: "rittenbase", to: "soprabolzano", mode: "cable", kind: "side" },
        { from: "busstation", to: "talvera", mode: "walk", kind: "weather" },
        { from: "talvera", to: "runkelstein", mode: "bus", kind: "constraint" }
      ]
    },

    {
      id: 11,
      date: "06月15日",
      weekday: "周二",
      title: "博尔扎诺 → 奥蒂塞伊",
      subtitle: "进入Val Gardena后不急着收集山顶：先建立小镇、木雕与三条缆车线的空间关系。",
      base: "奥蒂塞伊 · 1/3晚",
      tempo: "轻松",
      crowd: "中等",
      summary: "今天是多洛米蒂的缓冲入口。晴天可用Resciesa抢一个天气窗口，阴雨天就进Museum Gherdëina。",
      decisions: [
        { term: "交通", detail: "Bolzano至Ortisei约1小时级别，Guest Pass是否覆盖取决于住宿参与资格。" },
        { term: "文化", detail: "Museum Gherdëina比单纯逛纪念品店更系统地解释拉丁文化、地质与木雕传统。" },
        { term: "缆车", detail: "只有当D11下午天空通透且D12–D13预报变差时，才提前使用Resciesa窗口。" }
      ],
      sources: [
        { label: "Val Gardena Guest Pass", url: "https://www.valgardena.it/en/val-gardena-guest-pass/" },
        { label: "Museum Gherdëina", url: "https://www.museumgherdeina.it/en/370" }
      ],
      points: [
        { id: "bolzanobus", n: 1, name: "Bolzano Autostazione", lat: 46.4959, lng: 11.3571, category: "transfer", mode: "bus", duration: "出发", note: "携带行李时避免过短换乘。", scope: "journey" },
        { id: "waidbruck", n: 2, name: "Ponte Gardena / Waidbruck", lat: 46.5980, lng: 11.5270, category: "transfer", mode: "bus", duration: "山谷入口", note: "地图用于理解线路方向，不代表一定需要下车。", scope: "journey" },
        { id: "antonio", n: 3, name: "Ortisei Piazza S. Antonio", lat: 46.5754, lng: 11.6701, category: "transfer", mode: "bus", duration: "抵达+入住", note: "小镇公交与两侧缆车站的核心节点。", scope: "play" },
        { id: "church", n: 4, name: "圣安东尼教堂", lat: 46.5757, lng: 11.6714, category: "main", mode: "walk", duration: "20分钟", note: "从广场开始认识奥蒂塞伊。", scope: "play" },
        { id: "museum", n: 5, name: "Museum Gherdëina", lat: 46.5758, lng: 11.6710, category: "weather", mode: "walk", duration: "1–1.5小时", note: "雨天主选，也是全程最直接的拉丁文化补充。", scope: "play" },
        { id: "promenade", n: 6, name: "Luis Trenker Promenade", lat: 46.5718, lng: 11.6788, category: "main", mode: "walk", duration: "45–90分钟", note: "低强度适应性步行，按天气随时折返。", scope: "play" },
        { id: "resciesabase", n: 7, name: "Resciesa山下站", lat: 46.5780, lng: 11.6728, category: "side", mode: "cable", duration: "天气机动", note: "与小镇文化线互斥；不是今日固定任务。", scope: "play" }
      ],
      segments: [
        { from: "bolzanobus", to: "waidbruck", mode: "bus", kind: "main", via: [[46.5510, 11.5210]] },
        { from: "waidbruck", to: "antonio", mode: "bus", kind: "main", via: [[46.5660, 11.6420]] },
        { from: "antonio", to: "church", mode: "walk", kind: "main" },
        { from: "church", to: "promenade", mode: "walk", kind: "main" },
        { from: "church", to: "museum", mode: "walk", kind: "weather" },
        { from: "antonio", to: "resciesabase", mode: "walk", kind: "side" }
      ]
    },

    {
      id: 12,
      date: "06月16日",
      weekday: "周三",
      title: "Seceda高山主景日",
      subtitle: "把三天中能见度最好的一天交给Seceda；主缆车、短步行和长环线分级处理。",
      base: "奥蒂塞伊 · 2/3晚",
      tempo: "中高",
      crowd: "中高但非周末",
      summary: "山脊观景是主线程；Pieralongia与山屋是加法。Fermeda吊椅在六月中旬可能尚未进入夏季运营。",
      decisions: [
        { term: "排序", detail: "D12只是名义日期；D11–D13中最稳定、云底最高的一天才是真正Seceda日。" },
        { term: "季初", detail: "2026年主缆车5月22日开放，但Fermeda吊椅6月20日才开；2027需单独确认。" },
        { term: "购票", detail: "Gardena Card只有在三处主要缆车都能使用时更划算；天气差一天可能不如单买。" }
      ],
      sources: [
        { label: "Seceda夏季运营", url: "https://www.seceda.it/en/summer" },
        { label: "Gardena Card", url: "https://www.valgardena.it/en/summer-holidays-dolomites/mobility-val-gardena/gardena-card/" }
      ],
      points: [
        { id: "valley", n: 1, name: "Ortisei–Furnes山下站", lat: 46.5788, lng: 11.6742, category: "main", mode: "cable", duration: "首批优先", note: "出发前复核实时风速、云量和运营状态。", scope: "play" },
        { id: "furnes", n: 2, name: "Furnes换乘站", lat: 46.5898, lng: 11.6948, category: "transfer", mode: "cable", duration: "换乘", note: "转入Furnes–Seceda大缆车。", scope: "play" },
        { id: "top", n: 3, name: "Seceda山站", lat: 46.5979, lng: 11.7249, category: "main", mode: "cable", duration: "抵达", note: "先确认回程与天气变化，再开始徒步。", scope: "play" },
        { id: "ridge", n: 4, name: "Seceda山脊主观景点", lat: 46.6005, lng: 11.7262, category: "main", mode: "walk", duration: "45–75分钟", note: "主线程到此已经完成；大风时远离陡坡边缘。", scope: "play" },
        { id: "fermeda", n: 5, name: "Fermeda吊椅区域", lat: 46.6066, lng: 11.7350, category: "constraint", mode: "cable", duration: "可能未开放", note: "若沿用2026节奏，6月16日仍早于吊椅夏季开放日。", scope: "play" },
        { id: "pieralongia", n: 6, name: "Pieralongia", lat: 46.6117, lng: 11.7435, category: "side", mode: "walk", duration: "环线2–3小时", note: "需步道基本无雪、无雷暴且三人体力一致。", scope: "play" },
        { id: "baitadaniel", n: 7, name: "Baita Daniel", lat: 46.5888, lng: 11.7163, category: "side", mode: "walk", duration: "午餐/休息", note: "山屋季初营业状态要逐家核实。", scope: "play" },
        { id: "museum", n: 8, name: "Museum Gherdëina", lat: 46.5758, lng: 11.6710, category: "weather", mode: "walk", duration: "雨天替代", note: "山顶完全进云或雷暴预警时，改为小镇文化日。", scope: "play" }
      ],
      segments: [
        { from: "valley", to: "furnes", mode: "cable", kind: "main" },
        { from: "furnes", to: "top", mode: "cable", kind: "main" },
        { from: "top", to: "ridge", mode: "walk", kind: "main" },
        { from: "ridge", to: "fermeda", mode: "cable", kind: "constraint" },
        { from: "ridge", to: "pieralongia", mode: "walk", kind: "side", via: [[46.6060, 11.7340]] },
        { from: "pieralongia", to: "baitadaniel", mode: "walk", kind: "side", via: [[46.6000, 11.7280]] },
        { from: "valley", to: "museum", mode: "walk", kind: "weather" }
      ]
    },

    {
      id: 13,
      date: "06月17日",
      weekday: "周四",
      title: "Alpe di Siusi与Resciesa",
      subtitle: "草甸与山谷全景组成两个独立半日模块；天气不好时只保留其中一个。",
      base: "奥蒂塞伊 · 3/3晚",
      tempo: "中高",
      crowd: "中等，校假开始",
      summary: "Alpe di Siusi是主线程，Resciesa是第二天气窗口。不要为了“集齐三条缆车”在云雾和雷暴中硬上。",
      decisions: [
        { term: "时间", detail: "下午光线不是绝对规则；若午后雷暴概率上升，应把草甸放在上午。" },
        { term: "人流", detail: "南蒂罗尔学校通常在6月16日前后结束，今天起本地家庭休闲客可能增加。" },
        { term: "牧场", detail: "六月中旬牲畜是否已上高山牧场取决于当年草况，不把“奶牛打卡”视为保证。" }
      ],
      sources: [
        { label: "Val Gardena缆车", url: "https://www.valgardena.it/en/summer-holidays-dolomites/lifts/" },
        { label: "南蒂罗尔校历", url: "https://scuola-italiana.provincia.bz.it/it/scuola-carattere-statale/calendario-scolastico" }
      ],
      points: [
        { id: "siusibase", n: 1, name: "Ortisei–Alpe di Siusi山下站", lat: 46.5743, lng: 11.6660, category: "main", mode: "cable", duration: "出发", note: "天气稳定时尽早进入草甸。", scope: "play" },
        { id: "montseuc", n: 2, name: "Mont Sëuc山站", lat: 46.5550, lng: 11.6567, category: "main", mode: "cable", duration: "抵达", note: "先确认返程末班，再决定步行长度。", scope: "play" },
        { id: "meadow", n: 3, name: "Alpe di Siusi主草甸视角", lat: 46.5480, lng: 11.6480, category: "main", mode: "walk", duration: "1–2小时", note: "以草甸、农牧景观和Sassolungo远景为核心。", scope: "play" },
        { id: "schgaguler", n: 4, name: "Schgaguler一带山屋", lat: 46.5438, lng: 11.6370, category: "side", mode: "walk", duration: "增加1小时", note: "只有天气稳定、步道干燥时延伸。", scope: "play" },
        { id: "resciesabase", n: 5, name: "Resciesa山下站", lat: 46.5780, lng: 11.6728, category: "side", mode: "cable", duration: "第二模块", note: "从Alpe下山后穿过镇中心衔接。", scope: "play" },
        { id: "resciesatop", n: 6, name: "Resciesa山站", lat: 46.6025, lng: 11.6559, category: "side", mode: "cable", duration: "1–2小时", note: "适合比Seceda更安静的山谷层次视角。", scope: "play" },
        { id: "chapel", n: 7, name: "Santa Croce / 山顶十字架方向", lat: 46.6098, lng: 11.6488, category: "side", mode: "walk", duration: "视雪况延伸", note: "季初步道可能湿滑或残雪，不作为强制终点。", scope: "play" },
        { id: "town", n: 8, name: "Ortisei小镇雨天线", lat: 46.5758, lng: 11.6710, category: "weather", mode: "walk", duration: "半日", note: "咖啡馆、博物馆与木雕店构成完整替代，不需硬上山。", scope: "play" }
      ],
      segments: [
        { from: "siusibase", to: "montseuc", mode: "cable", kind: "main" },
        { from: "montseuc", to: "meadow", mode: "walk", kind: "main" },
        { from: "meadow", to: "schgaguler", mode: "walk", kind: "side" },
        { from: "siusibase", to: "resciesabase", mode: "walk", kind: "side" },
        { from: "resciesabase", to: "resciesatop", mode: "cable", kind: "side" },
        { from: "resciesatop", to: "chapel", mode: "walk", kind: "side" },
        { from: "siusibase", to: "town", mode: "walk", kind: "weather" }
      ]
    },

    {
      id: 14,
      date: "06月18日",
      weekday: "周五",
      title: "奥蒂塞伊 → 米兰",
      subtitle: "转场时间按4.5小时级别理解；下午只完成一条米兰核心线，城市加项互斥。",
      base: "米兰 · 1/1晚",
      tempo: "高",
      crowd: "男装周开幕，高",
      summary: "今天先确保抵达米兰。Duomo—长廊—Brera已经完整；城堡、Navigli、Isola与隐藏景点不能全部叠加。",
      decisions: [
        { term: "时刻", detail: "09:00从Ortisei出发很难稳妥赶上14:00大教堂预约；应早出或预约15:30以后。" },
        { term: "活动", detail: "2027米兰男装周为6月18–22日，今天开幕，Brera与时尚区人流和住宿价格会增加。" },
        { term: "路线", detail: "默认Duomo—Galleria—Brera；想去Navigli就取消城堡与其他隐藏景点。" }
      ],
      sources: [
        { label: "米兰男装周日期", url: "https://www.cameramoda.it/en/milano-moda-uomo/fashion-hub/" },
        { label: "米兰大教堂", url: "https://www.duomomilano.it/en/" }
      ],
      points: [
        { id: "ortisei", n: 1, name: "Ortisei Piazza S. Antonio", lat: 46.5754, lng: 11.6701, category: "transfer", mode: "bus", duration: "建议早出", note: "预留公交拥堵和行李上下车时间。", scope: "journey" },
        { id: "bolzanohbf", n: 2, name: "Bolzano/Bozen Bahnhof", lat: 46.4966, lng: 11.3580, category: "transfer", mode: "rail", duration: "公交转火车", note: "不要安排极短接续。", scope: "journey" },
        { id: "verona", n: 3, name: "Verona Porta Nuova", lat: 45.4299, lng: 10.9827, category: "transfer", mode: "rail", duration: "可能换乘", note: "具体是否换乘取决于2027车次。", scope: "journey" },
        { id: "milanocentrale", n: 4, name: "Milano Centrale", lat: 45.4859, lng: 9.2043, category: "transfer", mode: "rail", duration: "抵达+入住", note: "放下行李后再进入大教堂区域。", scope: "play" },
        { id: "duomo", n: 5, name: "Duomo与登顶", lat: 45.4642, lng: 9.1916, category: "main", mode: "metro", duration: "1.5–2小时", note: "预约15:30以后更稳妥；高温时注意屋顶暴晒。", scope: "play" },
        { id: "galleria", n: 6, name: "Galleria Vittorio Emanuele II", lat: 45.4657, lng: 9.1900, category: "main", mode: "walk", duration: "20–30分钟", note: "与Duomo无缝衔接。", scope: "play" },
        { id: "brera", n: 7, name: "Brera", lat: 45.4719, lng: 9.1881, category: "main", mode: "walk", duration: "1–1.5小时", note: "男装周期间会更热闹，餐厅提前订位。", scope: "play" },
        { id: "sforza", n: 8, name: "Sforza Castle", lat: 45.4705, lng: 9.1792, category: "side", mode: "walk", duration: "外观30分钟", note: "仅在Brera结束仍有余量时加入。", scope: "play" },
        { id: "sanbernardino", n: 9, name: "San Bernardino alle Ossa", lat: 45.4627, lng: 9.1988, category: "side", mode: "walk", duration: "20–30分钟", note: "与大教堂近，但受开放时段约束；不与多个远端加项叠加。", scope: "play" },
        { id: "navigli", n: 10, name: "Navigli", lat: 45.4514, lng: 9.1740, category: "side", mode: "metro", duration: "晚餐", note: "选择这里就把晚间留在运河区。", scope: "play" },
        { id: "isola", n: 11, name: "Isola", lat: 45.4874, lng: 9.1896, category: "weather", mode: "metro", duration: "晚餐替代", note: "住Centrale附近、体力下降时，比跨城去Navigli更省力。", scope: "play" }
      ],
      segments: [
        { from: "ortisei", to: "bolzanohbf", mode: "bus", kind: "main", via: [[46.5980, 11.5270], [46.5510, 11.5210]] },
        { from: "bolzanohbf", to: "verona", mode: "rail", kind: "main", via: [[46.0700, 11.1210], [45.8900, 11.0400]] },
        { from: "verona", to: "milanocentrale", mode: "rail", kind: "main", via: [[45.5410, 10.2120], [45.4860, 9.5000]] },
        { from: "milanocentrale", to: "duomo", mode: "metro", kind: "main" },
        { from: "duomo", to: "galleria", mode: "walk", kind: "main" },
        { from: "galleria", to: "brera", mode: "walk", kind: "main" },
        { from: "brera", to: "sforza", mode: "walk", kind: "side" },
        { from: "duomo", to: "sanbernardino", mode: "walk", kind: "side" },
        { from: "duomo", to: "navigli", mode: "metro", kind: "side" },
        { from: "milanocentrale", to: "isola", mode: "metro", kind: "weather" }
      ]
    },

    {
      id: 15,
      date: "06月19日",
      weekday: "周六",
      title: "米兰 → 北京",
      subtitle: "所有城市活动都服从国际航班倒排；地图同时标出米兰三座机场以防订票认错。",
      base: "返程",
      tempo: "航班决定",
      crowd: "男装周周六，高",
      summary: "今天唯一主线程是按正确机场准时起飞。早餐和购物只有在航班时间明确留出余量后才成立。",
      decisions: [
        { term: "机场", detail: "远程国际航班通常更可能使用MXP，但必须以机票上的MXP、LIN或BGY代码为准。" },
        { term: "缓冲", detail: "若从MXP出发，按市区至机场约1小时并叠加国际航班值机与意外缓冲倒排。" },
        { term: "购物", detail: "男装周周六市中心人流高；不为购物压缩机场时间。" }
      ],
      sources: [
        { label: "Malpensa Express", url: "https://www.malpensaexpress.it/en/" },
        { label: "米兰机场", url: "https://www.milanomalpensa-airport.com/en" }
      ],
      points: [
        { id: "centrale", n: 1, name: "Milano Centrale", lat: 45.4859, lng: 9.2043, category: "transfer", mode: "rail", duration: "机场线起点之一", note: "住Centrale附近时便于带行李上车。", scope: "play" },
        { id: "cadorna", n: 2, name: "Milano Cadorna", lat: 45.4688, lng: 9.1765, category: "transfer", mode: "rail", duration: "机场线起点之一", note: "住市中心西侧时可能更方便。", scope: "play" },
        { id: "eataly", n: 3, name: "Eataly Milano Smeraldo", lat: 45.4811, lng: 9.1870, category: "side", mode: "metro", duration: "最多1小时", note: "只在午后或傍晚航班且已完成打包时加入。", scope: "play" },
        { id: "mxp", n: 4, name: "Malpensa Airport · MXP", lat: 45.6301, lng: 8.7231, category: "main", mode: "flight", duration: "主要假设", note: "国际远程航班常用机场；以最终机票为准。", scope: "journey" },
        { id: "lin", n: 5, name: "Linate Airport · LIN", lat: 45.4490, lng: 9.2783, category: "constraint", mode: "flight", duration: "核对代码", note: "距市区近，交通方式与MXP完全不同。", scope: "journey" },
        { id: "bgy", n: 6, name: "Bergamo Airport · BGY", lat: 45.6739, lng: 9.7042, category: "constraint", mode: "flight", duration: "核对代码", note: "实际位于贝加莫，主要依赖机场巴士，不能按MXP方案前往。", scope: "journey" }
      ],
      segments: [
        { from: "centrale", to: "mxp", mode: "flight", kind: "main", via: [[45.5200, 9.1000], [45.5900, 8.8500]] },
        { from: "cadorna", to: "mxp", mode: "flight", kind: "main", via: [[45.5200, 9.0800]] },
        { from: "centrale", to: "eataly", mode: "metro", kind: "side" },
        { from: "centrale", to: "lin", mode: "bus", kind: "constraint" },
        { from: "centrale", to: "bgy", mode: "bus", kind: "constraint", via: [[45.5800, 9.4000]] }
      ]
    }
  ],

  guides: {
    1: {
      theme: "先建立维也纳的城市尺度",
      script: "今晚不要急着把维也纳看成一串宫殿名单。先站在圣史蒂芬大教堂前辨认中世纪城市的核心，再沿Graben看巴洛克时代如何把老街变成帝国舞台；这条短线的价值，是让接下来两天的宫殿、教堂与咖啡馆落在同一张历史地图上。",
      sights: "圣史蒂芬大教堂要看南北塔的不对称、彩釉屋顶和狭窄街巷形成的垂直冲击；Graben的黑死病纪念柱则把瘟疫记忆、天主教信仰和哈布斯堡权力压缩在一座巴洛克纪念物中。",
      food: "长途飞行后的第一餐以易消化和不排队为原则。可选香肠摊的Käsekrainer、炖牛肉汤或简餐；咖啡馆甜点留到精神较好时再吃，不必第一晚追名店。",
      culture: "维也纳咖啡馆不是快速喝完就走的饮料店，而是读报、会面和长时间停留的公共客厅。入座后从容点单即可，但晚到时不要让一顿正式晚餐挤压睡眠。",
      fieldNote: "导游开场可以问：为什么一座帝国首都的精神中心不是皇宫，而是一座市民教堂？用这个问题串起D2。",
      sources: [
        { label: "维也纳咖啡馆文化", url: "https://www.wien.info/en/dine-drink/coffeehouses" },
        { label: "维也纳传统Beisl", url: "https://www.wien.info/en/dine-drink/viennese-cuisine/beisl-boom-in-vienna-1037426" }
      ]
    },
    2: {
      theme: "从王朝宫殿走回市民老城",
      script: "美泉宫展示的是哈布斯堡王朝如何把礼仪、家庭和外交组织进一条宏大的轴线；回到霍夫堡和圣史蒂芬大教堂，则会看到权力并不只存在于一座宫殿，而是与教会、市民和商业街长期叠合。今天真正要比较的不是哪座建筑更豪华，而是夏宫与首都核心承担了怎样不同的角色。",
      sights: "美泉宫先看宫殿中轴、花园坡度与Gloriette之间的视线控制；霍夫堡要理解它是数百年扩建的建筑群，不是一栋完成于同一时期的宫殿；教堂内部则观察哥特式高度和侧礼拜堂的层次。",
      food: "若点Wiener Schnitzel，菜单上只有明确写小牛肉的才是经典版本，猪肉通常会标作Wiener Art。三人可在炸肉排、Tafelspitz和一份蛋糕之间分食，避免每人都点同样的大份主菜。",
      culture: "周日的维也纳更适合宫殿、博物馆、教堂和咖啡馆，市场摊位与普通零售并非城市主角。咖啡名称很多，先选Melange或Einspänner即可，不必把点单变成考试。",
      fieldNote: "在Gloriette回望宫殿时停两分钟：从高处看轴线，比在房间里记家具更容易理解帝国空间。",
      sources: [
        { label: "美泉宫官方资料", url: "https://www.schoenbrunn.at/en/" },
        { label: "维也纳炸肉排指南", url: "https://www.wien.info/en/dine-drink/viennese-cuisine/schnitzel-guide-1045840" }
      ]
    },
    3: {
      theme: "盐、教会权力与莫扎特的城市",
      script: "萨尔茨堡并不是一座只靠莫扎特成名的小城。盐业财富支撑了采邑主教的政治与宗教权力，也让意大利式巴洛克建筑在阿尔卑斯山北侧形成完整城市景观。莫扎特的故事应放在这个宫廷体系里理解：他的天赋受到城市培养，也最终与受雇于主教的身份发生冲突。",
      sights: "从米拉贝尔花园跨河进入老城，是从世俗花园走向教会核心的最佳视角；粮食胡同看窄地块与穿堂院落；大教堂、主教广场和要塞则共同构成宗教统治的空间轴线。",
      food: "Salzburger Nockerl是模仿周边山峰形态的热甜舒芙蕾，适合三人共享且要预留制作时间。赶行程时可选Bosna香肠面包；晚餐再考虑本地啤酒、炖菜或奥地利家常菜。",
      culture: "不要把两座莫扎特馆都当作打卡任务。出生地更适合建立人物时间线；若更关心家庭生活、手稿与演奏史，再用故居替换。老城店招和院落也比纪念品本身更值得看。",
      fieldNote: "在Makartsteg过河时回头看：山、河、教堂穹顶与要塞为何能同时进入一幅画，这就是萨尔茨堡城市景观的核心。",
      sources: [
        { label: "萨尔茨堡巴洛克城市", url: "https://www.salzburg.info/en/salzburg/unesco-world-cultural-heritage/baroque-city" },
        { label: "萨尔茨堡饮食", url: "https://www.salzburg.info/en/dining-shopping" }
      ]
    },
    4: {
      theme: "把国王湖看成一套高山水系",
      script: "国王湖狭长而深，两侧石灰岩山体陡直入水，视觉上像峡湾，但地质成因应理解为阿尔卑斯冰川塑造的湖盆。Salet只是船码头，继续步行才到Obersee；圣巴托罗美则是另一条文化线，体现朝圣、渔业与王室狩猎传统。先上湖、回程停靠，正是由地理和末班船共同决定的顺序。",
      sights: "船上重点看山壁尺度、水色变化与聚落为何稀少；Obersee看前后湖盆和山体封闭感；圣巴托罗美的红色洋葱顶教堂要放在朝圣地而非单纯摄影点的背景中理解。",
      food: "以便携午餐和充足饮水为主，避免把受船班约束的中午交给长时间正餐。若菜单有当地湖鱼或巴伐利亚Brotzeit可作为晚些时候的选择，但不要默认每家都供应当天鲜鱼。",
      culture: "这里是国家公园环境，安静并不等于可以离开步道。游船回声演示是一种旅游传统，不代表可以自行制造噪声；码头时刻、天气和湖面运行状态比照片计划优先。",
      fieldNote: "上船后先让大家看地图判断Salet、Obersee和圣巴托罗美的相对位置，抵达后就不会把三个名称混为一处。",
      sources: [
        { label: "国王湖船务", url: "https://www.seenschifffahrt.de/en/koenigssee" },
        { label: "贝希特斯加登国家公园", url: "https://www.nationalpark-berchtesgaden.bayern.de/english/index.htm" }
      ]
    },
    5: {
      theme: "从湖区交通读懂盐业聚落",
      script: "今天看似在追三个湖边地名，实际是在体验Salzkammergut如何由船、山谷公交和盐业历史连接起来。Hallstatt的意义不只是一张湖边明信片：欧洲考古学中的哈尔施塔特文化以此得名，盐矿又解释了为什么如此狭窄的岸线上会长期存在一个重要聚落。",
      sights: "进入Hallstatt先看山体、湖岸和房屋之间几乎没有余地的关系，再看集市广场与教堂如何利用有限平地。北侧视角只需短停，真正的信息在聚落结构而不在复制同一张照片。",
      food: "湖区适合吃湖鱼、Knödel、清汤和Kaiserschmarrn。Hallstatt午后人流高、选择拥挤，宁可把完整晚餐留给圣沃尔夫冈；Bad Ischl换乘时可用咖啡和小点补充体力。",
      culture: "Hallstatt同时是居民日常空间和世界遗产地。拍照不要占用私宅台阶、墓园通道或车道；对盐业和考古有兴趣，应另留半天给盐矿，而不是在今天强塞。",
      fieldNote: "在湖边指出：景观的稀缺感来自山水夹逼，也正是这种夹逼造成交通慢、空间小和居民压力大。",
      sources: [
        { label: "湖区文化与传统", url: "https://www.salzkammergut.at/en/things-to-do/culture-traditions.html" },
        { label: "湖区饮食", url: "https://www.salzkammergut.at/en/things-to-do/food-drinks.html" }
      ]
    },
    6: {
      theme: "浪漫风景如何被铁路变成大众旅行",
      script: "沙夫山不仅是观景台，也是19世纪旅游现代化的现场。浪漫主义旅行者先发现湖区风景，随后轮船与1893年开通的齿轨铁路把原本需要长时间攀登的山顶纳入大众旅行。今天乘车时看到的不只是技术奇观，而是一整套湖船、旅馆与山岳观光共同形成的产业。",
      sights: "上行时留意森林线、草坡与裸岩的海拔变化；山顶不要只朝一个方向拍照，应辨认Wolfgangsee、Mondsee等不同湖面及山谷走向。能见度差时，铁路史和湖岸聚落比白雾中的山顶更值得。",
      food: "山上以汤、Knödel、香肠或Kaiserschmarrn等高热量简餐为主，旺时不要期待慢速正餐。下山后再用湖鱼、沙拉或本地甜点平衡一天饮食。",
      culture: "常规班次多由现代车辆承担，历史蒸汽机车只在特定怀旧班次使用。不要把冒烟与否当作体验成败；真正值得讲的是350名工人、骡队运输和一年多建成线路的工程史。",
      fieldNote: "列车出发前讲清两个数字：5.85公里、爬升1190米。随后让大家用窗外坡度体会齿轨系统为什么必要。",
      sources: [
        { label: "沙夫山铁路历史", url: "https://www.5schaetze.at/en/schafbergbahn/facts-and-pictures/history.html" },
        { label: "沙夫山线路数据", url: "https://www.5schaetze.at/en/schafbergbahn/facts-and-pictures.html" }
      ]
    },
    7: {
      theme: "进入蒂罗尔的山口城市",
      script: "因斯布鲁克的名字本身就是‘因河上的桥’。它的城市性来自阿尔卑斯交通，而不是与山地相隔绝：向北连接德意志地区，向南经布伦纳山口进入意大利。马克西米利安一世选择这里经营宫廷与政治，也因此把金顶屋等帝国符号留在一座尺度很小的贸易城市中。",
      sights: "从凯旋门沿Maria-Theresien-Straße向北走，山体会像城市街道的尽端背景；金顶屋的2657片鎏金铜瓦和浮雕体现晚期哥特向文艺复兴过渡；因河桥上再看彩色立面与Nordkette的关系。",
      food: "晚餐可选Tiroler Gröstl、Kaspressknödel、Speck与奶酪拼盘。转场日宜先确认份量，Gröstl和炸奶酪团都偏重，三人共享一道再加汤或沙拉更合适。",
      culture: "蒂罗尔身份同时由山地生活、天主教传统、哈布斯堡历史与跨山口贸易塑造。老城不是封闭的民俗布景，而是长期处在欧洲南北通道上的节点。",
      fieldNote: "在Maria-Theresien-Straße中央停一次，让大家先看街道，再抬头看山：‘阿尔卑斯城市’四个字会立刻变得具体。",
      sources: [
        { label: "金顶屋", url: "https://www.innsbruck.info/en/sightseeing/i/golden-roof.html" },
        { label: "哈布斯堡与因斯布鲁克", url: "https://www.innsbruck.info/en/sightseeing/history/the-habsburg-era.html" }
      ]
    },
    8: {
      theme: "从城市电车尺度跃升到高山尺度",
      script: "Nordkette最特别的不是海拔本身，而是从老城边缘迅速进入高山环境的连续体验。1906年的Hungerburgbahn开启了城市登山交通，1928年通往Seegrube和Hafelekar的线路又把现代山岳建筑嵌入岩壁；今天的Hungerburg站则以扎哈·哈迪德的流线形态延续这种工程与设计传统。",
      sights: "在Altstadt站先看站体如何回应冰雪与地形，再到Seegrube观察林线以上的碎石坡；Hafelekar方向重点看城市、因河谷和南侧山脉的层次，而不是贴近无护栏边缘。",
      food: "山上适合热汤、Knödel、Kaiserschmarrn与简单咖啡，价格和等待都高于市区。若云量上升，早点下山在老城吃蒂罗尔菜，比为一顿山顶餐错过缆车更合理。",
      culture: "Nordkette是本地人的休闲山，也是游客景点。尊重徒步者和通勤式使用者，不在站台堵住出口拍照；Bergisel若加入，则可把1809年蒂罗尔抵抗史与当代滑雪跳台建筑并置。",
      fieldNote: "每换一次交通工具都报一次海拔，让‘城市—森林—高山’的垂直剖面成为当天讲解主线。",
      sources: [
        { label: "Nordkette交通史", url: "https://nordkette.com/en/top-of-innsbruck/history/" },
        { label: "因斯布鲁克城市历史", url: "https://www.innsbruck.info/en/sightseeing/history.html" }
      ]
    },
    9: {
      theme: "穿过布伦纳，也穿过语言与历史边界",
      script: "从因斯布鲁克到博尔扎诺，地理上仍在同一条蒂罗尔山谷体系中，政治与语言环境却逐步变化。南蒂罗尔今天属于意大利并拥有高度自治，德语与意大利语共同出现在站名和公共生活中。博尔扎诺既有中欧拱廊与市集传统，也有意大利城市广场的节奏。",
      sights: "铁路经过布伦纳时观察谷地为何成为南北交通主轴；进入博尔扎诺后，从Waltherplatz、主教座堂到拱廊街看德意志与意大利建筑语汇叠合。Ötzi展览要先看装备、衣物和铜斧，再看木乃伊本体。",
      food: "这里适合开始南蒂罗尔饮食线：Speckknödel、Schlutzkrapfen、黑麦面包、苹果甜点与本地葡萄酒。三人可分别选汤团、面食和冷盘分享，最能看出奥地利与意大利传统交汇。",
      culture: "Ötzi生活在5300多年前的铜石并用时代，铜斧是技术与身份的重要线索。他在1991年被发现，发现点最终确认在意大利境内；不要把展览简化成‘看一具木乃伊’。",
      fieldNote: "进城后先读三组地名：Bozen/Bolzano、Südtirol/Alto Adige、Bahnhof/Stazione。语言本身就是最直观的历史展品。",
      sources: [
        { label: "Ötzi官方资料", url: "https://www.iceman.it/en/oetzi/the-iceman" },
        { label: "南蒂罗尔传统饮食", url: "https://www.suedtirol.info/en/en/eating-and-drinking/recipes" }
      ]
    },
    10: {
      theme: "湖光之外，看见多洛米蒂山前地带",
      script: "卡雷扎湖的经典倒影来自小湖、森林与Latemar山体的组合，水位、风和光线每天都不同，因此它不是保证交付的镜面照片。返回博尔扎诺后，无论选择Renon高原还是Talvera河岸，都应把重点放在山地聚落如何与城市日常相连，而不是再追一个孤立景点。",
      sights: "湖边沿规定环线观察不同角度，不下到岸线；若去Renon，缆车既是观光设施也是山地公共交通；Runkelstein城堡最重要的是世俗中世纪壁画，但周一闭馆，今天只能保留外观或改日。",
      food: "适合准备Schüttelbrot、Speck、奶酪与苹果作为短途补给；午后回城再吃Knödel、意面或冰淇淋。山湖边不必为景观位支付长时间排队成本。",
      culture: "玫瑰园与劳林王的传说属于地方叙事，可以听，但要和真实地质、光线现象分开。南蒂罗尔的魅力正来自传说、德意志民间文化与意大利生活方式同时存在。",
      fieldNote: "到湖边先不拍照，观察三分钟风向、云层、水位和光源，再决定最佳站位；这是比追同款机位更专业的看景方法。",
      sources: [
        { label: "南蒂罗尔概览", url: "https://www.suedtirol.info/en/en/information/about-south-tyrol" },
        { label: "博尔扎诺历史街区", url: "https://www.bolzano-bozen.it/en/tourist-attractions.htm" }
      ]
    },
    11: {
      theme: "进入拉丁语族山谷与木雕之乡",
      script: "奥蒂塞伊有三个常用名字：Ladin语Urtijëi、德语St. Ulrich、意大利语Ortisei。三语标识不是旅游装饰，而是当地身份和自治制度的日常呈现。山谷木雕传统从家庭冬季副业发展为跨欧洲销售的手工产业，教堂里的圣像、商店橱窗和Museum Gherdëina可以连成一条文化线。",
      sights: "圣安东尼奥广场先看20世纪初旅游小镇立面，再到教区教堂观察本地木雕祭坛；Museum Gherdëina不只讲民俗，也连接地质、登山史、Luis Trenker与木雕产业。",
      food: "Val Gardena餐桌同时有Ladin、南蒂罗尔和意大利三条传统。可选大麦汤、Schlutzkrapfen、Polenta、Knödel或本地奶酪；连续山地日前一晚避免过量酒精和过咸冷盘。",
      culture: "木雕作品价格差异来自手工、工作室和复制品等级。真正感兴趣时先问作者、材料和制作方式，不把宗教雕像只当普通纪念品。看到三语地名时优先使用当地标识，不必强求单一‘正确名称’。",
      fieldNote: "导游可以教三组词：Urtijëi/Ortisei/St. Ulrich、Gherdëina/Val Gardena/Gröden，让大家马上理解这不是普通意大利山村。",
      sources: [
        { label: "Val Gardena语言与文化", url: "https://www.valgardena.it/en/gstc/language-culture-and-art/" },
        { label: "奥蒂塞伊官方介绍", url: "https://www.valgardena.it/en/ortisei/" }
      ]
    },
    12: {
      theme: "Seceda是一部抬升到天空的地质书",
      script: "Seceda最醒目的锯齿山脊不是孤立奇观。约2.4亿年前，这一带仍与古特提斯海的沉积环境有关，岩层、化石和后来的构造抬升共同塑造今天的轮廓。站在草坡一侧看向Odle群峰，柔软草甸与陡峭岩壁的强烈反差正是照片震撼感的来源。",
      sights: "从缆车站先到主观景脊线，再决定是否延伸到Pieralongia；看岩层方向、侵蚀沟和草坡边界，不贴近陡坎。Furnes附近的地层说明可帮助理解鱼类、植物和鱼龙化石为何会出现在高山。",
      food: "山屋以汤、意面、Knödel、Polenta和甜点为主。主景先完成，再错峰午餐；随身带水和一份快速补给，不把唯一返程缆车余量押在排队点餐上。",
      culture: "高山草甸是放牧、割草与旅游共同作用的文化景观，并非无人管理的荒野。遇到围栏和牲畜按标识通行，关闭牧门，不为拍照踏入未开放草坡。",
      fieldNote: "抵达观景点先用手指沿山脊读一遍岩层走向，再拍照；这能把‘网红尖峰’转换成可以理解的地质结构。",
      sources: [
        { label: "Seceda地质与化石", url: "https://www.valgardena.it/en/summer-holidays-dolomites/trekking/seceda/good-to-know/" },
        { label: "Val Gardena历史与地理", url: "https://www.valgardena.it/en/history-geography/" }
      ]
    },
    13: {
      theme: "草甸不是空景，而是被经营的高山文化景观",
      script: "Alpe di Siusi的开阔感来自宽广高原、Sciliar与Sassolungo等山体围合，以及数百年牧业形成的草甸。它与Seceda的观感不同：昨天看的是岩脊的戏剧性，今天看的是地形尺度、农舍分布和人类长期利用高海拔土地的方式。Resciesa则提供另一条俯瞰Val Gardena的安静线。",
      sights: "从Mont Sëuc进入草甸后，以Sciliar和Sassolungo辨别方向；观察农舍、干草地和道路为何沿缓坡分布。若改走Resciesa，重点看山谷聚落与对面群峰的完整剖面，而不是重复追同类照片。",
      food: "可尝试高山奶酪、Knödel、Kaiserschmarrn或荞麦蛋糕。山屋份量通常大，三人可共享甜点；选择有室内座位的山屋也能作为短时阵雨和降温的缓冲。",
      culture: "草地可能正在放牧或割草，游客拥有通行权不等于可以任意穿越。绕开牲畜、关闭栅门、让农用车辆先行；教堂与小堂是社区信仰空间，进入时降低音量。",
      fieldNote: "把D12与D13做一次对照讲解：一个是‘岩壁与地层’，一个是‘草甸与生产’，两天才构成完整的多洛米蒂认识。",
      sources: [
        { label: "Alpe di Siusi官方旅游", url: "https://www.seiseralm.it/en/" },
        { label: "Val Gardena文化", url: "https://www.valgardena.it/en/gstc/language-culture-and-art/" }
      ]
    },
    14: {
      theme: "从阿尔卑斯地方社会切换到现代意大利都市",
      script: "米兰大教堂1386年开工，持续数百年的建造使它既是哥特建筑，也是城市共同体不断投入资源的工程。穿过Galleria Vittorio Emanuele II进入Brera，路线会从宗教中心转入19世纪统一后的商业都市，再进入艺术学院、画廊和时尚生活交织的街区。",
      sights: "大教堂先看Candoglia大理石、飞扶壁和屋顶尖塔，再寻找城市象征Madonnina；长廊看玻璃铁顶与商业橱窗如何塑造现代公共空间；Brera不必逐店打卡，街巷尺度和艺术机构才是主角。",
      food: "晚餐在Risotto alla Milanese、Cotoletta、Ossobuco中选一至两项共享。Aperitivo是下班后的社交时段，饮料配小食不一定等于完整晚餐；男装周开幕日应提前订位或避开最热街区。",
      culture: "米兰的节奏比前几站快，专业、设计与社交形象都很重要。进入大教堂遵守着装和安检要求；在Brera与时装活动周边，不占店门和人行道长时间拍摄。",
      fieldNote: "从大教堂屋顶向下看城市，再进入长廊：用‘石材垂直城市’与‘钢铁玻璃商业城市’的对比讲完米兰的两个时代。",
      sources: [
        { label: "米兰传统菜", url: "https://www.yesmilano.it/en/articles/traditional-dishes-milano" },
        { label: "米兰Aperitivo文化", url: "https://www.yesmilano.it/en/aperitivo-milanese" }
      ]
    },
    15: {
      theme: "用一顿早餐完成旅程收束",
      script: "返程日不再需要新的城市主线。若航班时间允许，最后一次站在吧台喝espresso，可以回看这15天如何从维也纳的帝国公共空间，经过湖区铁路旅游、蒂罗尔山口、南蒂罗尔多语社会与Ladin山谷，最终进入米兰的现代都市文化。机场准点是今天唯一不可替代的景点。",
      sights: "若有一小时余量，只做住宿附近的短步行或采购，不跨区补景点。地图同时标出MXP、LIN和BGY，是为了强调机场代码比‘米兰机场’四个字更重要。",
      food: "早餐可体验意大利bar的站饮咖啡与cornetto；购买Risotto材料、包装食品或甜点前先核对航空公司、入境海关和行李限制。Panettone本属节庆传统，不必为了‘米兰必买’在六月强求。",
      culture: "意大利咖啡吧站饮与入座可能采用不同价格和服务方式，先观察再点单。男装周周六市中心人流高，最后购物必须服从退房、取行李和机场交通倒排。",
      fieldNote: "离店前由一人读机票机场代码、一人查正式交通、一人确认行李与证件；三人交叉确认比任何返程加项更有价值。",
      sources: [
        { label: "米兰传统饮食", url: "https://www.yesmilano.it/en/food" },
        { label: "Malpensa Express", url: "https://www.malpensaexpress.it/en/" }
      ]
    }
  }
};
