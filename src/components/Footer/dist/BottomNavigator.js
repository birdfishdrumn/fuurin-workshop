"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var BottomNavigation_1 = require("@material-ui/core/BottomNavigation");
var BottomNavigationAction_1 = require("@material-ui/core/BottomNavigationAction");
var Home_1 = require("@material-ui/icons/Home");
var Favorite_1 = require("@material-ui/icons/Favorite");
var Search_1 = require("@material-ui/icons/Search");
var Avatar_1 = require("@material-ui/core/Avatar");
var Add_1 = require("@material-ui/icons/Add");
var connected_react_router_1 = require("connected-react-router");
var react_redux_1 = require("react-redux");
var index_1 = require("../UI/index");
var userSlice_1 = require("reducks/users/userSlice");
var react_redux_2 = require("react-redux");
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        root: (_a = {
                zIndex: 999
            },
            _a[theme.breakpoints.down("sm")] = {
                maxWidth: "100%",
                position: "fixed !important",
                bottom: 0,
                width: "100%"
            },
            _a[theme.breakpoints.up("sm")] = {
                display: "none"
            },
            _a),
        small: {
            width: theme.spacing(4),
            height: theme.spacing(4)
        }
    });
});
// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     position: "fixed",
//     bottom:0
//   },
// });
var BottomNavigator = function () {
    var classes = useStyles();
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    var handleClickOpen = function () {
        setOpen(true);
    };
    var avatar = react_redux_2.useSelector(userSlice_1.getUserAvatar);
    console.log(avatar);
    var handleClose = function () {
        setOpen(false);
    };
    var _b = react_1["default"].useState(0), value = _b[0], setValue = _b[1];
    var dispatch = react_redux_1.useDispatch();
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(BottomNavigation_1["default"], { value: value, onChange: function (event, newValue) {
                setValue(newValue);
            }, showLabels: true, className: classes.root },
            react_1["default"].createElement(BottomNavigationAction_1["default"], { label: "\u30DB\u30FC\u30E0", onClick: function () { return dispatch(connected_react_router_1.push("/")); }, icon: react_1["default"].createElement(Home_1["default"], null) }),
            react_1["default"].createElement(BottomNavigationAction_1["default"], { label: "\u691C\u7D22", onClick: function () { return dispatch(connected_react_router_1.push("/search")); }, icon: react_1["default"].createElement(Search_1["default"], null) }),
            react_1["default"].createElement(BottomNavigationAction_1["default"], { label: "\u6295\u7A3F", onClick: function () { return handleClickOpen(); }, icon: react_1["default"].createElement(Add_1["default"], null) }),
            react_1["default"].createElement(BottomNavigationAction_1["default"], { label: "\u304A\u6C17\u306B\u5165\u308A", onClick: function () { return dispatch(connected_react_router_1.push("/likes")); }, icon: react_1["default"].createElement(Favorite_1["default"], null) }),
            react_1["default"].createElement(BottomNavigationAction_1["default"], { onClick: function () { return dispatch(connected_react_router_1.push("/user/mypage")); }, icon: react_1["default"].createElement(Avatar_1["default"], { className: classes.small, src: avatar }) })),
        react_1["default"].createElement(index_1.AddPostModal, { open: open, handleClose: handleClose })));
};
exports["default"] = BottomNavigator;
