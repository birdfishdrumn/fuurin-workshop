"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("@material-ui/core/Button");
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles({
    button: {
        backgroundColor: "#4dd0e1",
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        height: 48,
        marginButton: 20,
        width: 220,
        marginTop: 20
    }
});
var PrimaryButton = function (props) {
    var classes = useStyles();
    return (react_1["default"].createElement(Button_1["default"], { className: classes.button, variant: "contained", disabled: props.disabled, onClick: function () { return props.onClick(); } }, props.label));
};
exports["default"] = PrimaryButton;
