import router from "./router";

(async function () {
  console.log("config");
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
    console.log("haschange");
    router();
  });
  window.addEventListener("load", () => {
    console.log("load");
    if (!sessionStorage.getItem("reload")) {
      router();
    }
  });

  //handle user reload of browser
  if (sessionStorage.getItem("reload")) {
    console.log("reload");
    await router();
    sessionStorage.setItem("reload", "true");
  }
})();
