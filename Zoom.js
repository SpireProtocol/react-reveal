"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function Zoom(e,t){function o(e){function t(){var t=p||n,o=i||a||s||u,r=t||o,c=void 0,f=void 0,d=void 0,_=void 0,m=void 0;return r?e?(f=t?((l?n:p)?"":"-")+"42px":"0",d=o?((l?s||a:u||i)?"-":"")+"60px":"0",_=t?((l?p:n)?"":"-")+"2000px":"0",m=o?((l?u||i:s||a)?"":"-")+"2000px":"0",c="40% {\n              opacity: 1;\n              transform: scale3d(.475, .475, .475) translate3d("+f+", "+d+", 0);\n            }\n            to {\n              opacity: 0;\n              transform: scale(.1) translate3d("+_+", "+m+", 0);\n              transform-origin: "+(o?"center bottom":((l?n:p)?"left":"right")+" center")+";\n            }"):(f=t?(p?"-":"")+"1000px":"0",d=o?(u||i?"-":"")+"1000px":"0",_=t?(n?"-":"")+"10px":"0",m=o?(s||a?"-":"")+"60px":"0",c="from {\n              opacity: 0;\n              transform: scale3d(.1, .1, .1) translate3d("+f+", "+d+", 0);\n              animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n            }\n            60% {\n              opacity: 1;\n              transform: scale3d(.475, .475, .475) translate3d("+_+", "+m+", 0);\n              animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n            }"):c=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",(0,_globals.animation)(c)}return{make:t}}var r=e.out,p=e.left,n=e.right,i=e.top,a=e.bottom,s=e.up,u=e.down,l=e.opposite,c=(0,_objectWithoutProperties3.default)(e,["out","left","right","top","bottom","up","down","opposite"]);return t?_react2.default.createElement(_Reveal2.default,(0,_extends3.default)({},c,{in:o(!1),out:o(!0)})):o(r)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=require("babel-runtime/helpers/extends"),_extends3=_interopRequireDefault(_extends2),_objectWithoutProperties2=require("babel-runtime/helpers/objectWithoutProperties"),_objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2),_react=require("react"),_react2=_interopRequireDefault(_react),_propTypes=require("prop-types"),_Reveal=require("./Reveal"),_Reveal2=_interopRequireDefault(_Reveal),_globals=require("./globals"),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,opposite:_propTypes.bool},defaultProps={};Zoom.propTypes=propTypes,Zoom.defaultProps=defaultProps,exports.default=Zoom,module.exports=exports.default;