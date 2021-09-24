# Shady URL Generator on CF worker

A fun project for Cloudflare Summer Challenge to create Shady URLs. Go to https://shadyurls.shriji.workers.dev/ to have fun.

A simple POC of cloudflare worker that uses the potential of KV, a reverse of this project would be a URL shortner service.

##### previously called as url-longener.

## This project uses Cloudflare KV to store URLS.

Configure your `toml` file to bind KV namespace. This project uses `SHADYURL` If you plan on forking this, then [check](https://github.com/peopledrivemecrazy/shady-url-worker/blob/master/helper.js#L9).

## POST

Send a post with body json request to `https://yourdomain.worker.dev/` it will respond back with a longass URL.

### Sample Request

```json
{
	"url":"https://github.com"
}
```
### Sample Response 

```json
{
  "result": {
    "target": "https://github.com",
    "shadykey": "Lark_Jay_Ostrich_Okapi_Oryx_Chough_Leopard_Eagle_Dunlin_Bat",
    "shadyUrl": "https://url-longener.shriji.workers.dev/post/Lark_Jay_Ostrich_Okapi_Oryx_Chough_Leopard_Eagle_Dunlin_Bat"
  }
}
```

## GET

Query `https://yourdomain.worker.dev/query/<verysillylongurl>` will return what the longass URL is.

### Response
```json
{
  "result": "https://google.com"
}
```

Go to `https://yourdomain.worker.dev/<verysillylongurl>` will redirect to target URL.


## Note

- URLs may collide, there isn't a mechanism for detecting collisions.
- As of now this uses animals from `animals.json` chooses 10 animals seperated by `_`.
- May add silly words and words that make you wash your mouth.
