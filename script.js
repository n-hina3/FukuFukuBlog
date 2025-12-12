// =========================================================
//  1. Data Definition (Full Content)
// =========================================================
const blogData = {
  // =====================================================
  // 【葵 (Aoi)】: 2023年から映画制作を開始。2025年は留学中。
  // =====================================================
  aoi: {
    themeClass: "theme-aoi",
    title: "フレームの向こう側",
    desc: "福井の片隅で、夢を探す日々の記録。",
    profile: {
      name: "AOI",
      bio: "Fukui / Univ. / Cinema / Global",
      img: "SweetSillyDanceNight_001.jpg",
    },
    posts: [
      // --- 2025年（日和による代筆・報告パート） ---
      {
        id: 1,
        date: "2025-11-09", // 映画祭最終日
        writer: "hiyori", 
        title: "10周年の報告",
        content:
          "映画祭10周年、無事に終わりました。<br>葵、そっちはどう？<br>今年の映画祭は、いつもより少しだけ寂しかったよ。<br>あなたがいない受付は、なんだか広すぎて。<br>でも、私たちが作ったZINEは今年も配りきりました。<br>「記録係」としての私の役目は、これで一区切りかな。<br>あなたが世界で戦っている間、私はここで、私たちの足跡を守っています。",
        image: "SweetSillyDanceNight_003.jpg",
        tags: ["映画祭", "手紙", "10周年"],
      },
      {
        id: 2,
        date: "2025-09-15", // ハッカソン最終日
        writer: "hiyori",
        title: "二人分の夏",
        content:
          "ふくいムービーハッカソン終了。<br>今年は後輩たちのサポートに回りました。<br>みんな必死で、キラキラしてて、少し前の私たちみたいだった。<br>2年前、私が無理やり誘った時のあなたの顔を思い出す。<br>「自信ない」って言いながら、カメラを持つ手は震えてたね。<br>あの夏があったから、今のあなたがいる。<br>遠い空の下で頑張る親友へ。エールを込めて。",
        image: "SweetSillyDanceNight_004.jpg",
        tags: ["ハッカソン", "思い出", "応援"],
      },

      // --- 2025年初頭（葵：留学への決意） ---
      {
        id: 3,
        date: "2025-02-14",
        writer: "aoi",
        title: "決断の時",
        content:
          "春から、日本を離れることにしました。<br>行き先は海外。映像の勉強をするために。<br>ずっと「どうせ私なんて」って蓋をしてた夢。<br>受験に失敗して、福井に来て、なんとなく過ごしてた日々。<br>それを変えてくれたのは、あの日、日和がハッカソンに誘ってくれたから。<br>「世界で活躍したい」なんて、笑われるかもしれない。<br>でも、もう自分の気持ちに嘘はつきたくない。<br>行ってきます。",
        image: "okita2.png",
        tags: ["決意", "留学", "夢"],
      },

      // --- 2024年（葵：夢への助走） ---
      {
        id: 12,
        date: "2024-11-30",
        writer: "aoi",
        title: "3度目の映画祭",
        content:
          "今年も映画祭のスタッフとして参加。<br>たくさんの映画を見て、監督の話を聞いて。<br>やっぱり、私は「見る側」じゃなくて「作る側」に行きたい。<br>英語の勉強も始めた。<br>日和にはまだ内緒だけど、少しずつ準備を進めてる。<br>福井で出会ったこの熱を、もっと広い世界へ持っていきたい。",
        image: "SweetSillyDanceNight_001.jpg",
        tags: ["映画祭", "勉強", "秘密"],
      },
      {
        id: 13,
        date: "2024-09-14",
        writer: "aoi",
        title: "ハッカソン、再び",
        content:
          "今年のハッカソンは、用事があって今日だけの参加。<br>でも、空気を感じたくて会場に行った。<br>去年の今頃は、右も左もわからなかったな。<br>1年で、こんなに気持ちが変わるなんて思わなかった。<br>ここが私の「原点」。",
        image: "SweetSillyDanceNight_004.png",
        tags: ["ハッカソン", "成長", "原点"],
      },

      // --- 2023年（葵：運命の転機） ---
      {
        id: 20,
        date: "2023-11-11",
        writer: "aoi",
        title: "スクリーンデビュー？",
        content:
          "映画祭当日。ハッカソンでエキストラとして参加した作品が上映された。<br>大きなスクリーンに、福井の街と、走ってる私が映ってる。<br>恥ずかしいけど...なんか、すごい。<br>日和が隣で「葵、いい顔してる！」って笑ってた。<br>私、こんな顔して笑えるんだ。<br>映画ってすごい。魔法みたい。",
        image: "SweetSillyDanceNight_001.png",
        tags: ["映画祭", "上映", "発見"],
      },
      {
        id: 21,
        date: "2023-09-19", // ハッカソン翌日
        writer: "aoi",
        title: "3日間の魔法",
        content:
          "ハッカソンが終わった。<br>正直、最初は断るつもりだった。<br>人前に出るのも苦手だし、クリエイティブなことなんて無理だと思ってた。<br>でも、日和が「葵なら大丈夫」って背中を押してくれた。<br>3日間、必死に走って、演じて。<br>「映像の仕事がしたい」<br>ずっと忘れてた夢を、思い出してしまったかも。<br>ありがとう、日和。",
        image: "SweetSillyDanceNight_004.jpg",
        tags: ["ハッカソン", "夢", "感謝"],
      },
      {
        id: 22,
        date: "2023-08-20",
        writer: "aoi",
        title: "突然の誘い",
        content:
          "大学の友達の日和からLINE。<br>「来月のムービーハッカソン、エキストラ足りないから一緒に出ない？」<br>ええー...無理だよ。<br>私、そういうキャラじゃないし。<br>でも、日和は中学からの付き合いだから、私の性格も知ってるはず。<br>「映像好きでしょ？ 見るだけじゃなくてやってみようよ」<br>...図星。<br>断りきれなくてOKしちゃった。大丈夫かな。",
        image: "",
        tags: ["ハッカソン", "きっかけ", "不安"],
      },
      {
        id: 23,
        date: "2023-04-10",
        writer: "aoi",
        title: "2年生",
        content:
          "大学2年生。相変わらず大学と家の往復。<br>福井に来て1年経つけど、まだ「ここじゃない」って思ってる自分がいる。<br>本当は東京の美大に行きたかったな、とか。<br>いけない、いけない。<br>置かれた場所で咲きなさい、なんて言うけど。<br>私はまだ、蕾にもなれていない気がする。",
        image: "",
        tags: ["大学", "悩み", "日常"],
      },
    ],
  },

  // =====================================================
  // 【日和 (Hiyori)】: 2022年から参加。葵を支える理解者。
  // =====================================================
  hiyori: {
    themeClass: "theme-hiyori",
    title: "越前史行脚録",
    desc: "丹羽長秀公の足跡を訪ねて。福井の歴史と日常。",
    profile: {
      name: "米五郎左ファン",
      bio: "史学科4年。戦国/幕末/城郭。カメラはNikon。",
      img: "SweetSillyDanceNight_003.jpg",
    },
    posts: [
      {
        id: 201,
        date: "2025/11/09", // 映画祭最終日
        title: "【映画祭】学生最後のスタッフ", 
        content:
          "第10回福井駅前短編映画祭、閉幕。<br>大学1年の時から関わらせてもらった映画祭も、学生としてはこれが最後。<br>今年は一人での参加でした。<br>相棒は今、海の向こうで頑張ってるから。<br>「柴田」と「丹羽」。<br>歴史上の二人は対立したこともあったけど、私たちは最高のパートナーだよね。<br>彼女が帰ってくる場所を、私が守れていたらいいな。",
        image: "",
        tags: ["映画祭", "卒業制作", "友情"],
      },
      {
        id: 202,
        date: "2025/02/20",
        title: "空港にて",
        content:
          "今日、親友を見送ってきました。<br>大きなスーツケースと、もっと大きな夢を持って。<br>「日和がいなかったら、私まだ部屋で腐ってたよ」<br>そう言って笑ってくれた。<br>ううん、逆だよ。<br>葵がいたから、私も頑張れた。<br>寂しくなるけど、空は繋がってる。<br>いってらっしゃい。",
        image: "SweetSillyDanceNight_002.jpg",
        tags: ["別れ", "旅立ち", "空"],
      },
      {
        id: 205,
        date: "2023/09/20",
        title: "作戦大成功！",
        content:
          "ハッカソン終了！<br>今年は中学からの友達、葵を誘って参加しました。<br>彼女、ずっと自分に自信なさそうにしてたけど、<br>映像の話をする時だけ目がキラキラするのを私は知ってた。<br>「エキストラ足りない」っていうのは半分嘘（笑）。<br>彼女にきっかけを作りたくて。<br>結果、大成功。<br>「楽しかった！」っていう笑顔が見れて、私も嬉しい。",
        image: "",
        tags: ["ハッカソン", "友達", "作戦"],
      },
      {
        id: 206,
        date: "2022/11/13", // 映画祭翌日
        title: "先生の誘いで",
        content:
          "昨日は福井駅前短編映画祭へ。<br>大学の先生が実行委員をしていて、「勉強になるから」と誘われました。<br>（本当は特別審査委員長の俳優さんが目当てだったけど...）<br>でも、行ってみてよかった。<br>福井でこんなクリエイティブな熱気が生まれているなんて。<br>来年は、もっと内側から関わってみたい。<br>ボランティアスタッフ、募集してるかな。",
        image: "",
        tags: ["映画祭", "初体験", "発見"],
      },
    ],
  },

  // =====================================================
  // 【みやぴー】: 実行委員視点。学生たちの成長を見守る。
  // =====================================================
  miyapy: {
    themeClass: "theme-miyapy",
    title: "みやぴーの福井シネマ散歩",
    desc: "路地裏とスクリーンと、時々カニ。",
    profile: {
      name: "みやぴー",
      bio: "元タウン誌編集長 / 映画祭実行委員。趣味はフィルムカメラと地酒。",
      img: "https://placehold.co/100/2c3e50/fff?text=Miya",
    },
    posts: [
      {
        id: 101,
        date: "2025-11-10",
        title: "祝・10周年！祭りのあと。",
        content:
          "第10回福井駅前短編映画祭、大盛況のうちに閉幕！<br>今年は学生スタッフのリーダー格だった子が一人で頑張ってたな。<br>いつも一緒だった相棒の子は、海外留学に行ったらしい。<br>「世界で活躍する映像作家になるそうです」って。<br>頼もしいじゃないか。<br>ここ（福井）が出発点になって、世界へ羽ばたく。<br>実行委員冥利に尽きるね。",
        image: "",
        tags: ["映画祭", "編集後記", "10周年"],
      },
      {
        id: 102,
        date: "2024-11-30",
        title: "今年の学生スタッフ",
        content:
          "映画祭当日。<br>今年は3年目のベテラン学生コンビが現場を仕切ってくれた。<br>一人は歴史好き、もう一人は映像志望。<br>凸凹コンビだけど、いいチームワークだ。<br>映像志望の子、目が本気になってきたな。<br>近いうちに、面白い報告が聞けるかもしれない。",
        image: "",
        tags: ["映画祭", "スタッフ", "若者"],
      },
    ],
  },

  // =====================================================
  // 【OL】: 日常の観察者。二人の不在（片方の不在）に気づく。
  // =====================================================
  ol_lunch: {
    themeClass: "theme-ol",
    title: "Fukui OL Life♡",
    desc: "福井ランチ / カフェ / コスメ 💄",
    profile: {
      name: "YUKA",
      bio: "福井駅前勤務。美味しいものと可愛いものが好き🍰",
      img: "https://placehold.co/100/FFB7B2/fff?text=OL",
    },
    posts: [
      {
        id: 401,
        date: "2025-11-08", // トークショーの日
        title: "映画祭10周年！✨",
        content:
          "ハピリンで映画祭のイベント見てきたよ〜！<br>今年もZINE（手作り冊子）をゲット。<br>あれ、でも配ってるスタッフさん、今年は一人？<br>いつも二人組で、漫才みたいに仲良く配ってたのに。<br>「相方さんは？」って聞こうと思ったけど、忙しそうだったからやめた💦<br>就職活動とかかな？ 大学生も大変だね🥺",
        image: "",
        tags: ["映画祭", "ハピリン", "ZINE"],
      },
      {
        id: 402,
        date: "2023-09-17", // 2年前のハッカソン
        title: "駅前で撮影してた！",
        content:
          "ランチしてたら、駅前ですごい一生懸命走ってる女の子たちがいた。<br>ハッカソン？っていうイベントらしい。<br>マイク持ってる子が、慣れてない感じでオロオロしてて可愛かった（笑）<br>それをもう一人の子が「頑張れ！」って励ましてて。<br>なんか青春だな〜✨<br>私も仕事頑張ろっと！",
        image: "",
        tags: ["福井駅", "目撃情報", "青春"],
      },
    ],
  },

  // =====================================================
  // 【30代パパ (dino_king)】: 子供の記憶
  // =====================================================
  dino_king: {
    themeClass: "theme-dino",
    title: "恐竜王国の歩き方 - パパの週末冒険記",
    desc: "福井で子育て中の30代パパ。週末は恐竜か公園。",
    profile: {
      name: "恐竜パパ",
      bio: "2児の父（5歳・3歳）。福井県内の遊び場制覇を目指す。恐竜博物館の年パス持ち。",
      img: "https://placehold.co/100/4CAF50/fff?text=Dino",
    },
    posts: [
      {
        id: 701,
        date: "2025-11-09", // イベント最終日
        title: "映画祭の賑わい",
        content:
          "週末は駅前へ。映画祭10周年ですごい人！<br>上の子が、受付のお姉さんを見て「あれ？もうひとりは？」って言ってた。<br>子供って意外と人のこと見てるんだな。<br>「お勉強しに外国行ったんだって」って適当に言ったら<br>「すごいねー！」って感心してた。<br>（本当かどうかは知らんけど笑）",
        image: "",
        tags: ["子育て", "映画祭", "子供の記憶"],
      },
      {
        id: 704,
        date: "2024-07-20",
        title: "恐竜博物館、夏休み！",
        content:
          "夏休み初日、勝山の恐竜博物館へ。<br>リニューアル後の映像演出、何度見ても迫力あるわー。<br>「小・中生代」エリアのスクリーン、没入感が半端ない。<br>まるでタイムスリップしたみたい。<br>子供たちも大興奮で、帰りの車は爆睡でした💤",
        image: "",
        tags: ["恐竜博物館", "勝山", "夏休み"],
      },
    ],
  },

  // =====================================================
  // 【デザイナー】: 鋭い考察
  // =====================================================
  katsudon_log: {
    themeClass: "theme-design",
    title: "Monologue.",
    desc: "Design / Gadget / Fukui",
    profile: {
      name: "K",
      bio: "Graphic Designer. 27yo.",
      img: "https://placehold.co/100/212121/fff?text=K",
    },
    posts: [
      {
        id: 801,
        date: "2025-11-10",
        title: "ZINEの系譜",
        content:
          "映画祭で今年もZINEを手に入れた。<br>去年までの「二人で作った感」のあるレイアウトから、<br>今年は少し「個」の強さを感じるデザインに変わっていた。<br>離れていても、コンセプトは共有している。<br>そんな気概を感じる。<br>ただ、最後のページのQRコード。<br>読み込むと...なるほど、そういう仕掛けか。<br>「1130」という数字の意味、深読みしたくなる。",
        image: "",
        tags: ["Design", "ZINE", "考察"],
      },
    ],
  },
  
  // その他のモブ（変更なし）
  sake_love: {
    themeClass: "theme-default",
    title: "福井の日本酒を愛でる会",
    desc: "黒龍・凡・梵",
    profile: {
      name: "酒豪",
      bio: "呑兵衛。",
      img: "https://placehold.co/100/1a237e/fff?text=Sake",
    },
    posts: [
      {
        id: 901,
        date: "2025-01-10",
        title: "冬の酒",
        content: "こたつで水羊羹と日本酒。これぞ福井の冬。",
        image: "",
        tags: ["日本酒", "冬", "水羊羹"],
      },
    ],
  },
  snow_driver: {
    themeClass: "theme-default",
    title: "雪国ドライバーの愚痴",
    desc: "雪かきがつらい。",
    profile: {
      name: "ドライバー",
      bio: "運転手。",
      img: "https://placehold.co/100/455a64/fff?text=Car",
    },
    posts: [
      {
        id: 1001,
        date: "2025-01-15",
        title: "また降った...",
        content: "勘弁してくれ。",
        image: "",
        tags: ["雪", "車", "日常"],
      },
    ],
  },
};

// =========================================================
//  2. Initialization & Router
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  // グローバル検索機能の初期化
  setupGlobalSearch();

  // URLパラメータの取得
  const urlParams = new URLSearchParams(window.location.search);
  const userKey = urlParams.get("user") || "aoi"; // デフォルトはaoi
  const postId = urlParams.get("post");
  const tagName = urlParams.get("tag");

  // モード分岐
  if (tagName) {
    // タグ検索モード
    initTagSearchMode(tagName);
  } else if (userKey === "all") {
    // 全記事表示モード
    initAllPostsMode();
  } else {
    // 通常ユーザーブログモード
    const userData = blogData[userKey];
    if (userData) {
      initUserMode(userKey, userData);
    } else {
      document.body.innerHTML = "<h1>User Not Found</h1>";
    }
  }

  // スライダー初期化 (index.html などスライダーがある場合)
  initHeroSlider();
});

// =========================================================
//  3. Global Search Function with ARG Elements
// =========================================================

function setupGlobalSearch() {
  const header = document.querySelector(".site-header");
  const wrapper = document.querySelector(".search-wrapper");
  const input = document.getElementById("arg-search");
  const icon = wrapper ? wrapper.querySelector("i") : null;

  if (!wrapper || !input || !icon) return;

  // 1. アイコンクリック時の開閉（トグル）
  icon.addEventListener("click", (e) => {
    e.stopPropagation();
    const isActive = wrapper.classList.contains("active");

    if (isActive) {
      wrapper.classList.remove("active");
      if (header) header.classList.remove("search-active");
      input.blur();
    } else {
      wrapper.classList.add("active");
      if (header) header.classList.add("search-active");
      input.focus();
    }
  });

  // 2. 検索バー内部クリック時は閉じない
  input.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // 3. 外側クリックで閉じる
  document.addEventListener("click", () => {
    if (wrapper.classList.contains("active")) {
      wrapper.classList.remove("active");
      if (header) header.classList.remove("search-active");
    }
  });

  // ★ ARG演出: ユーザーによってプレースホルダーを変える
  if (document.body.classList.contains("theme-aoi")) {
    input.placeholder = "記事を検索... (ヒント: 数字4桁)";
  } else {
    input.placeholder = "サイト内検索";
  }

  // 4. ARGキーワード判定（Enterキー）
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = input.value.trim();

      // === パターンA：正解（1130） ===
      if (val === "1130") {
        document.body.classList.add("glitching"); // CSSでグリッチ演出を追加
        input.value = "Access Granted. Redirecting...";
        input.style.color = "#00ff00"; // ハッキング成功色
        input.disabled = true;
        setTimeout(() => {
          window.location.href = "login.html";
        }, 1500);
      }
      
      // === パターンB：ヒント単語 ===
      else if (val === "カチンコ" || val === "幻のカット" || val === "SCENE") {
        input.value = "";
        input.placeholder = "ヒント: SCENE + CUT の数字";
        input.classList.add("shake"); // 揺れるアニメーション
        setTimeout(() => input.classList.remove("shake"), 500);
      }

      // === パターンC：再生などのフェイク ===
      else if (val.includes("再生") || val.includes("play")) {
        input.value = "Error: File not found in surface.";
      }

      // === パターンD：隠しキャラ（米五郎左） ===
      else if (val === "米五郎左") {
        alert("【検索結果】米五郎左（こめごろうざ）\n\n丹羽長秀の通称。");
        input.value = "";
      } 
      
      // === 通常検索 ===
      else {
        // 該当記事を探すロジックを入れるか、見つからないとする
        input.value = "";
        input.placeholder = `"${val}" に一致する記事はありません`;
      }
    }
  });
}

// =========================================================
//  4. Blog Display Functions
// =========================================================

function initUserMode(userKey, data) {
  const body = document.body;
  if (data.themeClass) body.classList.add(data.themeClass);

  // プロフィール表示
  const titleEl = document.getElementById("blog-title");
  const descEl = document.getElementById("blog-desc");
  const nameEl = document.getElementById("profile-name");
  const bioEl = document.getElementById("profile-bio");
  const avatar = document.getElementById("profile-img");

  if (titleEl) titleEl.innerText = data.title;
  if (descEl) descEl.innerText = data.desc;
  if (nameEl) nameEl.innerText = data.profile.name;
  if (bioEl) bioEl.innerText = data.profile.bio;

  if (avatar) {
    const imgUrl = resolveImagePath(data.profile.img);
    avatar.style.backgroundImage = `url('${imgUrl}')`;

    // ARG: 葵アイコンクリック時のグリッチ演出
    if (userKey === "aoi") {
      avatar.style.cursor = "pointer";
      avatar.addEventListener("click", () => {
        avatar.classList.add("glitching");
        setTimeout(() => {
          avatar.classList.remove("glitching");
          alert("...System Warning: Author Signature Mismatch...");
        }, 800);
      });
    }
  }

  // ★ 日和（hiyori）のロック機能
  if (userKey === "hiyori") {
    const isUnlocked = sessionStorage.getItem("hiyori_unlocked");

    if (!isUnlocked) {
      const container = document.getElementById("main-content");
      if (container) {
        container.innerHTML = `
          <div style="text-align: center; padding: 60px 20px; background: #fff; border: 1px solid #ddd; border-radius: 8px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
            <i class="fa-solid fa-lock" style="font-size: 3rem; color: #6e2c4d; margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 15px; color: #333;">この記録は保護されています</h3>
            <p style="margin-bottom: 20px; font-size: 0.9rem; color: #666;">
              パスワードを入力して解除してください。<br>
              ヒント: プロフィールにある「異名」の持ち主は？
            </p>
            <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 10px;">
              <input type="text" id="unlock-input" placeholder="パスワード" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; outline: none;">
              <button id="unlock-btn" style="padding: 10px 20px; background: #6e2c4d; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">解除</button>
            </div>
            <p id="unlock-msg" style="color: #d32f2f; font-size: 0.9rem; min-height: 1.5em;"></p>
          </div>
        `;

        const btn = document.getElementById("unlock-btn");
        const input = document.getElementById("unlock-input");
        const msg = document.getElementById("unlock-msg");

        const tryUnlock = () => {
          const val = input.value.trim();
          if (val === "丹羽長秀") {
            sessionStorage.setItem("hiyori_unlocked", "true");
            location.reload();
          } else {
            msg.innerText = "パスワードが違います";
            input.value = "";
            input.classList.add("shake");
            setTimeout(() => input.classList.remove("shake"), 500);
          }
        };

        btn.addEventListener("click", tryUnlock);
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") tryUnlock();
        });
      }

      const sortArea = document.querySelector(".header-sort-controls");
      if (sortArea) sortArea.style.display = "none";
      return;
    }
  }

  // 記事表示
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("post");

  if (postId) {
    renderSinglePost(data.posts, postId, userKey);
    const sortArea = document.querySelector(".header-sort-controls");
    if (sortArea) sortArea.style.display = "none";
  } else {
    renderPosts(data.posts, userKey, "desc");
    initSort();
  }
}

function renderPosts(posts, userKey, sortOrder) {
  const container = document.getElementById("main-content");
  if (!container) return;

  container.innerHTML = "";
  container.classList.add("post-grid");

  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date.replace(/-/g, "/"));
    const dateB = new Date(b.date.replace(/-/g, "/"));
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  sortedPosts.forEach((post) => {
    let dateStr = post.date.replace(/-/g, ".");
    let extraClass = "";

    // 葵ブログ内の日和記事の日付表記変更
    if (userKey === "aoi" && post.writer !== "hiyori") {
      const d = new Date(post.date);
      dateStr = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    }
    if (userKey === "aoi" && post.writer === "hiyori") {
      dateStr = post.date.replace(/-/g, "/");
      extraClass = "glitch-text";
    }

    const article = document.createElement("article");
    article.className = `post-card ${extraClass}`;

    // 画像処理（ヘルパー関数使用）
    const imgPath = resolveImagePath(post.image);
    const imgHtml = post.image
      ? `<div class="card-thumb"><img src="${imgPath}" alt=""></div>`
      : "";

    // リンク先のユーザーID判定
    const linkUser = userKey === "all" && post.authorKey ? post.authorKey : userKey;

    article.innerHTML = `
      <a href="blog.html?user=${linkUser}&post=${post.id}" style="display:block; text-decoration:none; color:inherit;">
        ${imgHtml}
        <div class="card-content">
            <time>${dateStr}</time>
            <h2 class="card-title">${post.title}</h2>
            <p class="card-excerpt">${post.content
              .replace(/<[^>]*>?/gm, "")
              .substring(0, 60)}...</p>
        </div>
      </a>
    `;
    container.appendChild(article);
  });
}

function renderSinglePost(posts, postId, userKey) {
  const container = document.getElementById("main-content");
  if (!container) return;

  const postIndex = posts.findIndex((p) => p.id == postId);
  const post = posts[postIndex];

  if (!post) {
    container.innerHTML = "<p>記事が見つかりません。</p>";
    return;
  }

  let dateStr = post.date.replace(/-/g, ".");
  let extraClass = "";

  if (userKey === "aoi" && post.writer !== "hiyori") {
    const d = new Date(post.date);
    dateStr = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  }
  if (userKey === "aoi" && post.writer === "hiyori") {
    dateStr = post.date.replace(/-/g, "/");
    extraClass = "glitch-text";
  }

  const imgPath = resolveImagePath(post.image);
  const imgHtml = post.image
    ? `<img src="${imgPath}" alt="${post.title}" class="single-post-image">`
    : `<div class="single-post-placeholder">No Image</div>`;

  let tagsHtml = "";
  if (post.tags && post.tags.length > 0) {
    tagsHtml = `<div class="post-tags-container"><span class="tags-label">KEYWORD</span><div class="post-tags-list">
      ${post.tags
        .map(
          (tag) =>
            `<a href="blog.html?tag=${encodeURIComponent(tag)}" class="post-tag-link">${tag}</a>`
        )
        .join("")}
    </div></div>`;
  }

  const prevPost = posts[postIndex + 1];
  const nextPost = posts[postIndex - 1];
  const prevLink = prevPost
    ? `<a href="blog.html?user=${userKey}&post=${prevPost.id}" class="nav-prev">« 前の記事</a>`
    : '<span class="nav-disabled">« 前の記事</span>';
  const nextLink = nextPost
    ? `<a href="blog.html?user=${userKey}&post=${nextPost.id}" class="nav-next">次の記事 »</a>`
    : '<span class="nav-disabled">次の記事 »</span>';

  container.innerHTML = `
    <article class="single-post-container ${extraClass}">
      <div class="single-post-header">
        <div class="single-post-meta"><span class="post-category">ENTRY</span><time>${dateStr}</time></div>
        <h1 class="single-post-title">${post.title}</h1>
      </div>
      <div class="single-post-thumbnail">${imgHtml}</div>
      <div class="single-post-content">${post.content}</div>
      <div class="single-post-footer">
        ${tagsHtml}
        <div class="post-share">
          <span>SHARE</span>
          <button class="share-btn twitter-share"><i class="fa-brands fa-x-twitter"></i></button>
          <button class="share-btn facebook-share"><i class="fa-brands fa-facebook"></i></button>
          <button class="share-btn line-share" data-user="${userKey}"><i class="fa-brands fa-line"></i></button>
        </div>
        <div class="post-pagination">
          ${prevLink}
          <a href="blog.html?user=${userKey}" class="nav-list">一覧へ</a>
          ${nextLink}
        </div>
      </div>
    </article>
  `;

  container.classList.remove("post-grid");
  container.style.display = "block";

  initShareButtons();
}

function initAllPostsMode() {
  document.body.classList.add("theme-default");

  const titleEl = document.getElementById("blog-title");
  const descEl = document.getElementById("blog-desc");
  if (titleEl) titleEl.innerText = "ALL ENTRIES";
  if (descEl) descEl.innerText = "すべての記事一覧";

  const profileImg = document.getElementById("profile-img");
  const pName = document.getElementById("profile-name");
  const pBio = document.getElementById("profile-bio");

  if (pName) pName.style.display = "none";
  if (pBio) pBio.style.display = "none";
  if (profileImg) {
    profileImg.style.backgroundImage = "none";
    profileImg.style.backgroundColor = "#eee";
    profileImg.innerHTML =
      '<i class="fa-solid fa-layer-group" style="font-size: 2rem; color: #555; line-height: 100px;"></i>';
  }

  let allPosts = [];
  Object.keys(blogData).forEach((uKey) => {
    const userData = blogData[uKey];
    if (userData.posts) {
      userData.posts.forEach((post) => {
        allPosts.push({ ...post, authorKey: uKey });
      });
    }
  });

  renderPosts(allPosts, "all", "desc");
  initSort(allPosts, "all");
}

function initTagSearchMode(tagName) {
  document.body.classList.add("theme-default");

  const titleEl = document.getElementById("blog-title");
  const descEl = document.getElementById("blog-desc");
  if (titleEl) titleEl.innerText = `#${tagName}`;
  if (descEl) descEl.innerText = "TAG ARCHIVE";

  const pName = document.getElementById("profile-name");
  const pBio = document.getElementById("profile-bio");
  const profileImg = document.getElementById("profile-img");
  if (pName) pName.style.display = "none";
  if (pBio) pBio.style.display = "none";
  if (profileImg) {
    profileImg.style.backgroundImage = "none";
    profileImg.innerHTML =
      '<i class="fa-solid fa-tags" style="font-size: 2rem; color: #555; line-height: 100px;"></i>';
  }

  let results = [];
  Object.keys(blogData).forEach((uKey) => {
    const userData = blogData[uKey];
    if (userData.posts) {
      userData.posts.forEach((post) => {
        if (post.tags && post.tags.includes(tagName)) {
          results.push({ ...post, authorKey: uKey });
        }
      });
    }
  });

  if (results.length === 0) {
    const container = document.getElementById("main-content");
    if (container)
      container.innerHTML =
        "<p style='text-align:center; padding:50px;'>該当する記事はありません。</p>";
    return;
  }

  renderPosts(results, "all", "desc");
}

function initSort(customPosts = null, customUserKey = null) {
  const btnNew = document.getElementById("sort-new");
  const btnOld = document.getElementById("sort-old");
  if (!btnNew || !btnOld) return;

  const newBtnNew = btnNew.cloneNode(true);
  const newBtnOld = btnOld.cloneNode(true);
  btnNew.parentNode.replaceChild(newBtnNew, btnNew);
  btnOld.parentNode.replaceChild(newBtnOld, btnOld);

  newBtnNew.addEventListener("click", () => {
    newBtnNew.classList.add("active");
    newBtnOld.classList.remove("active");
    handleSort("desc", customPosts, customUserKey);
  });

  newBtnOld.addEventListener("click", () => {
    newBtnOld.classList.add("active");
    newBtnNew.classList.remove("active");
    handleSort("asc", customPosts, customUserKey);
  });
}

function handleSort(order, customPosts, customUserKey) {
  let posts, uKey;
  if (customPosts) {
    posts = customPosts;
    uKey = customUserKey;
  } else {
    const urlParams = new URLSearchParams(window.location.search);
    uKey = urlParams.get("user") || "aoi";
    posts = blogData[uKey].posts;
  }
  renderPosts(posts, uKey, order);
}

function initShareButtons() {
  const shareBtns = document.querySelectorAll(".share-btn");
  shareBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (btn.classList.contains("line-share") && btn.dataset.user === "aoi") {
        document.body.classList.add("glitching");
        setTimeout(() => {
          document.body.classList.remove("glitching");
          alert(
            "システムエラー：接続先が不明です。\nヒント：ZINEの裏表紙にあるQRコードを確認してください。"
          );
        }, 500);
      } else {
        alert("現在シェアはできません。");
      }
    });
  });
}

// 便利な画像パス解決関数（http始まりはそのまま、それ以外はimg/aoi/をつけるなど）
function resolveImagePath(src) {
  if (!src) return "";
  if (src.startsWith("http") || src.includes("/")) {
    return src;
  }
  // デフォルトで img/aoi/ に画像がある前提とする
  return `img/aoi/${src}`;
}

const heroImages = [
  "img/aoi/ssdn_1920_1080_241117.jpg",
  "img/aoi/SweetSillyDanceNight_001.jpg",
  "img/aoi/SweetSillyDanceNight_004.jpg",
  "img/aoi/SweetSillyDanceNight_003.jpg",
  "img/aoi/ssdn_rgbv_241113_ol.jpg",
];

let currentSlide = 0;
let slideInterval;

function initHeroSlider() {
  const sliderContainer = document.getElementById("hero-slider");
  const indicatorsContainer = document.getElementById("hero-indicators");
  if (!sliderContainer || !indicatorsContainer) return;

  sliderContainer.innerHTML = "";
  indicatorsContainer.innerHTML = "";

  heroImages.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.className = `hero-slide ${index === 0 ? "active" : ""}`;
    slide.style.backgroundImage = `url('${src}')`;

    const img = new Image();
    img.src = src;
    img.onerror = () => {
      slide.style.backgroundImage = "none";
      slide.style.backgroundColor = "#333";
    };

    sliderContainer.appendChild(slide);

    const dot = document.createElement("div");
    dot.className = `hero-dot ${index === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetAutoSlide();
    });
    indicatorsContainer.appendChild(dot);
  });

  startAutoSlide();
}

function goToSlide(index) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  if (slides.length === 0) return;

  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;

  slides.forEach((s) => s.classList.remove("active"));
  dots.forEach((d) => d.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}
