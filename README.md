#Storm Session Banner

Session-based dismissible banner

##Usage
```
npm install storm-session-banner
```
```
var banner = require('storm-session-banner')
banner.init('js-banner',  {cb: function() {
    console.log('Banner dismissed');
}});
```

###Options
    - offClassName, String, default: 'off--banner', CSS className for hidden banner
    - buttonClassName, String, default: 'js-banner-btn', CSS selector for close button
    - sessionItemName, String, default: 'storm-banner', session storage variable name
    - sessionItemValue, String, default: 'acknowledged', session storage variable value
    - cb, function, default: null, callback function called after banner is closed