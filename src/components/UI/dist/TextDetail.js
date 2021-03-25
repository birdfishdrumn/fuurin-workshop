"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles({
    row: {
        display: 'flex',
        flexFlow: 'row wrap',
        marginBottom: 16,
        background: "white",
        padding: 16,
        borderRadius: "5%"
    },
    label: {
        marginLeft: 0,
        marginRight: 'auto'
    },
    value: {
        fontWeight: 600,
        marginLeft: 'auto',
        marginRight: 0
    }
});
var TextDetail = function (props) {
    var classes = useStyles();
    return (react_1["default"].createElement("div", { className: classes.row },
        react_1["default"].createElement("div", { className: classes.label }, props.label),
        react_1["default"].createElement("div", { className: classes.value }, props.value)));
};
exports["default"] = TextDetail;
