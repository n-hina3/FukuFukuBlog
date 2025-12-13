/* * FukuFukuBlog ARG Project
 * archive.js - ログイン認証と裏ページへの遷移を制御するスクリプト
 */

document.addEventListener("DOMContentLoaded", function () {
  // HTML要素の取得
  // login.html内のIDと一致している必要があります
  const loginButton = document.getElementById("login-btn");
  const passwordInput = document.getElementById("password-input");
  const errorMessage = document.getElementById("error-message");

  // ログイン判定を行う関数
  function attemptLogin() {
    const inputCode = passwordInput.value;

    // ★ここにARGの正解パスワードを設定（ZINEの謎解き答え）
    const CORRECT_PASSWORD = "309";

    if (inputCode === CORRECT_PASSWORD) {
      // 正解の場合：裏ページ（archive.html）へ移動
      console.log("Access Granted.");
      window.location.href = "archive.html";
    } else {
      // 不正解の場合：エラーメッセージを表示
      console.log("Access Denied.");
      errorMessage.style.display = "block";

      // 入力欄をクリアしてフォーカスを戻す（UX向上）
      passwordInput.value = "";
      passwordInput.focus();

      // エラー演出：入力欄を赤くするなどのクラスを追加（CSSで定義があれば）
      passwordInput.classList.add("error-shake");
      setTimeout(() => {
        passwordInput.classList.remove("error-shake");
      }, 500);
    }
  }

  // イベントリスナーの設定

  // 1. ログインボタンがクリックされた時
  if (loginButton) {
    loginButton.addEventListener("click", function (e) {
      e.preventDefault(); // フォームのデフォルト送信を防ぐ
      attemptLogin();
    });
  }

  // 2. 入力欄でEnterキーが押された時
  if (passwordInput) {
    passwordInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        attemptLogin();
      }
    });
  }
});
