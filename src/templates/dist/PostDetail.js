"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var Avatar_1 = require("@material-ui/core/Avatar");
var react_redux_1 = require("react-redux");
var index_1 = require("../firebase/index");
var styles_1 = require("@material-ui/core/styles");
var html_react_parser_1 = require("html-react-parser");
var index_2 = require("../components/PostProduct/index");
// import {addProductToCart} from "../reducks/users/operations"
var connected_react_router_1 = require("connected-react-router");
var userSlice_1 = require("../reducks/users/userSlice");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
require("moment/locale/ja");
var react_loading_1 = require("react-loading");
var LocalOfferOutlined_1 = require("@material-ui/icons/LocalOfferOutlined");
var template_style_1 = require("./template_style");
var styled_components_1 = require("styled-components");
var Divider_1 = require("@material-ui/core/Divider");
var GlobalLayoutStyle_2 = require("assets/GlobalLayoutStyle");
var AvatarTitle = styled_components_1["default"](Avatar_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay:inline-block;\n"], ["\ndisplay:inline-block;\n"])));
var Username = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n margin-top:10px;\n margin-left:20px;\n\n"], ["\n margin-top:10px;\n margin-left:20px;\n\n"])));
var NoComment = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n margin-top:20px;\n"], ["\n margin-top:20px;\n"])));
var Swiper = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n@media(max-width:1024px){\n/* s */\n/* height:100%; */\n}\n\n"], ["\n@media(max-width:1024px){\n/* s */\n/* height:100%; */\n}\n\n"])));
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        sliderBox: (_a = {},
            _a[theme.breakpoints.down("sm")] = {
                margin: "0 auto 24px auto",
                // height: "auto",
                width: "90%"
            },
            _a[theme.breakpoints.up("sm")] = {
                margin: "0 auto",
                width: 400
            },
            _a),
        media: {
            margin: "auto",
            // position: "relative",
            textAlign: "center",
            '& > img': {
                //  position: "relative",
                margin: "auto",
                height: "70%",
                borderRadius: 5,
                width: "70%"
            }
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
            marginRight: theme.spacing(1)
        }
    });
});
var returnCodeToBr = function (text) {
    if (text === "") {
        return text;
    }
    else {
        // 改行コードをhtmlで使える<br>タグに変換する。
        return html_react_parser_1["default"](text.replace(/\r?\n/g, "<br/>"));
    }
};
var PostDetail = function (_a) {
    var classes = useStyles();
    var dispatch = react_redux_1.useDispatch();
    var isSignedIn = react_redux_1.useSelector(userSlice_1.getIsSignedIn);
    // const path = selector.router.location.pathname;
    var id = window.location.pathname.split("/post/")[1];
    var postInFavorite = react_redux_1.useSelector(userSlice_1.getPostsInFavorite);
    // お気に入りした作品数
    var likesId = postInFavorite.map(function (post) {
        return post.postId;
    });
    var uid = react_redux_1.useSelector(userSlice_1.getUserId);
    var username = react_redux_1.useSelector(userSlice_1.getUsername);
    var avatar = react_redux_1.useSelector(userSlice_1.getUserAvatar);
    // idは新たに定義されたidである事を忘れない
    // const [id, setId] = useState(productId);/s
    var _b = react_1.useState(null), post = _b[0], setPost = _b[1];
    // const [username, setUser] = useState<USER>(null)
    var _c = react_1.useState(false), open = _c[0], setOpen = _c[1];
    var _d = react_1.useState([]), tags = _d[0], setTags = _d[1];
    var _e = react_1.useState(""), postUid = _e[0], setPostUid = _e[1];
    console.log(id);
    var _f = react_1.useState(false), openModal = _f[0], setOpenModal = _f[1];
    react_1.useEffect(function () {
        // 個別の商品情報の取得なのでdoc(id)と引数にidを忘れない
        // if (id) {
        // }
        if (id) {
            var unSub_1 = index_1.db.collection("posts").doc(id).onSnapshot(function (doc) {
                if (doc.data()) {
                    var data = doc.data();
                    var tags_1 = data.tags;
                    setPost(data);
                    setTags(tags_1);
                    setPostUid(postUid);
                }
            });
            return function () {
                unSub_1();
            };
        }
    }, [id]);
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
    //   useEffect(() => {
    //     if (isSignedIn) {
    //       db.collection("users").doc(uid).get().then(doc => {
    //         const data: any = doc.data()
    //         setUser(data)
    //         console.log(data)
    //       })
    //     }
    // }, []);
    console.log(tags);
    var random = Math.floor(Math.random() * tags.length);
    var randomTag = tags[random];
    var searchTag = function (tag) {
        dispatch(connected_react_router_1.push("/?tags=" + tag));
        // onClose()
    };
    return (react_1["default"].createElement(GlobalLayoutStyle_2.SectionWrapper, null, post ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(GlobalLayoutStyle_2.Title, { id: "title" }, post.name),
        react_1["default"].createElement(Divider_1["default"], null),
        react_1["default"].createElement("div", { style: { height: "5vh" } }),
        react_1["default"].createElement(GlobalLayoutStyle_1.GridLow, null,
            react_1["default"].createElement("div", { className: classes.sliderBox },
                react_1["default"].createElement(Swiper, null,
                    react_1["default"].createElement(index_2.ImageSwiper, { images: post.images })),
                react_1["default"].createElement("div", { className: "module-spacer--small" }),
                react_1["default"].createElement(GlobalLayoutStyle_2.Flex, { between: true },
                    react_1["default"].createElement(GlobalLayoutStyle_2.Flex, null,
                        react_1["default"].createElement(AvatarTitle, { onClick: function () { return dispatch(connected_react_router_1.push("/users/" + post.uid)); }, src: post.avatar }),
                        react_1["default"].createElement(Username, null, post.username)),
                    react_1["default"].createElement(index_2.Favorite, { id: id, uid: uid, likesId: likesId, post: post })),
                react_1["default"].createElement(Divider_1["default"], null),
                react_1["default"].createElement(NoComment, null, post.check !== true ?
                    react_1["default"].createElement(index_2.Comment, { postUid: postUid, id: id, username: username, avatar: avatar, uid: uid }) :
                    react_1["default"].createElement("h1", null, "\u30B3\u30E1\u30F3\u30C8\u306F\u975E\u8868\u793A\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002"))),
            react_1["default"].createElement(template_style_1.DetailWrapper, null,
                react_1["default"].createElement(template_style_1.Detail, null,
                    react_1["default"].createElement(Divider_1["default"], { className: "downMd" }),
                    react_1["default"].createElement("div", { className: "downMd", style: { height: "5vh" } }),
                    react_1["default"].createElement("h1", { className: "center u-text__title" }, "\u4F5C\u54C1\u306E\u8AAC\u660E"),
                    react_1["default"].createElement("p", null, returnCodeToBr(post.description)),
                    react_1["default"].createElement("div", { className: "module-spacer--small" }),
                    react_1["default"].createElement("div", { className: classes.media },
                        react_1["default"].createElement("img", { src: post.allImages[0].path })),
                    react_1["default"].createElement("div", { className: "module-spacer--small" }),
                    react_1["default"].createElement(template_style_1.PostTag, null,
                        react_1["default"].createElement(LocalOfferOutlined_1["default"], null),
                        post.tags && post.tags.map(function (t, index) { return (react_1["default"].createElement("li", { key: index, onClick: function () { return searchTag(t); } },
                            "#",
                            t)); }))))),
        react_1["default"].createElement("div", { style: { height: "5vh" } }),
        react_1["default"].createElement(Divider_1["default"], null),
        post.tags.length > 0 ? react_1["default"].createElement("div", null,
            react_1["default"].createElement(index_2.RelationPost, { randomTag: randomTag, tags: tags, id: id }))
            : react_1["default"].createElement("h1", null, "\u95A2\u9023\u4F5C\u54C1\u306F\u3042\u308A\u307E\u305B\u3093"),
        react_1["default"].createElement("div", { style: { height: "10vh" } })))
        :
            (react_1["default"].createElement("div", { style: {
                    height: "100vh",
                    width: "1024px",
                    backgroundColor: "#F5F5F5"
                } },
                react_1["default"].createElement(react_loading_1["default"], { type: "spinningBubbles" })))));
};
exports["default"] = PostDetail;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
