import { html, repeat, nothing } from "../lib.js";
import { getList } from "../api/data.js";

const catalogTemplate = (data, user) => html`
  <section id="catalogPage">
    <h1>All Wines</h1>
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
  const data = await getList();
  const user = ctx.user;

  ctx.render(catalogTemplate(data, user));
}
