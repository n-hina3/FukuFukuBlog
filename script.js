// =========================================================
//  1. Data Definition (ARG Scenarios & Hints Included)
// =========================================================
const blogData = {
  // -----------------------------------------------------
  // 【葵 (Aoi)】: 主人公・表のブログ（2022-2024）
  // -----------------------------------------------------
  aoi: {
    themeClass: "theme-aoi",
    title: "フレームの向こう側",
    desc: "△○□の体験記",
    profile: {
      name: "△○□",
      bio: "福井在住。音楽と映画が好き。夢は映画監督。",
      img: "img/aoi/profile.jpg",
    },
    posts: [
      {
        id: 1,
        date: "2024-11-30",
        writer: "aoi",
        title: "3回目の映画祭と、これからのこと",
        content:
          "今年も映画祭が終わりました。<br>3年間、スタッフとして、制作者として関わってきて、やっとわかったことがあります。<br>「福井には何もない」んじゃなくて、私たちが「何も見ていなかった」だけなんだって。<br><br>ZINEを受け取ってくれた皆さん、ありがとうございました。<br>私の記録は、一旦ここで区切りをつけます。<br>でも、△○□（心の形）は、これからも変わりません。<br>（...この記事の続きは、裏チャットログにあります）",
        image: "img/aoi/post_last.jpg",
        tags: ["映画祭", "ZINE", "決意"],
      },
      {
        id: 2,
        date: "2024-09-14",
        writer: "aoi",
        title: "ハッカソン3回目",
        content:
          "ハッカソン3回目。今年は体調の関係で今日だけの参加。<br>今回は音声とエキストラ、両方やった。<br>監督が「前にもやってたよね?」って覚えててくれた。嬉しかった。<br>3年目だから、動き方もわかってきた。初めて参加する人に「こうやるといいよ」って教えたりした。<br>私、先輩になってる。不思議。<br>友達と「私たち、ベテランだね」って笑った。本当に。<br>1日だけだったけど、全力で楽しんだ。",
        image: "img/aoi/post_hack3.jpg",
        tags: ["ハッカソン", "成長", "仲間"],
      },
      {
        id: 3,
        date: "2023-11-12",
        writer: "aoi",
        title: "映画祭2回目",
        content:
          "映画祭2回目。今年も学生スタッフをした。<br>去年より、来場者が増えた気がする。<br>受付で「去年も来ました!」って言ってくれる人がいた。嬉しい。<br>上映作品も、今年は去年よりレベル高い気がした。<br>ハッカソンで撮った作品も上映。私が出演してるシーン、スクリーンで見るの、なんか恥ずかしい。<br>でも、楽しかった。<br>終わった後、友達と「来年も絶対やろうね」って約束した。<br>「うん!」",
        image: "img/aoi/post_fest2.jpg",
        tags: ["映画祭", "スタッフ", "約束"],
      },
      {
        id: 4,
        date: "2023-09-18",
        writer: "aoi",
        title: "ハッカソン2回目",
        content:
          "ハッカソン2回目。今年はエキストラで出演した。<br>カメラが回ってる中、福井駅前を普通に歩く。<br>演技とかじゃなくて、普通に歩くだけ。でも、それが映画になる。<br>不思議な感じ。<br>監督に「自然でいいよ」って言われた。<br>友達も一緒に出演してた。撮影の合間、「楽しそうだね」って笑われた。<br>...そうかもしれない。<br>去年より、もっと楽しい。<br>映画を作るって、こういうことなんだって実感してる。",
        image: "img/aoi/post_hack2.jpg",
        tags: ["ハッカソン", "エキストラ", "体験"],
      },
      {
        id: 5,
        date: "2022-11-13",
        writer: "aoi",
        title: "映画祭、終わった",
        content:
          "映画祭、終わった。すごかった。<br>受付を担当した。来場者と話した。<br>「福井でこんなイベントがあるんだけど、学生スタッフやらない?」<br>友達に誘われてよかった。<br>あの3日間が、映画になってた。私が録った音が、映画の中で鳴ってた。<br>...私も、作りたい。<br>そう思った。",
        image: "img/aoi/post_fest1.jpg",
        tags: ["映画祭", "感動", "夢"],
      },
      {
        id: 6,
        date: "2022-09-25",
        writer: "aoi",
        title: "終わった",
        content:
          "終わった。3日間が、終わった。<br>...何これ。<br>最終日、福井駅前で撮影した。<br>いつも通る場所なのに、カメラ越しだと全然違って見えた。<br>監督に「いい音だったよ」って言われた。出演者の人に「ありがとう」って言われた。<br>最後、みんなで拍手した。<br>友達は嬉しそうに笑ってた。「どうだった?」って。<br>...面白かった。本当に。<br>こんな経験、初めて。普段の大学生活じゃ、絶対にできないこと。",
        image: "img/aoi/post_hack1.jpg",
        tags: ["ハッカソン", "初体験", "感動"],
      },
      {
        id: 7,
        date: "2022-04-15",
        writer: "aoi",
        title: "ブログ始めました",
        content:
          "ブログを始めた。タイトルは「△○□」。意味は特にない。<br>福井には何もない。いつもそう思ってきた。<br>大学に入って2週間。やっぱり福井には何もない。<br>早く卒業して、県外に出たい。<br>友達は「福井好きだよ」って言う。私にはわからない。<br>これから4年間、この街で過ごすことになる。<br>何か変わるのかな。",
        image: "",
        tags: ["ブログ開設", "福井", "大学"],
      },
    ],
  },

  // -----------------------------------------------------
  // 【日和 (Hiyori)】: 継承者・未来の記録（2025〜）
  // -----------------------------------------------------
  hiyori: {
    themeClass: "theme-hiyori",
    title: "陽だまりの記録",
    desc: "日々のこと、歴史のこと。",
    profile: {
      name: "ひより",
      bio: "歴史オタク。丹羽長秀（米五郎左）が好き。",
      img: "img/hiyori/profile.jpg",
    },
    posts: [
      {
        id: 201,
        date: "2025-04-10",
        title: "桜と、いない友人",
        content:
          "足羽川の桜が満開です。<br>去年はここで、あの子と一緒にZINEの構想を練っていたっけ。<br>隣にいないのは寂しいけれど、彼女が残したこのブログの管理画面を見ると、なんだか繋がっている気がします。<br>葵、そっちの生活はどう？<br>私はまだ、ここで記録を続けているよ。",
        image: "img/hiyori/sakura.jpg",
        tags: ["桜", "日常", "独り言"],
      },
      {
        id: 202,
        date: "2025-01-01",
        title: "新しい年",
        content:
          "新年、明けましておめでとうございます。<br>新しい年が始まりました。<br>このブログを、初めて読む方もいるかもしれません。<br>2022年4月から、ある人の記録がここにあります。<br>時間があれば、読んでみてください。<br>私は、このブログを続けていきます。<br>理由は...読めばわかるかもしれません。",
        image: "img/hiyori/newyear.jpg",
        tags: ["新年", "挨拶"],
      },
      {
        id: 203,
        date: "2024-12-25",
        title: "友達のこと",
        content:
          "友達が福井を離れた。<br>寂しいけれど、応援してる。彼女の夢を、ずっと見てきたから。<br>最初は自分で気づいてなかった。「映画を作りたい」って。<br>でも、ハッカソンに誘ったら、目がキラキラしてた。<br>映画祭で、「私も作りたい」って言ってた。<br>彼女は気づいた。福井の可能性に。自分の可能性に。<br>そして、出発した。<br>彼女がずっと書いてたブログ「△○□」。パスワードを教えてもらった。<br>「もし良かったら、続けてほしい」って。<br>私は続ける。彼女の想いを、バトンとして。",
        image: "img/hiyori/cafe.jpg",
        tags: ["継承", "夢", "秘密"],
      },
    ],
  },

  // -----------------------------------------------------
  // 【みやぴー (Miyapy)】: ★重要ヒント提供者★
  // -----------------------------------------------------
  miyapy: {
    themeClass: "theme-miyapy",
    title: "みやぴーの福井シネマ散歩",
    desc: "路地裏とスクリーンと、時々カニ。",
    profile: {
      name: "みやぴー",
      bio: "元タウン誌編集長 / 映画祭実行委員。<br>若者たちの熱気を記録するのが趣味。",
      img: "img/miyapy/profile.jpg",
    },
    posts: [
      {
        id: 101,
        date: "2023-11-15", // ★重要：2023年の記事
        title: "【保存版】第X回ムービーハッカソン 参加チーム・スタッフ一覧",
        content:
          "今年も熱い3日間が終わった。<br>プロの監督と学生が混ざり合う、奇跡のような現場。<br>特に印象に残ったチームのクレジットを、自戒も込めてここにアーカイブしておく。<br><br>" +
          "<div style='background:#fff; padding:15px; border:1px solid #ccc; font-family:monospace; color:#333;'>" +
          "<strong>■作品名：『Super Sunset』</strong><br>" +
          "監督：沖田かおり<br>" +
          "撮影：吉田菜子<br>" +
          "---------------<br>" +
          "制作進行：<span style='background:#ffff00;'>丹羽 日和</span><br>" + // 名前ヒント
          "録音助手：<span style='background:#ffff00;'>柴田 葵</span><br>" + // 名前ヒント
          "---------------<br>" +
          "</div><br>" +
          "特に録音助手の柴田さん、重いブームポールを必死に支える姿に、かつての自分を見た気がした。<br>彼らの未来に幸あれ。",
        image: "img/miyapy/staff_list.jpg",
        tags: ["映画祭", "ハッカソン", "資料"],
      },
      {
        id: 102,
        date: "2025-11-25",
        title: "【編集長コラム】熱狂の3日間を終えて。",
        content:
          "今年の「福井駅前短編映画祭」が閉幕しました。<br>10周年という記念すべき節目。実行委員長として、まずは全ての参加者、スタッフ、そして来場者の皆様に感謝を申し上げます。<br><br>今年は特に、学生スタッフたちの熱量が凄まじかった。<br>ふと、2022年のことを思い出す。<br>あの時も、才能ある若者たちがいた。<br>映画は終わっても、物語は続く。<br>そんなことを考えながら、片付けを終えたテアトルサンクを後にした。",
        image: "img/miyapy/colum.jpg",
        tags: ["コラム", "映画祭", "総括"],
      },
    ],
  },

  // -----------------------------------------------------
  // 【福井OL (OL_Lunch)】: 目撃者・キラキラ枠
  // -----------------------------------------------------
  ol_lunch: {
    themeClass: "theme-ol",
    title: "福井OLのランチ日記♡",
    desc: "美味しいご飯とコスメと、ときどき映画✨",
    profile: {
      name: "Saki (福井OL)",
      bio: "福井駅周辺で働くOL。カフェ巡りが趣味☕️<br>美味しいもの大好き🍴💕",
      img: "img/ol/profile.jpg",
    },
    posts: [
      {
        id: 401,
        date: "2025-11-15",
        title: "北陸新幹線開業後の福井駅、人多すぎない？🥺ハピリンでランチ✨",
        content:
          "新しくできたMINIE（ミニ）へ行ってきました！<br>あそこのフードホール、いろんなお店が入ってて最高なんだよね〜✨<br>カニの時期だから観光客の人もいっぱいで賑わってた！<br>でも、人が多すぎてちょっと疲れちゃったかも💦<br>帰りにスタバで新作飲んで回復！甘いものは正義🍰",
        image: "img/ol/minie.jpg",
        tags: ["ランチ", "福井駅", "ハピリン"],
      },
      {
        id: 402,
        date: "2023-09-14",
        title: "駅前でなんか撮影してた！🎥",
        content:
          "今日、ランチの帰りに駅前広場を通ったら、なんか撮影隊？みたいな人たちがいた！😳<br>" +
          "「ふくいムービーハッカソン」ってTシャツ着てたから、映画のイベントかな？<br>" +
          "なんか、ちっちゃい女の子が自分の身長くらいある長いマイク（！）を持って、必死に走ってて凄かった✨<br>" +
          "青春って感じでいいな〜。私も仕事頑張ろっと！💪",
        image: "img/ol/lunch.jpg",
        tags: ["福井駅", "目撃情報", "ランチ"],
      },
    ],
  },

  // -----------------------------------------------------
  // 【デザイナー (Katsudon)】: ★重要ヒント提供者★
  // -----------------------------------------------------
  katsudon_log: {
    themeClass: "theme-design",
    title: "FUKUI CREATIVE & EATS",
    desc: "Design, Gadget, and Sauce-Katsudon.",
    profile: {
      name: "K (Designer)",
      bio: "福井在住のグラフィックデザイナー。<br>大学の後輩たちが最近面白いことを企んでいるらしい。",
      img: "img/katsudon/profile.jpg",
    },
    posts: [
      {
        id: 801,
        date: "2024-11-30", // ZINE発行日
        title: "後輩が作ったZINEのデザインが良い。",
        content:
          "映画祭の会場で配られていたZINE『撮影体験記』を入手した。<br>" +
          "クラフト紙に手書き文字。あえてアナログな質感にこだわった装丁が良い。<br>" +
          "ただ、職業柄気になったのは、<strong>最後のページのQRコード</strong>だ。<br>" +
          "あれだけ、デザインから浮いている。<br>" +
          "まるで「ここから先は別世界だ」と言わんばかりに。<br>" +
          "意図的な『バグ』なのか？ 確かめてみる必要がありそうだ。",
        image: "img/katsudon/zine_photo.jpg",
        tags: ["デザイン", "ZINE", "考察"],
      },
      {
        id: 802,
        date: "2025-10-15",
        title: "【福井グルメ】ヨーロッパ軒総本店はやはり原点",
        content:
          "クライアントワークが炎上して徹夜明け。<br>疲れた脳と体にガツンとくるものを求めて、パ軒へ。<br>薄めのカツ、細かいパン粉、甘辛いソース。<br>デザインもそうだが、長く愛されるものには「変わらない強度」がある。<br>福井のソウルフードであり、クリエイターのガソリンだ。<br>ごちそうさまでした。",
        image: "img/katsudon/paken.jpg",
        tags: ["グルメ", "ソースカツ丼", "ランチ"],
      },
    ],
  },

  // -----------------------------------------------------
  // 【恐竜パパ (Dino_King)】: 目撃者・ファミリー枠
  // -----------------------------------------------------
  dino_king: {
    themeClass: "theme-dino",
    title: "恐竜王国の歩き方 - パパの週末冒険記",
    desc: "福井で子育て中の30代パパ。週末は恐竜か公園。",
    profile: {
      name: "恐竜パパ",
      bio: "2児の父（5歳・3歳）。<br>福井県内の遊び場制覇を目指す。",
      img: "img/dino/profile.jpg",
    },
    posts: [
      {
        id: 701,
        date: "2025-10-12",
        title: "リニューアル後の恐竜博物館、やっぱり最高！",
        content:
          "週末は家族で勝山の恐竜博物館へ。<br>リニューアルしてから何度目かわからないけど、子供たちのテンションは毎回MAX🦖<br>新館の「小・中生代」エリア、映像の迫力がすごい。下の子はちょっと泣いちゃったけど（笑）。<br>帰りはもちろん、公園で化石発掘体験。パパの腰が限界です...",
        image: "img/dino/museum.jpg",
        tags: ["恐竜博物館", "子育て", "勝山"],
      },
      {
        id: 702,
        date: "2024-09-15",
        title: "駅前で撮影隊に遭遇？",
        content:
          "連休中、子供たちとハピリンに行ったら、駅前広場がすごい人だかり。<br>" +
          "映画の撮影？みたいなのをやってた。<br>" +
          "うちの子も「えいが！えいが！」って興奮して、マイク持ってるお姉さんの邪魔しそうになったので慌てて撤収💦<br>" +
          "スタッフのお姉さん、優しく手を振ってくれてありがとう。<br>" +
          "福井も賑やかになってきたな〜。",
        image: "img/dino/kids.jpg",
        tags: ["福井駅", "ハピリン", "子育て"],
      },
    ],
  },

  // -----------------------------------------------------
  // 【雪国ドライバー (Snow_Driver)】: 追加・リアリティ枠
  // -----------------------------------------------------
  snow_driver: {
    themeClass: "theme-default",
    title: "雪国ドライバーの愚痴",
    desc: "雪かきがつらい。8号線が止まると死ぬ。",
    profile: {
      name: "8号線の民",
      bio: "福井市在住。冬が嫌い。<br>除雪車の音で目覚める日々。",
      img: "img/snow/profile.jpg",
    },
    posts: [
      {
        id: 1001,
        date: "2025-01-25",
        title: "また降った...",
        content:
          "勘弁してくれ。<br>朝5時に起きて雪かき。<br>会社行くだけで体力ゼロ。<br>福井の冬、厳しすぎん？<br>映画とか撮ってる場合じゃないよ、雪撮れよ雪を。",
        image: "img/snow/snow_road.jpg",
        tags: ["雪", "愚痴", "日常"],
      },
    ],
  },
};

// =========================================================
//  2. Main Logic
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. 機能の初期化（全ページ共通）
  initHamburgerMenu();
  setupGlobalSearch();

  // 2. ページ判定
  const body = document.getElementById("blog-body");
  const endingBody = document.getElementById("ending-body");

  // エンディングページ
  if (endingBody) {
    return;
  }

  // ポータル（トップ）ページの場合
  if (!body) {
    initHeroSlider();
    return;
  }

  // 3. ブログ詳細ページの処理
  const urlParams = new URLSearchParams(window.location.search);
  const userKey = urlParams.get("user");
  const postId = urlParams.get("post");
  const tagKey = urlParams.get("tag");

  // タグ検索モード
  if (tagKey) {
    initTagSearchMode(tagKey);
    return;
  }

  // 全記事表示モード
  if (userKey === "all") {
    initAllPostsMode();
    return;
  }

  // 通常ユーザーモード
  // userKeyがなければデフォルトで 'aoi' を使用
  const currentKey = userKey || "aoi";
  const data = blogData[currentKey];

  if (!data) return;

  // ユーザーブログ画面の構築
  initUserMode(currentKey, data);
});

// =========================================================
//  3. Functions (UI & Logic)
// =========================================================

/**
 * 全ページ共通：検索バー制御 & ARG入り口
 */
function setupGlobalSearch() {
  const header = document.querySelector(".site-header");
  const wrapper = document.querySelector(".search-wrapper");
  const input = document.getElementById("arg-search");
  const icon = wrapper ? wrapper.querySelector("i") : null;

  if (!wrapper || !input || !icon) return;

  // 1. アイコンクリック時の開閉
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

  // 4. キーワード検索（簡易実装：該当タグページへ遷移）
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = input.value.trim();
      if (!val) return;
      
      // ARGヒント機能などはここで拡張可能
      window.location.href = `blog.html?tag=${encodeURIComponent(val)}`;
    }
  });
}

// ハンバーガーメニュー
function initHamburgerMenu() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const siteNav = document.getElementById("site-nav");
  const searchWrapper = document.querySelector(".search-wrapper");
  const headerActions = document.querySelector(".header-actions");

  if (!hamburgerBtn || !siteNav) return;

  hamburgerBtn.addEventListener("click", () => {
    const isActive = hamburgerBtn.classList.toggle("active");
    siteNav.classList.toggle("active");

    if (isActive && searchWrapper && siteNav) {
      siteNav.prepend(searchWrapper);
    } else if (!isActive && searchWrapper && headerActions) {
      headerActions.prepend(searchWrapper);
      searchWrapper.classList.remove("active");
    }
    document.body.style.overflow = isActive ? "hidden" : "";
  });

  const navLinks = siteNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      siteNav.classList.remove("active");
      document.body.style.overflow = "";
      if (searchWrapper && headerActions) {
        headerActions.prepend(searchWrapper);
        searchWrapper.classList.remove("active");
      }
    });
  });
}

// =========================================================
//  4. Blog Rendering Functions
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
  if (bioEl) bioEl.innerHTML = data.profile.bio;

  if (avatar) {
    const imgUrl = data.profile.img;
    avatar.style.backgroundImage = `url('${imgUrl}')`;
    
    // 画像ロードエラー対策
    const imgObj = new Image();
    imgObj.src = imgUrl;
    imgObj.onerror = () => {
        avatar.style.backgroundColor = "#ccc";
        avatar.style.backgroundImage = "none";
        avatar.innerText = data.profile.name.charAt(0);
        avatar.style.display = "flex";
        avatar.style.alignItems = "center";
        avatar.style.justifyContent = "center";
        avatar.style.fontSize = "2rem";
        avatar.style.color = "#fff";
    };
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

    const article = document.createElement("article");
    article.className = `post-card ${extraClass}`;

    const imgHtml = post.image
      ? `<div class="card-thumb"><img src="${post.image}" alt="" onerror="this.parentNode.style.display='none'"></div>`
      : "";

    // リンク先のユーザーID判定
    const linkUser = userKey === "all" && post.authorKey ? post.authorKey : userKey;

    article.innerHTML = `
      <a href="blog.html?user=${linkUser}&post=${post.id}">
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

  const imgHtml = post.image
    ? `<img src="${post.image}" alt="${post.title}" class="single-post-image" onerror="this.style.display='none'">`
    : ``;

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
      '<i class="fa-solid fa-layer-group" style="font-size: 2rem; color: #555; line-height: 140px;"></i>';
    profileImg.style.display = "flex";
    profileImg.style.alignItems = "center";
    profileImg.style.justifyContent = "center";
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
    profileImg.style.backgroundColor = "#eee";
    profileImg.innerHTML =
      '<i class="fa-solid fa-tags" style="font-size: 2rem; color: #555; line-height: 140px;"></i>';
    profileImg.style.display = "flex";
    profileImg.style.alignItems = "center";
    profileImg.style.justifyContent = "center";
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
      alert("シェア機能は現在利用できません。");
    });
  });
}

const heroImages = [
  "img/aoi/post_last.jpg",
  "img/aoi/post_fest2.jpg",
  "img/aoi/post_hack2.jpg",
  "img/aoi/post_hack1.jpg"
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

    // 画像ロードエラー時はグレー背景
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
