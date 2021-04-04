"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.PushWrapper = exports.MinText = exports.PopperWrapper = void 0;
var styled_components_1 = require("styled-components");
exports.PopperWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n width:250px;\n max-height:300px;\n"], ["\n width:250px;\n max-height:300px;\n"])));
exports.MinText = styled_components_1["default"].h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n font-size:0.9rem;\n font-weight:bold;\n padding:", ";\n"], ["\n font-size:0.9rem;\n font-weight:bold;\n padding:", ";\n"])), function (props) { return (props.padding && "10px"); });
exports.PushWrapper = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nmargin:5px auto;\ntext-align:center;\nmax-width:250px;\n\n"], ["\nmargin:5px auto;\ntext-align:center;\nmax-width:250px;\n\n"])));
var templateObject_1, templateObject_2, templateObject_3;
