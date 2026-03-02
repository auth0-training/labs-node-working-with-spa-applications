import router from "./router";

(async function () {
  const domain = window.env.AUTH0_DOMAIN;
  const clientId = window.env.CLIENT_ID;
  const redirect_uri = window.env.APP_URL;

  window.auth0Client = await auth0.createAuth0Client({
    domain,
    clientId,
    authorizationParams: {
      redirect_uri,
    },
  });

  // handle user navigation
  window.addEventListener("hashchange", () => {
    router();
  });
  window.addEventListener("load", () => {
    // avoid calling router twice when handling redirect callback upon sign in
    if (!sessionStorage.getItem("reload")) {
      router();
      sessionStorage.setItem("reload", "true");
    }
  });

  //handle user reload of browser
  if (sessionStorage.getItem("reload")) {
    sessionStorage.setItem("reload", "true");
    await router();
  }
})();
