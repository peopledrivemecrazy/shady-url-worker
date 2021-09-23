import animals from "./animals.json";
import Router from "./router";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const r = new Router();
//   r.get("/query", async () => new Response("Hello world"));
  let { method, url } = request;
  console.log(url);
  let identifier = ["?", "!", "="]; //speak no urls, see no urls, hear no urls, POST, GET, GET-REDIRECT

  //   console.log(request.url);
  // determine method POST or GET

  if (method === "POST") {
    // save the split url and append long url as object
    // {"url":"longurl"}
    let url = request.url.split(identifier[0]);
    // let url = Array.from(identifier[0]);
    let target = decodeURIComponent(url[1]);
    let shadykey = animals
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)
      .join("");
    let shadyUrl = `${url[0]}${identifier[1]}${shadykey}`;
    let obj = {
      target,
      shadykey,
      shadyUrl,
    };
    console.log(obj);
    await SHADAYURL.put(obj.shadykey, obj.target);
    return new Response(JSON.stringify(obj));
  }
  if (method === "GET") {
    // check how the URL is seperated if ? | !
    // ? return object of the url
    // ! redirect to the target url
    // return new Response(JSON.stringify(animals[10]));
    // console.log(url.get())
    let url = request.url.split(identifier[1]);
    console.log(url);
    let result = await SHADAYURL.get(url[1]);
    // return new Response(JSON.stringify(result));
    return Response.redirect(result, 301);
  }
}
async function handleRedirect(URL) {
  return Response.redirect(URL, 301);
}
