!function(u,_t,$t,v){"use strict";var g,yt=["","webkit","Moz","MS","ms","o"],Jt=_t.createElement("div"),L=Math.round,S=Math.abs,at=Date.now;function ot(t,e,i){return setTimeout(ht(t,i),e)}function Y(t,e,i){return!!Array.isArray(t)&&(P(t,i[e],i),!0)}function P(t,e,i){var r;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==v)for(r=0;r<t.length;)e.call(i,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}function Pt(t,e,i){var r="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var n=new Error("get-stack-trace"),s=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",a=u.console&&(u.console.warn||u.console.log);return a&&a.call(u.console,r,s),t.apply(this,arguments)}}g="function"!=typeof Object.assign?function(e){if(e===v||null===e)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),r=1;r<arguments.length;r++){var n=arguments[r];if(n!==v&&null!==n)for(var s in n)n.hasOwnProperty(s)&&(i[s]=n[s])}return i}:Object.assign;var Nt=Pt(function(e,i,r){for(var n=Object.keys(i),s=0;s<n.length;)(!r||r&&e[n[s]]===v)&&(e[n[s]]=i[n[s]]),s++;return e},"extend","Use `assign`."),jt=Pt(function(e,i){return Nt(e,i,!0)},"merge","Use `assign`.");function T(t,e,i){var n,r=e.prototype;(n=t.prototype=Object.create(r)).constructor=t,n._super=r,i&&g(n,i)}function ht(t,e){return function(){return t.apply(e,arguments)}}function lt(t,e){return"function"==typeof t?t.apply(e&&e[0]||v,e):t}function Ot(t,e){return t===v?e:t}function k(t,e,i){P(Z(e),function(r){t.addEventListener(r,i,!1)})}function z(t,e,i){P(Z(e),function(r){t.removeEventListener(r,i,!1)})}function At(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function D(t,e){return t.indexOf(e)>-1}function Z(t){return t.trim().split(/\s+/g)}function x(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var r=0;r<t.length;){if(i&&t[r][i]==e||!i&&t[r]===e)return r;r++}return-1}function B(t){return Array.prototype.slice.call(t,0)}function Ct(t,e,i){for(var r=[],n=[],s=0;s<t.length;){var a=e?t[s][e]:t[s];x(n,a)<0&&r.push(t[s]),n[s]=a,s++}return i&&(r=e?r.sort(function(l,f){return l[e]>f[e]}):r.sort()),r}function $(t,e){for(var i,r,n=e[0].toUpperCase()+e.slice(1),s=0;s<yt.length;){if((r=(i=yt[s])?i+n:e)in t)return r;s++}return v}var Kt=1;function St(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||u}var Dt="ontouchstart"in u,ie=$(u,"PointerEvent")!==v,re=Dt&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),b="touch",ut="mouse",Ut=["x","y"],Q=["clientX","clientY"];function d(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(r){lt(t.options.enable,[t])&&i.handler(r)},this.init()}function he(t,e,i){var r=i.pointers.length,n=i.changedPointers.length,s=1&e&&r-n==0,a=12&e&&r-n==0;i.isFirst=!!s,i.isFinal=!!a,s&&(t.session={}),i.eventType=e,function le(t,e){var i=t.session,r=e.pointers,n=r.length;i.firstInput||(i.firstInput=Rt(e)),n>1&&!i.firstMultiple?i.firstMultiple=Rt(e):1===n&&(i.firstMultiple=!1);var s=i.firstInput,a=i.firstMultiple,h=a?a.center:s.center,l=e.center=Lt(r);e.timeStamp=at(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=ct(h,l),e.distance=j(h,l),function ue(t,e){var i=e.center,r=t.offsetDelta||{},n=t.prevDelta||{},s=t.prevInput||{};(1===e.eventType||4===s.eventType)&&(n=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},r=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=n.x+(i.x-r.x),e.deltaY=n.y+(i.y-r.y)}(i,e),e.offsetDirection=xt(e.deltaX,e.deltaY);var f=Yt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=f.x,e.overallVelocityY=f.y,e.overallVelocity=S(f.x)>S(f.y)?f.x:f.y,e.scale=a?function ve(t,e){return j(e[0],e[1],Q)/j(t[0],t[1],Q)}(a.pointers,r):1,e.rotation=a?function fe(t,e){return ct(e[1],e[0],Q)+ct(t[1],t[0],Q)}(a.pointers,r):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function ce(t,e){var n,s,a,h,i=t.lastInterval||e,r=e.timeStamp-i.timeStamp;if(8!=e.eventType&&(r>25||i.velocity===v)){var l=e.deltaX-i.deltaX,f=e.deltaY-i.deltaY,y=Yt(r,l,f);s=y.x,a=y.y,n=S(y.x)>S(y.y)?y.x:y.y,h=xt(l,f),t.lastInterval=e}else n=i.velocity,s=i.velocityX,a=i.velocityY,h=i.direction;e.velocity=n,e.velocityX=s,e.velocityY=a,e.direction=h}(i,e);var y=t.element;At(e.srcEvent.target,y)&&(y=e.srcEvent.target),e.target=y}(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function Rt(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:L(t.pointers[i].clientX),clientY:L(t.pointers[i].clientY)},i++;return{timeStamp:at(),pointers:e,center:Lt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Lt(t){var e=t.length;if(1===e)return{x:L(t[0].clientX),y:L(t[0].clientY)};for(var i=0,r=0,n=0;n<e;)i+=t[n].clientX,r+=t[n].clientY,n++;return{x:L(i/e),y:L(r/e)}}function Yt(t,e,i){return{x:e/t||0,y:i/t||0}}function xt(t,e){return t===e?1:S(t)>=S(e)?t<0?2:4:e<0?8:16}function j(t,e,i){i||(i=Ut);var r=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.sqrt(r*r+n*n)}function ct(t,e,i){return i||(i=Ut),180*Math.atan2(e[i[1]]-t[i[1]],e[i[0]]-t[i[0]])/Math.PI}d.prototype={handler:function(){},init:function(){this.evEl&&k(this.element,this.evEl,this.domHandler),this.evTarget&&k(this.target,this.evTarget,this.domHandler),this.evWin&&k(St(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&z(this.element,this.evEl,this.domHandler),this.evTarget&&z(this.target,this.evTarget,this.domHandler),this.evWin&&z(St(this.element),this.evWin,this.domHandler)}};var pe={mousedown:1,mousemove:2,mouseup:4},Te="mousedown",de="mousemove mouseup";function K(){this.evEl=Te,this.evWin=de,this.pressed=!1,d.apply(this,arguments)}T(K,d,{handler:function(e){var i=pe[e.type];1&i&&0===e.button&&(this.pressed=!0),2&i&&1!==e.which&&(i=4),this.pressed&&(4&i&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[e],changedPointers:[e],pointerType:ut,srcEvent:e}))}});var me={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},Ee={2:b,3:"pen",4:ut,5:"kinect"},Ht="pointerdown",bt="pointermove pointerup pointercancel";function ft(){this.evEl=Ht,this.evWin=bt,d.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}u.MSPointerEvent&&!u.PointerEvent&&(Ht="MSPointerDown",bt="MSPointerMove MSPointerUp MSPointerCancel"),T(ft,d,{handler:function(e){var i=this.store,r=!1,n=e.type.toLowerCase().replace("ms",""),s=me[n],a=Ee[e.pointerType]||e.pointerType,h=a==b,l=x(i,e.pointerId,"pointerId");1&s&&(0===e.button||h)?l<0&&(i.push(e),l=i.length-1):12&s&&(r=!0),!(l<0)&&(i[l]=e,this.callback(this.manager,s,{pointers:i,changedPointers:[e],pointerType:a,srcEvent:e}),r&&i.splice(l,1))}});var ge={touchstart:1,touchmove:2,touchend:4,touchcancel:8},Ie="touchstart",_e="touchstart touchmove touchend touchcancel";function Xt(){this.evTarget=Ie,this.evWin=_e,this.started=!1,d.apply(this,arguments)}function ye(t,e){var i=B(t.touches),r=B(t.changedTouches);return 12&e&&(i=Ct(i.concat(r),"identifier",!0)),[i,r]}T(Xt,d,{handler:function(e){var i=ge[e.type];if(1===i&&(this.started=!0),this.started){var r=ye.call(this,e,i);12&i&&r[0].length-r[1].length==0&&(this.started=!1),this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:b,srcEvent:e})}}});var Pe={touchstart:1,touchmove:2,touchend:4,touchcancel:8},Ne="touchstart touchmove touchend touchcancel";function tt(){this.evTarget=Ne,this.targetIds={},d.apply(this,arguments)}function Oe(t,e){var i=B(t.touches),r=this.targetIds;if(3&e&&1===i.length)return r[i[0].identifier]=!0,[i,i];var n,s,a=B(t.changedTouches),h=[],l=this.target;if(s=i.filter(function(f){return At(f.target,l)}),1===e)for(n=0;n<s.length;)r[s[n].identifier]=!0,n++;for(n=0;n<a.length;)r[a[n].identifier]&&h.push(a[n]),12&e&&delete r[a[n].identifier],n++;return h.length?[Ct(s.concat(h),"identifier",!0),h]:void 0}function vt(){d.apply(this,arguments);var t=ht(this.handler,this);this.touch=new tt(this.manager,t),this.mouse=new K(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function Ce(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,Vt.call(this,e)):12&t&&Vt.call(this,e)}function Vt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var r=this.lastTouches;setTimeout(function(){var s=r.indexOf(i);s>-1&&r.splice(s,1)},2500)}}function Se(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,r=0;r<this.lastTouches.length;r++){var n=this.lastTouches[r],s=Math.abs(e-n.x),a=Math.abs(i-n.y);if(s<=25&&a<=25)return!0}return!1}T(tt,d,{handler:function(e){var i=Pe[e.type],r=Oe.call(this,e,i);r&&this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:b,srcEvent:e})}}),T(vt,d,{handler:function(e,i,r){var s=r.pointerType==ut;if(!(s&&r.sourceCapabilities&&r.sourceCapabilities.firesTouchEvents)){if(r.pointerType==b)Ce.call(this,i,r);else if(s&&Se.call(this,r))return;this.callback(e,i,r)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Wt=$(Jt.style,"touchAction"),qt=Wt!==v,wt="compute",pt="manipulation",R="none",q="pan-x",w="pan-y",et=function Me(){if(!qt)return!1;var t={},e=u.CSS&&u.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=!e||u.CSS.supports("touch-action",i)}),t}();function Tt(t,e){this.manager=t,this.set(e)}Tt.prototype={set:function(t){t==wt&&(t=this.compute()),qt&&this.manager.element.style&&et[t]&&(this.manager.element.style[Wt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return P(this.manager.recognizers,function(e){lt(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function De(t){if(D(t,R))return R;var e=D(t,q),i=D(t,w);return e&&i?R:e||i?e?q:w:D(t,pt)?pt:"auto"}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(!this.manager.session.prevented){var r=this.actions,n=D(r,R)&&!et[R],s=D(r,w)&&!et[w],a=D(r,q)&&!et[q];if(n&&1===t.pointers.length&&t.distance<2&&t.deltaTime<250)return;return a&&s||!(n||s&&6&i||a&&24&i)?void 0:this.preventSrc(e)}e.preventDefault()},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var _=32;function O(t){this.options=g({},this.defaults,t||{}),this.id=function te(){return Kt++}(),this.manager=null,this.options.enable=Ot(this.options.enable,!0),this.state=1,this.simultaneous={},this.requireFail=[]}function kt(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}function zt(t){return 16==t?"down":8==t?"up":2==t?"left":4==t?"right":""}function rt(t,e){var i=e.manager;return i?i.get(t):t}function E(){O.apply(this,arguments)}function nt(){E.apply(this,arguments),this.pX=null,this.pY=null}function dt(){E.apply(this,arguments)}function mt(){O.apply(this,arguments),this._timer=null,this._input=null}function Et(){E.apply(this,arguments)}function gt(){E.apply(this,arguments)}function st(){O.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function A(t,e){return(e=e||{}).recognizers=Ot(e.recognizers,A.defaults.preset),new It(t,e)}function It(t,e){this.options=g({},A.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=function oe(t){return new(t.options.inputClass||(ie?ft:re?tt:Dt?vt:K))(t,he)}(this),this.touchAction=new Tt(this,this.options.touchAction),Bt(this,!0),P(this.options.recognizers,function(i){var r=this.add(new i[0](i[1]));i[2]&&r.recognizeWith(i[2]),i[3]&&r.requireFailure(i[3])},this)}function Bt(t,e){var r,i=t.element;i.style&&(P(t.options.cssProps,function(n,s){r=$(i.style,s),e?(t.oldCssProps[r]=i.style[r],i.style[r]=n):i.style[r]=t.oldCssProps[r]||""}),e||(t.oldCssProps={}))}O.prototype={defaults:{},set:function(t){return g(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(Y(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=rt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return Y(t,"dropRecognizeWith",this)||(t=rt(t,this),delete this.simultaneous[t.id]),this},requireFailure:function(t){if(Y(t,"requireFailure",this))return this;var e=this.requireFail;return-1===x(e,t=rt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(Y(t,"dropRequireFailure",this))return this;t=rt(t,this);var e=x(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function r(n){e.manager.emit(n,t)}i<8&&r(e.options.event+kt(i)),r(e.options.event),t.additionalEvent&&r(t.additionalEvent),i>=8&&r(e.options.event+kt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=_},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},recognize:function(t){var e=g({},t);if(!lt(this.options.enable,[this,e]))return this.reset(),void(this.state=_);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},T(E,O,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,r=6&e,n=this.attrTest(t);return r&&(8&i||!n)?16|e:r||n?4&i?8|e:2&e?4|e:2:_}}),T(nt,E,{defaults:{event:"pan",threshold:10,pointers:1,direction:30},getTouchAction:function(){var t=this.options.direction,e=[];return 6&t&&e.push(w),24&t&&e.push(q),e},directionTest:function(t){var e=this.options,i=!0,r=t.distance,n=t.direction,s=t.deltaX,a=t.deltaY;return n&e.direction||(6&e.direction?(n=0===s?1:s<0?2:4,i=s!=this.pX,r=Math.abs(t.deltaX)):(n=0===a?1:a<0?8:16,i=a!=this.pY,r=Math.abs(t.deltaY))),t.direction=n,i&&r>e.threshold&&n&e.direction},attrTest:function(t){return E.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=zt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),T(dt,E,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[R]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},emit:function(t){1!==t.scale&&(t.additionalEvent=this.options.event+(t.scale<1?"in":"out")),this._super.emit.call(this,t)}}),T(mt,O,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,n=t.deltaTime>e.time;if(this._input=t,!r||!i||12&t.eventType&&!n)this.reset();else if(1&t.eventType)this.reset(),this._timer=ot(function(){this.state=8,this.tryEmit()},e.time,this);else if(4&t.eventType)return 8;return _},reset:function(){clearTimeout(this._timer)},emit:function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=at(),this.manager.emit(this.options.event,this._input)))}}),T(Et,E,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[R]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)}}),T(gt,E,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},getTouchAction:function(){return nt.prototype.getTouchAction.call(this)},attrTest:function(t){var i,e=this.options.direction;return 30&e?i=t.overallVelocity:6&e?i=t.overallVelocityX:24&e&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&S(i)>this.options.velocity&&4&t.eventType},emit:function(t){var e=zt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),T(st,O,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[pt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,n=t.deltaTime<e.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();if(r&&n&&i){if(4!=t.eventType)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,a=!this.pCenter||j(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,a&&s?this.count+=1:this.count=1,this._input=t,0==this.count%e.taps)return this.hasRequireFailures()?(this._timer=ot(function(){this.state=8,this.tryEmit()},e.interval,this),2):8}return _},failTimeout:function(){return this._timer=ot(function(){this.state=_},this.options.interval,this),_},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),A.VERSION="2.0.7",A.defaults={domEvents:!1,touchAction:wt,enable:!0,inputTarget:null,inputClass:null,preset:[[Et,{enable:!1}],[dt,{enable:!1},["rotate"]],[gt,{direction:6}],[nt,{direction:6},["swipe"]],[st],[st,{event:"doubletap",taps:2},["tap"]],[mt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},It.prototype={set:function(t){return g(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,r=this.recognizers,n=e.curRecognizer;(!n||n&&8&n.state)&&(n=e.curRecognizer=null);for(var s=0;s<r.length;)i=r[s],2===e.stopped||n&&i!=n&&!i.canRecognizeWith(n)?i.reset():i.recognize(t),!n&&14&i.state&&(n=e.curRecognizer=i),s++}},get:function(t){if(t instanceof O)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(Y(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(Y(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=x(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==v&&e!==v){var i=this.handlers;return P(Z(t),function(r){i[r]=i[r]||[],i[r].push(e)}),this}},off:function(t,e){if(t!==v){var i=this.handlers;return P(Z(t),function(r){e?i[r]&&i[r].splice(x(i[r],e),1):delete i[r]}),this}},emit:function(t,e){this.options.domEvents&&function Re(t,e){var i=_t.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var r=0;r<i.length;)i[r](e),r++}},destroy:function(){this.element&&Bt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},g(A,{INPUT_START:1,INPUT_MOVE:2,INPUT_END:4,INPUT_CANCEL:8,STATE_POSSIBLE:1,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:_,DIRECTION_NONE:1,DIRECTION_LEFT:2,DIRECTION_RIGHT:4,DIRECTION_UP:8,DIRECTION_DOWN:16,DIRECTION_HORIZONTAL:6,DIRECTION_VERTICAL:24,DIRECTION_ALL:30,Manager:It,Input:d,TouchAction:Tt,TouchInput:tt,MouseInput:K,PointerEventInput:ft,TouchMouseInput:vt,SingleTouchInput:Xt,Recognizer:O,AttrRecognizer:E,Tap:st,Pan:nt,Swipe:gt,Pinch:dt,Rotate:Et,Press:mt,on:k,off:z,each:P,merge:jt,extend:Nt,assign:g,inherit:T,bindFn:ht,prefixed:$}),(typeof u<"u"?u:typeof self<"u"?self:{}).Hammer=A,"function"==typeof define&&define.amd?define(function(){return A}):typeof module<"u"&&module.exports?module.exports=A:u.Hammer=A}(window,document);