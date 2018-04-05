// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*!
 jQuery Waypoints - v1.1.3
 Copyright (c) 2011 Caleb Troughton
 Dual licensed under the MIT license and GPL license.
 https://github.com/imakewebthings/jquery-waypoints/blob/master/MIT-license.txt
 https://github.com/imakewebthings/jquery-waypoints/blob/master/GPL-license.txt
 */(function(e,t,n,r,i){"$:nomunge";var s=e(r),o="waypoint.reached",u=function(e,n){e.element.trigger(o,n);e.options.triggerOnce&&e.element[t]("destroy")},a=function(e,t){var n=t.waypoints.length-1;while(n>=0&&t.waypoints[n].element[0]!==e[0])n-=1;return n},f=[],l=function(t){e.extend(this,{element:e(t),oldScroll:0,waypoints:[],didScroll:!1,didResize:!1,doScroll:e.proxy(function(){var t=this.element.scrollTop(),r=t>this.oldScroll,i=this,s=e.grep(this.waypoints,function(e,n){return r?e.offset>i.oldScroll&&e.offset<=t:e.offset<=i.oldScroll&&e.offset>t}),o=s.length;(!this.oldScroll||!t)&&e[n]("refresh");this.oldScroll=t;if(!o)return;r||s.reverse();e.each(s,function(e,t){(t.options.continuous||e===o-1)&&u(t,[r?"down":"up"])})},this)});e(t).scroll(e.proxy(function(){if(!this.didScroll){this.didScroll=!0;r.setTimeout(e.proxy(function(){this.doScroll();this.didScroll=!1},this),e[n].settings.scrollThrottle)}},this)).resize(e.proxy(function(){if(!this.didResize){this.didResize=!0;r.setTimeout(e.proxy(function(){e[n]("refresh");this.didResize=!1},this),e[n].settings.resizeThrottle)}},this));s.load(e.proxy(function(){this.doScroll()},this))},c=function(t){var n=null;e.each(f,function(e,r){if(r.element[0]===t){n=r;return!1}});return n},h={init:function(r,i){this.each(function(){var s=e.fn[t].defaults.context,u,h=e(this);i&&i.context&&(s=i.context);e.isWindow(s)||(s=h.closest(s)[0]);u=c(s);if(!u){u=new l(s);f.push(u)}var p=a(h,u),d=p<0?e.fn[t].defaults:u.waypoints[p].options,v=e.extend({},d,i);v.offset=v.offset==="bottom-in-view"?function(){var t=e.isWindow(s)?e[n]("viewportHeight"):e(s).height();return t-e(this).outerHeight()}:v.offset;p<0?u.waypoints.push({element:h,offset:null,options:v}):u.waypoints[p].options=v;r&&h.bind(o,r)});e[n]("refresh");return this},remove:function(){return this.each(function(t,n){var r=e(n);e.each(f,function(e,t){var n=a(r,t);n>=0&&t.waypoints.splice(n,1)})})},destroy:function(){return this.unbind(o)[t]("remove")}},p={refresh:function(){e.each(f,function(t,r){var i=e.isWindow(r.element[0]),s=i?0:r.element.offset().top,o=i?e[n]("viewportHeight"):r.element.height(),a=i?0:r.element.scrollTop();e.each(r.waypoints,function(e,t){if(!t)return;var n=t.options.offset,i=t.offset;if(typeof t.options.offset=="function")n=t.options.offset.apply(t.element);else if(typeof t.options.offset=="string"){var f=parseFloat(t.options.offset);n=t.options.offset.indexOf("%")?Math.ceil(o*(f/100)):f}t.offset=t.element.offset().top-s+a-n;if(t.options.onlyOnScroll)return;i!==null&&r.oldScroll>i&&r.oldScroll<=t.offset?u(t,["up"]):i!==null&&r.oldScroll<i&&r.oldScroll>=t.offset?u(t,["down"]):!i&&a>t.offset&&u(t,["down"])});r.waypoints.sort(function(e,t){return e.offset-t.offset})})},viewportHeight:function(){return r.innerHeight?r.innerHeight:s.height()},aggregate:function(){var t=e();e.each(f,function(n,r){e.each(r.waypoints,function(e,n){t=t.add(n.element)})});return t}};e.fn[t]=function(n){if(h[n])return h[n].apply(this,Array.prototype.slice.call(arguments,1));if(typeof n=="function"||!n)return h.init.apply(this,arguments);if(typeof n=="object")return h.init.apply(this,[null,n]);e.error("Method "+n+" does not exist on jQuery "+t)};e.fn[t].defaults={continuous:!0,offset:0,triggerOnce:!1,context:r};e[n]=function(e){return p[e]?p[e].apply(this):p.aggregate()};e[n].settings={resizeThrottle:200,scrollThrottle:100};s.load(function(){e[n]("refresh")})})(jQuery,"waypoint","waypoints",this);



/*******

 ***	Anchor Slider by Cedric Dugas   ***
 *** Http://www.position-absolute.com ***

 Never have an anchor jumping your content, slide it.

 Don't forget to put an id to your anchor !
 You can use and modify this script for any project you want, but please leave this comment as credit.

 *****/



jQuery.fn.anchorAnimate = function(settings) {

    settings = jQuery.extend({
        speed : 1200
    }, settings);

    return this.each(function(){
        var caller = this;
        $(caller).click(function (event) {
            event.preventDefault();
            var locationHref = window.location.href;
            var elementClick = $(caller).attr("href");

            var destination = $(elementClick).offset().top;
            $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
                window.location.hash = elementClick;
            });
            return false;
        });
    });
};
