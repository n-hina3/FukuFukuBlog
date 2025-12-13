// =========================================================
//  Global Functionality
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  initSearchToggle();
  initHamburger();

  // Page-specific initializations
  if (document.body.classList.contains("home-body")) {
    initHomeARG();
    initRandomGlitch(); // Random glitch for homepage
  }
  if (document.body.classList.contains("static-body")) {
    initAboutARG();
  }
  if (document.getElementById("blog-body")) {
    initBlogLogic();
  }
});

// --- Hint System (Search Bar) ---
function initSearchToggle() {
  const icon = document.querySelector(".search-wrapper i");
  const wrapper = document.querySelector(".search-wrapper");
  const input = document.getElementById("arg-search");

  if (!icon || !wrapper) return;

  icon.addEventListener("click", () => {
    wrapper.classList.toggle("active");
    if (wrapper.classList.contains("active")) {
      input.focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = input.value.trim();

      // === ヒント機能 ===
      if (val === "ヒント" || val === "hint" || val === "help") {
        const progress = localStorage.getItem("fuku_arg_progress") || 0;
        let hintMsg = "";

        if (progress == 0) {
          hintMsg =
            "【ヒント】\nサイト内には「日常の違和感」が隠されています。\n例えば、「About」ページのライター一覧や、\nブログ記事の「おかしな文字」を探してみてください。";
        } else if (progress == 1) {
          hintMsg =
            "【ヒント】\nパスワード『309』を手に入れましたね。\nフッターの近くに、関係者用の入り口があるようです。";
        } else if (progress >= 2) {
          hintMsg =
            "【ヒント】\nアーカイブの解析を進めてください。\n各フォルダのロックを解除し、最後にゴミ箱を確認しましょう。";
        }

        alert(hintMsg);
        input.value = "";
      }
      // === ショートカット ===
      else if (val === "309") {
        window.location.href = "login.html";
      } else {
        alert(`「${val}」の検索結果はありません。`);
        input.value = "";
      }
    }
  });
}

// --- Hamburger Menu ---
function initHamburger() {
  const btn = document.getElementById("hamburger-btn");
  const nav = document.getElementById("site-nav");

  if (!btn) return;

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.top = "70px";
      nav.style.left = "0";
      nav.style.width = "100%";
      nav.style.background = "#fff";
      nav.style.padding = "20px";
      nav.style.boxShadow = "0 5px 10px rgba(0,0,0,0.1)";
    } else {
      nav.style.display = "";
    }
  });
}

// =========================================================
//  Top Page ARG (Glitch & Fake 404)
// =========================================================
function initHomeARG() {
  const brokenBanner = document.getElementById("broken-link-trigger");
  const overlay = document.getElementById("fake-404-overlay");
  const closeBtn = document.getElementById("close-404-btn");
  const hiddenInput = document.getElementById("hidden-key-input");

  if (brokenBanner && overlay) {
    brokenBanner.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.classList.remove("hidden");
      hiddenInput.focus();
    });

    closeBtn.addEventListener("click", () => {
      overlay.classList.add("hidden");
      hiddenInput.value = "";
      hiddenInput.classList.remove("revealed");
    });

    hiddenInput.addEventListener("input", (e) => {
      if (hiddenInput.value.length > 0) {
        hiddenInput.classList.add("revealed");
      } else {
        hiddenInput.classList.remove("revealed");
      }
    });

    hiddenInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const val = hiddenInput.value.trim();
        if (val.toLowerCase() === "enter key") {
          alert("Backdoor Access Granted.\nInitiating Sequence...");
          window.location.href = "login.html";
        } else {
          hiddenInput.style.color = "red";
          setTimeout(() => {
            hiddenInput.style.color = "#00ff41";
          }, 500);
        }
      }
    });
  }

  const unknownWriter = document.querySelector(".hidden-writer");
  if (unknownWriter) {
    unknownWriter.addEventListener("click", () => {
      alert("Error: User Profile Corrupted.\nデータが破損しています。");
    });
  }
}

// ランダムグリッチ演出 (Top Page)
function initRandomGlitch() {
  const glitchNoise = document.createElement("div");
  glitchNoise.className = "glitch-noise";
  document.body.appendChild(glitchNoise);

  setInterval(() => {
    // 5%の確率でグリッチ発生
    if (Math.random() < 0.05) {
      document.body.classList.add("glitch-effect");
      setTimeout(() => {
        document.body.classList.remove("glitch-effect");
      }, 200 + Math.random() * 300); // 0.2~0.5秒間
    }
  }, 3000); // 3秒ごとに判定
}

// =========================================================
//  About Page ARG (Password Location)
// =========================================================
function initAboutARG() {
  const hiddenWriter = document.getElementById("about-hidden-writer");
  if (!hiddenWriter) return;

  hiddenWriter.addEventListener("click", () => {
    localStorage.setItem(
      "fuku_arg_progress",
      Math.max(localStorage.getItem("fuku_arg_progress") || 0, 1)
    );

    hiddenWriter.classList.add("glitch-active");

    const h4 = hiddenWriter.querySelector("h4");
    const p1 = hiddenWriter.querySelector("p:nth-of-type(1)");
    const p2 = hiddenWriter.querySelector("p:nth-of-type(2)");

    const originalH4 = h4.innerText;

    h4.innerText = "ACCESS CODE";
    p1.innerText = "FOUND";
    p2.innerHTML =
      "KEY: <span style='font-size:1.5rem; font-weight:bold; color:#fff; background:#000; padding:2px;'>309</span>";

    setTimeout(() => {
      hiddenWriter.classList.remove("glitch-active");
      h4.innerText = originalH4;
      p1.innerText = "Unknown";
      p2.innerHTML = "No Profile Data.<br>Corruption detected.";
    }, 5000);
  });
}

// =========================================================
//  Blog Page Data & Logic (Route B Implementation)
// =========================================================
// ここでブログ記事の内容にヒント（文字化け、空白）を仕込みます。
const blogData = {
  // --- AOI: 映画制作・日記 ---
  aoi: {
    title: "フレームの向こう側",
    desc: "福井の片隅で、夢を探す日々の記録。",
    posts: [
      {
        id: 1,
        title: "10周年の報告",
        date: "2025-11-09",
        image: "img/aoi/SweetSillyDanceNight_003.jpg",
        content: `映画祭10周年、無事に終わりました。<br>
                  今年の映画祭は、いつもより少しだけ寂しかったよ。<br>
                  あなたがいない受付は、なんだか広すぎて。<br>
                  でも、私たちが作ったZINEは今年も配りきりました。<br>
                  「記録係」としての私の役目は、これで一区切りかな。<br>
                  あなたが世界で戦っている間、私はここで、<br>
                  私たちの<span class="hidden-blank" title="Hint: 3">3</span>年間の足跡を守っています。`,
      },
      {
        id: 3,
        title: "決断の時",
        date: "2025-02-14",
        image: "img/aoi/okita2.png",
        content: `春から、日本を離れることにしました。<br>
                  行き先は海外。映像の勉強をするために。<br>
                  ずっと「どうせ私なんて」って蓋をしてた夢。<br>
                  受験に失敗して、福井に来て、なんとなく過ごしてた日々。<br>
                  それを変えてくれたのは、あの日、日和がハッカソンに誘ってくれたから。<br>
                  「世界で活躍したい」なんて、笑われるかもしれない。<br>
                  でも、もう自分の気持ちに嘘はつきたくない。<br>
                  行ってきます。`,
      },
    ],
  },

  // --- OL_LUNCH: グルメ・日常 ---
  ol_lunch: {
    title: "Fukui OL Life♡",
    desc: "福井ランチ / カフェ / コスメ 💄",
    posts: [
      {
        id: 401,
        title: "駅裏の隠れ家カフェ☕️",
        date: "2025-10-15",
        image: "",
        content: `仕事帰りに、駅裏で見つけたカフェに入ってみたよ✨<br>
                  落ち着いた雰囲気で、コーヒーも美味しい！<br>
                  マスターが優しくて、「また来てね」って。<br>
                  最近忙しくて疲れ気味だったけど、癒された〜。<br>
                  明日からも<span class="mojibake" data-decode="0">#@!</span>から頑張ろうっと！`,
        // ヒント: 0
      },
    ],
  },

  // --- MIYAPY: イベント・編集 ---
  miyapy: {
    title: "みやぴーの福井シネマ散歩",
    desc: "路地裏とスクリーンと、時々カニ。",
    posts: [
      {
        id: 101,
        title: "今年も映画祭の季節",
        date: "2025-09-20",
        image: "",
        content: `秋の気配が近づいてきた。<br>
                  映画祭の準備も大詰めだ。<br>
                  今年はどんな作品に出会えるだろうか。<br>
                  毎年この時期になると、学生スタッフたちの熱量に圧倒される。<br>
                  彼らの<span class="mojibake" data-decode="9">ERROR</span>割は未経験者だが、<br>
                  終わる頃には一人前の顔つきになっているのが面白い。`,
        // ヒント: 9
      },
    ],
  },
};

function initBlogLogic() {
  const urlParams = new URLSearchParams(window.location.search);
  const userKey = urlParams.get("user") || "aoi"; // デフォルトAOI
  const postId = urlParams.get("post");

  // プロフィール表示
  const userData = blogData[userKey];
  if (userData) {
    document.getElementById("blog-title").innerText = userData.title;
    document.getElementById("blog-desc").innerText = userData.desc;
    document.getElementById("profile-name").innerText = userKey.toUpperCase();
    document.getElementById("profile-bio").innerText = "Writer"; // 簡易化

    // 記事一覧 or 詳細
    if (postId) {
      const post = userData.posts.find((p) => p.id == postId);
      if (post) renderSinglePost(post);
    } else {
      renderPostList(userData.posts, userKey);
    }
  } else if (userKey === "all") {
    // 全記事表示（簡易実装）
    document.getElementById("blog-title").innerText = "ALL ENTRIES";
    document.getElementById("blog-desc").innerText = "すべての記事";
    let allPosts = [];
    Object.keys(blogData).forEach((key) => {
      const posts = blogData[key].posts.map((p) => ({ ...p, user: key }));
      allPosts = allPosts.concat(posts);
    });
    renderPostList(allPosts, "all");
  }
}

function renderPostList(posts, userKey) {
  const container = document.getElementById("main-content");
  container.innerHTML = "";

  posts.forEach((post) => {
    const linkUser = post.user || userKey;
    const html = `
      <article class="post-card">
        <a href="blog.html?user=${linkUser}&post=${post.id}" class="card-link">
          <div class="card-thumb">
            ${
              post.image
                ? `<img src="${post.image}" onerror="this.style.display='none'">`
                : '<div class="thumb-placeholder" style="background:#ddd;">No Image</div>'
            }
          </div>
          <div class="card-content">
            <time>${post.date}</time>
            <h2 class="card-title">${post.title}</h2>
            <p class="card-excerpt">Click to read more...</p>
          </div>
        </a>
      </article>
    `;
    container.innerHTML += html;
  });
}

function renderSinglePost(post) {
  const container = document.getElementById("main-content");
  // 簡易シングルページ表示
  container.innerHTML = `
    <div class="single-post-container" style="background:#fff; padding:40px; border-radius:8px;">
      <h1 style="margin-bottom:10px;">${post.title}</h1>
      <time style="color:#888; display:block; margin-bottom:30px;">${post.date}</time>
      <div class="post-body" style="line-height:2;">
        ${post.content}
      </div>
      <div style="margin-top:50px; text-align:center;">
        <a href="javascript:history.back()" style="text-decoration:underline;">一覧に戻る</a>
      </div>
    </div>
  `;
  container.classList.remove("post-grid");
}
