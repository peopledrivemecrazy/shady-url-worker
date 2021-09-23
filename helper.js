import animals from "./animals.json";

const headers = {
  "Content-Type": "application/json",
};

const getHost = (url) => new URL(url);
const getPath = (url) => new URL(url).pathname.split("/").pop();
const kvQuery = async (query) => await SHADAYURL.get(query);
const kvAdd = async (key, value) => await SHADAYURL.put(key, value);
const respondWith = (result) =>
  new Response(JSON.stringify({ result }), { headers });
const invalidResponse = async () =>
  new Response(JSON.stringify({ error: "Invalid Content-Type" }));
const resourceNotFound = async () =>
  new Response(JSON.stringify({ error: "Resource Not Found" }));
const redirectTo = (path) => Response.redirect(path, 301);
const generateShadyKey = () =>
  animals
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)
    .join("_");

export {
  getPath,
  kvQuery,
  respondWith,
  invalidResponse,
  redirectTo,
  kvAdd,
  getHost,
  generateShadyKey,
  resourceNotFound,
};
