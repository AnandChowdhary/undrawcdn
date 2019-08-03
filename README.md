# Undraw CDN

⚠️ **This service has been retired**

Undraw illustrations, including all the ones in this repository, were originally MIT licensed. This means that I was free to make this CDN/API service. However, in light of their new license, which makes the illustrations open source but doesn't allow compilation and scraping, I'm retiring this service. [See issue #1](https://github.com/AnandChowdhary/undrawcdn/issues/1).

A CDN/API service for Undraw, the MIT-licensed illustrations by Katerina Limpitsouni.

## [undraw.oswaldlabs.com](https://undraw.oswaldlabs.com)

Hosted by [Heroku](https://heroku.com), CDN by [CloudFlare](https://cloudflare.com), running on the [Oswald Labs Platform](https://oswaldlabs.com).

## API

Visiting the `/` endpoint will return a list of all available illustrations:

```json
{
  "illustrations": [
    "startled.svg",
    "site-stats.svg",
    "add-to-cart.svg",
    "confirmation.svg",
    "fatherhood.svg",
    "dashboard.svg",
    "..."
```

## Illustrations

And then you can request any of the files, like this:

```html
<img src="https://undraw.oswaldlabs.com/startled.svg">
```

And color them to your choice like this by specifying the hex color of the color (without the hash) before the image:

```html
<img src="https://undraw.oswaldlabs.com/1abc9c/startled.svg">
```

You can also specify the CSS color name instead of hex code, if you prefer:

```html
<img src="https://undraw.oswaldlabs.com/purple/gifts.svg">
```

## License

All illustrations are created by Katerina Limpitsouni, released under the MIT License (https://undraw.co/license), just like this service.

## Privacy

This service doesn't track you. It runs on Heroku and is hosted in Europe. [`__cfduid`](https://support.cloudflare.com/hc/en-us/articles/200170156-What-does-the-Cloudflare-cfduid-cookie-do-) is a cookie used by CloudFlare for security that doesn't collect any identifyable information.
