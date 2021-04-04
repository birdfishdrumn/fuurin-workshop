"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Color = exports.Text = exports.Image = exports.Flex = exports.ImagePallet = exports.ImageContainer = exports.SvgContainer = exports.Svg = exports.StyledText = void 0;
var styled_components_1 = require("styled-components");
function getTextFont(style) {
    if (style === void 0) { style = 'default'; }
    switch (style) {
        case 'default':
            return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      font-family:'\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4\u30B7\u30C3\u30AF','Hiragino Sans';\n       "], ["\n      font-family:'\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4\u30B7\u30C3\u30AF','Hiragino Sans';\n       "])));
        case 'StdN':
            return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      font-family:'\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 StdN','Hiragino Kaku Gothic StdN';\n\n      "], ["\n      font-family:'\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 StdN','Hiragino Kaku Gothic StdN';\n\n      "])));
        case 'Mincho':
            return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n       font-family:'\u30D2\u30E9\u30AE\u30CE\u660E\u671D ProN','Hiragino Mincho ProN';\n      "], ["\n       font-family:'\u30D2\u30E9\u30AE\u30CE\u660E\u671D ProN','Hiragino Mincho ProN';\n      "])));
        case 'Hannotate':
            return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      font-family:\"Comic Sans MS\";\n      "], ["\n      font-family:\"Comic Sans MS\";\n      "])));
        case 'Wawati':
            return styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      font-family:'Wawati SC';\n      "], ["\n      font-family:'Wawati SC';\n      "])));
    }
}
function getTextColor(style) {
    if (style === void 0) { style = 'default'; }
    switch (style) {
        case 'default':
            return styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n       color:#000;\n        text-shadow:1px 1px 4px white;\n       "], ["\n       color:#000;\n        text-shadow:1px 1px 4px white;\n       "])));
        case 'white':
            return styled_components_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      color:white;\n       text-shadow:1px 1px 4px black;\n      "], ["\n      color:white;\n       text-shadow:1px 1px 4px black;\n      "])));
        case 'blue':
            return styled_components_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      color:blue;\n       text-shadow:1px 1px 4px white;\n      "], ["\n      color:blue;\n       text-shadow:1px 1px 4px white;\n      "])));
        case 'pink':
            return styled_components_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      color:pink;\n       text-shadow:1px 1px 4px white;\n      "], ["\n      color:pink;\n       text-shadow:1px 1px 4px white;\n      "])));
    }
}
var TextStyle = styled_components_1.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    -ms-writing-mode: tb-rl;\n  writing-mode: vertical-rl;\n  position:absolute;\n  top:300px;\n  left:35%;\n  text-align:left;\n  font-size:0.8rem;\n  font-weight:bold;\n  height:240px;\n   ", ";\n\n    ", ";\n     ", ";\n"], ["\n    -ms-writing-mode: tb-rl;\n  writing-mode: vertical-rl;\n  position:absolute;\n  top:300px;\n  left:35%;\n  text-align:left;\n  font-size:0.8rem;\n  font-weight:bold;\n  height:240px;\n   ", ";\n\n    ", ";\n     ",
    ";\n"])), function (props) { return getTextFont(props.fontstyle); }, function (props) { return getTextColor(props.textstyle); }, function (props) {
    switch (props.textLength) {
        case "short":
            return "\n           font-size:1.2rem;\n         top:312px;\n        left:41.5%;";
        case "first":
            return " left:43%;";
        case "second":
            return " left:40%;";
        case "third":
            return " left:35%;";
    }
    return "left:43%;";
});
exports.StyledText = styled_components_1["default"].p(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\n  ", ";\n"], ["\n\n  ", ";\n"])), TextStyle);
//  const NormalText = props => {
//   return <StyledText {...props} />;
// };
exports.Svg = styled_components_1["default"].svg(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  filter: drop-shadow(3px 3px 3px #000);\n\n"], ["\n  filter: drop-shadow(3px 3px 3px #000);\n\n"])));
exports.SvgContainer = styled_components_1["default"].div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\nmargin:0 auto;\n position:relative;\n max-width:250px;\n width:100%;\n\n >div:first-child{\n   position:absolute;\n\n   /* box-shadow:1px 1px 2px black; */\nleft:28px;\ntop:37px;\n\n }\n  >div:nth-child(2){\n   position:absolute;\n\n   /* box-shadow:1px 1px 2px black; */\nleft:18.5px;\ntop:265px;\n\n }\n @media(max-width:768px){\n    max-width:100%;\n    width:250px;\n }\n"], ["\nmargin:0 auto;\n position:relative;\n max-width:250px;\n width:100%;\n\n >div:first-child{\n   position:absolute;\n\n   /* box-shadow:1px 1px 2px black; */\nleft:28px;\ntop:37px;\n\n }\n  >div:nth-child(2){\n   position:absolute;\n\n   /* box-shadow:1px 1px 2px black; */\nleft:18.5px;\ntop:265px;\n\n }\n @media(max-width:768px){\n    max-width:100%;\n    width:250px;\n }\n"])));
exports.ImageContainer = styled_components_1["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n\n/* position:absolute; */\n\nheight:auto;\n/* margin-bottom:500px; */\nz-index:-1;\n"], ["\n\n/* position:absolute; */\n\nheight:auto;\n/* margin-bottom:500px; */\nz-index:-1;\n"])));
exports.ImagePallet = styled_components_1["default"].div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n/* width:50px;\nheight:50px; */\nobject-fit:cover;\n"], ["\n/* width:50px;\nheight:50px; */\nobject-fit:cover;\n"])));
exports.Flex = styled_components_1["default"].div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\ndisplay:grid;\ngrid-template-columns:", ";\n"], ["\ndisplay:grid;\ngrid-template-columns:", ";\n"])), function (props) { return (props.shape ? "8fr" : "repeat(auto-fill,40px)"); });
exports.Image = styled_components_1["default"].img(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\nobject-fit:cover;\nwidth:50px;\nheight:50px;\n"], ["\nobject-fit:cover;\nwidth:50px;\nheight:50px;\n"])));
exports.Text = styled_components_1["default"].p(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    -ms-writing-mode: tb-rl;\n  writing-mode: vertical-rl;\n  position:absolute;\n  top:300px;\n  left:35%;\n  text-align:left;\n  text-shadow:1px 1px 4px black;\n  font-size:0.8rem;\n  font-weight:bold;\n  height:240px;\n  /* color:black; */\n  color:", ";\n"], ["\n    -ms-writing-mode: tb-rl;\n  writing-mode: vertical-rl;\n  position:absolute;\n  top:300px;\n  left:35%;\n  text-align:left;\n  text-shadow:1px 1px 4px black;\n  font-size:0.8rem;\n  font-weight:bold;\n  height:240px;\n  /* color:black; */\n  color:", ";\n"])), function (props) { return (props.second && "red"); });
exports.Color = styled_components_1["default"].div(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n width:50px;\n height:50px;\n background:", ";\n   /* ", "; */\n"], ["\n width:50px;\n height:50px;\n background:", ";\n   /* ",
    "; */\n"])), function (props) { return props.color; }, function (props) {
    switch (props.color) {
        case "white":
            return "background:white !important;";
        case "blue":
            return "background:blue;";
    }
    return "background:black;";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;
