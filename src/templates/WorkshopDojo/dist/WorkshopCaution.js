"use strict";
exports.__esModule = true;
var react_1 = require("react");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var cautionData_1 = require("./cautionData");
var WorkshopCaution = function () {
    return (react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapping, null,
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u6C5F\u6238\u98A8\u9234\u3092\u6271\u3046\u6642\u306E\u6CE8\u610F\u70B9"),
        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
        react_1["default"].createElement(GlobalLayoutStyle_1.SimpleGrid, { gap: true }, cautionData_1.cautionData.map(function (caution, index) { return (react_1["default"].createElement("div", { key: index },
            react_1["default"].createElement(GlobalLayoutStyle_1.CircleImage, { src: caution.image }),
            react_1["default"].createElement(GlobalLayoutStyle_1.Title, { min: true }, caution.title),
            react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, { left: true, color: "dimgray" }, caution.description))); })),
        react_1["default"].createElement("div", { className: "module-spacer--small" }),
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u7D75\u4ED8\u3051\u306E\u30B3\u30C4"),
        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
        react_1["default"].createElement(GlobalLayoutStyle_1.SimpleGrid, { gap: true }, cautionData_1.knackData.map(function (knack, index) { return (react_1["default"].createElement("div", { key: index },
            react_1["default"].createElement(GlobalLayoutStyle_1.CircleImage, { src: knack.image }),
            react_1["default"].createElement(GlobalLayoutStyle_1.Title, { min: true }, knack.title),
            react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, { left: true, color: "dimgray" }, knack.description))); }))));
};
exports["default"] = WorkshopCaution;
