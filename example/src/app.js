var STORM = (function(w, d) {
	'use strict';
    
    var Banner = require('./libs/storm-session-banner'),
        init = function() {
            Banner.init('.js-banner', {
                cb: function() {
                    console.log('Banner closed');
                }
            });
        };
	
	return {
		init: init
	};
	
})(window, document, undefined);

if('addEventListener' in window) window.addEventListener('DOMContentLoaded', STORM.init, false);