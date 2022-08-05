import { page } from "./lib.js";
import { render } from "./lib.js";
import { catalogPage } from "./views/catalog.js";
import { logout } from "./api/data.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { detailsPage } from "./views/details.js";
import { createPage } from "./views/create.js";
import { editPage } from "./views/edit.js";
import { myWinesPage } from "./views/mywines.js";
import { searchPage } from "./views/search.js";

document.getElementById("logoutBtn").addEventListener("click", OnLogout);

const main = document.getElementById("main-content");
const welcomeSpan = document.querySelector("nav span");

page(decorateContext);
page(parseQueryString);

page("/index.html", "/");
page("/", homePage);
page("/catalog", catalogPage);
page("/login", loginPage);
page("/register", registerPage);
page("/details/:id", detailsPage);
page("/create", createPage);
page("/edit/:id", editPage);
page("/mywines", myWinesPage);
page("/search", searchPage);
page("*", notFound);

setUserNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, main);
  ctx.setUserNav = setUserNav;

  const user = sessionStorage.getItem("userId");
  if (user) {
    ctx.user = user;
  }
  next();
}

function setUserNav() {
  const userId = sessionStorage.getItem("userId");

  if (userId != null) {
    document
      .querySelectorAll(".user")
      .forEach((u) => (u.style.display = "inline"));
    document
      .querySelectorAll(".guest")
      .forEach((g) => (g.style.display = "none"));

    welcomeSpan.style.display = "inline";
    welcomeSpan.textContent = `Welcome, ${sessionStorage.getItem("email")}!`;
  } else {
    document
      .querySelectorAll(".user")
      .forEach((u) => (u.style.display = "none"));
    document
      .querySelectorAll(".guest")
      .forEach((g) => (g.style.display = "inline"));

    welcomeSpan.style.display = "none";
  }
}

function parseQueryString(ctx, next) {
  ctx.query = {};
  if (ctx.querystring) {
    const query = Object.fromEntries(
      ctx.querystring.split("&").map((p) => p.split("="))
    );
    Object.assign(ctx.query, query);
  }

  next();
}

export function notify(message) {
  const divEl = document.getElementById("errorBox");
  const spanEl = divEl.querySelector("span");
  spanEl.textContent = message;
  divEl.style.display = "block";

  setTimeout(() => (divEl.style.display = "none"), 3000);
}

async function OnLogout() {
  await logout();
  page.redirect("/");

  setUserNav();
}

function notFound(ctx) {
  ctx.render("404 Not Found");
}
