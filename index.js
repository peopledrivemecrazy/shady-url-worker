import { Router } from "itty-router";
import {
  getPath,
  kvQuery,
  respondWith,
  redirectTo,
  kvAdd,
  getHost,
  generateShadyKey,
  invalidResponse,
  resourceNotFound,
} from "./helper";
import html from "./html/index.html";

const router = Router();

router.get("/", () => {
  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
});

router.get("/:path", async ({ url }) =>
  (await kvQuery(getPath(url))) === null
    ? resourceNotFound()
    : redirectTo(await kvQuery(getPath(url)))
);
router.get("/query/:path", async ({ url }) =>
  respondWith({ result: await kvQuery(getPath(url)) })
);

router.post("/", async (request) => {
  if (request.headers.get("Content-Type") === "application/json") {
    let { url } = await request.json();
    // let sanitizedUrl = url
    //   .replace(/^https\:\/\//, "")
    //   .replace(/\/+/g, "/")
    //   .replace(/\/+$/, "");
    let hostUrl = getHost(request.url);
    let shadykey = generateShadyKey(10, "_");
    let shadyUrl = hostUrl + shadykey;
    let obj = {
      target: url,
      shadykey,
      shadyUrl,
    };
    await kvAdd(shadykey, url);
    return respondWith(obj);
  } else return invalidResponse();
});

// router.all("*", () => new Response("404, not found!", { status: 404 }));

addEventListener("fetch", (e) => {
  e.respondWith(router.handle(e.request));
});
