import { html, nothing } from "../lib.js";

const homeTemplate = (user) => html`
  <section id="welcomePage">
    <div>
      <div class="wine-img" id="welcome-message">
        <h1>Welcome To Wine Catalog!</h1>
      </div>
      <div class="wine-img">
        <img src="./images/Wine-Home.webp" />
      </div>
      ${!user
        ? html`
            <h2 id="loginPrompt">
              Please, <a href="/login">login</a> to like, add, edit and delete
              wines!
            </h2>
          `
        : nothing}
    </div>
  </section>
`;

export async function homePage(ctx) {
  const user = ctx.user;
  ctx.render(homeTemplate(user));
}
