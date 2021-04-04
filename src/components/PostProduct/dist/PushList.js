"use strict";
exports.__esModule = true;
var react_1 = require("react");
var index_1 = require("firebase/index");
var styles_1 = require("@material-ui/core/styles");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
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
var PushList = function () {
    var classes = useStyles();
    var _a = react_1.useState([]), pushList = _a[0], setPushList = _a[1];
    react_1.useEffect(function () {
        index_1.db.collection("message").get().then(function (snapshot) {
            var list = [];
            snapshot.forEach(function (doc) {
                var data = doc.data();
                list.push(data);
            });
            setPushList(list);
        });
    }, []);
    return (react_1["default"].createElement("section", { className: "c-section-wrapin" },
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u304A\u77E5\u3089\u305B"),
        pushList.map(function (push) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, null, push.title),
            react_1["default"].createElement(GlobalLayoutStyle_1.Text, null, push.message))); }),
        react_1["default"].createElement("div", { style: { height: "25vh" } })));
};
exports["default"] = PushList;
