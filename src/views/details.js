import { html, nothing, repeat } from "../lib.js";
import { deleteLike, getLikes, getSingleWine } from "../api/data.js";
import { deleteWine } from "../api/data.js";
import { like } from "../api/data.js";
import { getUserLike } from "../api/data.js";
import { getTotalLikes } from "../api/data.js";
import { notify } from "../app.js";
import { getComment } from "../api/data.js";
import { addComment } from "../api/data.js";

const detailsTemplate = (
  data,
  isCreator,
  onDelete,
  showLikeBtn,
  onLike,
  totalLikes,
  comments,
  onSubmit,
  showCommentSection,
  onUnlike,
  showUnlikeBtn
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
            ${showUnlikeBtn
              ? html`<a
                  @click=${onUnlike}
                  id="likes"
                  class="button"
                  href="javascript:void(0)"
                  >Unlike</a
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

    <div class="details-comments">
      <h2>Comments:</h2>
      <ul>
        ${comments.length == 0
          ? html`<p class="no-comment">No comments.</p>`
          : comments.map(
              (c) => html`
                <li class="comment">
                  <p>Content: ${c.comment}</p>
                </li>
              `
            )}
      </ul>
    </div>
    ${showCommentSection
      ? html`
          <article class="create-comment">
            <label>Add new comment:</label>
            <form @submit=${onSubmit} class="form">
              <textarea name="comment" placeholder="Comment......"></textarea>
              <input class="btn-submit" type="submit" value="Add Comment" />
            </form>
          </article>
        `
      : nothing}
  </section>
`;

export async function detailsPage(ctx) {
  const user = ctx.user;
  const wineId = ctx.params.id;

  const [data, totalLikes, didUserLike, comments, likes] = await Promise.all([
    getSingleWine(wineId),
    getTotalLikes(wineId),
    getUserLike(wineId, user),
    getComment(wineId),
    getLikes(wineId),
  ]);
  const creator = user == data._ownerId;

  const showLikeBtn = didUserLike == 0 && user && !creator;
  const showUnlikeBtn = didUserLike == 1 && user && !creator;
  const showCommentSection = user && !creator;
  const isCreator = user == data._ownerId;

  ctx.render(
    detailsTemplate(
      data,
      isCreator,
      onDelete,
      showLikeBtn,
      onLike,
      totalLikes,
      comments,
      onSubmit,
      showCommentSection,
      onUnlike,
      showUnlikeBtn
    )
  );

  async function onDelete() {
    const confirmed = confirm("Are you sure you want to delete this wine?");

    if (confirmed) {
      await deleteWine(wineId);
      ctx.page.redirect("/catalog");
    }
  }
  async function onLike() {
    await like({ wineId });

    ctx.page.redirect(`/details/${wineId}`);
  }

  async function onUnlike() {
    const wineToDelet = likes.find(
      (w) => w.wineId == wineId && w._ownerId == user
    );
    await deleteLike(wineToDelet._id);

    ctx.page.redirect(`/details/${wineId}`);
  }

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const comment = formData.get("comment").trim();

    try {
      if (comment == "") {
        throw new Error("Please fill in !");
      }
      await addComment({ wineId, comment });

      e.target.reset();

      ctx.page.redirect(`/details/${wineId}`);
    } catch (error) {
      notify(error.message);
    }
  }
}
