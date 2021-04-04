"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var styled_components_1 = require("styled-components");
var index_1 = require("components/UI/index");
var TwoColumn = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n display:flex;\n justify-content:space-between;\n >div:first-child{\n   flex-basis:60%;\n }\n >div:last-child{\n   flex-basis:35%;\n }\n @media(max-width:768px){\n   flex-direction:column;\n  >div:last-child{\n   margin:20px 0;\n }\n }\n"], ["\n display:flex;\n justify-content:space-between;\n >div:first-child{\n   flex-basis:60%;\n }\n >div:last-child{\n   flex-basis:35%;\n }\n @media(max-width:768px){\n   flex-direction:column;\n  >div:last-child{\n   margin:20px 0;\n }\n }\n"])));
var ImageContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nwidth: 300px;\nheight:300px;\n"], ["\nwidth: 300px;\nheight:300px;\n"])));
var Help = function () {
    var onlineOpen = function () {
        var url = "https://maruyosi.theshop.jp/";
        window.open(url, '_blank');
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(index_1.SiteMapNav, null),
        react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapping, null,
            react_1["default"].createElement(GlobalLayoutStyle_1.BackgroundWhite, null,
                react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u4F53\u9A13\u30AD\u30C3\u30C8\u306B\u3064\u3044\u3066"),
                react_1["default"].createElement("div", { className: "module-spacer--large" }),
                react_1["default"].createElement(TwoColumn, null,
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(GlobalLayoutStyle_1.Text, { left: true },
                            "\u4F53\u9A13\u30AD\u30C3\u30C8\u304C\u3042\u308C\u3070\u4ED6\u306B\u6C34\u306E\u5165\u3063\u305F\u7D19\u30B3\u30C3\u30D7\u306A\u3069\u3092\u7528\u610F\u3059\u308B\u3060\u3051\u3067\u3059\u3050\u306B\u98A8\u9234\u306E\u7D75\u4ED8\u3051\u4F53\u9A13\u3092\u59CB\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",
                            react_1["default"].createElement("br", null),
                            react_1["default"].createElement("br", null),
                            "\u6C5F\u6238\u98A8\u9234\u306F\u5168\u3066\u7BE0\u539F\u307E\u308B\u3088\u3057\u98A8\u9234\u3067\u88FD\u4F5C\u3057\u305F\u3082\u306E\u3067\u3001\u4E00\u3064\u4E00\u3064\u624B\u4F5C\u308A\u306E\u3082\u306E\u3068\u306A\u3063\u3066\u304A\u308A\u3001\u97F3\u3082\u9055\u3044\u307E\u3059\u3002",
                            react_1["default"].createElement("br", null),
                            "\u30B3\u30ED\u30CA\u306E\u5F71\u97FF\u3067\u304A\u5E97\u306B\u6765\u308C\u306A\u304F\u3066\u3082\u6C5F\u6238\u98A8\u9234\u306E\u4F53\u9A13\u3092\u697D\u3057\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3088\u3002")),
                    react_1["default"].createElement(ImageContainer, null,
                        react_1["default"].createElement("img", { src: "https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Ftaiken_kit_contents.jpg?alt=media&token=dd683b38-f182-4e9e-9b20-affcaa163559" }))),
                react_1["default"].createElement("div", { className: "module-spacer--large" }),
                react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u4F53\u9A13\u30AD\u30C3\u30C8\u306E\u5185\u5BB9"),
                react_1["default"].createElement("div", { className: "module-spacer--large" }),
                react_1["default"].createElement(GlobalLayoutStyle_1.SimpleGrid, { two: true },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(GlobalLayoutStyle_1.CircleImage, { src: "https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Ffuurin_tansaku.jpg?alt=media&token=cf2d6248-7bab-410e-8b81-a24eb9fbcea2" }),
                        react_1["default"].createElement(GlobalLayoutStyle_1.Title, { min: true }, "\u6C5F\u6238\u98A8\u9234\u3001\u77ED\u518A"),
                        react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, { left: true, color: "dimgray" },
                            "\u6C5F\u6238\u98A8\u9234\u306F\u97F3\u304C\u9055\u3046\u306E\u3067\u3001\u3069\u3093\u306A\u97F3\u306B\u306A\u308B\u304B\u306F\u304A\u697D\u3057\u307F\u306B\u3002",
                            react_1["default"].createElement("br", null),
                            "\u307E\u305F\u6C5F\u6238\u98A8\u9234\u306E\u4ED5\u69D8\u4E0A\u3001\u30AC\u30E9\u30B9\u306B\u6C17\u6CE1\u306A\u3069\u304C\u5165\u3063\u3066\u3044\u307E\u306E\u3067\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002\u77ED\u518A\u306F\u307E\u308B\u3088\u3057\u98A8\u9234\u306E\u30ED\u30B4\u304C\u5165\u3063\u305F\u5929\u5730\u307C\u304B\u3057\u306E\u3082\u306E\u304C\u4E00\u3064\u5165\u3063\u3066\u304A\u308A\u307E\u3059\u3002")),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(GlobalLayoutStyle_1.CircleImage, { src: "https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Fbrush_paint.jpg?alt=media&token=8bc8d2b5-7bb6-48e0-8fc9-353b85600109" }),
                        react_1["default"].createElement(GlobalLayoutStyle_1.Title, { min: true }, "\u5E73\u7B46\u3001\u7D30\u7B46\u3001\u6C34\u5F69\u7D75\u5177\uFF17\u8272"),
                        react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, { left: true, color: "dimgray" },
                            "\u7D30\u7B46\u306F\u82B1\u706B\u306A\u3069\u7D30\u304B\u3044\u7DDA\u3092\u5F15\u304F\u7D75\u306B\u3001\u592A\u3044\u7B46\u306F\u30D9\u30BF\u5857\u308A\u3084\u304A\u82B1\u306E\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u3092\u8868\u73FE\u3059\u308B\u3053\u3068\u306B\u4F7F\u3048\u307E\u3059\u3002",
                            react_1["default"].createElement("br", null),
                            "\u7D75\u306E\u5177\u306F\u5F53\u5E97\u3067\u4F53\u9A13\u7528\u3068\u3057\u3066\u4F7F\u7528\u3057\u3066\u3044\u308B\u30DD\u30B9\u30BF\u30FC\u30AB\u30E9\u30FC\u306B\u306A\u308A\u307E\u3059\u3002\u6700\u521D\u306F\u56FA\u307E\u3063\u3066\u3044\u308B\u306E\u3067\u6C34\u3067\u6EB6\u304B\u3057\u3066\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002"))),
                react_1["default"].createElement("div", { className: "module-spacer--medium" }),
                react_1["default"].createElement(GlobalLayoutStyle_1.Title, { min: true }, "\u4FA1\u683C"),
                react_1["default"].createElement(GlobalLayoutStyle_1.Text, { red: true }, "\u00A51,650(\u7A0E\u8FBC)"),
                react_1["default"].createElement(index_1.PrimaryButton, { onClick: function () { return onlineOpen(); }, label: "\u3054\u8CFC\u5165\u306F\u3053\u3061\u3089\u304B\u3089" }),
                react_1["default"].createElement("div", { className: "module-spacer--large" })))));
};
exports["default"] = Help;
var templateObject_1, templateObject_2;
