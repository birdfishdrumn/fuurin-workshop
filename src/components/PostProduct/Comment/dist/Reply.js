"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Avatar_1 = require("@material-ui/core/Avatar");
var style_1 = require("./style");
var moment_1 = require("moment"); // #1
require("moment/locale/ja");
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    small: {
        width: theme.spacing(2),
        height: theme.spacing(2),
        marginRight: theme.spacing(1),
        cursor: "pointer"
    }
}); });
var Reply = function (_a) {
    var id = _a.id, replies = _a.replies;
    console.log(id);
    var classes = useStyles();
    console.log(replies);
    return (react_1["default"].createElement("div", null, replies[0].comId === id && replies.map(function (rep) {
        var _a;
        return react_1["default"].createElement(style_1.PostComment, { reply: true, key: rep.id },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(Avatar_1["default"], { src: rep.avatar, className: classes.small }),
                react_1["default"].createElement(style_1.PostCommentUser, null,
                    "@",
                    rep.username,
                    "\u3055\u3093"),
                react_1["default"].createElement(style_1.CommentTime, null, moment_1["default"](new Date((_a = rep.timestamp) === null || _a === void 0 ? void 0 : _a.toDate()).toLocaleString()).fromNow())),
            react_1["default"].createElement(style_1.PostCommentText, null,
                rep.text,
                " "));
    })));
};
exports["default"] = Reply;
