/*! formstone v1.3.0 [viewer.js] 2017-01-13 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){e(),Z.on("scroll",e),T=b.$body}function d(){Y.iterate.call(_,Q)}function e(){$=Z.scrollTop()+b.windowHeight,$<0&&($=0)}function f(){Y.iterate.call(_,L)}function g(){if(_=a(V.base),_.length){if(!ba){aa=a('meta[name="viewport"]'),ca=!!aa.length&&aa.attr("content");var b="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";aa.length?aa.attr("content",b):aa=a("head").append('<meta name="viewport" content="'+b+'">'),h(),ba=!0}}else ba&&(ca?aa.attr("content",ca):aa.remove(),i(),aa=[],ca=null,ba=!1)}function h(){T.on(X.gestureChange,j).on(X.gestureStart,j).on(X.gestureEnd,j)}function i(){T.off(X.gestureChange).off(X.gestureStart).off(X.gestureEnd)}function j(a){a.preventDefault()}function k(b){var c,d="",e=[W.control,W.control_previous].join(" "),f=[W.control,W.control_next].join(" "),h=[W.control,W.control_zoom_in].join(" "),i=[W.control,W.control_zoom_out].join(" ");b.thisClasses=[W.base,W.loading,b.customClass,b.theme],b.images=[],b.source=!1,b.gallery=!1,b.tapTimer=null,b.action=!1,b.isRendering=!1,b.isZooming=!1,b.isAnimating=!1,b.keyDownTime=1,b.$images=this.find("img").addClass(W.source),b.index=0,b.total=b.$images.length-1,b.customControls="object"===a.type(b.controls)&&b.controls.zoom_in&&b.controls.zoom_out,b.$images.length>1&&(b.gallery=!0,b.thisClasses.push(W.gallery),!b.customControls||b.controls.previous&&b.controls.next||(b.customControls=!1));for(var j=0;j<b.$images.length;j++)c=b.$images.eq(j),b.images.push(c.attr("src"));d+='<div class="'+W.wrapper+'">',d+='<div class="'+W.loading_icon+'"></div>',d+='<div class="'+W.viewport+'"></div>',d+="</div>",b.controls&&!b.customControls&&(d+='<div class="'+W.controls+'">',d+='<button type="button" class="'+e+'">'+b.labels.previous+"</button>",d+='<button type="button" class="'+i+'">'+b.labels.zoom_out+"</button>",d+='<button type="button" class="'+h+'">'+b.labels.zoom_in+"</button>",d+='<button type="button" class="'+f+'">'+b.labels.next+"</button>",d+="</div>"),this.addClass(b.thisClasses.join(" ")).prepend(d),b.$wrapper=this.find(V.wrapper),b.$viewport=this.find(V.viewport),b.customControls?(b.$controls=a(b.controls.container).addClass([W.controls,W.controls_custom].join(" ")),b.$controlPrevious=a(b.controls.previous).addClass(e),b.$controlNext=a(b.controls.next).addClass(f),b.$controlZoomIn=a(b.controls.zoom_in).addClass(h),b.$controlZoomOut=a(b.controls.zoom_out).addClass(i)):(b.$controls=this.find(V.controls),b.$controlPrevious=this.find(V.control_previous),b.$controlNext=this.find(V.control_next),b.$controlZoomIn=this.find(V.control_zoom_in),b.$controlZoomOut=this.find(V.control_zoom_out)),b.$controlItems=b.$controlPrevious.add(b.$controlNext),b.$controlZooms=b.$controlZoomIn.add(b.$controlZoomOut),g(),b.$controlItems.on(X.click,b,O),b.$controlZooms.on([X.touchStart,X.mouseDown].join(" "),b,H).on([X.touchEnd,X.mouseUp].join(" "),b,K),n(b,b.images[b.index],!0),P(b)}function l(a){a.$wrapper.remove(),a.$image.removeClass(W.source),a.controls&&!a.customControls&&a.$controls.remove(),a.customControls&&(a.$controls.removeClass([W.controls,W.controls_custom].join(" ")),a.$controlItems.off(X.click).removeClass([W.control,W.control_previous,W.control_next].join(" ")),a.$controlZooms.off([X.touchStart,X.mouseDown].join(" ")).off([X.touchStart,X.mouseDown].join(" ")).off([X.touchEnd,X.mouseUp].join(" ")).removeClass([W.control,W.control_zoom_in,W.control_zoom_out].join(" "))),this.removeClass(a.thisClasses.join(" ")).off(X.namespace),g()}function m(a,b){a.index=0,"string"==typeof b?(a.total=0,a.images=[b],a.gallery=!1,a.$el.removeClass(W.gallery)):(a.total=b.length-1,a.images=b,b.length>1&&(a.gallery=!0,a.$el.addClass(W.gallery)),b=a.images[a.index]),N(a,function(){n(a,b)})}function n(b,c,d){b.isAnimating||(b.isAnimating=!0,b.$container=a('<div class="'+W.container+'"><img></div>'),b.$image=b.$container.find("img"),b.$viewport.append(b.$container),b.$image.one(X.load,function(){p(b),b.isAnimating=!1,b.$container.fsTransition({property:"opacity"},function(){}),b.$el.removeClass(W.loading),b.$container.fsTouch({pan:!0,scale:!0}).on(X.scaleStart,b,D).on(X.scaleEnd,b,F).on(X.scale,b,E),b.$el.trigger(X.loaded)}).one(X.error,b,o).attr("src",c).addClass(W.image),(b.$image[0].complete||4===b.$image[0].readyState)&&b.$image.trigger(X.load),b.source=c)}function o(a){var b=a.data;b.$el.trigger(X.error)}function p(a){q(a),r(a),a.containerTop=a.viewportHeight/2,a.containerLeft=a.viewportWidth/2,t(a),a.imageHeight=a.naturalHeight,a.imageWidth=a.naturalWidth,x(a),s(a),u(a),v(a),w(a);var b={containerTop:a.containerTop,containerLeft:a.containerLeft,imageHeight:a.imageHeight,imageWidth:a.imageWidth,imageTop:a.imageTop,imageLeft:a.imageLeft};C(a,b),a.isRendering=!0}function q(a){var b=S(a.$image);a.naturalHeight=b.naturalHeight,a.naturalWidth=b.naturalWidth,a.ratioHorizontal=a.naturalHeight/a.naturalWidth,a.ratioVertical=a.naturalWidth/a.naturalHeight,a.isWide=a.naturalWidth>a.naturalHeight}function r(a){a.viewportHeight=a.$viewport.outerHeight(),a.viewportWidth=a.$viewport.outerWidth()}function s(a){a.imageHeight<=a.viewportHeight?(a.containerMinTop=a.viewportHeight/2,a.containerMaxTop=a.viewportHeight/2):(a.containerMinTop=a.viewportHeight-a.imageHeight/2,a.containerMaxTop=a.imageHeight/2),a.imageWidth<=a.viewportWidth?(a.containerMinLeft=a.viewportWidth/2,a.containerMaxLeft=a.viewportWidth/2):(a.containerMinLeft=a.viewportWidth-a.imageWidth/2,a.containerMaxLeft=a.imageWidth/2)}function t(a){a.isWide?(a.imageMinWidth=a.viewportWidth,a.imageMinHeight=a.imageMinWidth*a.ratioHorizontal,a.imageMinHeight>a.viewportHeight&&(a.imageMinHeight=a.viewportHeight,a.imageMinWidth=a.imageMinHeight*a.ratioVertical)):(a.imageMinHeight=a.viewportHeight,a.imageMinWidth=a.imageMinHeight*a.ratioVertical,a.imageMinWidth>a.viewportWidth&&(a.imageMinWidth=a.viewportWidth,a.imageMinHeight=a.imageMinWidth*a.ratioHorizontal)),(a.imageMinWidth>a.naturalWidth||a.imageMinHeight>a.naturalHeight)&&(a.imageMinHeight=a.naturalHeight,a.imageMinWidth=a.naturalWidth),a.imageMaxHeight=a.naturalHeight,a.imageMaxWidth=a.naturalWidth}function u(a){a.imageTop=-(a.imageHeight/2),a.imageLeft=-(a.imageWidth/2)}function v(a){a.lastContainerTop=a.containerTop,a.lastContainerLeft=a.containerLeft,a.lastImageHeight=a.imageHeight,a.lastImageWidth=a.imageWidth,a.lastImageTop=a.imageTop,a.lastImageLeft=a.imageLeft}function w(a){a.renderContainerTop=a.lastContainerTop,a.renderContainerLeft=a.lastContainerLeft,a.renderImageTop=a.lastImageTop,a.renderImageLeft=a.lastImageLeft,a.renderImageHeight=a.lastImageHeight,a.renderImageWidth=a.lastImageWidth}function x(a){a.imageHeight=a.imageMinHeight,a.imageWidth=a.imageMinWidth}function y(a){a.imageHeight<a.imageMinHeight&&(a.imageHeight=a.imageMinHeight),a.imageHeight>a.imageMaxHeight&&(a.imageHeight=a.imageMaxHeight),a.imageWidth<a.imageMinWidth&&(a.imageWidth=a.imageMinWidth),a.imageWidth>a.imageMaxWidth&&(a.imageWidth=a.imageMaxWidth)}function z(a){a.containerTop<a.containerMinTop&&(a.containerTop=a.containerMinTop),a.containerTop>a.containerMaxTop&&(a.containerTop=a.containerMaxTop),a.containerLeft<a.containerMinLeft&&(a.containerLeft=a.containerMinLeft),a.containerLeft>a.containerMaxLeft&&(a.containerLeft=a.containerMaxLeft)}function A(a){null===a.tapTimer?a.tapTimer=Y.startTimer(a.tapTimer,500,function(){B(a)}):(B(a),G(a))}function B(a){Y.clearTimer(a.tapTimer),a.tapTimer=null}function C(a,c){if(b.transform){var d=c.imageWidth/a.naturalWidth,e=c.imageHeight/a.naturalHeight;a.$container.css(b.transform,"translate3d("+c.containerLeft+"px, "+c.containerTop+"px, 0)"),a.$image.css(b.transform,"translate3d(-50%, -50%, 0) scale("+d+","+e+")")}else a.$container.css({top:c.containerTop,left:c.containerLeft}),a.$image.css({height:c.imageHeight,width:c.imageWidth,top:c.imageTop,left:c.imageLeft})}function D(a){var b=a.data;A(b),v(b)}function E(a){var b=a.data;B(b),b.isRendering=!1,b.isZooming=!1;b.imageHeight>b.imageMinHeight+1;b.containerTop=b.lastContainerTop+a.deltaY,b.containerLeft=b.lastContainerLeft+a.deltaX,b.imageHeight=b.lastImageHeight*a.scale,b.imageWidth=b.lastImageWidth*a.scale,s(b),z(b),y(b),u(b);var c={containerTop:b.containerTop,containerLeft:b.containerLeft,imageHeight:b.imageHeight,imageWidth:b.imageWidth,imageTop:b.imageTop,imageLeft:b.imageLeft};C(b,c)}function F(a){var b=a.data;b.isZooming||(v(b),w(b),b.isRendering=!0)}function G(a){var b=a.imageHeight>a.imageMinHeight+1;a.isZooming=!0,v(a),w(a),b?(a.imageHeight=a.imageMinHeight,a.imageWidth=a.imageMinWidth):(a.imageHeight=a.imageMaxHeight,a.imageWidth=a.imageMaxWidth),s(a),z(a),u(a),a.isRendering=!0}function H(b){Y.killEvent(b);var c=a(b.currentTarget),d=b.data,e=c.hasClass(W.control_zoom_out)?"out":"in";"out"===e?J(d):I(d)}function I(a){a.keyDownTime=1,a.action="zoom_in"}function J(a){a.keyDownTime=1,a.action="zoom_out"}function K(a){var b=a.data;b.action=!1}function L(a){if(a.isRendering){if(a.action){a.keyDownTime+=a.zoomIncrement;var b=("zoom_out"===a.action?-1:1)*Math.round(a.imageWidth*a.keyDownTime-a.imageWidth);b>a.zoomDelta&&(b=a.zoomDelta),a.isWide?(a.imageWidth+=b,a.imageHeight=Math.round(a.imageWidth/a.ratioVertical)):(a.imageHeight+=b,a.imageWidth=Math.round(a.imageHeight/a.ratioHorizontal)),y(a),u(a),s(a),z(a)}a.renderContainerTop+=Math.round((a.containerTop-a.renderContainerTop)*a.zoomEnertia),a.renderContainerLeft+=Math.round((a.containerLeft-a.renderContainerLeft)*a.zoomEnertia),a.renderImageTop+=Math.round((a.imageTop-a.renderImageTop)*a.zoomEnertia),a.renderImageLeft+=Math.round((a.imageLeft-a.renderImageLeft)*a.zoomEnertia),a.renderImageHeight+=Math.round((a.imageHeight-a.renderImageHeight)*a.zoomEnertia),a.renderImageWidth+=Math.round((a.imageWidth-a.renderImageWidth)*a.zoomEnertia);var c={containerTop:a.renderContainerTop,containerLeft:a.renderContainerLeft,imageHeight:a.renderImageHeight,imageWidth:a.renderImageWidth,imageTop:a.renderImageTop,imageLeft:a.renderImageLeft};C(a,c)}}function M(a){N(a)}function N(a,b){a.isAnimating||(B(a),a.isAnimating=!0,a.isRendering=!1,a.isZooming=!1,R(a),a.$container.fsTransition({property:"opacity"},function(){a.isAnimating=!1,a.$container.remove(),"function"==typeof b&&b.call(window,a)}),a.$el.addClass(W.loading))}function O(b){Y.killEvent(b);var c=a(b.currentTarget),d=b.data,e=d.index+(c.hasClass(W.control_next)?1:-1);d.isAnimating||(e<0&&(e=0),e>d.total&&(e=d.total),e!==d.index&&(d.index=e,N(d,function(){n(d,d.images[d.index])})),P(d))}function P(a){a.$controlItems.removeClass(W.control_disabled),0===a.index&&a.$controlPrevious.addClass(W.control_disabled),a.index===a.images.length-1&&a.$controlNext.addClass(W.control_disabled)}function Q(a){r(a),s(a),t(a),u(a),s(a),z(a),y(a)}function R(a){a.$container&&a.$container.length&&a.$container.fsTouch("destroy").off(X.scaleStart,D).off(X.scaleEnd,F).off(X.scale,E)}function S(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()&&(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width})}var T,U=b.Plugin("viewer",{widget:!0,defaults:{controls:!0,customClass:"",labels:{count:"of",next:"Next",previous:"Previous",zoom_in:"Zoom In",zoom_out:"Zoom Out"},theme:"fs-light",zoomDelta:100,zoomEnertia:.2,zoomIncrement:.01},classes:["source","wrapper","viewport","container","image","gallery","loading_icon","controls","controls_custom","control","control_previous","control_next","control_zoom_in","control_zoom_out","control_disabled","loading"],events:{loaded:"loaded",ready:"ready"},methods:{_setup:c,_construct:k,_destruct:l,_resize:d,_raf:f,resize:Q,load:m,unload:M}}),V=U.classes,W=V.raw,X=U.events,Y=U.functions,Z=(b.window,b.$window),$=0,_=[],aa=[],ba=!1,ca=null});