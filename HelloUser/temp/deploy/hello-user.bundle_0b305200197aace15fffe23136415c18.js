define("cdd537ad-59f4-4d87-ab76-e7cbe1acd578_0.0.1",["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-webpart-base","helloUserStrings"],function(e,t,n,o,r){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var o=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},r=n(1),i=n(2),a=n(3),l=n(4),s=n(5),c=n(6),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=r.createElement(c.default,{busyMessage:"Working on it..."});i.render(e,this.domElement)},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return a.Version.parse("1.0")},enumerable:!0,configurable:!0}),t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:s.PropertyPaneDescription},groups:[{groupName:s.BasicGroupName,groupFields:[l.PropertyPaneTextField("description",{label:s.DescriptionFieldLabel})]}]}]}},t}(l.BaseClientSideWebPart);Object.defineProperty(t,"__esModule",{value:!0}),t.default=u},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=r},function(e,t,n){"use strict";var o=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},r=n(1),i=n(7),a=function(e){function t(t){var n=e.call(this,t)||this;return n.state={data:null,isValid:!1},n}return o(t,e),t.prototype.render=function(){return r.createElement("div",{className:i.default.helloWorld},"Welcome, ",this.state.data,"!")},t.prototype.componentDidMount=function(){var e=this;fetch("../../_api/web/currentuser",{method:"GET",credentials:"same-origin",headers:{accept:"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({data:t.Title,isValid:!0})}).catch(function(e){console.log(e)})},t}(r.Component);Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,n){"use strict";n(8);var o={helloWorld:"helloWorld_fac88092",container:"container_fac88092",row:"row_fac88092",listItem:"listItem_fac88092",button:"button_fac88092",label:"label_fac88092"};Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){var o=n(9),r=n(11);"string"==typeof o&&(o=[[e.id,o]]);for(var i=0;i<o.length;i++)r.loadStyles(o[i][1]);o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(10)(),t.push([e.id,'.helloWorld_fac88092 .container_fac88092{max-width:700px;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.helloWorld_fac88092 .row_fac88092{padding:20px}.helloWorld_fac88092 .listItem_fac88092{max-width:715px;margin:5px auto 5px auto;box-shadow:0 0 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.helloWorld_fac88092 .button_fac88092{text-decoration:none;height:32px;min-width:80px;background-color:#0078d7;border-color:#0078d7;color:#fff;outline:transparent;position:relative;font-family:"Segoe UI WestEuropean","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.helloWorld_fac88092 .button_fac88092 .label_fac88092{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t){(function(e){"use strict";function n(e){var t=Array.isArray(e)?e:c(e);void 0===f&&(f=d()),r(t)}function o(e){y.loadStyles=e}function r(e,t){if(y.loadStyles){var n=s(e);y.loadStyles(n)}else f?p(e,t):u(e,t)}function i(e){y.theme=e,a()}function a(){if(y.theme)for(var e=0,t=y.registeredStyles;e<t.length;e++){var n=t[e];r(n.themableStyle,n)}}function l(e){return e&&(e=s(c(e))),e}function s(e){var t,n=y.theme;if(e){var o=e.map(function(e){var t=e.theme;if(t){var o=n?n[t]:void 0,r=e.defaultValue;return!n||o||!console||t in n||console.warn('Theming value not provided for "'+t+'". Falling back to "'+(r||"inherit")+'".'),o||r||"inherit"}return e.rawString});t=o.join("")}return t}function c(e){var t=[];if(e){for(var n=0,o=void 0;o=m.exec(e);){var r=o.index;r>n&&t.push({rawString:e.substring(n,r)}),t.push({theme:o[1],defaultValue:o[2]}),n=m.lastIndex}t.push({rawString:e.substring(n)})}return t}function u(e,t){var n=document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",o.appendChild(document.createTextNode(s(e))),t?(n.replaceChild(o,t.styleElement),t.styleElement=o):n.appendChild(o),t||y.registeredStyles.push({styleElement:o,themableStyle:e})}function p(e,t){var n=document.getElementsByTagName("head")[0],o=y.lastStyleElement,r=y.registeredStyles,i=o?o.styleSheet:void 0,a=i?i.cssText:"",c=r[r.length-1],u=s(e);(!o||a.length+u.length>g)&&(o=document.createElement("style"),o.type="text/css",t?(n.replaceChild(o,t.styleElement),t.styleElement=o):n.appendChild(o),t||(c={styleElement:o,themableStyle:e},r.push(c))),o.styleSheet.cssText+=l(u),Array.prototype.push.apply(c.themableStyle,e),y.lastStyleElement=o}function d(){var e=!1;if("undefined"!=typeof document){var t=document.createElement("style");t.type="text/css",e=!!t.styleSheet}return e}var f,h="undefined"==typeof window?e:window,y=h.__themeState__=h.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]},m=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,g=1e4;t.loadStyles=n,t.configureLoadStyles=o,t.loadTheme=i,t.detokenize=l,t.splitStyles=c}).call(t,function(){return this}())}])});