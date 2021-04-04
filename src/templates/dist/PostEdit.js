"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var react_redux_1 = require("react-redux");
var index_1 = require("../components/UI/index");
var index_2 = require("../firebase/index");
var operations_1 = require("../reducks/posts/operations");
var PostProduct_1 = require("../components/PostProduct");
var userSlice_1 = require("../reducks/users/userSlice");
var FormControl_1 = require("@material-ui/core/FormControl");
var FormGroup_1 = require("@material-ui/core/FormGroup");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var CircularProgress_1 = require("@material-ui/core/CircularProgress");
var Switch_1 = require("@material-ui/core/Switch");
var Help_1 = require("@material-ui/icons/Help");
var IconButton_1 = require("@material-ui/core/IconButton");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var ULOCO_png_1 = require("assets/img/src/stripPattern/ULOCO.png");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    helpIcon: {
        position: "absolute",
        top: 10,
        right: 5
    }
}); });
var PostEdit = function (_a) {
    var dialog = _a.dialog, handleClose = _a.handleClose;
    var dispatch = react_redux_1.useDispatch();
    var classes = useStyles();
    var id = dialog ? "" : window.location.pathname.split("/posts/edit")[1];
    if (id) {
        id = id.split("/")[1];
    }
    var username = react_redux_1.useSelector(userSlice_1.getUsername);
    var avatar = react_redux_1.useSelector(userSlice_1.getUserAvatar);
    var uid = react_redux_1.useSelector(userSlice_1.getUserId);
    var _b = react_1.useState(""), name = _b[0], setName = _b[1], _c = react_1.useState(""), description = _c[0], setDescription = _c[1], _d = react_1.useState(""), category = _d[0], setCategory = _d[1], _e = react_1.useState(""), postUid = _e[0], setPostUid = _e[1], _f = react_1.useState([]), tags = _f[0], setTags = _f[1], _g = react_1.useState(false), helpDialogOpen = _g[0], setHelpDialogOpen = _g[1], _h = react_1.useState(""), wishText = _h[0], setWishText = _h[1], _j = react_1.useState(false), dialogOpen = _j[0], setDialogOpen = _j[1], _k = react_1.useState([]), categories = _k[0], setCategories = _k[1], _l = react_1.useState([]), images = _l[0], setImages = _l[1], _m = react_1.useState(""), strip = _m[0], setStrip = _m[1], _o = react_1.useState(ULOCO_png_1["default"]), windBellImage = _o[0], setWindBellImage = _o[1], _p = react_1.useState([]), allImages = _p[0], setAllImages = _p[1], _q = react_1.useState(""), textLength = _q[0], setTextLength = _q[1], _r = react_1.useState({
        path: "M688,1C751.719-.152,809.922,9.067,860,21c58.438,13.925,111.4,22.5,162,44q21.495,12.5,43,25c32.74,19.182,66.97,34.722,97,57q21,19.5,42,39c31.81,25.535,66.5,56.454,91,89q21,33.5,42,67,21,32,42,64,7.005,25,14,50,15,56.994,30,114c16.01,75.327-1.79,185.669-17,245q-5.505,25-11,50c-22.11,55.387-56.8,101-90,145-17.76,23.54-35.16,53.59-58,72-38.34,30.9-73.75,67.04-117,93l-53,22q-10.995,7.005-22,14c-18.78,6.38-48.89-17.48-61-21q-14.5-1.005-29-2-12-3.495-24-7-38-1.005-76-2c-21.653-4.11-45.551-8.87-70-13q-19.5-.495-39-1c-37.7-6-84.771-5.64-121-12-26.9-4.72-55.842.96-80-3q-39.5,1.005-79,2-10-4.995-20-10-47.5-1.995-95-4c-18.584,0-68.783,13.64-74,12q-13.5-13.995-27-28c-36.374-16.87-78.458-67.09-103-98q-20.5-23-41-46C48.738,886.724-22.608,719.746,8,553l17-98C63.875,331.132,145.984,222.92,239,153,318.7,93.094,414.887,47.274,524,17c37.419-10.382,77.853-6.178,119-13ZM290,1152c2,0.33,4,.67,6,1C294,1152.67,292,1152.33,290,1152Z",
        viewBox: "0 0 1430 1210"
    }), pathItem = _r[0], setPathItem = _r[1], _s = react_1.useState(false), check = _s[0], setCheck = _s[1];
    var toggleChecked = function () {
        setCheck(function (prev) { return !prev; });
    };
    var inputName = react_1.useCallback(function (event) {
        setName(event.target.value);
    }, [setName]);
    var inputDescription = react_1.useCallback(function (event) {
        setDescription(event.target.value);
    }, [setDescription]);
    // 願い事のイベントハンドラー
    var inputWishText = react_1.useCallback(function (event) {
        setWishText(event.target.value);
        var textLength = event.target.value.length;
        if (textLength > 48) {
            alert("文字は48字以内で入力してください");
            event.preventDefault();
        }
        if (textLength < 17) {
            setTextLength("first");
        }
        else if (16 < textLength && textLength < 33) {
            setTextLength("second");
        }
        else {
            setTextLength("third");
        }
        if (12 > textLength) {
            setTextLength("short");
        }
    }, [setWishText]);
    // ---------------風鈴メイカーのダイアログ---------
    var closeDialog = react_1.useCallback(function () {
        setDialogOpen(false);
    }, []);
    // ----------helpのダイアログを閉じる------------
    var helpDialogClose = react_1.useCallback(function () {
        setHelpDialogOpen(false);
    }, [setHelpDialogOpen]);
    react_1.useEffect(function () {
        if (id !== "") {
            index_2.db.collection("posts")
                .doc(id)
                .get()
                .then(function (snapshot) {
                var data = snapshot.data();
                var tags = data.tags;
                setImages(data.images);
                setAllImages(data.allImages);
                setName(data.name);
                setDescription(data.description);
                setCategory(data.category);
                setTags(data.tags);
            });
        }
    }, []);
    // カテゴリー一覧
    react_1.useEffect(function () {
        var unSub = index_2.db.collection("categories").orderBy("order", "desc").onSnapshot(function (snapshot) {
            setCategories(snapshot.docs.map(function (doc) { return ({
                id: doc.data().id,
                name: doc.data().name
            }); }));
            return function () {
                unSub();
            };
        });
    }, []);
    react_1.useEffect(function () {
        if (id) {
            index_2.db.collection("posts").doc(id).get().then(function (snapshot) {
                var data = snapshot.data();
                setPostUid(data.uid);
            });
        }
    }, []);
    // 投稿を完了する関数
    var save = function (id, name, description, category, images, allImages, username, avatar, uid, tags, check) {
        dispatch(operations_1.savePost(id, name, description, category, images, allImages, username, avatar, uid, tags, check));
        handleClose && handleClose();
    };
    if (postUid === uid || !id) {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(GlobalLayoutStyle_1.SectionContainer, null,
                !dialog &&
                    react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u4F5C\u54C1\u306E\u767B\u9332\u30FB\u7DE8\u96C6"),
                        react_1["default"].createElement("div", { className: classes.helpIcon },
                            react_1["default"].createElement(IconButton_1["default"], { onClick: function () { return setHelpDialogOpen(!helpDialogOpen); } },
                                react_1["default"].createElement(Help_1["default"], null)))),
                react_1["default"].createElement(index_1.TextInput, { fullWidth: true, label: "作品タイトル", multiline: false, required: true, onChange: inputName, rows: 1, value: name, type: "text", variant: "outlined" }),
                react_1["default"].createElement(index_1.TextInput, { fullWidth: true, label: "作品に込めた思い", multiline: true, required: true, onChange: inputDescription, rows: 5, value: description, type: "text", variant: "outlined" }),
                react_1["default"].createElement(index_1.SelectBox, { label: "カテゴリー", required: true, options: categories, select: setCategory, value: category }),
                react_1["default"].createElement("div", { className: "module-spacer--medium" }),
                react_1["default"].createElement("div", { className: "center" },
                    react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, null, "\u98A8\u9234\u672C\u4F53\u306E\u307F\u306E\u5199\u771F"),
                    react_1["default"].createElement("div", { className: "module-spacer--small" }),
                    react_1["default"].createElement(PostProduct_1.ImageCropper, { images: images, setImages: setImages }),
                    react_1["default"].createElement("div", { className: "module-spacer--medium" }),
                    react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, null, "\u98A8\u9234\u304B\u3089\u77ED\u518A\u307E\u3067\u306E\u5199\u771F"),
                    react_1["default"].createElement(index_1.PrimaryButton, { onClick: function () { return setDialogOpen(true); }, label: "\u98A8\u9234\u30E1\u30A4\u30AB\u30FC\u3092\u4F7F\u3046" }),
                    react_1["default"].createElement(index_1.WindBellDialog, { textLength: textLength, pathItem: pathItem, setPathItem: setPathItem, windBellImage: windBellImage, setWindBellImage: setWindBellImage, dialogOpen: dialogOpen, handleClose: closeDialog, strip: strip, setStrip: setStrip, wishText: wishText, inputWishText: inputWishText }),
                    react_1["default"].createElement("div", { className: "module-spacer--medium" }),
                    react_1["default"].createElement(PostProduct_1.ImageCropper, { images: allImages, setImages: setAllImages, all: true }),
                    react_1["default"].createElement("div", { className: "module-spacer--medium" }),
                    react_1["default"].createElement("div", { style: { textAlign: "left" } },
                        react_1["default"].createElement(PostProduct_1.TagArea, { tags: tags, setTags: setTags })),
                    react_1["default"].createElement("div", { className: "module-spacer--medium" }),
                    react_1["default"].createElement(FormControl_1["default"], { component: "fieldset" },
                        react_1["default"].createElement(FormGroup_1["default"], null,
                            react_1["default"].createElement(FormControlLabel_1["default"], { control: react_1["default"].createElement(Switch_1["default"], { checked: check, onChange: toggleChecked }), label: "\u30B3\u30E1\u30F3\u30C8\u3092\u975E\u8868\u793A\u306B\u3059\u308B" }))),
                    react_1["default"].createElement(index_1.PrimaryButton, { disabled: name === "" || description === "" || category === "" || images.length === 0 || allImages.length === 0, label: "作品を投稿！", onClick: function () { return save(id, name, description, category, images, allImages, username, avatar, uid, tags, check); } })),
                react_1["default"].createElement(index_1.HelpDialog, { helpDialogClose: helpDialogClose, helpDialogOpen: helpDialogOpen }))));
    }
    else {
        return (react_1["default"].createElement(GlobalLayoutStyle_1.SectionContainer, { className: "center" },
            react_1["default"].createElement(CircularProgress_1["default"], { color: "inherit", style: { marginTop: "20vh" } })));
    }
};
exports["default"] = PostEdit;
