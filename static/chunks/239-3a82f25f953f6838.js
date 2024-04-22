"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[239],{1239:function(e,t,n){var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(7294),i=l(s),a=n(6701),r=l(a);function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1,modalVideoWidth:"100%"},n.closeModal=n.closeModal.bind(n),n.updateFocus=n.updateFocus.bind(n),n.timeout,n}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"==typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this)),window.addEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this)),this.setState({modalVideoWidth:this.getWidthFulfillAspectRatio(this.props.ratio,window.innerHeight,window.innerWidth)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this)),window.removeEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"resizeModalVideoWhenHeightGreaterThanWindowHeight",value:function(){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout(function(){var t=e.getWidthFulfillAspectRatio(e.props.ratio,window.innerHeight,window.innerWidth);e.state.modalVideoWidth!=t&&e.setState({modalVideoWidth:t})},10)}},{key:"getQueryString",value:function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&null!==e[n]&&(t+=n+"="+e[n]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):"custom"===e.channel?e.url:void 0}},{key:"getPadding",value:function(e){var t,n=e.split(":"),o=Number(n[0]);return 100*Number(n[1])/o+"%"}},{key:"getWidthFulfillAspectRatio",value:function(e,t,n){var o=e.split(":"),s=Number(o[0]),i=Number(o[1]);return t<n*(i/s)?Math.floor(s/i*t):"100%"}},{key:"render",value:function(){var e=this,t={width:this.state.modalVideoWidth},n={paddingBottom:this.getPadding(this.props.ratio)};return i.default.createElement(r.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},function(){return e.state.isOpen?i.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},i.default.createElement("div",{className:e.props.classNames.modalVideoBody},i.default.createElement("div",{className:e.props.classNames.modalVideoInner,style:t},i.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:n},i.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),e.props.children||i.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null})}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),t}(i.default.Component);t.Z=u,u.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just opened the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},6701:function(e,t,n){function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}function i(e,t){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,i(e,t)}function r(e,t){return e.replace(RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}n.r(t),n.d(t,{default:function(){return k}});var l=n(7294),u=n(3935),p={disabled:!1},d=l.createContext(null),c=function(e){return e.scrollTop},f="unmounted",h="exited",m="entering",v="entered",E="exiting",g=function(e){function t(t,n){o=e.call(this,t,n)||this;var o,s,i=n,a=i&&!i.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?a?(s=h,o.appearStatus=m):s=v:s=t.unmountOnExit||t.mountOnEnter?f:h,o.state={status:s},o.nextCallback=null,o}a(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===f?{status:h}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==m&&n!==v&&(t=m):(n===m||n===v)&&(t=E)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===m){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this);n&&c(n)}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===h&&this.setState({status:f})},n.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,s=this.props.nodeRef?[o]:[u.findDOMNode(this),o],i=s[0],a=s[1],r=this.getTimeouts(),l=o?r.appear:r.enter;if(!e&&!n||p.disabled){this.safeSetState({status:v},function(){t.props.onEntered(i)});return}this.props.onEnter(i,a),this.safeSetState({status:m},function(){t.props.onEntering(i,a),t.onTransitionEnd(l,function(){t.safeSetState({status:v},function(){t.props.onEntered(i,a)})})})},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:u.findDOMNode(this);if(!t||p.disabled){this.safeSetState({status:h},function(){e.props.onExited(o)});return}this.props.onExit(o),this.safeSetState({status:E},function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:h},function(){e.props.onExited(o)})})})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(!n||o){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=s[0],a=s[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)},n.render=function(){var e=this.state.status;if(e===f)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,s(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return l.createElement(d.Provider,{value:null},"function"==typeof n?n(e,o):l.cloneElement(l.Children.only(n),o))},t}(l.Component);function y(){}g.contextType=d,g.propTypes={},g.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:y,onEntering:y,onEntered:y,onExit:y,onExiting:y,onExited:y},g.UNMOUNTED=f,g.EXITED=h,g.ENTERING=m,g.ENTERED=v,g.EXITING=E;var x=g,b=function(e,t){return e&&t&&t.split(" ").forEach(function(t){var n,o;return n=e,o=t,void(n.classList?n.classList.remove(o):"string"==typeof n.className?n.className=r(n.className,o):n.setAttribute("class",r(n.className&&n.className.baseVal||"",o)))})},C=function(e){function t(){for(var t,n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var o=t.resolveArguments(e,n),s=o[0],i=o[1];t.removeClasses(s,"exit"),t.addClass(s,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var o=t.resolveArguments(e,n),s=o[0],i=o[1];t.addClass(s,i?"appear":"enter","active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var o=t.resolveArguments(e,n),s=o[0],i=o[1]?"appear":"enter";t.removeClasses(s,i),t.addClass(s,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,o="string"==typeof n,s=o?(o&&n?n+"-":"")+e:n[e],i=o?s+"-active":n[e+"Active"],a=o?s+"-done":n[e+"Done"];return{baseClassName:s,activeClassName:i,doneClassName:a}},t}a(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var o,s,i=this.getClassNames(t)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&a&&(i+=" "+a),"active"===n&&e&&c(e),i&&(this.appliedClasses[t][n]=i,o=e,s=i,o&&s&&s.split(" ").forEach(function(e){return function(e,t){if(e.classList)e.classList.add(t);else{var n,o;n=e,o=t,(n.classList?!(o&&n.classList.contains(o)):-1===(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+o+" "))&&("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}}(o,e)}))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],o=n.base,s=n.active,i=n.done;this.appliedClasses[t]={},o&&b(e,o),s&&b(e,s),i&&b(e,i)},n.render=function(){var e=this.props,t=(e.classNames,s(e,["classNames"]));return l.createElement(x,o({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(l.Component);C.defaultProps={classNames:""},C.propTypes={};var k=C}}]);