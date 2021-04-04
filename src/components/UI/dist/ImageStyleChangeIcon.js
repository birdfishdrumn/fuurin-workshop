"use strict";
exports.__esModule = true;
var react_1 = require("react");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var Tooltip_1 = require("@material-ui/core/Tooltip");
var GridOn_1 = require("@material-ui/icons/GridOn");
var ViewColumn_1 = require("@material-ui/icons/ViewColumn");
var ImageStyleChangeIcon = function (_a) {
    var setChange = _a.setChange;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(GlobalLayoutStyle_1.IconFlex, null,
            react_1["default"].createElement(Tooltip_1["default"], { title: "\u30B0\u30EA\u30C3\u30C9", interactive: true },
                react_1["default"].createElement(GlobalLayoutStyle_1.WhiteIcon, null,
                    react_1["default"].createElement(GridOn_1["default"], { fontSize: "large", onClick: function () { return setChange(false); } }))),
            react_1["default"].createElement(Tooltip_1["default"], { title: "\u77ED\u518A\u307E\u3067", interactive: true },
                react_1["default"].createElement(GlobalLayoutStyle_1.WhiteIcon, { onClick: function () { return setChange(true); } },
                    react_1["default"].createElement(ViewColumn_1["default"], { fontSize: "large" }))))));
};
exports["default"] = ImageStyleChangeIcon;
