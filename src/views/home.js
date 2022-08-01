import { html } from "../lib.js";



const homeTemplate = () => html `
        <section id="welcomePage">
            <div id="welcome-message">
                <h1>Welcome to My Wine Catalog!</h1>
            </div>

            <div class="wine-img">
                <img src="./images/Wine-Home.webp">
            </div>
        </section>


`


export async function homePage(ctx) {
    ctx.render(homeTemplate());

}
