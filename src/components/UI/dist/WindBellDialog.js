"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("@material-ui/core/Button");
var Dialog_1 = require("@material-ui/core/Dialog");
var DialogContent_1 = require("@material-ui/core/DialogContent");
var useMediaQuery_1 = require("@material-ui/core/useMediaQuery");
var styles_1 = require("@material-ui/core/styles");
var Done_1 = require("@material-ui/icons/Done");
var WindBellMaker_1 = require("../PostProduct/WindBellMaker/WindBellMaker");
var styled_components_1 = require("styled-components");
var TwoColumn = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* width:100%; */\n  display:flex;\n  text-align:center;\n  margin:0 auto;\n"], ["\n  /* width:100%; */\n  display:flex;\n  text-align:center;\n  margin:0 auto;\n"])));
var CustomDialogContent = styled_components_1["default"](DialogContent_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n@media(max-width:768px){\n padding:0;\n}\n\n"], ["\n@media(max-width:768px){\n padding:0;\n}\n\n"
    // interface PROPS {
    //  props:WindBellMakerType
    // }
])));
// interface PROPS {
//  props:WindBellMakerType
// }
var WindBellDialog = function (_a) {
    var textLength = _a.textLength, strip = _a.strip, setStrip = _a.setStrip, dialogOpen = _a.dialogOpen, handleClose = _a.handleClose, windBellImage = _a.windBellImage, setWindBellImage = _a.setWindBellImage, pathItem = _a.pathItem, setPathItem = _a.setPathItem, wishText = _a.wishText, inputWishText = _a.inputWishText;
    var theme = styles_1.useTheme();
    var fullScreen = useMediaQuery_1["default"](theme.breakpoints.down('sm'));
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Dialog_1["default"], { fullScreen: fullScreen, open: dialogOpen, onClose: handleClose, "aria-labelledby": "responsive-dialog-title" },
            react_1["default"].createElement(CustomDialogContent, null,
                react_1["default"].createElement(TwoColumn, null,
                    react_1["default"].createElement(WindBellMaker_1["default"], { textLength: textLength, pathItem: pathItem, setPathItem: setPathItem, setWindBellImage: setWindBellImage, windBellImage: windBellImage, strip: strip, setStrip: setStrip, wishText: wishText, inputWishText: inputWishText })),
                react_1["default"].createElement("div", { className: "module-spacer--medium" }),
                react_1["default"].createElement("div", { className: "center" },
                    react_1["default"].createElement(Button_1["default"], { startIcon: react_1["default"].createElement(Done_1["default"], null), variant: "contained", onClick: handleClose, style: { margin: "0 auto" }, 
                        // className={classes.button}
                        color: "primary" }, "\u98A8\u9234\u30E1\u30A4\u30AB\u30FC\u3092\u7D42\u4E86"))))));
};
exports["default"] = WindBellDialog;
var templateObject_1, templateObject_2;
