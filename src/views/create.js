import { html } from "../lib.js";
import { createWine } from "../api/data.js";

const createTemplate = (onSubmit) => html`
  <section class="createPage">
    <form @submit=${onSubmit}>
      <fieldset>
        <legend>Add Wine</legend>

        <div class="container">
          <label for="name" class="vhide">Album name</label>
          <input
            id="name"
            name="name"
            class="name"
            type="text"
            placeholder="Product name"
          />

          <label for="imgUrl" class="vhide">Image Url</label>
          <input
            id="imgUrl"
            name="imgUrl"
            class="imgUrl"
            type="text"
            placeholder="Image Url"
          />

          <label for="price" class="vhide">Price</label>
          <input
            id="price"
            name="price"
            class="price"
            type="text"
            placeholder="Price"
          />

          <label for="netQuantity" class="vhide">Net Quantity</label>
          <input
            id="netQuantity"
            name="netQuantity"
            class="netQuantity"
            type="text"
            placeholder="Net Quantity"
          />

          <label for="origin" class="vhide">Origin</label>
          <input
            id="origin"
            name="origin"
            class="origin"
            type="text"
            placeholder="Origin"
          />

          <label for="supplier" class="vhide">Supplier</label>
          <input
            id="supplier"
            name="supplier"
            class="supplier"
            type="text"
            placeholder="Supplier"
          />

          <label for="storage" class="vhide">Storage</label>
          <textarea
            name="storage"
            class="storage"
            placeholder="Storage"
          ></textarea>

          <button class="add-wine" type="submit">Add New Wine</button>
        </div>
      </fieldset>
    </form>
  </section>
`;

export async function createPage(ctx) {
  ctx.render(createTemplate(onSubmit));

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

      await createWine({
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
      alert(error.message);
    }
  }
}
