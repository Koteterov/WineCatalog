import { html, repeat, nothing } from "../lib.js";
import { search } from "../api/data.js";
import { notify } from "../app.js";


const searchTemplate = (onClick, data, searchInput, user) => html`
  <section id="searchPage">
    <h1>Search by Name</h1>
    <div class="search">
      <input
        id="search-input"
        type="text"
        name="search"
        placeholder="Enter desired wine's name"
        .value=${searchInput || ""}
      />
      <button @click=${onClick} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="search-result">
      ${data.length > 0
        ? repeat(data, (i) => i._id, (data) => html`
              <div class="card-box">
                <img src=${data.imgUrl} />
                <div>
                  <div class="text-center">
                    <p class="name">Product Name: ${data.name}</p>
                    <p class="artist">Net Quantity: ${data.netQty}</p>
                    <p class="genre">Origin: ${data.origin}</p>
                    <p class="price">Price: ${data.price} lv</p>
                    <p class="date">Supplier: ${data.supplier}</p>
                  </div>
                  <div class="btn-group">
                    ${user
                      ? html`
                          <a href="/details/${data._id}" id="details">Details</a>
                        `
                      : nothing}
                  </div>
                </div>
              </div>
            `)
        : html`<p class="no-result">No result.</p>`}
    </div>
  </section>
`;


export async function searchPage(ctx) {
  const searchInput = ctx.querystring.split("=")[1];
  const data = searchInput == undefined ? [] : await search(searchInput);
  const user = ctx.user;

  ctx.render(searchTemplate(onClick, data, searchInput, user));

  function onClick() {
    const query = document.getElementById("search-input");

    if (query.value == "") {
      notify("Please fill in!");
      return;
    }
    ctx.page.redirect(`search?query=${query.value.trim()}`);
  }
}
