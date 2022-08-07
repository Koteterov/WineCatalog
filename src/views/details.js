import { html, nothing } from "../lib.js";
import { getSingleWine } from "../api/data.js";
import { deleteWine } from "../api/data.js";
import { like } from "../api/data.js";
import { getUserLike } from "../api/data.js";
import { getTotalLikes } from "../api/data.js";

const detailsTemplate = (
  data,
  isCreator,
  onDelete,
  showLikeBtn,
  onLike,
  totalLikes
) => html`
  <section id="detailsPage">
    <div class="wrapper">
      <div class="wineCover">
        <img src=${data.imgUrl} />
      </div>
      <div class="wineInfo">
        <div class="wineText">
          <h1>Product Name: ${data.name}</h1>
          <h3>Net Quantity: ${data.netQty}</h3>
          <h4>Origin: ${data.origin}</h4>
          <h4>Price: ${data.price} lv</h4>
          <h4>Supplier: ${data.supplier}</h4>
          <p>Storage: ${data.storage}</p>
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
          <div class="actionBtn">
            ${showLikeBtn
              ? html`<a
                  @click=${onLike}
                  id="likes"
                  class="button"
                  href="javascript:void(0)"
                  >Like</a
                > `
              : nothing}
          </div>
          <div class="likes">
            <img class="hearts" src="/images/heart.png" />
            <span id="total-likes">Likes: ${totalLikes}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bonus ( for Guests and Users ) -->
    <div class="details-comments">
      <h2>Comments:</h2>
      <ul>
        <!-- list all comments for current game (If any) -->
        <li class="comment">
          <p>Content: I rate this one quite highly.</p>
        </li>
        <li class="comment">
          <p>Content: The best game.</p>
        </li>
      </ul>
      <!-- Display paragraph: If there are no games in the database -->
      <p class="no-comment">No comments.</p>
    </div>

    <article class="create-comment">
      <label>Add new comment:</label>
      <form class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn-submit" type="submit" value="Add Comment" />
      </form>
    </article>
  </section>
`;

export async function detailsPage(ctx) {
  const user = ctx.user;
  const wineId = ctx.params.id;

  //===========
  // const [book, totalLikes, didUserLike] = await Promise.all ([
  //   getSingleBook(bookId),
  //   getTotalLikes(bookId),
  //   getUserLike(bookId,user)

  // ])

  //==========
  const [data, totalLikes, didUserLike] = await Promise.all([
    getSingleWine(wineId),
    getTotalLikes(wineId),
    getUserLike(wineId, user),
  ]);
  const creator = user == data._ownerId;
  const showLikeBtn = didUserLike == 0 && user && !creator;

  console.log("wineId", wineId);

  const isCreator = user == data._ownerId;

  ctx.render(
    detailsTemplate(data, isCreator, onDelete, showLikeBtn, onLike, totalLikes)
  );

  async function onDelete() {
    const confirmed = confirm("Are you sure you want to delete this wine?");

    if (confirmed) {
      await deleteWine(wineId);
      ctx.page.redirect("/catalog");
    }
  }
  async function onLike() {
    let res = await like({ wineId });

    ctx.page.redirect(`/details/${wineId}`);
  }
}
