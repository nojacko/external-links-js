# External Links JS

Never type target="_blank" ever again!

## Requirements

* JavaScript, nothing else.


## Usage

### Open All External Links In New Window
Open all external links in new windows.

```javascript
ExternalLinks();
```

### Whitelist Domains
Define a list of domains that shouldn't open in a new window.
```javascript
ExternalLinks(['nojacko.com', 'jamesjackson.am']);
```

*Note: The current domain is determined using:*
```javascript
location.hostname.replace('www.', '')
```

## Contributions
Absolutely welcome, but this library should ONLY open links in new windows. That's it!

If you can improve it, make it faster, reduce the size or add regex domain matching (some I want but don't have a need for just yet) then go for it!!!
