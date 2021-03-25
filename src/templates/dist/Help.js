"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var styled_components_1 = require("styled-components");
var AccountBox_1 = require("@material-ui/icons/AccountBox");
var Search_1 = require("@material-ui/icons/Search");
var Favorite_1 = require("@material-ui/icons/Favorite");
var AddBox_1 = require("@material-ui/icons/AddBox");
var react_redux_1 = require("react-redux");
var connected_react_router_1 = require("connected-react-router");
var HelpNav = styled_components_1["default"].ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n list-style:none;\n margin:10px 0;\n>li{\n  padding:10px 0;\n}\n"], ["\n list-style:none;\n margin:10px 0;\n>li{\n  padding:10px 0;\n}\n"])));
var Help = function () {
    var dispatch = react_redux_1.useDispatch();
    var locationChange = function (stateValue) {
        dispatch(connected_react_router_1.push({
            pathname: '/helpdetail',
            state: stateValue
        }));
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapping, null,
            react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u30D8\u30EB\u30D7"),
            react_1["default"].createElement(HelpNav, null,
                react_1["default"].createElement("li", { onClick: function () { return locationChange(0); } },
                    react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true },
                        react_1["default"].createElement(AddBox_1["default"], { style: { fontSize: "40px", margin: "0 10px -10px 0" } }),
                        "\u4F5C\u54C1\u306E\u767B\u9332\u306E\u4ED5\u65B9"),
                    react_1["default"].createElement(GlobalLayoutStyle_1.Text, { left: true }, "\u4F5C\u54C1\u306E\u767B\u9332\u306E\u4ED5\u65B9\u306A\u3069\u306B\u3064\u3044\u3066\u7D39\u4ECB\u81F4\u3057\u307E\u3059\u3002")),
                react_1["default"].createElement("li", { onClick: function () { return locationChange(1); } },
                    react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true },
                        react_1["default"].createElement(AddBox_1["default"], { style: { fontSize: "40px", margin: "0 10px -10px 0" } }),
                        "\u98A8\u9234\u30E1\u30A4\u30AB\u30FC\u306E\u4F7F\u3044\u65B9")),
                react_1["default"].createElement("li", { onClick: function () { return locationChange(2); } },
                    react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true },
                        react_1["default"].createElement(AccountBox_1["default"], { style: { fontSize: "40px", margin: "0 10px -10px 0" } }),
                        "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u306B\u3064\u3044\u3066"),
                    react_1["default"].createElement(GlobalLayoutStyle_1.Text, { left: true }, "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u306E\u7DE8\u96C6\u65B9\u6CD5\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u8A2D\u5B9A\u306A\u3069\u306B\u3064\u3044\u3066\u7D39\u4ECB\u81F4\u3057\u307E\u3059\u3002")),
                react_1["default"].createElement("li", { onClick: function () { return locationChange(3); } },
                    react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true },
                        react_1["default"].createElement(Favorite_1["default"], { style: { fontSize: "40px", margin: "0 10px -10px 0" } }),
                        "\u304A\u6C17\u306B\u5165\u308A\u30B7\u30B9\u30C6\u30E0\u306B\u3064\u3044\u3066"),
                    react_1["default"].createElement(GlobalLayoutStyle_1.Text, { left: true }, "\u304A\u6C17\u306B\u5165\u308A\u306E\u767B\u9332\u306E\u30E1\u30EA\u30C3\u30C8\u3001\u4EBA\u6C17\u30E9\u30F3\u30AD\u30F3\u30B0\u306E\u30B7\u30B9\u30C6\u30E0\u306B\u3064\u3044\u3066\u3054\u7D39\u4ECB\u3044\u305F\u3057\u307E\u3059\u3002")),
                react_1["default"].createElement("li", { onClick: function () { return locationChange(4); } },
                    react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true },
                        react_1["default"].createElement(Search_1["default"], { style: { fontSize: "40px", margin: "0 10px -10px 0" } }),
                        "\u4F5C\u54C1\u306E\u691C\u7D22\u306B\u3064\u3044\u3066")),
                react_1["default"].createElement("li", { onClick: function () { return locationChange(5); } },
                    react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true },
                        react_1["default"].createElement(AddBox_1["default"], { style: { fontSize: "40px", margin: "0 10px -10px 0" } }),
                        "\u6C5F\u6238\u98A8\u9234\u306B\u95A2\u3057\u3066"))))));
};
exports["default"] = Help;
var templateObject_1;
