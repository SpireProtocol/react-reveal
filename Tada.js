"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function Tada(e,t){function r(e){function t(){return(0,_globals.animation)(rule)}return!e&&{make:t}}var o=e.out,a=(0,_objectWithoutProperties3.default)(e,["out"]);return t?_react2.default.createElement(_Reveal2.default,(0,_extends3.default)({},a,{in:r(!1),out:r(!0)})):r(o)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=require("babel-runtime/helpers/extends"),_extends3=_interopRequireDefault(_extends2),_objectWithoutProperties2=require("babel-runtime/helpers/objectWithoutProperties"),_objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2),_react=require("react"),_react2=_interopRequireDefault(_react),_propTypes=require("prop-types"),_Reveal=require("./Reveal"),_Reveal2=_interopRequireDefault(_Reveal),_globals=require("./globals"),propTypes={out:_propTypes.bool},defaultProps={},rule="\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n}\n";Tada.propTypes=propTypes,Tada.defaultProps=defaultProps,exports.default=Tada,module.exports=exports.default;