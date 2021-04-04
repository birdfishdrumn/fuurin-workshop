"use strict";
exports.__esModule = true;
var react_1 = require("react");
var index_1 = require("firebase/index");
var styles_1 = require("@material-ui/core/styles");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var function_1 = require("functions/function");
var CircularProgress_1 = require("@material-ui/core/CircularProgress");
// import { DragDropContext, Droppable } from "react-beautiful-dnd";
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        margin: '0 auto',
        maxWidth: 512,
        width: '100%'
    },
    listIcon: {
        margin: "auto",
        display: "flex",
        flexFlow: "row",
        justifyContent: "center",
        listStyle: "none",
        color: "grey",
        '& > li': {
            margin: 10
        }
    }
}); });
var PushList = function (props) {
    var classes = useStyles();
    var _a = react_1.useState({
        title: "",
        message: "",
        images: "",
        date: index_1.FirebaseTimestamp.now()
    }), pushItem = _a[0], setPushItem = _a[1];
    var id = props.location.state;
    console.log(id);
    react_1.useEffect(function () {
        index_1.db.collection("message").doc(id).get().then(function (snapshot) {
            var data = snapshot.data();
            setPushItem(data);
        });
    }, [id]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapping, null,
            react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u304A\u77E5\u3089\u305B"),
            react_1["default"].createElement("div", { className: "module--space-medium" }),
            react_1["default"].createElement(GlobalLayoutStyle_1.BackgroundWhite, null,
                pushItem ?
                    react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, pushItem.title),
                        react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, { right: true }, function_1.dateToString(pushItem.date.toDate())),
                        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
                        react_1["default"].createElement(GlobalLayoutStyle_1.Text, { left: true }, pushItem.message))
                    :
                        react_1["default"].createElement(CircularProgress_1["default"], { color: "inherit", style: { marginTop: "20vh" } }),
                react_1["default"].createElement("div", { className: "module-spacer--medium" })))));
};
exports["default"] = PushList;
