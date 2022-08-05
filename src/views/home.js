import { html } from "../lib.js";

const homeTemplate = () => html`
  <section id="welcomePage">
    <div>
      <div class="wine-img" id="welcome-message">
        <h1>Welcome To Wine Catalog!</h1>
      </div>
      <div class="wine-img">
        <img src="./images/Wine-Home.webp" />
      </div>
      <h2 id="loginPrompt"><a href="/login">Login</a> to add, edit and delete wines!</h2>
    </div>
  </section>
`;

export async function homePage(ctx) {
  ctx.render(homeTemplate());
}
