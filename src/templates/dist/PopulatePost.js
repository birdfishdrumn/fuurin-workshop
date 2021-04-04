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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var react_redux_1 = require("react-redux");
var firebase_1 = require("../firebase");
var postSlice_1 = require("reducks/posts/postSlice");
var loadingSlice_1 = require("reducks/loadingSlice");
var List_1 = require("@material-ui/core/List");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var index_1 = require("components/PostProduct/index");
var styled_components_1 = require("styled-components");
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = require("@material-ui/core/AppBar");
var Tabs_1 = require("@material-ui/core/Tabs");
var Tab_1 = require("@material-ui/core/Tab");
var Box_1 = require("@material-ui/core/Box");
var index_2 = require("components/UI/index");
var Ranking = styled_components_1["default"].li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n:nth-child(1){\n>li{\n>div:first-child{\n>div{\n\nposition:relative;\n  color:red;\n  /* height:auto; */\n  &::after {\n    content:\"\";\n    font-size:1.6rem;\n        display:  inline-block;\n   top:-30px;\n   width: 60px;\nheight: 60px;\n    left: -16px;\n    z-index:444;\n   /* background-color:white; */\n    align-items:center;\n    padding:10px 0;\n    background-size: contain;\n    position:absolute;\n   background-image: url(\"https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/images%2F%E7%8E%8B%E5%86%A0%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=e3fb0e6c-59d2-451b-9544-2f6cffbc5311\");\n\n  }\n}\n}}\n}\n:nth-child(2){\n>li{\n>div:first-child{\n>div{\n\nposition:relative;\n  color:red;\n  /* height:auto; */\n  &::after {\n    content:\"\";\n    font-size:1.6rem;\n        display:  inline-block;\n   top:0px;\n   width: 55px;\nheight: 55px;\n    left: -15px;\n    z-index:444;\n   /* background-color:white; */\n    align-items:center;\n    padding:10px 0;\n    background-size: contain;\n    position:absolute;\n   background-image: url(\"https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/images%2F2%E4%BD%8D%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=6df0f14d-f55b-472c-a7ec-c7832d0e0cea\");\n\n  }\n}\n}}\n}\n:nth-child(3){\n>li{\n>div:first-child{\n>div{\n\nposition:relative;\n  color:red;\n  /* height:auto; */\n  &::after {\n    content:\"\";\n    font-size:1.6rem;\n        display:  inline-block;\n   top:0px;\n   width: 55px;\nheight: 55px;\n    left: -15px;\n    z-index:444;\n   /* background-color:white; */\n    align-items:center;\n    padding:10px 0;\n    background-size: contain;\n    position:absolute;\n   background-image: url(\"https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/images%2F3%E4%BD%8D%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=1db3743b-2cf2-4eba-948c-0a809696984e\");\n\n  }\n}\n}}\n}\n"], ["\n:nth-child(1){\n>li{\n>div:first-child{\n>div{\n\nposition:relative;\n  color:red;\n  /* height:auto; */\n  &::after {\n    content:\"\";\n    font-size:1.6rem;\n        display:  inline-block;\n   top:-30px;\n   width: 60px;\nheight: 60px;\n    left: -16px;\n    z-index:444;\n   /* background-color:white; */\n    align-items:center;\n    padding:10px 0;\n    background-size: contain;\n    position:absolute;\n   background-image: url(\"https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/images%2F%E7%8E%8B%E5%86%A0%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=e3fb0e6c-59d2-451b-9544-2f6cffbc5311\");\n\n  }\n}\n}}\n}\n:nth-child(2){\n>li{\n>div:first-child{\n>div{\n\nposition:relative;\n  color:red;\n  /* height:auto; */\n  &::after {\n    content:\"\";\n    font-size:1.6rem;\n        display:  inline-block;\n   top:0px;\n   width: 55px;\nheight: 55px;\n    left: -15px;\n    z-index:444;\n   /* background-color:white; */\n    align-items:center;\n    padding:10px 0;\n    background-size: contain;\n    position:absolute;\n   background-image: url(\"https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/images%2F2%E4%BD%8D%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=6df0f14d-f55b-472c-a7ec-c7832d0e0cea\");\n\n  }\n}\n}}\n}\n:nth-child(3){\n>li{\n>div:first-child{\n>div{\n\nposition:relative;\n  color:red;\n  /* height:auto; */\n  &::after {\n    content:\"\";\n    font-size:1.6rem;\n        display:  inline-block;\n   top:0px;\n   width: 55px;\nheight: 55px;\n    left: -15px;\n    z-index:444;\n   /* background-color:white; */\n    align-items:center;\n    padding:10px 0;\n    background-size: contain;\n    position:absolute;\n   background-image: url(\"https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/images%2F3%E4%BD%8D%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=1db3743b-2cf2-4eba-948c-0a809696984e\");\n\n  }\n}\n}}\n}\n"])));
function TabPanel(props) {
    var children = props.children, value = props.value, index = props.index, other = __rest(props, ["children", "value", "index"]);
    return (react_1["default"].createElement("div", __assign({ role: "tabpanel", hidden: value !== index, id: "simple-tabpanel-" + index, "aria-labelledby": "simple-tab-" + index }, other), value === index && (react_1["default"].createElement(Box_1["default"], { p: 3 }, children))));
}
function a11yProps(index) {
    return {
        id: "simple-tab-" + index,
        'aria-controls': "simple-tabpanel-" + index
    };
}
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        margin: '0 auto',
        maxWidth: 752,
        width: '100%'
    },
    appRoot: {
        flexGrow: 1,
        backgroundColor: "white"
    }
}); });
var PopulationPost = function (_a) {
    var top = _a.top;
    var classes = useStyles();
    var dispatch = react_redux_1.useDispatch();
    var selector = react_redux_1.useSelector(function (state) { return state; });
    // const posts = getPosts(selector);
    var _b = react_1.useState([]), postsList = _b[0], setPostsList = _b[1];
    var _c = react_1.useState([]), userList = _c[0], setUserList = _c[1];
    var postsRef = firebase_1.db.collection("posts");
    var userRef = firebase_1.db.collection("users");
    var _d = react_1["default"].useState(0), value = _d[0], setValue = _d[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    var fetchPosts = function () {
        return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                dispatch(loadingSlice_1.showLoadingAction("Loading"));
                postsRef.orderBy("count", "desc").limit(10).get()
                    .then(function (snapshots) {
                    var postList = [];
                    snapshots.forEach(function (snapshot) {
                        var post = snapshot.data();
                        postList.push(post);
                        console.log(postList.length - 1);
                    });
                    var lastDoc = snapshots.docs[snapshots.docs.length - 1];
                    setPostsList(postList);
                    dispatch(postSlice_1.fetchPostsAction(postList));
                    dispatch(loadingSlice_1.hideLoadingAction());
                });
                return [2 /*return*/];
            });
        }); };
    };
    var fetchFavoriteUser = function () {
        return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                dispatch(loadingSlice_1.showLoadingAction("Loading"));
                userRef.orderBy("userFavoriteCount", "desc").limit(10).get()
                    .then(function (snapshots) {
                    var userList = [];
                    snapshots.forEach(function (snapshot) {
                        var user = snapshot.data();
                        userList.push(user);
                    });
                    setUserList(userList);
                    dispatch(loadingSlice_1.hideLoadingAction());
                });
                return [2 /*return*/];
            });
        }); };
    };
    react_1.useEffect(function () {
        dispatch(fetchPosts());
        dispatch(fetchFavoriteUser());
    }, []);
    console.log(postsList[0]);
    console.log(userList);
    return (react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapper, null,
        !top &&
            react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(index_2.SearchPopulationNav, null),
                react_1["default"].createElement("div", { className: classes.appRoot },
                    react_1["default"].createElement(AppBar_1["default"], { position: "static", style: { background: "white" } },
                        react_1["default"].createElement(Tabs_1["default"], { value: value, onChange: handleChange, "aria-label": "simple tabs example" },
                            react_1["default"].createElement(Tab_1["default"], __assign({ label: "\u4F5C\u54C1" }, a11yProps(0), { style: { color: "black" } })),
                            react_1["default"].createElement(Tab_1["default"], __assign({ label: "\u30E6\u30FC\u30B6\u30FC" }, a11yProps(1), { style: { color: "black" } })))),
                    react_1["default"].createElement(TabPanel, { value: value, index: 0 },
                        react_1["default"].createElement(List_1["default"], { className: classes.root }, postsList.length > 0 ?
                            postsList.map(function (post) { return (react_1["default"].createElement(Ranking, { key: post.likesId },
                                react_1["default"].createElement(index_1.PopulationList, { post: post }))); }) : react_1["default"].createElement("div", { style: {
                                height: "100vh",
                                backgroundColor: "white"
                            } }))),
                    react_1["default"].createElement(TabPanel, { value: value, index: 1 },
                        react_1["default"].createElement(List_1["default"], { className: classes.root }, userList.length > 0 ?
                            userList.map(function (user) { return (react_1["default"].createElement(Ranking, { key: user.uid },
                                react_1["default"].createElement(index_1.UserPopulationList, { user: user }))); }) : react_1["default"].createElement("div", { style: {
                                height: "100vh",
                                backgroundColor: "white"
                            } }))))),
        top &&
            react_1["default"].createElement(GlobalLayoutStyle_1.Scroll, null, postsList.length > 0 ?
                postsList.map(function (post) { return (react_1["default"].createElement(GlobalLayoutStyle_1.ScrollItem, { width: true, key: post.id },
                    react_1["default"].createElement(index_1.PostCard, { post: post, key: post.id, name: post.name, images: post.images, allImages: post.allImages, id: post.id, description: post.description, username: post.username, avatar: post.avatar, uid: post.uid }))); })
                :
                    // ローディング中の表示
                    react_1["default"].createElement("div", { style: {
                            height: "100vh",
                            backgroundColor: "#F5F5F5"
                        } }))));
};
exports["default"] = PopulationPost;
var templateObject_1;
