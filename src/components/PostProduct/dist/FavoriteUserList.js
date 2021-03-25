"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var List_1 = require("@material-ui/core/List");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var ListItemAvatar_1 = require("@material-ui/core/ListItemAvatar");
var Avatar_1 = require("@material-ui/core/Avatar");
var Typography_1 = require("@material-ui/core/Typography");
var react_redux_1 = require("react-redux");
var connected_react_router_1 = require("connected-react-router");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            margin: "20px auto",
            width: '100%',
            maxWidth: '700px',
            backgroundColor: theme.palette.background.paper
        },
        large: {
            width: theme.spacing(10),
            height: theme.spacing(10)
        },
        inline: {
            display: 'inline'
        },
        list: {
            marginLeft: "20px",
            fontWeight: "bold"
        }
    });
});
function AlignItemsList(_a) {
    var avatar = _a.avatar, username = _a.username, profile = _a.profile, uid = _a.uid;
    var classes = useStyles();
    var dispatch = react_redux_1.useDispatch();
    return (react_1["default"].createElement(List_1["default"], { className: classes.root, onClick: function () { return dispatch(connected_react_router_1.push("/users/" + uid)); } },
        react_1["default"].createElement(ListItem_1["default"], { alignItems: "flex-start" },
            react_1["default"].createElement(ListItemAvatar_1["default"], null,
                react_1["default"].createElement(Avatar_1["default"], { className: classes.large, alt: "Remy Sharp", src: avatar })),
            react_1["default"].createElement(ListItemText_1["default"], { className: classes.list, primary: username, secondary: react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(Typography_1["default"], { component: "span", variant: "body2", className: classes.inline, color: "textPrimary" }, profile)) }))));
}
exports["default"] = AlignItemsList;
