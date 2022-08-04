import { html, repeat, nothing } from "../lib.js";
import { getAllWines } from "../api/data.js";

const catalogTemplate = (data, user, page, pages) => html`
  <section id="catalogPage">
    <h1>All Wines</h1>
  <div id="pagination">
    ${page > 1 ? html`<a href="?page=${page - 1}">&lt; Prev</a>` : html`<a>&lt; Prev</a>`}
    <span>Page ${page} of ${pages}</span>
    ${page < pages ? html`<a href="?page=${page + 1}">Next &gt;</a>` : html`<a>Next &gt;</a>`}
  </div>

    ${data.length > 0
      ? repeat(data, (i) => i._id, (data) => html`
  <div class="card-box">
    <img src=${data.imgUrl} />
    <div>
      <div class="text-center">
        <p class="name">Product Name: ${data.name}</p>
        <p class="quantity">Net Quantity: ${data.netQty}</p>
        <p class="origin">Origin: ${data.origin}</p>
        <p class="price">Price: ${data.price} lv</p>
        <p class="supplier">Supplier: ${data.supplier}</p>
      </div>
      <div class="btn-group">
        ${user
          ? html` <a href="/details/${data._id}" id="details">Details</a> `
          : nothing}
      </div>
    </div>
  </div>`)
      : html` <p>No Wines in Catalog!</p> `}
  </section>
`;


export async function catalogPage(ctx) {
  const user = ctx.user;

  const page = Number(ctx.query.page) || 1;
  const {data, pages} = await getAllWines(page)

  ctx.render(catalogTemplate(data, user, page, pages));
}
