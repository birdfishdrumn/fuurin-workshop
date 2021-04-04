"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/styles");
var AppBar_1 = require("@material-ui/core/AppBar");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var logo2_png_1 = require("assets/img/icons/logo2.png");
var react_redux_1 = require("react-redux");
var userSlice_1 = require("../../reducks/users/userSlice");
var react_router_dom_1 = require("react-router-dom");
var index_1 = require("./index");
var Button_1 = require("@material-ui/core/Button");
var index_2 = require("components/UI/index");
var Search_1 = require("@material-ui/icons/Search");
var IconButton_1 = require("@material-ui/core/IconButton");
var index_3 = require("components/UI/index");
var connected_react_router_1 = require("connected-react-router");
var styled_components_1 = require("styled-components");
var Logo = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nmargin-top:-12px;\n"], ["\nmargin-top:-12px;\n"])));
var useStyles = styles_1.makeStyles({
    root: {
        flexGrow: 1
    },
    menuBar: {
        backgroundColor: "#fff",
        color: "#444"
    },
    toolbar: {
        margin: "0 auto",
        maxWidth: 1024,
        width: "100%"
    },
    iconButtons: {
        margin: "0 0 0 auto"
    },
    outlined: {
        padding: "0px 5px !important",
        margin: "10px 3px 0px 3px",
        fontWeight: "bold",
        color: "white",
        height: "30px",
        fontSize: "0.9rem"
    },
    loginButton: {
        marginLeft: "auto"
    },
    search: {
        marginTop: "7px"
    }
});
var Header = function () {
    var classes = useStyles();
    var dispatch = react_redux_1.useDispatch();
    var isSignedIn = react_redux_1.useSelector(userSlice_1.getIsSignedIn);
    var history = react_router_dom_1.useHistory();
    var _a = react_1.useState(false), sign = _a[0], setSign = _a[1];
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var _c = react_1.useState(false), dialogOpen = _c[0], setDialogOpen = _c[1];
    var signInOpen = function () {
        setDialogOpen(true);
        setSign(true);
    };
    var dialogClose = react_1.useCallback(function () {
        setDialogOpen(false);
    }, [setOpen]);
    var handleClose = react_1.useCallback(function () {
        setOpen(false);
    }, [setOpen]);
    var handleDrawerToggle = react_1.useCallback(function (event) {
        if (event.type === "keydown" || (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setOpen(!open);
    }, [setOpen, open]);
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement(AppBar_1["default"], { position: "fixed", className: classes.menuBar },
            react_1["default"].createElement(Toolbar_1["default"], { className: classes.toolbar },
                react_1["default"].createElement(Logo, null,
                    react_1["default"].createElement("img", { src: logo2_png_1["default"], alt: "ec", width: "128px", onClick: function () { return history.push("/"); } })),
                isSignedIn ? (react_1["default"].createElement("div", { className: classes.iconButtons },
                    react_1["default"].createElement(index_1.HeaderMenus, { handleDrawerToggle: handleDrawerToggle })))
                    :
                        (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement("div", { className: classes.loginButton },
                                react_1["default"].createElement(IconButton_1["default"], { className: classes.search },
                                    react_1["default"].createElement(Search_1["default"], { style: { fontSize: "30px" }, onClick: function () { return dispatch(connected_react_router_1.push("/search")); } })),
                                react_1["default"].createElement(Button_1["default"], { className: classes.outlined, color: "primary", variant: "contained", onClick: signInOpen }, "\u65B0\u898F\u767B\u9332")),
                            react_1["default"].createElement(index_3.SignDialog, { open: dialogOpen, handleClose: dialogClose, signIn: sign, setSign: setSign }),
                            react_1["default"].createElement(index_2.ConfirmModal, null))))),
        react_1["default"].createElement(index_1.ClosableDrawer, { open: open, onClose: handleDrawerToggle })));
};
exports["default"] = Header;
var templateObject_1;
