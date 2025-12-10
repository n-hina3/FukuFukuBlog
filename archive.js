document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initChatSystem();
  initTrashSecurity();
});

// --- 1. サイドバーナビゲーション ---
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.view-section');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // ボタンのアクティブ化
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      // セクションの切り替え
      const targetId = item.getAttribute('data-target');
      sections.forEach(sec => {
        sec.classList.remove('active');
        if (sec.id === targetId) {
          sec.classList.add('active');
        }
      });
    });
  });
}

// --- 2. チャットシステム（ヒント機能） ---
function initChatSystem() {
  const input = document.getElementById('chat-input');
  const submitBtn = document.getElementById('chat-submit');
  const chatLog = document.getElementById('chat-history');

  const addMessage = (type, text, name = "") => {
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg ${type}`;
    
    let html = "";
    if (name && type !== 'system') {
      const initial = name === '丹羽 日和' ? 'H' : 'A';
      html += `<div class="avatar">${initial}</div>`;
    }
    
    html += `<div class="bubble">${text}</div>`;
    msgDiv.innerHTML = html;
    chatLog.appendChild(msgDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
  };

  const handleChat = () => {
    const val = input.value.trim();
    if (!val) return;

    // ユーザーの送信
    // 今回は「検索」という体なので、ユーザーの発言として表示せず
    // システムログとして表示するか、検索クエリとして表示
    addMessage('system', `Search Query: "${val}"`);
    input.value = '';

    setTimeout(() => {
      // --- 応答ロジック ---
      if (val === '304') {
        addMessage('system', '【検索結果】 重要ファイルが見つかりました。<br>ゴミ箱（Trash）のロックを解除可能です。<br>パスワード: 304');
      }
      else if (val.includes('△') || val.includes('三角')) {
        addMessage('hiyori', '△は『3』日間の熱狂！<br>あの日々が私たちの青春だったよね。', '丹羽 日和');
      } 
      else if (val.includes('○') || val.includes('丸')) {
        addMessage('aoi', '○は『0』（ゼロ）。<br>経験ゼロからスタートした、あの日。', '柴田 葵');
      }
      else if (val.includes('□') || val.includes('四角')) {
        addMessage('system', '【Error】データ破損。<br>Hint: ZINEのあとがきの「図形」の角の数は？');
      }
      else if (val === '葵' || val === 'あおい') {
        addMessage('hiyori', '葵、元気かな。<br>「停止ボタン」を押してから、ずっと考えてるみたい。', '丹羽 日和');
      }
      else {
        addMessage('system', '該当データなし。<br>検索ヒント：△, ○, □');
      }
    }, 600);
  };

  submitBtn.addEventListener('click', handleChat);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleChat();
  });
}

// --- 3. ゴミ箱セキュリティ（最後の謎） ---
function initTrashSecurity() {
  const lockItem = document.getElementById('final-lock-item');
  const modal = document.getElementById('modal-trash');
  const btn = document.getElementById('btn-final');
  const input = document.getElementById('pass-final');
  const error = document.getElementById('error-final');
  const formArea = document.getElementById('modal-content-form');
  const truthArea = document.getElementById('modal-content-truth');

  // モーダルを開く
  lockItem.addEventListener('click', () => {
    modal.classList.add('open');
    input.value = '';
    error.innerText = '';
    formArea.style.display = 'block';
    truthArea.classList.add('hidden');
  });

  // 閉じる（背景クリック）
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });

  // 解除試行
  const tryUnlock = () => {
    const val = input.value.trim();
    if (val === '304') {
      // 正解
      formArea.style.display = 'none';
      truthArea.classList.remove('hidden');
    } else {
      error.innerText = 'Passcode Incorrect.';
      input.value = '';
    }
  };

  btn.addEventListener('click', tryUnlock);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') tryUnlock();
  });
}