(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./rawHtml/editor.css":function(e,t){e.exports="/* ----------------------------------------------\n * Raw HTML\n * ---------------------------------------------- */\n.vce-raw-html {\n  min-height: 30px;\n}\n"},"./rawHtml/index.js":function(e,t,s){"use strict";s.r(t);var n=s("./node_modules/vc-cake/index.js"),a=s.n(n),r=s("./node_modules/@babel/runtime/helpers/extends/index.js"),o=s.n(r),l=s("./node_modules/@babel/runtime/helpers/classCallCheck/index.js"),i=s.n(l),c=s("./node_modules/@babel/runtime/helpers/createClass/index.js"),p=s.n(c),u=s("./node_modules/@babel/runtime/helpers/inherits/index.js"),d=s.n(u),m=s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn/index.js"),h=s.n(m),v=s("./node_modules/@babel/runtime/helpers/getPrototypeOf/index.js"),f=s.n(v),w=s("./node_modules/react/index.js"),b=s.n(w);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=f()(e);if(t){var a=f()(this).constructor;s=Reflect.construct(n,arguments,a)}else s=n.apply(this,arguments);return h()(this,s)}}var g=function(e){d()(s,e);var t=y(s);function s(){return i()(this,s),t.apply(this,arguments)}return p()(s,[{key:"componentDidMount",value:function(){this.props.editor&&this.updateHtml(this.props.atts.rawHtml)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.atts.rawHtml!==e.atts.rawHtml&&this.props.editor&&this.updateHtml(e.atts.rawHtml)}},{key:"updateHtml",value:function(e){var t=this.refs.rawHtmlWrapper;this.updateInlineHtml(t,e)}},{key:"render",value:function(){var e=this.props,t=e.id,s=e.atts,n=e.editor,a=s.customClass,r=s.metaCustomId,l="vce-raw-html",i={};"string"==typeof a&&a&&(l=l.concat(" "+a)),r&&(i.id=r);var c=this.applyDO("all");return b.a.createElement("div",o()({className:l},n,i),b.a.createElement("div",o()({className:"vce-raw-html-wrapper",id:"el-"+t},c,{ref:"rawHtmlWrapper"})))}}]),s}(a.a.getService("api").elementComponent);(0,a.a.getService("cook").add)(s("./rawHtml/settings.json"),(function(e){e.add(g)}),{css:!1,editorCss:s("./node_modules/raw-loader/index.js!./rawHtml/editor.css")},"")},"./rawHtml/settings.json":function(e){e.exports=JSON.parse('{"rawHtml":{"type":"rawCode","access":"public","value":"<p><strong>HyperText Markup Language (HTML)</strong> is the standard markup language for creating web pages and web applications.</p>","options":{"label":"Raw HTML","description":"Add a custom HTML code to the WordPress website via a raw code block that accepts HTML.","mode":"html"}},"customClass":{"type":"string","access":"public","value":"","options":{"label":"Extra class name","description":"Add an extra class name to the element and refer to it from the custom CSS option."}},"designOptions":{"type":"designOptions","access":"public","value":{},"options":{"label":"Design Options"}},"editFormTab1":{"type":"group","access":"protected","value":["rawHtml","metaCustomId","customClass"],"options":{"label":"General"}},"metaEditFormTabs":{"type":"group","access":"protected","value":["editFormTab1","designOptions"]},"relatedTo":{"type":"group","access":"protected","value":["General"]},"metaBackendLabels":{"type":"group","access":"protected","value":[{"value":["rawHtml"]}]},"metaCustomId":{"type":"customId","access":"public","value":"","options":{"label":"Element ID","description":"Apply a unique ID to the element to link it directly by using #your_id (for element ID use lowercase input only)."}},"tag":{"access":"protected","type":"string","value":"rawHtml"}}')}},[["./rawHtml/index.js"]]]);