"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var UI_1 = require("../components/UI");
var index_1 = require("../firebase/index");
var styled_components_1 = require("styled-components");
var react_redux_1 = require("react-redux");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var template_style_1 = require("./template_style");
var userSlice_1 = require("../reducks/users/userSlice");
var marukingyo_svg_jpg_1 = require("assets/img/src/marukingyo_svg.jpg");
var connected_react_router_1 = require("connected-react-router");
var CategoryImageWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n position:relative;\n  cursor: pointer;\n /* height:70%; */\n"], ["\n position:relative;\n  cursor: pointer;\n /* height:70%; */\n"])));
var ImageText = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n /* height:70%; */\n  position:absolute;\n  bottom:10%;\n  font-size:1.4rem;\n  font-weight:bold;\n  color:white;\n  left:5%;\n  text-shadow:1px 2px 2px black;\n    @media(max-width:767px){\n font-size:1.2rem;\n\n  }\n  /* text-align:center; */\n"], ["\n /* height:70%; */\n  position:absolute;\n  bottom:10%;\n  font-size:1.4rem;\n  font-weight:bold;\n  color:white;\n  left:5%;\n  text-shadow:1px 2px 2px black;\n    @media(max-width:767px){\n font-size:1.2rem;\n\n  }\n  /* text-align:center; */\n"])));
var Image = styled_components_1["default"].img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\nborder-radius:10px;\nheight:20vh;\nwidth:100%;\nobject-fit:cover;\n"], ["\n\nborder-radius:10px;\nheight:20vh;\nwidth:100%;\nobject-fit:cover;\n"])));
var Search = function () {
    var _a = react_1.useState([]), tags = _a[0], setTags = _a[1];
    var _b = react_1.useState([]), categories = _b[0], setCategories = _b[1];
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        index_1.db.collection("tags").get().then(function (snapshot) {
            var list = [];
            snapshot.forEach(function (doc) {
                var data = doc.data();
                list.push(data);
            });
            setTags(list);
        });
    }, []);
    react_1.useEffect(function () {
        index_1.db.collection("categories").orderBy("order", "asc").get().then(function (snapshot) {
            var list = [];
            snapshot.forEach(function (doc) {
                var data = doc.data();
                list.push(data);
            });
            setCategories(list);
        });
    }, []);
    react_1.useEffect(function () {
        //  listenAuthNotState()
        return index_1.auth.onAuthStateChanged(function (user) {
            if (user) {
                var uid_1 = user.uid;
                index_1.db.collection("users").doc(uid_1).get()
                    .then(function (snapshot) {
                    var data = snapshot.data();
                    // if文がないとエラーが出る
                    if (data) {
                        dispatch(userSlice_1.login({
                            isSignedIn: true,
                            role: data.role,
                            uid: uid_1,
                            email: data.email,
                            username: data.username,
                            avatar: data.avatar,
                            profile: data.profile
                        }));
                    }
                });
            }
        });
    }, []);
    console.log(categories);
    return (react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapper, null,
        react_1["default"].createElement(UI_1.SearchPopulationNav, null),
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u30AD\u30FC\u30EF\u30FC\u30C9\u304B\u3089\u691C\u7D22"),
        react_1["default"].createElement(UI_1.SearchBox, { fullWidth: true }),
        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u30AB\u30C6\u30B4\u30EA\u30FC\u304B\u3089\u691C\u7D22"),
        react_1["default"].createElement(GlobalLayoutStyle_1.GridList, null, categories.map(function (category) { return (react_1["default"].createElement(CategoryImageWrapper, { key: category.id, onClick: function () { return dispatch(connected_react_router_1.push("/?category=" + category.id)); } },
            react_1["default"].createElement(Image, { src: marukingyo_svg_jpg_1["default"] }),
            react_1["default"].createElement(ImageText, null, category.name))); })),
        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u30BF\u30B0\u304B\u3089\u691C\u7D22"),
        react_1["default"].createElement(template_style_1.PostTag, null, tags.map(function (t) { return (react_1["default"].createElement("li", { key: t.id, onClick: function () { return dispatch(connected_react_router_1.push("/?tags=" + t.tag)); } },
            "#",
            t.tag)); }))));
};
exports["default"] = Search;
{ /* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1153" height="2849" viewBox="0 0 1153 2849">
  <path id="べた塗り_1" data-name="べた塗り 1" class="cls-1" d="M542,252l-29,4-18,2-27,5-21,5-20,6-19,5-17,8-17,10-18,10-16,12-14,9-19,16-16,16-12,14-11,14-12,15-10,20-12,21-9,24-5,17-4,20-1,20,1,25,5,22,2,21,5,23,3,20,7,19,6,15,14,22,14,19,14,18,14,16,16,17,4,5,215,5,114,1,109,6,26-20,20-16,14-18,13-16,9-13,7-12,6-13,5-12,7-14,5-15,7-23,4-17,4-17,1-20V537l-2-17-1-14-3-15-3-11-5-16-6-14-6-16-3-8-7-11-7-10-7-11-6-9-11-13-11-11-14-15-12-10-12-9-21-14-16-10-15-9-19-8-21-8-20-7-19-5-19-3-16-5-12-4-2-5-9-1v-4l-8,1h-8l-8-2-7-2h-5Z"/>
</svg> */
}
var templateObject_1, templateObject_2, templateObject_3;
