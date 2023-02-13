import Koa from "koa";
import Router from "koa-router";
import postRouter from "../routes/post";

const router = new Router();
const app = new Koa();

router.get("/", async (ctx) => {
  ctx.set("Content-Type", "application/json");
  ctx.body = { message: "Hello World!" };
});

app.use(router.routes()).use(router.allowedMethods());
app.use(postRouter.routes()).use(postRouter.allowedMethods());

app.listen(3010);
