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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = require("@material-ui/core/AppBar");
var Tabs_1 = require("@material-ui/core/Tabs");
var Tab_1 = require("@material-ui/core/Tab");
var Typography_1 = require("@material-ui/core/Typography");
var Box_1 = require("@material-ui/core/Box");
var index_1 = require("components/HelpComponents/index");
var index_2 = require("components/UI/index");
function TabPanel(props) {
    var children = props.children, value = props.value, index = props.index, other = __rest(props, ["children", "value", "index"]);
    return (react_1["default"].createElement("div", __assign({ role: "tabpanel", hidden: value !== index, id: "scrollable-auto-tabpanel-" + index, "aria-labelledby": "scrollable-auto-tab-" + index }, other), value === index && (react_1["default"].createElement(Box_1["default"], { p: 3 },
        react_1["default"].createElement(Typography_1["default"], null, children)))));
}
function a11yProps(index) {
    return {
        id: "scrollable-auto-tab-" + index,
        'aria-controls': "scrollable-auto-tabpanel-" + index
    };
}
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper
    }
}); });
var HelpDetail = function (props) {
    var classes = useStyles();
    var stateValue = props.location.state;
    var _a = react_1["default"].useState(stateValue || 0), value = _a[0], setValue = _a[1];
    console.log(props.location.state);
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(index_2.SiteMapNav, null),
        react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapping, { large: true },
            react_1["default"].createElement("div", { className: classes.root },
                react_1["default"].createElement(AppBar_1["default"], { position: "static", color: "default" },
                    react_1["default"].createElement(Tabs_1["default"], { value: value, onChange: handleChange, indicatorColor: "primary", scrollButtons: "on", textColor: "primary", variant: "scrollable", "aria-label": "scrollable auto tabs example" },
                        react_1["default"].createElement(Tab_1["default"], __assign({ label: "\u4F5C\u54C1\u306E\u767B\u9332\u306E\u4ED5\u65B9" }, a11yProps(0))),
                        react_1["default"].createElement(Tab_1["default"], __assign({ label: "\u98A8\u9234\u30E1\u30A4\u30AB\u30FC" }, a11yProps(5))),
                        react_1["default"].createElement(Tab_1["default"], __assign({ label: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB" }, a11yProps(1))),
                        react_1["default"].createElement(Tab_1["default"], __assign({ label: "\u304A\u6C17\u306B\u5165\u308A\u30B7\u30B9\u30C6\u30E0" }, a11yProps(2))),
                        react_1["default"].createElement(Tab_1["default"], __assign({ label: "\u4F5C\u54C1\u306E\u691C\u7D22" }, a11yProps(3))),
                        react_1["default"].createElement(Tab_1["default"], __assign({ label: "\u6C5F\u6238\u98A8\u9234\u306B\u95A2\u3057\u3066" }, a11yProps(4))))),
                react_1["default"].createElement(TabPanel, { value: value, index: 0 },
                    react_1["default"].createElement(index_1.AddProductHelp, null)),
                react_1["default"].createElement(TabPanel, { value: value, index: 1 },
                    react_1["default"].createElement(index_1.WindBellMakerHelp, null)),
                react_1["default"].createElement(TabPanel, { value: value, index: 2 },
                    react_1["default"].createElement(index_1.ProfileHelp, null)),
                react_1["default"].createElement(TabPanel, { value: value, index: 3 },
                    react_1["default"].createElement(index_1.FavoriteHelp, null)),
                react_1["default"].createElement(TabPanel, { value: value, index: 4 },
                    react_1["default"].createElement(index_1.SearchHelp, null)),
                react_1["default"].createElement(TabPanel, { value: value, index: 5 },
                    react_1["default"].createElement(index_1.EdofuurinHelp, null))))));
};
exports["default"] = HelpDetail;
