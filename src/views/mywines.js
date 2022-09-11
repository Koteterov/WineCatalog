import { html, repeat } from "../lib.js";
import { myWines } from "../api/data.js";

const myWinesTemplate = (data) => html`
  <section id="catalogPage">
    <h1>My Wines</h1>

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
      <a href="/details/${data._id}" id="details">Details</a>
      </div>
    </div>
  </div>`)
      : html` <p>You Don Not Have Wines in Catalog!</p>`}

  </section>
`



export async function myWinesPage(ctx) {
    const userId = ctx.user;

    try {
      const myItems = await myWines(userId);
  
      ctx.render(myWinesTemplate(myItems));
  
    } catch (error) {
      console.log(error);
    }
  }
  