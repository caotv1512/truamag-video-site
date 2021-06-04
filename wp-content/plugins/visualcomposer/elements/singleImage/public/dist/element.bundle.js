(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./singleImage/editor.css":function(e,t){e.exports=".vce-single-image-container {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./singleImage/styles.css":function(e,t){e.exports='a.vce-single-image-inner {\n  color: transparent;\n  border-bottom: 0;\n  text-decoration: none;\n  box-shadow: none;\n}\n\na.vce-single-image-inner:hover,\na.vce-single-image-inner:focus {\n  text-decoration: none;\n  box-shadow: none;\n  border-bottom: 0;\n}\n\n.vce-single-image-inner {\n  display: inline-block;\n  vertical-align: top;\n  line-height: 1;\n  max-width: 100%;\n  position: relative;\n}\n\n.vce-single-image-wrapper {\n  display: inline-block;\n  max-width: 100%;\n  overflow: hidden;\n  vertical-align: top;\n}\n\n.vce-single-image-wrapper img {\n  vertical-align: top;\n  max-width: 100%;\n}\n\n.vce-single-image--border-rounded {\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.vce-single-image--border-round {\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.vce-single-image--align-center {\n  text-align: center;\n}\n\n.vce-single-image--align-right {\n  text-align: right;\n}\n\n.vce-single-image--align-left {\n  text-align: left;\n}\n\n.vce-single-image-wrapper figure {\n  margin: 0;\n}\n\n.vce-single-image-wrapper figcaption {\n  font-style: italic;\n  margin-top: 10px;\n}\n\n.vce-single-image-wrapper figcaption[hidden] {\n  display: none;\n}\n\n.vce-single-image-inner.vce-single-image--absolute .vce-single-image:not([data-dynamic-natural-size="true"]) {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  object-fit: cover;\n  height: 100%;\n}\n\n.vce-single-image-container .vce-single-image-inner .vce-single-image {\n  box-shadow: none;\n}\n'},"./singleImage/index.js":function(e,t,a){"use strict";a.r(t);var i=a("./node_modules/vc-cake/index.js"),n=a.n(i),s=a("./node_modules/@babel/runtime/helpers/extends/index.js"),l=a.n(s),r=a("./node_modules/@babel/runtime/helpers/typeof/index.js"),o=a.n(r),c=a("./node_modules/@babel/runtime/helpers/classCallCheck/index.js"),g=a.n(c),u=a("./node_modules/@babel/runtime/helpers/createClass/index.js"),d=a.n(u),p=a("./node_modules/@babel/runtime/helpers/assertThisInitialized/index.js"),m=a.n(p),h=a("./node_modules/@babel/runtime/helpers/inherits/index.js"),v=a.n(h),b=a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn/index.js"),f=a.n(b),w=a("./node_modules/@babel/runtime/helpers/getPrototypeOf/index.js"),y=a.n(w),I=a("./node_modules/@babel/runtime/helpers/defineProperty/index.js"),x=a.n(I),k=a("./node_modules/react/index.js"),z=a.n(k);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return f()(this,a)}}var E=Object(i.getService)("api"),j=Object(i.getService)("renderProcessor"),L=Object(i.getService)("utils"),C=L.getBlockRegexp,O=L.parseDynamicBlock,R=C(),_=function(e){v()(a,e);var t=S(a);function a(e){var i;return g()(this,a),i=t.call(this,e),x()(m()(i),"promise",null),i.state={imgElement:null,parsedWidth:null,parsedHeight:null,naturalWidth:null,naturalHeight:null},i.setImage=i.setImage.bind(m()(i)),i.setImageState=i.setImageState.bind(m()(i)),i.setError=i.setError.bind(m()(i)),i}return d()(a,[{key:"componentDidMount",value:function(){var e=this;this.promise=new window.Promise((function(t,a){e.resolve=t,e.setImage(e.props)})),j.add(this.promise)}},{key:"componentWillUnmount",value:function(){this.resolve&&this.resolve(!0),a.image&&a.image.removeEventListener("load",this.setImageState),a.image&&a.image.removeEventListener("error",this.setError)}},{key:"componentDidUpdate",value:function(e,t){e.atts.image!==this.props.atts.image?this.setImage(this.props):(e.atts.size!==this.props.atts.size||e.atts.shape!==this.props.atts.shape)&&this.resetImageSizeState()}},{key:"parseSize",value:function(e,t,a,i){var n=!0;"string"==typeof e?e=e.replace(/\s/g,"").replace(/px/g,"").toLowerCase().split("x"):"object"===o()(e)&&(n=e.crop,e=[e.width,e.height]),a=parseInt(a),i=parseInt(i);var s=parseInt(e[0])<a,l=parseInt(e[1])<i;if(n)e[0]=parseInt(e[0])<a?parseInt(e[0]):a,e[1]=parseInt(e[1])<i?parseInt(e[1]):i;else{if(e[0]=s?parseInt(e[0]):a,e[1]=l?parseInt(e[1]):i,s&&!l){var r=e[0]/a;e[1]=parseInt(i*r)}if(l&&!s){var c=e[1]/i;e[0]=parseInt(a*c)}if(l&&s)if(i<a){var g=e[0]/a;e[1]=parseInt(i*g)}else{var u=e[1]/i;e[0]=parseInt(a*u)}}if(t){var d=e[0]>=e[1]?e[1]:e[0];e={width:d,height:d}}else e={width:e[0],height:e[1]};return e}},{key:"checkRelatedSize",value:function(e){var t=null;return window.vcvImageSizes&&window.vcvImageSizes[e]&&(t=window.vcvImageSizes[e]),t}},{key:"getSizes",value:function(e,t){var a=e.size,i=e.shape,n="";return{width:(n=(a=a.replace(/\s/g,"").replace(/px/g,"").toLowerCase()).match(/\d+(x)\d+/)?this.parseSize(a,"round"===i,t.width,t.height):(n=this.checkRelatedSize(a))?this.parseSize(n,"round"===i,t.width,t.height):this.parseSize({width:t.width,height:t.height},"round"===i,t.width,t.height)).width,height:n.height}}},{key:"setImage",value:function(e){var t=this.getImageUrl(e.atts.image);a.image&&a.image.removeEventListener("load",this.setImageState),a.image&&a.image.removeEventListener("error",this.setError),a.image=new window.Image,a.image.addEventListener("load",this.setImageState),a.image.addEventListener("error",this.setError),t?a.image.src=t:this.setError(),t||this.setState({imgElement:null,parsedWidth:null,parsedHeight:null,naturalWidth:null,naturalHeight:null})}},{key:"setImageState",value:function(e){var t=this,a=e.currentTarget,i=this.getSizes(this.props.atts,a);this.setState({imgElement:a,parsedWidth:i.width,parsedHeight:i.height,naturalWidth:a.width,naturalHeight:a.height},(function(){t.resolve&&t.resolve(!0)}))}},{key:"resetImageSizeState",value:function(){var e=this.getSizes(this.props.atts,this.state.imgElement);this.setState({parsedWidth:e.width,parsedHeight:e.height})}},{key:"setError",value:function(){this.resolve&&this.resolve(!1)}},{key:"getImageShortcode",value:function(e){var t=e.props,a=e.classes,i=e.isDefaultImage,n=e.src,s=e.isDynamicImage,l=e.naturalSizes,r=e.lazyLoad,o=r?"":n,c=a,g="";r&&(c+=" vcv-lozad",g='data-src="'.concat(n,'"'));var u='[vcvSingleImage class="'.concat(c,'" ').concat(g,' data-width="').concat(this.state.parsedWidth||0,'" data-height="').concat(this.state.parsedHeight||0,'" src="').concat(o,'" data-img-src="').concat(t["data-img-src"],'"'),d=t.alt,p=t.title;if(i&&(u+=' data-default-image="true"'),s){var m=O(this.props.rawAtts.image.full);u+=' data-dynamic="'.concat(m.blockAtts.value,'"');try{var h=new URL(m.blockAtts.currentValue),v=new URLSearchParams(h.search);v.get("alt")&&(d=v.get("alt")),v.get("title")&&(p=v.get("title"))}catch(b){console.warn("URL is not valid, skipping",m,m.blockAtts.currentValue)}l&&(u+=' data-dynamic-natural-size="true"')}return u+=' alt="'.concat(d,'" title="').concat(p,'" ]'),r&&(u+='<noscript>\n        <img class="'.concat(a,'" src="').concat(n,'" width="').concat(this.state.parsedWidth||0,'" height="').concat(this.state.parsedHeight||0,'" alt="').concat(d,'" title="').concat(p,'" />\n      </noscript>')),u}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.atts,i=e.editor,n=a.shape,s=a.clickableOptions,r=a.showCaption,o=a.customClass,c=a.size,g=a.alignment,u=a.metaCustomId,d=a.image,p=a.lazyLoad,m="vce-single-image-container",h="vce-single-image-inner vce-single-image--absolute",v="vce-single-image",b={},f={},w={},y="div",I={},x=this.getImageUrl(d),k=this.props.rawAtts.image&&this.props.rawAtts.image.full,S=Array.isArray("string"==typeof k&&k.match(R));I["data-img-src"]=x,I.alt=d&&d.alt?d.alt:"",I.title=d&&d.title?d.title:"";var E=d&&d.caption?d.caption:"";if(S)try{var j=new URL(d.full),L=new URLSearchParams(j.search);I.alt=L.get("alt")?L.get("alt"):"",I.title=L.get("title")?L.get("title"):"",E=L.get("caption")?L.get("caption"):""}catch(U){console.warn("URL is not valid, skipping",d,d.full)}if("string"==typeof o&&o&&(m+=" "+o),"url"===s&&d&&d.link&&d.link.url){y="a";var C=d.link;b={href:C.url,title:C.title,target:C.targetBlank?"_blank":void 0,rel:C.relNofollow?"nofollow":void 0}}else"imageNewTab"===s?(y="a",b={href:x,target:"_blank"}):"lightbox"===s?(y="a",b={href:x,"data-lightbox":"lightbox-".concat(t)}):"zoom"===s?h+=" vce-single-image-zoom-container":"photoswipe"===s&&(y="a",b={href:x,"data-photoswipe-image":t,"data-photoswipe-index":0},w["data-photoswipe-item"]="photoswipe-".concat(t),r&&(b["data-photoswipe-caption"]=d.caption),f["data-photoswipe-gallery"]=t);g&&(m+=" vce-single-image--align-".concat(g)),"rounded"===n&&(h+=" vce-single-image--border-rounded"),"round"===n&&(h+=" vce-single-image--border-round"),u&&(f.id=u);var O=this.applyDO("all"),_=!E,W=z.a.createElement("figcaption",{hidden:_},E),N=d&&d.urls&&d.urls.length?d.urls[0]:d;N&&N.filter&&"normal"!==N.filter&&(h+=" vce-image-filter--".concat(N.filter));var A="",D=!1;S&&(1===this.state.naturalWidth&&1===this.state.naturalHeight||(!c||"full"===c)&&"round"!==n)&&(b["data-vce-delete-attr"]="style",D=!0);var H={props:I,classes:v,isDefaultImage:!(d&&d.id),src:x,isDynamicImage:S,naturalSizes:D,lazyLoad:p};return x&&(A=z.a.createElement("img",l()({className:"".concat(v," vcvhelper"),src:x},I,{"data-vcvs-html":this.getImageShortcode(H)}))),c&&"full"!==c||"round"===n||S||(A=z.a.createElement("img",l()({className:v,src:x},I))),z.a.createElement("div",l()({className:m},i,f),z.a.createElement("div",l()({className:"vce vce-single-image-wrapper"},w,{id:"el-"+t},O),z.a.createElement("figure",null,z.a.createElement(y,l()({},b,{className:h,ref:"imageContainer",style:{paddingBottom:"".concat(this.state.parsedHeight/this.state.parsedWidth*100,"%"),width:this.state.parsedWidth}}),A),W)))}}]),a}(E.elementComponent);x()(_,"image",null),(0,n.a.getService("cook").add)(a("./singleImage/settings.json"),(function(e){e.add(_)}),{css:a("./node_modules/raw-loader/index.js!./singleImage/styles.css"),editorCss:a("./node_modules/raw-loader/index.js!./singleImage/editor.css")},"")},"./singleImage/settings.json":function(e){e.exports=JSON.parse('{"lazyLoad":{"type":"toggle","access":"public","value":true,"options":{"label":"Lazy load"}},"image":{"type":"attachimage","access":"public","value":"single-image.jpg","options":{"multiple":false,"dynamicField":true,"defaultValue":"single-image.jpg","onChange":{"rules":{"clickableOptions":{"rule":"value","options":{"value":"url"}}},"actions":[{"action":"attachImageUrls"}]},"url":false,"imageFilter":true}},"shape":{"type":"buttonGroup","access":"public","value":"square","options":{"label":"Shape","values":[{"label":"Square","value":"square","icon":"vcv-ui-icon-attribute-shape-square"},{"label":"Rounded","value":"rounded","icon":"vcv-ui-icon-attribute-shape-rounded"},{"label":"Round","value":"round","icon":"vcv-ui-icon-attribute-shape-round"}]}},"designOptions":{"type":"designOptions","access":"public","value":{},"options":{"label":"Design Options"}},"editFormTab1":{"type":"group","access":"protected","value":["lazyLoad","clickableOptions","showCaption","image","shape","size","alignment","metaCustomId","customClass"],"options":{"label":"General"}},"metaEditFormTabs":{"type":"group","access":"protected","value":["editFormTab1","designOptions"]},"relatedTo":{"type":"group","access":"protected","value":["General"]},"metaOrder":{"type":"number","access":"protected","value":4},"customClass":{"type":"string","access":"public","value":"","options":{"label":"Extra class name","description":"Add an extra class name to the element and refer to it from the custom CSS option."}},"size":{"type":"string","access":"public","value":"large","options":{"label":"Size","description":"Enter image size (example: \\"thumbnail\\", \\"medium\\", \\"large\\", \\"full\\" or other size defined by a theme). Alternatively, enter a size in pixels (example: 200x100 (width x height))."}},"clickableOptions":{"type":"dropdown","access":"public","value":"","options":{"label":"OnClick action","description":"Choose an event performed when clicking on the image.","values":[{"label":"None","value":""},{"label":"Lightbox","value":"lightbox"},{"label":"PhotoSwipe","value":"photoswipe"},{"label":"Zoom","value":"zoom"},{"label":"Open the image in a new tab","value":"imageNewTab"},{"label":"Link selector","value":"url"}]}},"showCaption":{"type":"toggle","access":"public","value":false,"options":{"label":"Show the image caption in gallery view","onChange":{"rules":{"clickableOptions":{"rule":"value","options":{"value":"photoswipe"}}},"actions":[{"action":"toggleVisibility"}]}}},"alignment":{"type":"buttonGroup","access":"public","value":"left","options":{"label":"Alignment","values":[{"label":"Left","value":"left","icon":"vcv-ui-icon-attribute-alignment-left"},{"label":"Center","value":"center","icon":"vcv-ui-icon-attribute-alignment-center"},{"label":"Right","value":"right","icon":"vcv-ui-icon-attribute-alignment-right"}]}},"metaCustomId":{"type":"customId","access":"public","value":"","options":{"label":"Element ID","description":"Apply a unique ID to the element to link it directly by using #your_id (for element ID use lowercase input only)."}},"tag":{"access":"protected","type":"string","value":"singleImage"},"metaPublicJs":{"access":"protected","type":"string","value":{"libraries":[{"rules":{"clickableOptions":{"rule":"value","options":{"value":"zoom"}}},"libPaths":["public/dist/singleImage.min.js"]}]}},"sharedAssetsLibrary":{"access":"protected","type":"string","value":{"libraries":[{"rules":{"clickableOptions":{"rule":"value","options":{"value":"lightbox"}}},"libsNames":["lightbox"]},{"rules":{"clickableOptions":{"rule":"value","options":{"value":"zoom"}}},"libsNames":["zoom"]},{"rules":{"clickableOptions":{"rule":"value","options":{"value":"photoswipe"}}},"libsNames":["photoswipe"]},{"rules":{"lazyLoad":{"rule":"toggle"}},"libsNames":["lazyLoad"]}]}}}')}},[["./singleImage/index.js"]]]);