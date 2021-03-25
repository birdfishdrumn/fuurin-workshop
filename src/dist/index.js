"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var App_1 = require("./App");
// import{SignIn,SignUp,Reset,PostEdit,PostList,PostDetail} from './templates/index';
var store_1 = require("./store");
var react_redux_1 = require("react-redux");
var serviceWorker = require("./serviceWorker");
require("./assets/reset.css");
// import Auth from "./Auth"
var connected_react_router_1 = require("connected-react-router");
var store_2 = require("./store");
require("./assets/style.css");
var styles_1 = require("@material-ui/core/styles");
var theme_1 = require("./assets/theme");
react_dom_1["default"].render(react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
    react_1["default"].createElement(connected_react_router_1.ConnectedRouter, { history: store_2.history },
        react_1["default"].createElement(styles_1.MuiThemeProvider, { theme: theme_1.theme },
            react_1["default"].createElement(App_1["default"], null)))), document.getElementById('root'));
serviceWorker.unregister();
