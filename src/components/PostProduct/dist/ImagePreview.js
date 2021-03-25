"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ImagePreview = function (props) {
    return (
    // 画像を1:1に切り取るcssをしよう
    react_1["default"].createElement("div", { className: props.all ? "p-media__allThumb" : "p-media__thumb", onClick: function () { return props["delete"](props.id); } },
        react_1["default"].createElement("img", { alt: "", src: props.path })));
};
exports["default"] = ImagePreview;
