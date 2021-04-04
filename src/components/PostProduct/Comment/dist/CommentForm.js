"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_1 = require("./style");
var Detail_module_css_1 = require("templates/module.css/Detail.module.css");
var Send_1 = require("@material-ui/icons/Send");
var CommentForm = function (_a) {
    var comment = _a.comment, setComment = _a.setComment, reply = _a.reply, setReply = _a.setReply;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(style_1.PostCommentForm, null,
            react_1["default"].createElement(style_1.PostCommentInput, { type: "text", placeholder: "\u30B3\u30E1\u30F3\u30C8\u3092\u5165\u529B\u3057\u3066\u4E0B\u3055\u3044\u3002", value: comment, onChange: function (e) {
                    return setComment(e.target.value);
                } }),
            react_1["default"].createElement("button", { disabled: !comment, className: comment ? Detail_module_css_1["default"].post_button : Detail_module_css_1["default"].post_buttonDisable, type: "submit" },
                react_1["default"].createElement(Send_1["default"], null)))));
};
exports["default"] = CommentForm;
