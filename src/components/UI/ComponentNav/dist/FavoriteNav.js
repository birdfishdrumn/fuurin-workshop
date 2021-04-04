"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var PeopleAlt_1 = require("@material-ui/icons/PeopleAlt");
var Favorite_1 = require("@material-ui/icons/Favorite");
var react_redux_1 = require("react-redux");
var connected_react_router_1 = require("connected-react-router");
var styled_components_1 = require("styled-components");
var NavIcon = styled_components_1["default"](GlobalLayoutStyle_1.WhiteIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width:100px;\n  height:100px;\n  flex-direction:column;\n    box-shadow: 0 0px 10px rgba(0,0,0,0.2);\n"], ["\n  width:100px;\n  height:100px;\n  flex-direction:column;\n    box-shadow: 0 0px 10px rgba(0,0,0,0.2);\n"])));
var SearchPopulationNav = function () {
    var dispatch = react_redux_1.useDispatch();
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(GlobalLayoutStyle_1.SectionContainer, null,
            react_1["default"].createElement(GlobalLayoutStyle_1.IconFlex, null,
                react_1["default"].createElement(NavIcon, { onClick: function () { return dispatch(connected_react_router_1.push("/likes")); } },
                    react_1["default"].createElement(Favorite_1["default"], { style: { fontSize: "45px" } }),
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, null, "\u4F5C\u54C1")),
                react_1["default"].createElement(NavIcon, { onClick: function () { return dispatch(connected_react_router_1.push("/likesUser")); } },
                    react_1["default"].createElement(PeopleAlt_1["default"], { style: { fontSize: "45px" } }),
                    react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, null, "\u4EBA\u7269"))))));
};
exports["default"] = SearchPopulationNav;
var templateObject_1;
