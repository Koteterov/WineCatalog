import { html, nothing } from "../lib.js";
import { getSingleWine } from "../api/data.js";
import { deleteWine } from "../api/data.js";

const detailsTemplate = (data, isCreator, onDelete) => html`
  <section id="detailsPage">
    <div class="wrapper">
      <div class="albumCover">
        <img src=${data.imgUrl} />
      </div>
      <div class="albumInfo">
        <div class="albumText">
          <h1>Product Name: ${data.name}</h1>
          <h3>Net Quantity: ${data.netQty}</h3>
          <h4>Origin: ${data.origin}</h4>
          <h4>Price: ${data.price} lv</h4>
          <h4>Supplier: ${data.supplier}</h4>
          <p>Storage: ${data.storage}.</p>
        </div>

        <div class="actionBtn">
          ${isCreator
            ? html`
                <a href="/edit/${data._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove"
                  >Delete</a
                >
              `
            : nothing}
        </div>
      </div>
    </div>
  </section>
`;

export async function detailsPage(ctx) {
  const user = ctx.user;
  const wineId = ctx.params.id;

  const data = await getSingleWine(wineId);

  const isCreator = user == data._ownerId;

  ctx.render(detailsTemplate(data, isCreator, onDelete));

  async function onDelete() {
    const confirmed = confirm("Are you sure you want to delete this wine?");

    if (confirmed) {
      await deleteWine(wineId);
      ctx.page.redirect("/catalog");
    }
  }
}

