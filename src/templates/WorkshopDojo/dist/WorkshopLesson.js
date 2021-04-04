"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.__esModule = true;
var react_1 = require("react");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var styled_components_1 = require("styled-components");
var react_id_swiper_1 = require("react-id-swiper");
var index_1 = require("firebase/index");
var LessonBox = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nwidth:100%;\n/* height:500px; */\nbackground-color:white;\npadding:30px;\n\n"], ["\nwidth:100%;\n/* height:500px; */\nbackground-color:white;\npadding:30px;\n\n"])));
var LessonImage = styled_components_1["default"].img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nwidth:350px;\nheight:350px;\nborder-radius:50%;\nobject-fit:cover;\n@media(max-width:768px){\n  width:100%;\n  height:auto;\n}\n"], ["\nwidth:350px;\nheight:350px;\nborder-radius:50%;\nobject-fit:cover;\n@media(max-width:768px){\n  width:100%;\n  height:auto;\n}\n"])));
var LessonText = styled_components_1["default"](GlobalLayoutStyle_1.Text)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nwidth:60%;\nmargin:0 auto;\npadding:10px 0 30px 0;\n"], ["\nwidth:60%;\nmargin:0 auto;\npadding:10px 0 30px 0;\n"])));
var WorkShopDojo = function () {
    var params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        rebuildOnUpdate: true
    };
    var _a = react_1.useState([]), slide = _a[0], setSlide = _a[1];
    var id = window.location.pathname.split("/lesson")[1];
    if (id) {
        id = id.split("/")[1];
    }
    react_1.useEffect(function () {
        var unSub = index_1.db.collection("lessons").doc(id).collection("slide").orderBy("number", "asc").onSnapshot(function (snapshot) {
            setSlide(snapshot.docs.map(function (doc) { return ({
                id: doc.data().id,
                title: doc.data().title,
                images: doc.data().images,
                description: doc.data().description
            }); }));
        });
        return function () {
            unSub();
        };
    }, []);
    console.log(slide);
    return (react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapping, null,
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u7D75\u4ED8\u3051\u4F53\u9A13\u9053\u5834"),
        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
        react_1["default"].createElement(react_id_swiper_1["default"], __assign({}, params), slide.map(function (s) { return (react_1["default"].createElement(LessonBox, { key: s.id },
            react_1["default"].createElement(LessonImage, { src: s.images.path }),
            react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, s.title),
            react_1["default"].createElement(LessonText, { left: true }, s.description))); }))));
};
exports["default"] = WorkShopDojo;
var templateObject_1, templateObject_2, templateObject_3;
