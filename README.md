# URL Longener on CF worker

A fun project for Cloudflare Summer Challenge to create Shady URLs.

# POST

Send a post with body json request to `https://yourdomain.worker.dev/` it will respond back with a longass URL

```json
{
  "url": "https://<targeturl>.com"
}
```

# GET

- Hit `https://yourdomain.worker.dev/query/<verysillylongurl>` will return what the longass URL is
- Go to `https://yourdomain.worker.dev/<verysillylongurl>` will redirect to target URL
