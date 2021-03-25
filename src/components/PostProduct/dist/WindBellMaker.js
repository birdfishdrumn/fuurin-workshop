"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var smart_png_1 = require("assets/img/src/shape/smart.png");
var styled_components_1 = require("styled-components");
// import Tanzaku from "assets/img/src/tanzaku.png"
var flowerPettern_jpg_1 = require("assets/img/src/stripPattern/flowerPettern.jpg");
var colorFlower_jpg_1 = require("assets/img/src/stripPattern/colorFlower.jpg");
var takasistatte_jpg_1 = require("assets/img/src/stripPattern/takasistatte.jpg");
var ULOCO_png_1 = require("assets/img/src/stripPattern/ULOCO.png");
var check_png_1 = require("assets/img/src/stripPattern/check.png");
var Momiji_png_1 = require("assets/img/src/stripPattern/Momiji.png");
// import BlueWave from "assets/img/src/stripPattern/BlueWave.png"
var Taiko_png_1 = require("assets/img/src/stripPattern/Taiko.png");
var WindBellCropper_1 = require("./WindBellCropper");
var Svg = styled_components_1["default"].svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  filter: drop-shadow(3px 3px 3px #000);\n\n"], ["\n  filter: drop-shadow(3px 3px 3px #000);\n\n"])));
var SvgContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nmargin:0 auto;\n position:relative;\n max-width:250px;\n width:100%;\n\n >div:first-child{\n   position:absolute;\n\n   /* box-shadow:1px 1px 2px black; */\nleft:28px;\ntop:37px;\n\n }\n  >div:nth-child(2){\n   position:absolute;\n\n   /* box-shadow:1px 1px 2px black; */\nleft:18.5px;\ntop:265px;\n\n }\n @media(max-width:768px){\n    max-width:100%;\n    width:250px;\n }\n"], ["\nmargin:0 auto;\n position:relative;\n max-width:250px;\n width:100%;\n\n >div:first-child{\n   position:absolute;\n\n   /* box-shadow:1px 1px 2px black; */\nleft:28px;\ntop:37px;\n\n }\n  >div:nth-child(2){\n   position:absolute;\n\n   /* box-shadow:1px 1px 2px black; */\nleft:18.5px;\ntop:265px;\n\n }\n @media(max-width:768px){\n    max-width:100%;\n    width:250px;\n }\n"])));
var ImageContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\n/* position:absolute; */\n\nheight:auto;\n/* margin-bottom:500px; */\nz-index:-1;\n"], ["\n\n/* position:absolute; */\n\nheight:auto;\n/* margin-bottom:500px; */\nz-index:-1;\n"])));
var ImagePallet = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\nwidth:50px;\nheight:50px;\nobject-fit:cover;\n"], ["\nwidth:50px;\nheight:50px;\nobject-fit:cover;\n"])));
var Flex = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\ndisplay:grid;\ngrid-template-columns:  repeat(auto-fill, 50px);\n"], ["\ndisplay:grid;\ngrid-template-columns:  repeat(auto-fill, 50px);\n"])));
var Image = styled_components_1["default"].img(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\nobject-fit:cover;\nwidth:50px;\nheight:50px;\n"], ["\nobject-fit:cover;\nwidth:50px;\nheight:50px;\n"])));
var WindBellMaker = function (_a) {
    var pathItem = _a.pathItem, setPathItem = _a.setPathItem, windBellImage = _a.windBellImage, setWindBellImage = _a.setWindBellImage;
    // const [pathItem, setPathItem] = useState(false)
    var _b = react_1.useState(""), strip = _b[0], setStrip = _b[1];
    return (react_1["default"].createElement("div", { className: "center" },
        react_1["default"].createElement(SvgContainer, null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("svg", { width: 0, height: 0, style: { position: 'absolute', top: 0, left: 0 } },
                    react_1["default"].createElement("clipPath", { id: "clip01" },
                        react_1["default"].createElement("path", { id: "\u3079\u305F\u5857\u308A_1", "data-name": "\u3079\u305F\u5857\u308A 1", d: pathItem.path }))),
                react_1["default"].createElement(Svg, { width: 200, height: 140, viewBox: pathItem.viewBox }, windBellImage &&
                    react_1["default"].createElement("image", { xlinkHref: windBellImage, width: "100%", height: "100%", style: { marginRight: "20px", boxShadow: "2px 2px" }, preserveAspectRatio: "xMidYMid slice", clipPath: "url(#clip01)" }))),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("svg", { width: 0, height: 0, style: { position: 'absolute', top: 0, left: 0 } },
                    react_1["default"].createElement("clipPath", { id: "clip02" },
                        react_1["default"].createElement("path", { id: "\u3079\u305F\u5857\u308A_1", "data-name": "\u3079\u305F\u5857\u308A 1", d: "M32,0H463c2.128,57.109,8.881,115.333-12,157q-4,8-8,16l-33,12c-11.128-1.122-24.16-10.425-38-3-18.393,9.867-25.331,39.156-28,65,13,9.866,22.165,23.392,36,33,34.123-4.415,47.574-16.38,62-40q-4.5-16.5-9-33l26-11c36.209-44.493,32.7-124.819,23-193L760,5q-22.5,1356.365-45,2713L0,2733Q16,1366.635,32,0Z" }))),
                react_1["default"].createElement(Svg, { width: 200, height: 295, viewBox: "0 0 760 2733" }, windBellImage &&
                    react_1["default"].createElement("image", { xlinkHref: strip, width: "100%", height: "100%", style: { marginRight: "20px", boxShadow: "2px 2px" }, preserveAspectRatio: "xMidYMid slice", clipPath: "url(#clip02)" }))),
            react_1["default"].createElement(ImageContainer, null,
                react_1["default"].createElement("img", { src: smart_png_1["default"], alt: "\u30AF\u30EA\u30C3\u30D4\u30F3\u30B0\u30B5\u30F3\u30D7\u30EB" }))),
        react_1["default"].createElement(Flex, null,
            react_1["default"].createElement(ImagePallet, { onClick: function () { return setStrip(flowerPettern_jpg_1["default"]); } },
                react_1["default"].createElement(Image, { src: flowerPettern_jpg_1["default"] })),
            react_1["default"].createElement(ImagePallet, { onClick: function () { return setStrip(colorFlower_jpg_1["default"]); } },
                react_1["default"].createElement(Image, { src: colorFlower_jpg_1["default"] })),
            react_1["default"].createElement(ImagePallet, { onClick: function () { return setStrip(takasistatte_jpg_1["default"]); } },
                react_1["default"].createElement(Image, { src: takasistatte_jpg_1["default"] })),
            react_1["default"].createElement(ImagePallet, { onClick: function () { return setStrip(ULOCO_png_1["default"]); } },
                react_1["default"].createElement(Image, { src: ULOCO_png_1["default"] })),
            react_1["default"].createElement(ImagePallet, { onClick: function () { return setStrip(check_png_1["default"]); } },
                react_1["default"].createElement(Image, { src: check_png_1["default"] })),
            react_1["default"].createElement(ImagePallet, { onClick: function () { return setStrip(Momiji_png_1["default"]); } },
                react_1["default"].createElement(Image, { src: Momiji_png_1["default"] })),
            react_1["default"].createElement(ImagePallet, { onClick: function () { return setStrip(Taiko_png_1["default"]); } },
                react_1["default"].createElement(Image, { src: Taiko_png_1["default"] }))),
        react_1["default"].createElement(WindBellCropper_1["default"], { pathItem: pathItem, setPathItem: setPathItem, imageUrl: windBellImage, setImageUrl: setWindBellImage })));
};
exports["default"] = WindBellMaker;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
