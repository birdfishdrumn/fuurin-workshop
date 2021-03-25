"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
// import ProductEdit from "./ProductEdit";
var PostList_module_css_1 = require("./module.css/PostList.module.css");
var styles_1 = require("@material-ui/core/styles");
var PostProduct_1 = require("components/PostProduct");
// import { fetchPosts } from "../reducks/posts/operations";
var connected_react_router_1 = require("connected-react-router");
var firebase_1 = require("../firebase");
// import { getPosts } from "../reducks/posts/postSlice";
var loadingSlice_1 = require("../reducks/loadingSlice");
var count_array_values_1 = require("count-array-values");
var snackbarSlice_1 = require("reducks/snackbar/snackbarSlice");
var userSlice_1 = require("../reducks/users/userSlice");
var postSlice_1 = require("../reducks/posts/postSlice");
var ViewColumn_1 = require("@material-ui/icons/ViewColumn");
var GridOn_1 = require("@material-ui/icons/GridOn");
var Tooltip_1 = require("@material-ui/core/Tooltip");
var UI_1 = require("../components/UI");
var react_loading_1 = require("react-loading");
var SentimentDissatisfiedOutlined_1 = require("@material-ui/icons/SentimentDissatisfiedOutlined");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var ArrowDownward_1 = require("@material-ui/icons/ArrowDownward");
var ArrowUpward_1 = require("@material-ui/icons/ArrowUpward");
var PopulatePost_1 = require("./PopulatePost");
var react_material_ui_carousel_1 = require("react-material-ui-carousel");
// import { ProductDialog  } from "components/UI/index";
// import { snackbarOpenAction } from "reducks/snackbar/snackbarSlice";
// import Carousel from 'react-material-ui-carousel'
var useStyles = styles_1.makeStyles(function (theme) { return ({
    sort: {
        margin: "20px 50px 10px 0",
        justifyContent: "center",
        color: "grey",
        display: "flex",
        listStyle: "none",
        flexFlow: "row",
        '& > li': {
            margin: 10
        }
    }
}); });
var PostList = function () {
    var dispatch = react_redux_1.useDispatch();
    var classes = useStyles();
    var selector = react_redux_1.useSelector(userSlice_1.getRoute);
    var _a = react_1.useState([]), postsList = _a[0], setPostsList = _a[1];
    var _b = react_1.useState("desc"), order = _b[0], setOrder = _b[1];
    var _c = react_1.useState(), lastDoc = _c[0], setLastDoc = _c[1];
    var _d = react_1.useState(false), isEmpty = _d[0], setIsEmpty = _d[1];
    var _e = react_1.useState(false), loading = _e[0], setLoading = _e[1];
    var _f = react_1.useState(false), change = _f[0], setChange = _f[1];
    var _g = react_1.useState(""), catName = _g[0], setCatName = _g[1];
    var open = react_redux_1.useSelector(snackbarSlice_1.getSnackbarState);
    var postsRef = firebase_1.db.collection("posts");
    var query = decodeURI(selector.location.search);
    var category = /^\?category=/.test(query) ? query.split("?category=")[1] : "";
    var tags = /^\?tags=/.test(query) ? query.split("?tags=")[1] : "";
    console.log(query);
    console.log(decodeURI(tags));
    var changeSortAsc = function () {
        setOrder("asc");
    };
    var changeSortDesc = function () {
        setOrder("desc");
    };
    // 投稿をとってくる関数
    var fetchPosts = function (category, tags) {
        return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
            var query, unSub;
            return __generator(this, function (_a) {
                dispatch(loadingSlice_1.showLoadingAction("Loading"));
                query = postsRef.orderBy("updated_at", order);
                // categoryのクエリー
                query = (category !== "") ? query.where("category", "==", category) : query;
                //  tagのクエリ
                query = (tags !== "") ? query.where("tags", "array-contains", tags) : query;
                unSub = query.limit(24).onSnapshot(function (snapshots) {
                    var postList = [];
                    snapshots.forEach(function (snapshot) {
                        var post = snapshot.data();
                        postList.push(post);
                    });
                    var lastDoc = snapshots.docs[snapshots.docs.length - 1];
                    setLastDoc(lastDoc);
                    setPostsList(postList);
                    console.log(lastDoc);
                    dispatch(postSlice_1.fetchPostsAction(postList));
                    dispatch(loadingSlice_1.hideLoadingAction());
                });
                return [2 /*return*/];
            });
        }); };
    };
    react_1.useEffect(function () {
        dispatch(fetchPosts(category, tags));
        setIsEmpty(false);
    }, [query, order]);
    console.log(query.split("?category=")[1]);
    var categoryId = query.split("?category=")[1];
    react_1.useEffect(function () {
        if (categoryId) {
            firebase_1.db.collection("categories").doc(categoryId).get().then(function (snapshot) {
                var catName = snapshot.data().name;
                setCatName(catName);
            });
        }
    }, [categoryId]);
    console.log(catName);
    // 更に新しい投稿を取得する。
    var fetchMore = function () {
        setLoading(true);
        var query = postsRef.orderBy("updated_at", order);
        query = (category !== "") ? query.where("category", "==", category) : query;
        query = (tags !== "") ? query.where("tags", "array-contains", tags) : query;
        //  dispatch(showLoadingAction("Loading"));
        query.startAfter(lastDoc).limit(12).get()
            .then(function (snapshots) {
            var isCollectionEmpty = snapshots.size === 0;
            if (!isCollectionEmpty) {
                var postList_1 = [];
                snapshots.forEach(function (snapshot) {
                    var post = snapshot.data();
                    postList_1.push(post);
                    console.log(postList_1.length - 1);
                });
                var lastDoc_1 = snapshots.docs[snapshots.docs.length - 1];
                setLastDoc(lastDoc_1);
                setPostsList(function (postsList) { return __spreadArrays(postsList, postList_1); });
                dispatch(postSlice_1.fetchPostsAction(postList_1));
                // dispatch(hideLoadingAction());
            }
            else {
                setIsEmpty(true);
                // dispatch(hideLoadingAction());
            }
            setLoading(false);
        });
    };
    var imageList = postsList.map(function (post) { return post.images[0]; }).slice(0, 5);
    console.log(imageList);
    var tagsList = postsList.map(function (post) { return post.tags; });
    var tagNum = count_array_values_1["default"](tagsList.flat());
    var tagNumSlice = tagNum.slice(0, 10);
    console.log(tagNumSlice);
    var popularTag = tagNumSlice.map(function (tagName) { return tagName.value; });
    var tagSearch = function (t) {
        dispatch(connected_react_router_1.push("/?tags=" + t.value));
        window.scrollTo(0, 0);
    };
    console.log(open);
    return (react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapper, { top: true },
        !category && !tags && react_1["default"].createElement(react_material_ui_carousel_1["default"], { animation: "slide" }, imageList.map(function (item, i) { return react_1["default"].createElement(PostProduct_1.CarouselItem, { key: item.id, item: item, src: item.path }); })),
        !category && !tags && react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u65B0\u7740\u4F5C\u54C1"),
        react_1["default"].createElement("ul", { className: classes.sort },
            react_1["default"].createElement(Tooltip_1["default"], { title: "\u65B0\u3057\u3044\u6E96", interactive: true },
                react_1["default"].createElement("li", { onClick: changeSortDesc },
                    react_1["default"].createElement(ArrowDownward_1["default"], { fontSize: "large", onClick: function () { return setChange(false); } }))),
            react_1["default"].createElement(Tooltip_1["default"], { title: "\u53E4\u3044\u9806", interactive: true },
                react_1["default"].createElement("li", { onClick: changeSortAsc },
                    react_1["default"].createElement(ArrowUpward_1["default"], { fontSize: "large", onClick: function () { return setChange(false); } }))),
            react_1["default"].createElement(Tooltip_1["default"], { title: "\u30B0\u30EA\u30C3\u30C9", interactive: true },
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(GridOn_1["default"], { fontSize: "large", onClick: function () { return setChange(false); } }))),
            react_1["default"].createElement(Tooltip_1["default"], { title: "\u77ED\u518A\u307E\u3067", interactive: true },
                react_1["default"].createElement("li", { onClick: function () { return setChange(true); } },
                    react_1["default"].createElement(ViewColumn_1["default"], { fontSize: "large" })))),
        tags && react_1["default"].createElement("div", { className: "center large_text" },
            "\u300C",
            tags,
            "\u300D\u306E\u691C\u7D22\u7D50\u679C"),
        category && react_1["default"].createElement("div", { className: "center large_text" },
            "\u300C",
            catName,
            "\u300D\u306E\u691C\u7D22\u7D50\u679C"),
        !postsList.length && react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(SentimentDissatisfiedOutlined_1["default"], null),
            react_1["default"].createElement("h1", null, "\u6295\u7A3F\u304C\u307E\u3060\u3042\u308A\u307E\u305B\u3093...")),
        react_1["default"].createElement(GlobalLayoutStyle_1.GridList, { change: change }, postsList.length > 0 ?
            postsList.map(function (post) { return (react_1["default"].createElement(GlobalLayoutStyle_1.ScrollItem, { key: post.id },
                react_1["default"].createElement(PostProduct_1.PostCard, { change: change, post: post, key: post.id, name: post.name, images: post.images, allImages: post.allImages, id: post.id, description: post.description, username: post.username, avatar: post.avatar, uid: post.uid }))); })
            :
                // ローディング中の表示
                react_1["default"].createElement("div", { style: {
                        height: "100vh",
                        backgroundColor: "#F5F5F5"
                    } })),
        react_1["default"].createElement("div", { className: "center" }, loading && (react_1["default"].createElement(react_loading_1["default"], { type: "spinningBubbles", color: "#eeeeee" }))),
        !postsList.length ?
            react_1["default"].createElement(react_1["default"].Fragment, null)
            :
                !loading && !isEmpty && react_1["default"].createElement(UI_1.NormalButton, { label: "もっと見る", onClick: fetchMore }),
        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
        isEmpty && react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(SentimentDissatisfiedOutlined_1["default"], null),
            react_1["default"].createElement("h1", null, "\u3053\u308C\u4EE5\u4E0A\u6295\u7A3F\u306F\u3042\u308A\u307E\u305B\u3093...")),
        !category && !tags &&
            react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u4EBA\u6C17\u306E\u4F5C\u54C1"),
                react_1["default"].createElement(PopulatePost_1["default"], { top: true }),
                react_1["default"].createElement("div", { className: "module-spacer--medium" }),
                postsList.length !== 0 &&
                    react_1["default"].createElement(react_1["default"].Fragment, null,
                        " ",
                        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u4EBA\u6C17\u306E\u30BF\u30B0"),
                        react_1["default"].createElement("ul", { className: PostList_module_css_1["default"].post_tag }, tagNumSlice && tagNumSlice.map(function (t, index) { return (react_1["default"].createElement("li", { key: index, onClick: function () { return tagSearch(t); } },
                            "#",
                            t.value)); }))))));
};
exports["default"] = PostList;
