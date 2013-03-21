(function(e,r){function o(e){l[l.length]=e}function i(e){n.className=n.className.replace(RegExp("\\b"+e+"\\b"),"")}function T(e,r){for(var o=0,i=e.length;i>o;o++)r.call(e,e[o],o)}function v(){n.className=n.className.replace(/ (w-|eq-|gt-|gte-|lt-|lte-|portrait|no-portrait|landscape|no-landscape)\d+/g,"");var r=e.innerWidth||n.clientWidth,i=e.outerWidth||e.screen.width;a.screen.innerWidth=r;a.screen.outerWidth=i;o("w-"+r);T(t.screens,function(e){r>e?(t.screensCss.gt&&o("gt-"+e),t.screensCss.gte&&o("gte-"+e)):e>r?(t.screensCss.lt&&o("lt-"+e),t.screensCss.lte&&o("lte-"+e)):r===e&&(t.screensCss.lte&&o("lte-"+e),t.screensCss.eq&&o("e-q"+e),t.screensCss.gte&&o("gte-"+e))});var i=e.innerHeight||n.clientHeight,v=e.outerHeight||e.screen.height;a.screen.innerHeight=i;a.screen.outerHeight=v;a.feature("portrait",i>r);a.feature("landscape",r>i)}function u(){e.clearTimeout(f);f=e.setTimeout(v,100)}var b=e.document,C=e.navigator,z=e.location,n=b.documentElement,l=[],t={screens:[240,320,480,640,768,800,1024,1280,1440,1680,1920],screensCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!1},browsers:[{ie:{min:6,max:10}}],browserCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!0},section:"-section",page:"-page",head:"head"};if(e.head_conf)for(var s in e.head_conf)e.head_conf[s]!==r&&(t[s]=e.head_conf[s]);var a=e[t.head]=function(){a.ready.apply(null,arguments)};a.feature=function(e,r,T){if(!e)return n.className+=" "+l.join(" "),l=[],a;"[object Function]"===Object.prototype.toString.call(r)&&(r=r.call());o((r?"":"no-")+e);a[e]=!!r;T||(i("no-"+e),i(e),a.feature());return a};a.feature("js",!0);s=C.userAgent.toLowerCase();C=/mobile|midp/.test(s);a.feature("mobile",C,!0);a.feature("desktop",!C,!0);s=/(chrome|firefox)[ \/]([\w.]+)/.exec(s)||/(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(android)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(msie) ([\w.]+)/.exec(s)||[];C=s[1];s=parseFloat(s[2]);switch(C){case"msie":C="ie";s=b.documentMode||s;break;case"firefox":C="ff";break;case"ipod":case"ipad":case"iphone":C="ios";break;case"webkit":C="safari"}a.browser={name:C,version:s};a.browser[C]=!0;for(var h=0,m=t.browsers.length;m>h;h++)for(var c in t.browsers[h])if(C===c){o(c);for(var d=t.browsers[h][c].max,p=t.browsers[h][c].min;d>=p;p++)s>p?(t.browserCss.gt&&o("gt-"+c+p),t.browserCss.gte&&o("gte-"+c+p)):p>s?(t.browserCss.lt&&o("lt-"+c+p),t.browserCss.lte&&o("lte-"+c+p)):s===p&&(t.browserCss.lte&&o("lte-"+c+p),t.browserCss.eq&&o("eq-"+c+p),t.browserCss.gte&&o("gte-"+c+p))}else o("no-"+c);"ie"===C&&9>s&&T("abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" "),function(e){b.createElement(e)});T(z.pathname.split("/"),function(e,i){if(this.length>2&&this[i+1]!==r)i&&o(this.slice(1,i+1).join("-").toLowerCase()+t.section);else{var T=e||"index",v=T.indexOf(".");v>0&&(T=T.substring(0,v));n.id=T.toLowerCase()+t.page;i||o("root"+t.section)}});a.screen={height:e.screen.height,width:e.screen.width};v();var f=0;e.addEventListener?e.addEventListener("resize",u,!1):e.attachEvent("onresize",u)})(window);(function(e,r){function o(e){var o,i=e.charAt(0).toUpperCase()+e.substr(1),e=(e+" "+b.join(i+" ")+i).split(" ");e:{for(o in e)if(v[e[o]]!==r){o=!0;break e}o=!1}return!!o}var i,T=e.document.createElement("i"),v=T.style,u=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),b=["Webkit","Moz","O","ms","Khtml"],C=e[e.head_conf&&e.head_conf.head||"head"],z={gradient:function(){v.cssText=("background-image:"+u.join("gradient(linear,left top,right bottom,from(#9f9),to(#fff));background-image:")+u.join("linear-gradient(left top,#eee,#fff);background-image:")).slice(0,-17);return!!v.backgroundImage},rgba:function(){v.cssText="background-color:rgba(0,0,0,0.5)";return!!v.backgroundColor},opacity:function(){return""===T.style.opacity},textshadow:function(){return""===v.textShadow},multiplebgs:function(){v.cssText="background:url(//:),url(//:),red url(//:)";return/(url\s*\(.*?){3}/.test(v.background)},boxshadow:function(){return o("boxShadow")},borderimage:function(){return o("borderImage")},borderradius:function(){return o("borderRadius")},cssreflections:function(){return o("boxReflect")},csstransforms:function(){return o("transform")},csstransitions:function(){return o("transition")},touch:function(){return"ontouchstart"in e},retina:function(){return e.devicePixelRatio>1},fontface:function(){var e=C.browser.version;switch(C.browser.name){case"ie":return e>=9;case"chrome":return e>=13;case"ff":return e>=6;case"ios":return e>=5;case"android":return!1;case"webkit":return e>=5.1;case"opera":return e>=10;default:return!1}}};for(i in z)z[i]&&C.feature(i,z[i].call(),!0);C.feature()})(window);(function(e,r){function o(){}function i(e,r){if(e){"object"==typeof e&&(e=[].slice.call(e));for(var o=0,i=e.length;i>o;o++)r.call(e,e[o],o)}}function T(e,o){var i=Object.prototype.toString.call(o).slice(8,-1);return o!==r&&null!==o&&i===e}function v(e){return T("Function",e)}function u(e){e=e||o;e._done||(e(),e._done=1)}function b(e){var r={};if("object"==typeof e)for(var o in e)e[o]&&(r={name:o,url:e[o]});else r=e.split("/"),r=r[r.length-1],o=r.indexOf("?"),r={name:-1!==o?r.substring(0,o):r,url:e};return(e=p[r.name])&&e.url===r.url?e:p[r.name]=r}function C(e){var r,e=e||p;for(r in e)if(e.hasOwnProperty(r)&&e[r].state!==w)return!1;return!0}function z(e,r){r=r||o;e.state===w?r():e.state===y?P.ready(e.name,r):e.state===_?e.onpreload.push(function(){z(e,r)}):(e.state=y,n(e,function(){e.state=w;r();i(d[e.name],function(e){u(e)});a&&C()&&i(d.ALL,function(e){u(e)})}))}function n(r,i){var T,i=i||o;/\.css[^\.]*$/.test(r.url)?(T=h.createElement("link"),T.type="text/"+(r.type||"css"),T.rel="stylesheet",T.href=r.url):(T=h.createElement("script"),T.type="text/"+(r.type||"javascript"),T.src=r.url);T.onload=T.onreadystatechange=function(r){r=r||e.event;("load"===r.type||/loaded|complete/.test(T.readyState)&&(!h.documentMode||9>h.documentMode))&&(T.onload=T.onreadystatechange=T.onerror=null,i())};T.onerror=function(){T.onload=T.onreadystatechange=T.onerror=null;i()};T.async=!1;T.defer=!1;var v=h.head||h.getElementsByTagName("head")[0];v.insertBefore(T,v.lastChild)}function l(){h.body?a||(a=!0,i(m,function(e){u(e)})):(e.clearTimeout(P.readyTimeout),P.readyTimeout=e.setTimeout(l,50))}function t(){h.addEventListener?(h.removeEventListener("DOMContentLoaded",t,!1),l()):"complete"===h.readyState&&(h.detachEvent("onreadystatechange",t),l())}var s,a,h=e.document,m=[],c=[],d={},p={},f="async"in h.createElement("script")||"MozAppearance"in h.documentElement.style||e.opera,g=e.head_conf&&e.head_conf.head||"head",P=e[g]=e[g]||function(){P.ready.apply(null,arguments)},_=1,y=3,w=4;P.load=f?function(){var e=arguments,r=e[e.length-1],o={};v(r)||(r=null);i(e,function(i,T){i!==r&&(i=b(i),o[i.name]=i,z(i,r&&T===e.length-2?function(){C(o)&&u(r)}:null))});return P}:function(){var e=arguments,o=[].slice.call(e,1),T=o[0];if(!s)return c.push(function(){P.load.apply(null,e)}),P;T?(i(o,function(e){if(!v(e)){var o=b(e);o.state===r&&(o.state=_,o.onpreload=[],n({url:o.url,type:"cache"},function(){o.state=2;i(o.onpreload,function(e){e.call()})}))}}),z(b(e[0]),v(T)?T:function(){P.load.apply(null,o)})):z(b(e[0]));return P};P.js=P.load;P.test=function(e,r,i,v){e="object"==typeof e?e:{test:e,success:r?T("Array",r)?r:[r]:!1,failure:i?T("Array",i)?i:[i]:!1,callback:v||o};(r=!!e.test)&&e.success?(e.success.push(e.callback),P.load.apply(null,e.success)):!r&&e.failure?(e.failure.push(e.callback),P.load.apply(null,e.failure)):v();return P};P.ready=function(e,r){if(e===h)return a?u(r):m.push(r),P;v(e)&&(r=e,e="ALL");if("string"!=typeof e||!v(r))return P;var o=p[e];if(o&&o.state===w||"ALL"===e&&C()&&a)return u(r),P;(o=d[e])?o.push(r):d[e]=[r];return P};P.ready(h,function(){C()&&i(d.ALL,function(e){u(e)});P.feature&&P.feature("domloaded",!0)});if("complete"===h.readyState)l();else if(h.addEventListener)h.addEventListener("DOMContentLoaded",t,!1),e.addEventListener("load",l,!1);else{h.attachEvent("onreadystatechange",t);e.attachEvent("onload",l);var k=!1;try{k=null==e.frameElement&&h.documentElement}catch(x){}k&&k.doScroll&&function S(){if(!a){try{k.doScroll("left")}catch(r){e.clearTimeout(P.readyTimeout);P.readyTimeout=e.setTimeout(S,50);return}l()}}()}setTimeout(function(){s=!0;i(c,function(e){e()})},300)})(window);