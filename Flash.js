"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function Flash(e,t){function r(e){function t(){return(0,_globals.animation)(rule)}return!e&&{make:t}}var o=e.out,u=(0,_objectWithoutProperties3.default)(e,["out"]);return t?_react2.default.createElement(_Reveal2.default,(0,_extends3.default)({},u,{in:r(!1),out:r(!0)})):r(o)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=require("babel-runtime/helpers/extends"),_extends3=_interopRequireDefault(_extends2),_objectWithoutProperties2=require("babel-runtime/helpers/objectWithoutProperties"),_objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2),_react=require("react"),_react2=_interopRequireDefault(_react),_propTypes=require("prop-types"),_Reveal=require("./Reveal"),_Reveal2=_interopRequireDefault(_Reveal),_globals=require("./globals"),propTypes={out:_propTypes.bool},defaultProps={},rule="\nfrom, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n}\n";Flash.propTypes=propTypes,Flash.defaultProps=defaultProps,exports.default=Flash,module.exports=exports.default;