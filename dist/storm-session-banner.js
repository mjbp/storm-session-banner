/**
 * @name storm-session-banner: Session-based dismissible banner
 * @version 0.2.1: Thu, 25 Feb 2016 18:19:37 GMT
 * @author stormid
 * @license MIT
 */'use strict';
    
var merge = require('merge'),
    classlist = require('dom-classlist'),
    defaults = {
        offClassName: 'off--banner',
        buttonClassName: 'js-banner-btn',
        sessionItemName: 'storm-banner',
        sessionItemValue: 'acknowledged',
        cb: null
    };

module.exports = {
    init: function(el, opts){
        if(typeof(global.sessionStorage) === 'undefined') { return; }
        
        this.settings = merge({}, defaults, opts);
        this.DOMElement = document.querySelector(el);
        
        
        if(!!!this.DOMElement) { throw new Error('Session banner cannot be initialised, no banner found'); }
        
        if(global.sessionStorage.getItem(this.settings.sessionItemName) !== this.settings.sessionItemValue) {
            classlist(this.DOMElement).remove(this.settings.offClassName);
            this.DOMElement.querySelector('.' + this.settings.buttonClassName).addEventListener('click', this.hide.bind(this));
        }

    },
    hide: function() {
        classlist(this.DOMElement).add(this.settings.offClassName);
        global.sessionStorage.setItem(this.settings.sessionItemName, this.settings.sessionItemValue);
        (!!this.settings.cb && typeof this.settings.cb === 'function') && this.settings.cb.call(this);
    }
};