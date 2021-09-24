# URL Longener on CF worker

A fun project for Cloudflare Summer Challenge to create Shady URLs.

## POST

Send a post with body json request to `https://yourdomain.worker.dev/` it will respond back with a longass URL.

### Sample Request

```json
{
	"url":"https://github.com"
}
```
### Sample Response 

```
{
  "result": {
    "target": "https://facebook.com",
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
