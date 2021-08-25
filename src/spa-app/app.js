import router from "./router";

(async function () {
  // 👉 Replace this with client creation 👈

  // handle user navigation
  window.addEventListener("hashchange", router);
  window.addEventListener("load", router);

  //handle user reload of browser
  if (sessionStorage.getItem("reload")) await router();
  sessionStorage.setItem("reload", "true");
})();
