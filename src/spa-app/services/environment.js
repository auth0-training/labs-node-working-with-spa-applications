/*
  This file is used by parcel to inject environment variables
  into client side code as well as ensure that the application
  is being served up on an expected url when hosted in vercel.
*/
(function (window) {
  let API_URL = process.env.API_URL || "http://localhost:5000";
  let APP_URL = "http://localhost:8000";
  const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
  const CLIENT_ID = process.env.CLIENT_ID;
  const VERCEL_URL = process.env.VERCEL_URL;
  const VERCEL_GITHUB_ORG = process.env.VERCEL_GITHUB_ORG;
  const VERCEL_GITHUB_REPO = process.env.VERCEL_GITHUB_REPO;
  const VERCEL_GIT_COMMIT_REF = process.env.VERCEL_GIT_COMMIT_REF;

  // update value based on vercel hosting
  if (VERCEL_URL) {
    APP_URL = `https://${VERCEL_GITHUB_REPO}-git-${VERCEL_GIT_COMMIT_REF}-${VERCEL_GITHUB_ORG.toLowerCase()}.vercel.app`;
    // ensure expected hosted url
    if (!APP_URL.includes(window.location.host)) window.location = APP_URL;
  }

  // make environment specific values available to app
  window.env = {
    APP_URL,
    API_URL,
    AUTH0_DOMAIN,
    CLIENT_ID,
  };

  // print envars to console for troubleshooting purposes
  console.log(
    "%c-------------------ENV---------------------",
    "font-weight: bold;"
  );
  console.log(`%cAPP_URL=${APP_URL}`, "font-weight: bold;");
  console.log(`%cAPI_URL=${API_URL}`, "font-weight: bold;");
  console.log(`%cAUTH0_DOMAIN=${AUTH0_DOMAIN}`, "font-weight: bold;");
  console.log(`%cCLIENT_ID=${CLIENT_ID}`, "font-weight: bold;");
  console.log(
    "%c-------------------------------------------",
    "font-weight: bold;"
  );
})(window);
