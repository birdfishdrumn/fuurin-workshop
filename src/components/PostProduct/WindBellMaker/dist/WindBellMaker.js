"use strict";
exports.__esModule = true;
var react_1 = require("react");
var WindBellMakerDrawer_1 = require("./WindBellMakerDrawer");
var WindBellMaker = function (_a) {
    // const [pathItem, setPathItem] = useState(false)
    // const [strip, setStrip] = useState("")
    var textLength = _a.textLength, strip = _a.strip, setStrip = _a.setStrip, pathItem = _a.pathItem, setPathItem = _a.setPathItem, windBellImage = _a.windBellImage, setWindBellImage = _a.setWindBellImage, wishText = _a.wishText, inputWishText = _a.inputWishText;
    return (react_1["default"].createElement("div", { className: "center" },
        react_1["default"].createElement(WindBellMakerDrawer_1["default"], { textLength: textLength, pathItem: pathItem, setPathItem: setPathItem, setWindBellImage: setWindBellImage, windBellImage: windBellImage, strip: strip, setStrip: setStrip, wishText: wishText, inputWishText: inputWishText })));
};
exports["default"] = WindBellMaker;
