(function(e,r){function o(e){if(""===v)return e;e=e.charAt(0).toUpperCase()+e.substr(1);return v+e}var i=Math,T=r.createElement("div").style,v=function(){for(var e,r="t,webkitT,MozT,msT,OT".split(","),o=0,i=r.length;i>o;o++){e=r[o]+"ransform";if(e in T)return r[o].substr(0,r[o].length-1)}return!1}(),u=v?"-"+v.toLowerCase()+"-":"",b=o("transform"),C=o("transitionProperty"),z=o("transitionDuration"),n=o("transformOrigin"),l=o("transitionTimingFunction"),t=o("transitionDelay"),s=/android/gi.test(navigator.appVersion),a=/iphone|ipad/gi.test(navigator.appVersion),h=/hp-tablet/gi.test(navigator.appVersion),m=o("perspective")in T,c="ontouchstart"in e&&!h,d=v!==!1,p=o("transition")in T,f="onorientationchange"in e?"orientationchange":"resize",g=c?"touchstart":"mousedown",P=c?"touchmove":"mousemove",_=c?"touchend":"mouseup",y=c?"touchcancel":"mouseup",w=function(){if(v===!1)return!1;var e={"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"};return e[v]}(),x=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){return setTimeout(e,1)}}(),k=function(){return e.cancelRequestAnimationFrame||e.webkitCancelAnimationFrame||e.webkitCancelRequestAnimationFrame||e.mozCancelRequestAnimationFrame||e.oCancelRequestAnimationFrame||e.msCancelRequestAnimationFrame||clearTimeout}(),S=m?" translateZ(0)":"",D=function(o,i){var T,v=this;v.wrapper="object"==typeof o?o:r.getElementById(o);v.wrapper.style.overflow="hidden";v.scroller=v.wrapper.children[0];v.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:s,hideScrollbar:a,fadeScrollbar:a&&m,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(e){e.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(T in i)v.options[T]=i[T];v.x=v.options.x;v.y=v.options.y;v.options.useTransform=d&&v.options.useTransform;v.options.hScrollbar=v.options.hScroll&&v.options.hScrollbar;v.options.vScrollbar=v.options.vScroll&&v.options.vScrollbar;v.options.zoom=v.options.useTransform&&v.options.zoom;v.options.useTransition=p&&v.options.useTransition;v.options.zoom&&s&&(S="");v.scroller.style[C]=v.options.useTransform?u+"transform":"top left";v.scroller.style[z]="0";v.scroller.style[n]="0 0";v.options.useTransition&&(v.scroller.style[l]="cubic-bezier(0.33,0.66,0.66,1)");v.options.useTransform?v.scroller.style[b]="translate("+v.x+"px,"+v.y+"px)"+S:v.scroller.style.cssText+=";position:absolute;top:"+v.y+"px;left:"+v.x+"px";v.options.useTransition&&(v.options.fixedScrollbar=!0);v.refresh();v._bind(f,e);v._bind(g);if(!c&&"none"!=v.options.wheelAction){v._bind("DOMMouseScroll");v._bind("mousewheel")}v.options.checkDOMChanges&&(v.checkDOMTime=setInterval(function(){v._checkDOMChanges()},500))};D.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(e){var r=this;switch(e.type){case g:if(!c&&0!==e.button)return;r._start(e);break;case P:r._move(e);break;case _:case y:r._end(e);break;case f:r._resize();break;case"DOMMouseScroll":case"mousewheel":r._wheel(e);break;case w:r._transitionEnd(e)}},_checkDOMChanges:function(){this.moved||this.zoomed||this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale||this.refresh()},_scrollbar:function(e){var o,T=this;if(T[e+"Scrollbar"]){if(!T[e+"ScrollbarWrapper"]){o=r.createElement("div");T.options.scrollbarClass?o.className=T.options.scrollbarClass+e.toUpperCase():o.style.cssText="position:absolute;z-index:100;"+("h"==e?"height:7px;bottom:1px;left:2px;right:"+(T.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(T.hScrollbar?"7":"2")+"px;top:2px;right:1px");o.style.cssText+=";pointer-events:none;"+u+"transition-property:opacity;"+u+"transition-duration:"+(T.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(T.options.hideScrollbar?"0":"1");T.wrapper.appendChild(o);T[e+"ScrollbarWrapper"]=o;o=r.createElement("div");T.options.scrollbarClass||(o.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+u+"background-clip:padding-box;"+u+"box-sizing:border-box;"+("h"==e?"height:100%":"width:100%")+";"+u+"border-radius:3px;border-radius:3px");o.style.cssText+=";pointer-events:none;"+u+"transition-property:"+u+"transform;"+u+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+u+"transition-duration:0;"+u+"transform: translate(0,0)"+S;T.options.useTransition&&(o.style.cssText+=";"+u+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)");T[e+"ScrollbarWrapper"].appendChild(o);T[e+"ScrollbarIndicator"]=o}if("h"==e){T.hScrollbarSize=T.hScrollbarWrapper.clientWidth;T.hScrollbarIndicatorSize=i.max(i.round(T.hScrollbarSize*T.hScrollbarSize/T.scrollerW),8);T.hScrollbarIndicator.style.width=T.hScrollbarIndicatorSize+"px";T.hScrollbarMaxScroll=T.hScrollbarSize-T.hScrollbarIndicatorSize;T.hScrollbarProp=T.hScrollbarMaxScroll/T.maxScrollX}else{T.vScrollbarSize=T.vScrollbarWrapper.clientHeight;T.vScrollbarIndicatorSize=i.max(i.round(T.vScrollbarSize*T.vScrollbarSize/T.scrollerH),8);T.vScrollbarIndicator.style.height=T.vScrollbarIndicatorSize+"px";T.vScrollbarMaxScroll=T.vScrollbarSize-T.vScrollbarIndicatorSize;T.vScrollbarProp=T.vScrollbarMaxScroll/T.maxScrollY}T._scrollbarPos(e,!0)}else if(T[e+"ScrollbarWrapper"]){d&&(T[e+"ScrollbarIndicator"].style[b]="");T[e+"ScrollbarWrapper"].parentNode.removeChild(T[e+"ScrollbarWrapper"]);T[e+"ScrollbarWrapper"]=null;T[e+"ScrollbarIndicator"]=null}},_resize:function(){var e=this;setTimeout(function(){e.refresh()},s?200:0)},_pos:function(e,r){if(!this.zoomed){e=this.hScroll?e:0;r=this.vScroll?r:0;if(this.options.useTransform)this.scroller.style[b]="translate("+e+"px,"+r+"px) scale("+this.scale+")"+S;else{e=i.round(e);r=i.round(r);this.scroller.style.left=e+"px";this.scroller.style.top=r+"px"}this.x=e;this.y=r;this._scrollbarPos("h");this._scrollbarPos("v")}},_scrollbarPos:function(e,r){var o,T=this,v="h"==e?T.x:T.y;if(T[e+"Scrollbar"]){v=T[e+"ScrollbarProp"]*v;if(0>v){if(!T.options.fixedScrollbar){o=T[e+"ScrollbarIndicatorSize"]+i.round(3*v);8>o&&(o=8);T[e+"ScrollbarIndicator"].style["h"==e?"width":"height"]=o+"px"}v=0}else if(v>T[e+"ScrollbarMaxScroll"])if(T.options.fixedScrollbar)v=T[e+"ScrollbarMaxScroll"];else{o=T[e+"ScrollbarIndicatorSize"]-i.round(3*(v-T[e+"ScrollbarMaxScroll"]));8>o&&(o=8);T[e+"ScrollbarIndicator"].style["h"==e?"width":"height"]=o+"px";v=T[e+"ScrollbarMaxScroll"]+(T[e+"ScrollbarIndicatorSize"]-o)}T[e+"ScrollbarWrapper"].style[t]="0";T[e+"ScrollbarWrapper"].style.opacity=r&&T.options.hideScrollbar?"0":"1";T[e+"ScrollbarIndicator"].style[b]="translate("+("h"==e?v+"px,0)":"0,"+v+"px)")+S}},_start:function(r){var o,T,v,u,C,z=this,n=c?r.touches[0]:r;if(z.enabled){z.options.onBeforeScrollStart&&z.options.onBeforeScrollStart.call(z,r);(z.options.useTransition||z.options.zoom)&&z._transitionTime(0);z.moved=!1;z.animating=!1;z.zoomed=!1;z.distX=0;z.distY=0;z.absDistX=0;z.absDistY=0;z.dirX=0;z.dirY=0;if(z.options.zoom&&c&&r.touches.length>1){u=i.abs(r.touches[0].pageX-r.touches[1].pageX);C=i.abs(r.touches[0].pageY-r.touches[1].pageY);z.touchesDistStart=i.sqrt(u*u+C*C);z.originX=i.abs(r.touches[0].pageX+r.touches[1].pageX-2*z.wrapperOffsetLeft)/2-z.x;z.originY=i.abs(r.touches[0].pageY+r.touches[1].pageY-2*z.wrapperOffsetTop)/2-z.y;z.options.onZoomStart&&z.options.onZoomStart.call(z,r)}if(z.options.momentum){if(z.options.useTransform){o=getComputedStyle(z.scroller,null)[b].replace(/[^0-9\-.,]/g,"").split(",");T=+(o[12]||o[4]);v=+(o[13]||o[5])}else{T=+getComputedStyle(z.scroller,null).left.replace(/[^0-9-]/g,"");v=+getComputedStyle(z.scroller,null).top.replace(/[^0-9-]/g,"")}if(T!=z.x||v!=z.y){z.options.useTransition?z._unbind(w):k(z.aniTime);z.steps=[];z._pos(T,v);z.options.onScrollEnd&&z.options.onScrollEnd.call(z)}}z.absStartX=z.x;z.absStartY=z.y;z.startX=z.x;z.startY=z.y;z.pointX=n.pageX;z.pointY=n.pageY;z.startTime=r.timeStamp||Date.now();z.options.onScrollStart&&z.options.onScrollStart.call(z,r);z._bind(P,e);z._bind(_,e);z._bind(y,e)}},_move:function(e){var r,o,T,v=this,u=c?e.touches[0]:e,C=u.pageX-v.pointX,z=u.pageY-v.pointY,n=v.x+C,l=v.y+z,t=e.timeStamp||Date.now();v.options.onBeforeScrollMove&&v.options.onBeforeScrollMove.call(v,e);if(v.options.zoom&&c&&e.touches.length>1){r=i.abs(e.touches[0].pageX-e.touches[1].pageX);o=i.abs(e.touches[0].pageY-e.touches[1].pageY);v.touchesDist=i.sqrt(r*r+o*o);v.zoomed=!0;T=1/v.touchesDistStart*v.touchesDist*this.scale;v.options.zoomMin>T?T=.5*v.options.zoomMin*Math.pow(2,T/v.options.zoomMin):T>v.options.zoomMax&&(T=2*v.options.zoomMax*Math.pow(.5,v.options.zoomMax/T));v.lastScale=T/this.scale;n=this.originX-this.originX*v.lastScale+this.x,l=this.originY-this.originY*v.lastScale+this.y;this.scroller.style[b]="translate("+n+"px,"+l+"px) scale("+T+")"+S;v.options.onZoom&&v.options.onZoom.call(v,e)}else{v.pointX=u.pageX;v.pointY=u.pageY;(n>0||v.maxScrollX>n)&&(n=v.options.bounce?v.x+C/2:n>=0||v.maxScrollX>=0?0:v.maxScrollX);(l>v.minScrollY||v.maxScrollY>l)&&(l=v.options.bounce?v.y+z/2:l>=v.minScrollY||v.maxScrollY>=0?v.minScrollY:v.maxScrollY);v.distX+=C;v.distY+=z;v.absDistX=i.abs(v.distX);v.absDistY=i.abs(v.distY);if(!(6>v.absDistX&&6>v.absDistY)){if(v.options.lockDirection)if(v.absDistX>v.absDistY+5){l=v.y;z=0}else if(v.absDistY>v.absDistX+5){n=v.x;C=0}v.moved=!0;v._pos(n,l);v.dirX=C>0?-1:0>C?1:0;v.dirY=z>0?-1:0>z?1:0;if(t-v.startTime>300){v.startTime=t;v.startX=v.x;v.startY=v.y}v.options.onScrollMove&&v.options.onScrollMove.call(v,e)}}},_end:function(o){if(!c||0===o.touches.length){var T,v,u,C,n,l,t,s=this,a=c?o.changedTouches[0]:o,h={dist:0,time:0},m={dist:0,time:0},d=(o.timeStamp||Date.now())-s.startTime,p=s.x,f=s.y;s._unbind(P,e);s._unbind(_,e);s._unbind(y,e);s.options.onBeforeScrollEnd&&s.options.onBeforeScrollEnd.call(s,o);if(s.zoomed){t=s.scale*s.lastScale;t=Math.max(s.options.zoomMin,t);t=Math.min(s.options.zoomMax,t);s.lastScale=t/s.scale;s.scale=t;s.x=s.originX-s.originX*s.lastScale+s.x;s.y=s.originY-s.originY*s.lastScale+s.y;s.scroller.style[z]="200ms";s.scroller.style[b]="translate("+s.x+"px,"+s.y+"px) scale("+s.scale+")"+S;s.zoomed=!1;s.refresh();s.options.onZoomEnd&&s.options.onZoomEnd.call(s,o)}else if(s.moved){if(300>d&&s.options.momentum){h=p?s._momentum(p-s.startX,d,-s.x,s.scrollerW-s.wrapperW+s.x,s.options.bounce?s.wrapperW:0):h;m=f?s._momentum(f-s.startY,d,-s.y,0>s.maxScrollY?s.scrollerH-s.wrapperH+s.y-s.minScrollY:0,s.options.bounce?s.wrapperH:0):m;p=s.x+h.dist;f=s.y+m.dist;(s.x>0&&p>0||s.x<s.maxScrollX&&s.maxScrollX>p)&&(h={dist:0,time:0});(s.y>s.minScrollY&&f>s.minScrollY||s.y<s.maxScrollY&&s.maxScrollY>f)&&(m={dist:0,time:0})}if(h.dist||m.dist){n=i.max(i.max(h.time,m.time),10);if(s.options.snap){u=p-s.absStartX;C=f-s.absStartY;if(i.abs(u)<s.options.snapThreshold&&i.abs(C)<s.options.snapThreshold)s.scrollTo(s.absStartX,s.absStartY,200);else{l=s._snap(p,f);p=l.x;f=l.y;n=i.max(l.time,n)}}s.scrollTo(i.round(p),i.round(f),n);s.options.onTouchEnd&&s.options.onTouchEnd.call(s,o)}else if(s.options.snap){u=p-s.absStartX;C=f-s.absStartY;if(i.abs(u)<s.options.snapThreshold&&i.abs(C)<s.options.snapThreshold)s.scrollTo(s.absStartX,s.absStartY,200);else{l=s._snap(s.x,s.y);(l.x!=s.x||l.y!=s.y)&&s.scrollTo(l.x,l.y,l.time)}s.options.onTouchEnd&&s.options.onTouchEnd.call(s,o)}else{s._resetPos(200);s.options.onTouchEnd&&s.options.onTouchEnd.call(s,o)}}else{if(c)if(s.doubleTapTimer&&s.options.zoom){clearTimeout(s.doubleTapTimer);s.doubleTapTimer=null;s.options.onZoomStart&&s.options.onZoomStart.call(s,o);s.zoom(s.pointX,s.pointY,1==s.scale?s.options.doubleTapZoom:1);s.options.onZoomEnd&&setTimeout(function(){s.options.onZoomEnd.call(s,o)},200)}else this.options.handleClick&&(s.doubleTapTimer=setTimeout(function(){s.doubleTapTimer=null;T=a.target;for(;1!=T.nodeType;)T=T.parentNode;if("SELECT"!=T.tagName&&"INPUT"!=T.tagName&&"TEXTAREA"!=T.tagName){v=r.createEvent("MouseEvents");v.initMouseEvent("click",!0,!0,o.view,1,a.screenX,a.screenY,a.clientX,a.clientY,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,0,null);v._fake=!0;T.dispatchEvent(v)}},s.options.zoom?250:0));s._resetPos(400);s.options.onTouchEnd&&s.options.onTouchEnd.call(s,o)}}},_resetPos:function(e){var r=this,o=r.x>=0?0:r.x<r.maxScrollX?r.maxScrollX:r.x,i=r.y>=r.minScrollY||r.maxScrollY>0?r.minScrollY:r.y<r.maxScrollY?r.maxScrollY:r.y;if(o!=r.x||i!=r.y)r.scrollTo(o,i,e||0);else{if(r.moved){r.moved=!1;r.options.onScrollEnd&&r.options.onScrollEnd.call(r)}if(r.hScrollbar&&r.options.hideScrollbar){"webkit"==v&&(r.hScrollbarWrapper.style[t]="300ms");r.hScrollbarWrapper.style.opacity="0"}if(r.vScrollbar&&r.options.hideScrollbar){"webkit"==v&&(r.vScrollbarWrapper.style[t]="300ms");r.vScrollbarWrapper.style.opacity="0"}}},_wheel:function(e){var r,o,i,T,v,u=this;if("wheelDeltaX"in e){r=e.wheelDeltaX/12;o=e.wheelDeltaY/12}else if("wheelDelta"in e)r=o=e.wheelDelta/12;else{if(!("detail"in e))return;r=o=3*-e.detail}if("zoom"!=u.options.wheelAction){i=u.x+r;T=u.y+o;i>0?i=0:u.maxScrollX>i&&(i=u.maxScrollX);T>u.minScrollY?T=u.minScrollY:u.maxScrollY>T&&(T=u.maxScrollY);0>u.maxScrollY&&u.scrollTo(i,T,0)}else{v=u.scale*Math.pow(2,1/3*(o?o/Math.abs(o):0));u.options.zoomMin>v&&(v=u.options.zoomMin);v>u.options.zoomMax&&(v=u.options.zoomMax);if(v!=u.scale){!u.wheelZoomCount&&u.options.onZoomStart&&u.options.onZoomStart.call(u,e);u.wheelZoomCount++;u.zoom(e.pageX,e.pageY,v,400);setTimeout(function(){u.wheelZoomCount--;!u.wheelZoomCount&&u.options.onZoomEnd&&u.options.onZoomEnd.call(u,e)},400)}}},_transitionEnd:function(e){var r=this;if(e.target==r.scroller){r._unbind(w);r._startAni()}},_startAni:function(){var e,r,o,T=this,v=T.x,u=T.y,b=Date.now();if(!T.animating)if(T.steps.length){e=T.steps.shift();e.x==v&&e.y==u&&(e.time=0);T.animating=!0;T.moved=!0;if(T.options.useTransition){T._transitionTime(e.time);T._pos(e.x,e.y);T.animating=!1;e.time?T._bind(w):T._resetPos(0)}else{o=function(){var C,z,n=Date.now();if(n>=b+e.time){T._pos(e.x,e.y);T.animating=!1;T.options.onAnimationEnd&&T.options.onAnimationEnd.call(T);T._startAni()}else{n=(n-b)/e.time-1;r=i.sqrt(1-n*n);C=(e.x-v)*r+v;z=(e.y-u)*r+u;T._pos(C,z);T.animating&&(T.aniTime=x(o))}};o()}}else T._resetPos(400)},_transitionTime:function(e){e+="ms";this.scroller.style[z]=e;this.hScrollbar&&(this.hScrollbarIndicator.style[z]=e);this.vScrollbar&&(this.vScrollbarIndicator.style[z]=e)},_momentum:function(e,r,o,T,v){var u=6e-4,b=i.abs(e)/r,C=b*b/(2*u),z=0,n=0;if(e>0&&C>o){n=v/(6/(C/b*u));o+=n;b=b*o/C;C=o}else if(0>e&&C>T){n=v/(6/(C/b*u));T+=n;b=b*T/C;C=T}C*=0>e?-1:1;z=b/u;return{dist:C,time:i.round(z)}},_offset:function(e){for(var r=-e.offsetLeft,o=-e.offsetTop;e=e.offsetParent;){r-=e.offsetLeft;o-=e.offsetTop}if(e!=this.wrapper){r*=this.scale;o*=this.scale}return{left:r,top:o}},_snap:function(e,r){var o,T,v,u,b,C,z=this;v=z.pagesX.length-1;for(o=0,T=z.pagesX.length;T>o;o++)if(e>=z.pagesX[o]){v=o;break}v==z.currPageX&&v>0&&0>z.dirX&&v--;e=z.pagesX[v];b=i.abs(e-z.pagesX[z.currPageX]);b=b?500*(i.abs(z.x-e)/b):0;z.currPageX=v;v=z.pagesY.length-1;for(o=0;v>o;o++)if(r>=z.pagesY[o]){v=o;break}v==z.currPageY&&v>0&&0>z.dirY&&v--;r=z.pagesY[v];C=i.abs(r-z.pagesY[z.currPageY]);C=C?500*(i.abs(z.y-r)/C):0;z.currPageY=v;u=i.round(i.max(b,C))||200;return{x:e,y:r,time:u}},_bind:function(e,r,o){(r||this.scroller).addEventListener(e,this,!!o)},_unbind:function(e,r,o){(r||this.scroller).removeEventListener(e,this,!!o)},destroy:function(){var r=this;r.scroller.style[b]="";r.hScrollbar=!1;r.vScrollbar=!1;r._scrollbar("h");r._scrollbar("v");r._unbind(f,e);r._unbind(g);r._unbind(P,e);r._unbind(_,e);r._unbind(y,e);if(!r.options.hasTouch){r._unbind("DOMMouseScroll");r._unbind("mousewheel")}r.options.useTransition&&r._unbind(w);r.options.checkDOMChanges&&clearInterval(r.checkDOMTime);r.options.onDestroy&&r.options.onDestroy.call(r)},refresh:function(){var e,r,o,T,v=this,u=0,b=0;v.scale<v.options.zoomMin&&(v.scale=v.options.zoomMin);v.wrapperW=v.wrapper.clientWidth||1;v.wrapperH=v.wrapper.clientHeight||1;v.minScrollY=-v.options.topOffset||0;v.scrollerW=i.round(v.scroller.offsetWidth*v.scale);v.scrollerH=i.round((v.scroller.offsetHeight+v.minScrollY)*v.scale);v.maxScrollX=v.wrapperW-v.scrollerW;v.maxScrollY=v.wrapperH-v.scrollerH+v.minScrollY;v.dirX=0;v.dirY=0;v.options.onRefresh&&v.options.onRefresh.call(v);v.hScroll=v.options.hScroll&&0>v.maxScrollX;v.vScroll=v.options.vScroll&&(!v.options.bounceLock&&!v.hScroll||v.scrollerH>v.wrapperH);v.hScrollbar=v.hScroll&&v.options.hScrollbar;v.vScrollbar=v.vScroll&&v.options.vScrollbar&&v.scrollerH>v.wrapperH;e=v._offset(v.wrapper);v.wrapperOffsetLeft=-e.left;v.wrapperOffsetTop=-e.top;if("string"==typeof v.options.snap){v.pagesX=[];v.pagesY=[];T=v.scroller.querySelectorAll(v.options.snap);for(r=0,o=T.length;o>r;r++){u=v._offset(T[r]);u.left+=v.wrapperOffsetLeft;u.top+=v.wrapperOffsetTop;v.pagesX[r]=u.left<v.maxScrollX?v.maxScrollX:u.left*v.scale;v.pagesY[r]=u.top<v.maxScrollY?v.maxScrollY:u.top*v.scale}}else if(v.options.snap){v.pagesX=[];for(;u>=v.maxScrollX;){v.pagesX[b]=u;u-=v.wrapperW;b++}v.maxScrollX%v.wrapperW&&(v.pagesX[v.pagesX.length]=v.maxScrollX-v.pagesX[v.pagesX.length-1]+v.pagesX[v.pagesX.length-1]);u=0;b=0;v.pagesY=[];for(;u>=v.maxScrollY;){v.pagesY[b]=u;u-=v.wrapperH;b++}v.maxScrollY%v.wrapperH&&(v.pagesY[v.pagesY.length]=v.maxScrollY-v.pagesY[v.pagesY.length-1]+v.pagesY[v.pagesY.length-1])}v._scrollbar("h");v._scrollbar("v");if(!v.zoomed){v.scroller.style[z]="0";v._resetPos(400)}},scrollTo:function(e,r,o,i){var T,v,u=this,b=e;u.stop();b.length||(b=[{x:e,y:r,time:o,relative:i}]);for(T=0,v=b.length;v>T;T++){if(b[T].relative){b[T].x=u.x-b[T].x;b[T].y=u.y-b[T].y}u.steps.push({x:b[T].x,y:b[T].y,time:b[T].time||0})}u._startAni()},scrollToElement:function(e,r){var o,T=this;e=e.nodeType?e:T.scroller.querySelector(e);if(e){o=T._offset(e);o.left+=T.wrapperOffsetLeft;o.top+=T.wrapperOffsetTop;o.left=o.left>0?0:o.left<T.maxScrollX?T.maxScrollX:o.left;o.top=o.top>T.minScrollY?T.minScrollY:o.top<T.maxScrollY?T.maxScrollY:o.top;r=void 0===r?i.max(2*i.abs(o.left),2*i.abs(o.top)):r;T.scrollTo(o.left,o.top,r)}},scrollToPage:function(e,r,o){var i,T,v=this;o=void 0===o?400:o;v.options.onScrollStart&&v.options.onScrollStart.call(v);if(v.options.snap){e="next"==e?v.currPageX+1:"prev"==e?v.currPageX-1:e;r="next"==r?v.currPageY+1:"prev"==r?v.currPageY-1:r;e=0>e?0:e>v.pagesX.length-1?v.pagesX.length-1:e;r=0>r?0:r>v.pagesY.length-1?v.pagesY.length-1:r;v.currPageX=e;v.currPageY=r;i=v.pagesX[e];T=v.pagesY[r]}else{i=-v.wrapperW*e;T=-v.wrapperH*r;v.maxScrollX>i&&(i=v.maxScrollX);v.maxScrollY>T&&(T=v.maxScrollY)}v.scrollTo(i,T,o)},disable:function(){this.stop();this._resetPos(0);this.enabled=!1;this._unbind(P,e);this._unbind(_,e);this._unbind(y,e)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(w):k(this.aniTime);this.steps=[];this.moved=!1;this.animating=!1},zoom:function(e,r,o,i){var T=this,v=o/T.scale;if(T.options.useTransform){T.zoomed=!0;i=void 0===i?200:i;e=e-T.wrapperOffsetLeft-T.x;r=r-T.wrapperOffsetTop-T.y;T.x=e-e*v+T.x;T.y=r-r*v+T.y;T.scale=o;T.refresh();T.x=T.x>0?0:T.x<T.maxScrollX?T.maxScrollX:T.x;T.y=T.y>T.minScrollY?T.minScrollY:T.y<T.maxScrollY?T.maxScrollY:T.y;T.scroller.style[z]=i+"ms";T.scroller.style[b]="translate("+T.x+"px,"+T.y+"px) scale("+o+")"+S;T.zoomed=!1}},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}};T=null;"undefined"!=typeof exports?exports.iScroll=D:e.iScroll=D})(window,document);