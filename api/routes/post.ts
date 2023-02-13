import Router from "koa-router";
import DB from "../service/db";

const postRouter = new Router();

postRouter.get("/posts", async (ctx) => {
  const [result] = await DB.query("SELECT title, updated_at FROM post");
  ctx.set("content-type", "application/json");
  ctx.body = result;
});

postRouter.get("/post/:id", async (ctx) => {
  const postId = ctx.params.id;
  const [result] = await DB.query("SELECT * FROM post WHERE id = ?", [postId]);
  ctx.set("content-type", "application/json");
  ctx.body = result;
});

export default postRouter;
