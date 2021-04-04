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
var Close_1 = require("@material-ui/icons/Close");
var styles_1 = require("@material-ui/core/styles");
var html_react_parser_1 = require("html-react-parser");
var index_2 = require("../components/PostProduct/index");
var IconButton_1 = require("@material-ui/core/IconButton");
// import {addProductToCart} from "../reducks/users/operations"
var connected_react_router_1 = require("connected-react-router");
var userSlice_1 = require("../reducks/users/userSlice");
var react_router_dom_1 = require("react-router-dom");
require("moment/locale/ja");
var index_3 = require("components/UI/index");
var template_style_1 = require("./template_style");
var styled_components_1 = require("styled-components");
var loadingSlice_1 = require("reducks/loadingSlice");
var Divider_1 = require("@material-ui/core/Divider");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var CircularProgress_1 = require("@material-ui/core/CircularProgress");
var SentimentDissatisfiedOutlined_1 = require("@material-ui/icons/SentimentDissatisfiedOutlined");
var AvatarTitle = styled_components_1["default"](Avatar_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay:inline-block;\n"], ["\ndisplay:inline-block;\n"])));
var Username = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n margin-top:10px;\n margin-left:20px;\n\n"], ["\n margin-top:10px;\n margin-left:20px;\n\n"])));
var NoComment = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n margin-top:20px;\n"], ["\n margin-top:20px;\n"
    // iconButtonを右端に寄せるcss
])));
// iconButtonを右端に寄せるcss
var TitleContainer = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n position:relative;\n >div:last-child{\n   position:absolute;\n   top:0;\n   right:0;\n }\n"], ["\n position:relative;\n >div:last-child{\n   position:absolute;\n   top:0;\n   right:0;\n }\n"])));
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
    var productId = _a.productId, onClose = _a.onClose;
    var classes = useStyles();
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_dom_1.useHistory();
    console.log(history);
    var postInFavorite = react_redux_1.useSelector(userSlice_1.getPostsInFavorite);
    // お気に入りした作品数
    var likesId = postInFavorite.map(function (post) {
        return post.postId;
    });
    var username = react_redux_1.useSelector(userSlice_1.getUsername);
    var avatar = react_redux_1.useSelector(userSlice_1.getUserAvatar);
    var uid = react_redux_1.useSelector(userSlice_1.getUserId);
    // idは新たに定義されたidである事を忘れない
    var _b = react_1.useState(productId), id = _b[0], setId = _b[1];
    var _c = react_1.useState(null), post = _c[0], setPost = _c[1];
    var _d = react_1.useState(""), postUid = _d[0], setPostUid = _d[1];
    var _e = react_1.useState([]), tags = _e[0], setTags = _e[1];
    var _f = react_1.useState(false), openModal = _f[0], setOpenModal = _f[1];
    // 作品のidを持った作品をとってくる。
    react_1.useEffect(function () {
        // 個別の商品情報の取得なのでdoc(id)と引数にidを忘れない
        // if (id) {
        // }
        if (id) {
            var unSub_1 = index_1.db.collection("posts").doc(id).onSnapshot(function (doc) {
                var data = doc.data();
                if (data) {
                    var tags_1 = data.tags;
                    var postUid_1 = data.uid;
                    setPost(data);
                    setTags(tags_1);
                    setPostUid(postUid_1);
                }
            });
            return function () {
                unSub_1();
            };
        }
    }, [id]);
    console.log(postUid);
    console.log(tags);
    var random = Math.floor(Math.random() * tags.length);
    var randomTag = tags[random];
    //   const scroll = () => {
    //     var element = document.getElementById("title");
    //     	var rect = element.getBoundingClientRect();
    // 	var x = rect.left;
    // 	var y = rect.top;
    // }
    // 関連する作品のidをセットする
    var changeRelation = react_1.useCallback(function (id) {
        dispatch(loadingSlice_1.showLoadingAction("loading"));
        setTimeout(function () {
            setId(id);
            window.location.href = "#title";
            dispatch(loadingSlice_1.hideLoadingAction());
        }, 200);
    }, [setId]);
    var searchTag = function (tag) {
        dispatch(connected_react_router_1.push("/?tags=" + tag));
        onClose();
    };
    return (react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapper, null, post ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TitleContainer, null,
            react_1["default"].createElement(GlobalLayoutStyle_1.Title, { id: "title" }, post.name),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(IconButton_1["default"], { onClick: function () { return onClose(); } },
                    react_1["default"].createElement(Close_1["default"], null)))),
        react_1["default"].createElement(Divider_1["default"], null),
        react_1["default"].createElement("div", { style: { height: "5vh" } }),
        react_1["default"].createElement(GlobalLayoutStyle_1.GridLow, null,
            react_1["default"].createElement("div", { className: classes.sliderBox },
                react_1["default"].createElement(index_2.ImageSwiper, { images: post.images }),
                react_1["default"].createElement("div", { className: "module-spacer--small" }),
                react_1["default"].createElement(GlobalLayoutStyle_1.Flex, { between: true },
                    react_1["default"].createElement(GlobalLayoutStyle_1.Flex, null,
                        react_1["default"].createElement(AvatarTitle, { onClick: function () { return dispatch(connected_react_router_1.push("/users/" + post.uid)); }, src: post.avatar }),
                        react_1["default"].createElement(Username, null, post.username)),
                    react_1["default"].createElement(GlobalLayoutStyle_1.Flex, null,
                        react_1["default"].createElement(index_3.Share, { text: "tweet", url: id }),
                        react_1["default"].createElement(index_2.Favorite, { id: id, uid: uid, likesId: likesId, post: post }))),
                react_1["default"].createElement(Divider_1["default"], null),
                react_1["default"].createElement(NoComment, null, post.check !== true ?
                    react_1["default"].createElement(index_2.Comment, { postUid: postUid, id: id, username: username, avatar: avatar, uid: uid }) :
                    react_1["default"].createElement("h1", null, "\u30B3\u30E1\u30F3\u30C8\u306F\u975E\u8868\u793A\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002"))),
            react_1["default"].createElement(template_style_1.DetailWrapper, null,
                react_1["default"].createElement(template_style_1.Detail, null,
                    react_1["default"].createElement(Divider_1["default"], { className: "downMd" }),
                    react_1["default"].createElement("div", { className: "downMd", style: { height: "5vh" } }),
                    react_1["default"].createElement(GlobalLayoutStyle_1.BackgroundWhite, null,
                        react_1["default"].createElement("h1", { className: "center u-text__title" }, "\u4F5C\u54C1\u306E\u8AAC\u660E"),
                        react_1["default"].createElement("p", null, returnCodeToBr(post.description))),
                    react_1["default"].createElement("div", { className: "module-spacer--small" }),
                    react_1["default"].createElement("div", { className: classes.media },
                        react_1["default"].createElement("img", { src: post.allImages[0].path })),
                    react_1["default"].createElement("div", { className: "module-spacer--small" }),
                    react_1["default"].createElement(template_style_1.PostTag, null, post.tags.length ? post.tags.map(function (t, index) { return (react_1["default"].createElement("li", { key: index, onClick: function () { return searchTag(t); } },
                        "#",
                        t)); })
                        :
                            react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, null,
                                react_1["default"].createElement(SentimentDissatisfiedOutlined_1["default"], { style: { fontSize: "30px", marginBottom: "-8px", marginRight: "10px" } }),
                                "\u30BF\u30B0\u304C\u3042\u308A\u307E\u305B\u3093"))))),
        react_1["default"].createElement("div", { style: { height: "5vh" } }),
        react_1["default"].createElement(Divider_1["default"], null),
        post.tags.length > 0 ? react_1["default"].createElement("div", null,
            react_1["default"].createElement(index_2.RelationPost, { randomTag: randomTag, tags: tags, id: id, changeRelation: changeRelation }))
            : react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u95A2\u9023\u4F5C\u54C1\u306F\u3042\u308A\u307E\u305B\u3093"),
        react_1["default"].createElement("div", { style: { height: "10vh" } })))
        :
            (react_1["default"].createElement("div", { style: {
                    height: "100vh",
                    width: "1024px",
                    backgroundColor: "#F5F5F5"
                } },
                react_1["default"].createElement(CircularProgress_1["default"], { color: "inherit", style: { marginTop: "20vh" } })))));
};
exports["default"] = PostDetail;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
