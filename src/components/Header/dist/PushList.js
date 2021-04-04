"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var index_1 = require("firebase/index");
var style_1 = require("./style");
var Divider_1 = require("@material-ui/core/Divider");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var CircularProgress_1 = require("@material-ui/core/CircularProgress");
var function_1 = require("functions/function");
var connected_react_router_1 = require("connected-react-router");
var PushList = function (_a) {
    var handleClose = _a.handleClose;
    var dispatch = react_redux_1.useDispatch();
    var _b = react_1.useState([]), pushList = _b[0], setPushList = _b[1];
    react_1.useEffect(function () {
        index_1.db.collection("message").orderBy("date", "desc").limit(5).get().then(function (snapshot) {
            var list = [];
            snapshot.forEach(function (doc) {
                var data = doc.data();
                list.push(data);
            });
            setPushList(list);
        });
    }, []);
    var changePush = function (id) {
        dispatch(connected_react_router_1.push({
            pathname: "/push/" + id,
            state: id
        }));
        handleClose();
    };
    console.log(pushList);
    return (react_1["default"].createElement(style_1.PushWrapper, null,
        react_1["default"].createElement(style_1.MinText, { padding: true }, "\u304A\u77E5\u3089\u305B"),
        react_1["default"].createElement(Divider_1["default"], null),
        pushList.length ? pushList.map(function (push) { return (react_1["default"].createElement("div", { key: push.id, style: { cursor: "pointer" }, onClick: function () { return changePush(push.id); } },
            react_1["default"].createElement(style_1.MinText, { padding: true }, push.title),
            react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, { min: true, color: "dimgray" }, function_1.dateToString(push.date.toDate())))); })
            :
                react_1["default"].createElement(CircularProgress_1["default"], { color: "inherit", style: { padding: "20px" } }),
        react_1["default"].createElement("div", { style: { height: "25vh" } })));
};
exports["default"] = PushList;
