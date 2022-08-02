import { page } from "./lib.js";
import { render } from "./lib.js";
import { catalogPage } from "./views/catalog.js";
import { logout } from "./api/data.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { detailsPage } from "./views/details.js";
import { createPage } from "./views/create.js";

document.getElementById("logoutBtn").addEventListener("click", OnLogout);

const main = document.getElementById("main-content");

page(decorateContext);
page("/index.html", "/");
page("/", homePage);
page('/catalog', catalogPage)
page('/login', loginPage)
page('/register', registerPage)
page('/details/:id', detailsPage)
page('/create', createPage)

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
  } else {
    document
      .querySelectorAll(".user")
      .forEach((u) => (u.style.display = "none"));
    document
      .querySelectorAll(".guest")
      .forEach((g) => (g.style.display = "inline"));
  }
}

async function OnLogout() {
  await logout();
  page.redirect("/");
  
  setUserNav();
}

