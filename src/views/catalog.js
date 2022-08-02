import { html, repeat } from "../lib.js";
import { getList } from "../api/data.js";

const catalogTemplate = (data) => html`
  <section id="catalogPage">
    <h1>All Wines</h1>
    ${data.length > 0
      ? repeat(data, (i) => i._id, cardTemplate)
      : html` <p>No Wines in Catalog!</p> `}
  </section>
`;

const cardTemplate = (data) => html`
  <div class="card-box">
    <img src=${data.imgUrl} />
    <div>
      <div class="text-center">
        <p class="name">Product Name: ${data.name}</p>
        <p class="artist">Net Quantity: ${data.netQty}</p>
        <p class="genre">Origin: ${data.origin}</p>
        <!-- <p class="genre">Storage: ${data.storage}</p> -->
        <p class="price">Price: ${data.price}</p>
        <p class="date">Supplier: ${data.supplier}</p>
      </div>
      <div class="btn-group">
        <a href="/details/${data._id}" id="details">Details</a>
      </div>
    </div>
  </div>
`;

export async function catalogPage(ctx) {
  const data = await getList();

  ctx.render(catalogTemplate(data));
}
