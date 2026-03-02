import Error404 from "./views/pages/Error404";
import Home from "./views/pages/Home";
import Expenses from "./views/pages/Expenses";
import Navbar from "./views/components/Navbar";

const routes = {
  "/": Home,
  expenses: Expenses,
};

const navbar = document.getElementById("navbar");
const content = document.getElementById("content");

const router = async () => {
  if (new URLSearchParams(window.location.search).has("code")) {
    await window.auth0Client.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/");
  }

  if (await window.auth0Client.isAuthenticated()) {
    window.user = await window.auth0Client.getUser();
  }

  const request = location.hash.slice(1).toLowerCase() || "/";
  const page = routes[request] || Error404;

  if (await page.allowAccess()) {
    content.innerHTML = await page.render();
    await page.postRender();
  } else {
    window.history.replaceState({}, document.title, "/");
  }
  navbar.innerHTML = await Navbar.render();
  await Navbar.postRender();
};

export default router;
