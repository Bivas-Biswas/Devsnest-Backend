```
we send get request, browser store the port in cache.
so when we send same request browser check the cache, if
the url present their, pick data from their.
--this is doing for best performance

But, if we send a password params, it's also store in
the cached so there is a security issue.
--so we use post request instead of get.
Because post request not cached.
```