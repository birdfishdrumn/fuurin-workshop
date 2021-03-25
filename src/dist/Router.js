"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_1 = require("react-router");
var index_1 = require("./templates/index");
var Auth_1 = require("./Auth");
var Router = function () {
    return (react_1["default"].createElement(react_router_1.Switch, null,
        react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/signin", component: index_1.TopPage }),
        react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/signin/reset", component: index_1.Reset }),
        react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/signin/confirm", component: index_1.Confirm }),
        react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/terms", component: index_1.Terms }),
        react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/policy", component: index_1.PrivacyPolicy }),
        react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/help", component: index_1.Help }),
        react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/helpdetail", component: index_1.HelpDetail }),
        react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/workshopkit", component: index_1.WorkshopKit }),
        react_1["default"].createElement(Auth_1["default"], null,
            react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/push", component: index_1.PushList }),
            react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/", component: index_1.PostList }),
            react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/post/:id", component: index_1.PostDetail }),
            react_1["default"].createElement(react_router_1.Route, { path: "/search", component: index_1.Search }),
            react_1["default"].createElement(react_router_1.Route, { path: "/posts/edit(/:id)?", component: index_1.PostEdit }),
            react_1["default"].createElement(react_router_1.Route, { path: "/dojo", component: index_1.WorkshopDojo }),
            react_1["default"].createElement(react_router_1.Route, { path: "/lesson", component: index_1.WorkshopLesson }),
            react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/user/account", component: index_1.UserAccount }),
            react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/user/mypage", component: index_1.UserMyPage }),
            react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/user/edit", component: index_1.UserEdit }),
            react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/user/post", component: index_1.UserPost }),
            react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/users/:id", component: index_1.UserPage }),
            react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/likes", component: index_1.FavoriteList }),
            react_1["default"].createElement(react_router_1.Route, { exact: true, path: "/population", component: index_1.PopulatePost }),
            react_1["default"].createElement("div", { style: { height: "100px" } }))));
};
exports["default"] = Router;
