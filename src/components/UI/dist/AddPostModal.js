"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var Dialog_1 = require("@material-ui/core/Dialog");
var AppBar_1 = require("@material-ui/core/AppBar");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var IconButton_1 = require("@material-ui/core/IconButton");
var Typography_1 = require("@material-ui/core/Typography");
var Close_1 = require("@material-ui/icons/Close");
var Slide_1 = require("@material-ui/core/Slide");
var index_1 = require("templates/index");
var index_2 = require("../UI/index");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        appBar: {
            position: 'relative',
            background: "white"
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1
        },
        root: {
        //   height: "500px",
        // marginTop:"500px"
        }
    });
});
var Transition = react_1["default"].forwardRef(function Transition(props, ref) {
    return react_1["default"].createElement(Slide_1["default"], __assign({ direction: "up", ref: ref }, props));
});
var AddPostModal = function (_a) {
    var open = _a.open, handleClose = _a.handleClose;
    var classes = useStyles();
    var _b = react_1.useState(false), openModal = _b[0], setOpenModal = _b[1];
    var handleModalClose = react_1.useCallback(function () {
        setOpenModal(false);
    }, [setOpenModal]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Dialog_1["default"], { fullScreen: true, open: open, style: { margin: "0 !important" }, onClose: handleClose, TransitionComponent: Transition },
            react_1["default"].createElement(AppBar_1["default"], { className: classes.appBar },
                react_1["default"].createElement(Toolbar_1["default"], null,
                    react_1["default"].createElement(IconButton_1["default"], { edge: "start", color: "inherit", onClick: function () { return setOpenModal(true); }, "aria-label": "close" },
                        react_1["default"].createElement(Close_1["default"], null)),
                    react_1["default"].createElement(Typography_1["default"], { variant: "h6", className: classes.title }, "\u4F5C\u54C1\u306E\u767B\u9332\u30FB\u7DE8\u96C6"))),
            react_1["default"].createElement(index_1.PostEdit, { dialog: true, handleClose: handleClose })),
        react_1["default"].createElement(index_2.DeleteDialog, { product: true, handleModalClose: handleModalClose, handleClose: handleClose, openModal: openModal })));
};
exports["default"] = AddPostModal;
