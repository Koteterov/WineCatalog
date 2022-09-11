import { html, nothing } from "../lib.js";

const homeTemplate = (user) => html`
  <section id="welcomePage">
    <div>
      <div class="wine-img" id="welcome-message">
        <h1>Welcome to <i>My Wine Catalog!</i> </h1>
      </div>
      </div>
      ${!user
        ? html`
            <h2 id="loginPrompt">
              Please, <a href="/login"><i>login</i></a> to like, add, edit and delete
              wines!
            </h2>
          `
        : nothing}
  </section>
`;

export async function homePage(ctx) {
  const user = ctx.user;
  ctx.render(homeTemplate(user));
}
