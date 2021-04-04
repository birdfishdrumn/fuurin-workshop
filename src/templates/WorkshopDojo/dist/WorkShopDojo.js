"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var index_1 = require("firebase/index");
var LessonWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n width:100%;\n height:80%;\n background:white;\n padding:50px 25px;\n   box-shadow: 0 0px 10px rgba(0,0,0,0.2);\n\n"], ["\n width:100%;\n height:80%;\n background:white;\n padding:50px 25px;\n   box-shadow: 0 0px 10px rgba(0,0,0,0.2);\n\n"])));
var StyledLink = styled_components_1["default"](react_router_dom_1.Link)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n text-decoration:none;\n"], ["\n text-decoration:none;\n"])));
var LessonColumn = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display:flex;\n >div:first-child{\n  flex-basis:40%\n }\n >div:last-child{\n   flex-basis:50%\n   text-align:left;\n }\n"], ["\n  display:flex;\n >div:first-child{\n  flex-basis:40%\n }\n >div:last-child{\n   flex-basis:50%\n   text-align:left;\n }\n"])));
var WorkShopDojo = function () {
    var _a = react_1.useState([]), lessons = _a[0], setLessons = _a[1];
    react_1.useEffect(function () {
        index_1.db.collection("lessons").get().then(function (snapshot) {
            var list = [];
            snapshot.forEach(function (doc) {
                var data = doc.data();
                list.push(data);
            });
            setLessons(list);
        });
    }, []);
    return (react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapping, null,
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u7D75\u4ED8\u3051\u4F53\u9A13\u9053\u5834"),
        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
        lessons.map(function (lesson) { return (react_1["default"].createElement(LessonWrapper, { key: lesson.id },
            react_1["default"].createElement(StyledLink, { to: "/lesson/" + lesson.id },
                react_1["default"].createElement(LessonColumn, null,
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("img", { src: "" })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true }, "Lesson 1"),
                        react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true }, lesson.title),
                        react_1["default"].createElement(GlobalLayoutStyle_1.Text, { left: true }, lesson.description)))))); }),
        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
        react_1["default"].createElement(LessonWrapper, null,
            react_1["default"].createElement(StyledLink, { to: "/workshopcaution" },
                react_1["default"].createElement(LessonColumn, null,
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("img", { src: "" })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true }, "\u7D75\u4ED8\u3051\u306E\u30B3\u30C4\u30FB\u6CE8\u610F\u70B9"),
                        react_1["default"].createElement(GlobalLayoutStyle_1.Text, { left: true }, "\u6C5F\u6238\u98A8\u9234\u3067\u306F\u7D75\u3092\u5185\u5074\u304B\u3089\u63CF\u304F\u305F\u3081\u3001\u306A\u304B\u306A\u304B\u601D\u3044\u901A\u308A\u306B\u63CF\u304F\u306E\u306F\u96E3\u3057\u3044\u3067\u3059\u3002\u3053\u3061\u3089\u3067\u306F\u4E0A\u624B\u304F\u63CF\u304F\u3061\u3087\u3063\u3068\u3057\u305F\u30B3\u30C4\u3001\u63CF\u304F\u969B\u306E\u6CE8\u610F\u70B9\u3092\u3054\u7D39\u4ECB\u3044\u305F\u3057\u307E\u3059\u3002"))))),
        react_1["default"].createElement("div", { className: "module-spacer--medium" })));
};
exports["default"] = WorkShopDojo;
var templateObject_1, templateObject_2, templateObject_3;
