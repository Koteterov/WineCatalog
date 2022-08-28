import { html } from "../lib.js";
import { getSingleWine } from "../api/data.js";
import { editWine } from "../api/data.js";
import { notify } from "../app.js";


const editTemplate = (wine, onSubmit) => html`
  <section class="editPage">
    <form @submit=${onSubmit}>
      <fieldset>
        <legend>Edit Wine</legend>

        <div class="container">
          <label for="name" class="vhide">Product name</label>
          <input
            id="name"
            name="name"
            class="name"
            type="text"
            .value=${wine.name}
          />

          <label for="imgUrl" class="vhide">Image Url</label>
          <input
            id="imgUrl"
            name="imgUrl"
            class="imgUrl"
            type="text"
            .value=${wine.imgUrl}
          />

          <label for="price" class="vhide">Price</label>
          <input
            id="price"
            name="price"
            class="price"
            type="text"
            .value=${wine.price}
          />

          <label for="netQuantity" class="vhide">Net Quantity</label>
          <input
            id="netQuantity"
            name="netQuantity"
            class="netQuantity"
            type="text"
            .value=${wine.netQty}
          />

          <label for="origin" class="vhide">Origin</label>
          <input
            id="origin"
            name="origin"
            class="origin"
            type="text"
            .value=${wine.origin}
          />

          <label for="genre" class="vhide">Supplier</label>
          <input
            id="supplier"
            name="supplier"
            class="supplier"
            type="text"
            .value=${wine.supplier}
          />

          <label for="storage" class="vhide">Storage</label>
          <textarea
            name="storage"
            class="storage"
            rows="10"
            cols="10"
            .value=${wine.storage}
          ></textarea>

          <button class="edit-album" type="submit">Edit Wine</button>
        </div>
      </fieldset>
    </form>
  </section>
`;

export async function editPage(ctx) {
  const id = ctx.params.id;
  const wine = await getSingleWine(id);

  ctx.render(editTemplate(wine, onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name").trim();
    const imgUrl = formData.get("imgUrl").trim();
    const price = formData.get("price").trim();
    const netQty = formData.get("netQuantity").trim();
    const origin = formData.get("origin").trim();
    const supplier = formData.get("supplier").trim();
    const storage = formData.get("storage").trim();

    try {
      if (
        !name ||
        !imgUrl ||
        !price ||
        !netQty ||
        !origin ||
        !supplier ||
        !storage
      ) {
        throw new Error("Please fill in all fields!");
      }

      await editWine(id, {
        name,
        imgUrl,
        price,
        netQty,
        origin,
        supplier,
        storage,
      });

      e.target.reset();
      ctx.page.redirect(`/catalog`);
    } catch (error) {
      notify(error.message);
    }
  }
}
