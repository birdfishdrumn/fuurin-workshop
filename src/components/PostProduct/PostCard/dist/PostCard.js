"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var Card_1 = require("@material-ui/core/Card");
var Avatar_1 = require("@material-ui/core/Avatar");
var CardMedia_1 = require("@material-ui/core/CardMedia");
var react_redux_1 = require("react-redux");
var no_image_png_1 = require("../../../assets/img/src/no_image.png");
var index_1 = require("components/UI/index");
var Favorite_1 = require("../Favorite/Favorite");
var userSlice_1 = require("reducks/users/userSlice");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        margin: "0 auto",
        display: "inlineBlock"
    },
    content: {
        display: "flex",
        justifyContent: "space-between",
        textAlign: "left",
        "&:last-child": {
            paddingBottom: "16px"
        }
    },
    media: {
        height: 0,
        paddingTop: "100%",
        position: "relative"
    },
    title: {
        marginTop: "8px"
    },
    avatar: {
        position: "absolute",
        top: 5,
        left: 5,
        opacity: 0.5,
        "&:hover": {
            opacity: 1
        }
    },
    favorite: {
        position: "absolute",
        top: 3,
        right: 0
    }
}); });
var changeStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        root: (_a = {},
            _a[theme.breakpoints.down("sm")] = {
                margin: "8px",
                width: "200px",
                height: "500px",
                display: "inlineBlock"
            },
            _a[theme.breakpoints.up("md")] = {
                margin: "10px",
                width: "200px"
            },
            _a[theme.breakpoints.between("sm", "md")] = {
                margin: 5,
                width: "200px"
            },
            _a),
        content: {
            display: "flex",
            justifyContent: "space-between",
            textAlign: "left",
            "&:last-child": {
                paddingBottom: "16px"
            }
        },
        media: {
            height: 500,
            width: 200,
            paddingTop: "100%",
            position: "relative"
        }
    });
});
var PostCard = function (props) {
    var classes = useStyles();
    var changeClass = changeStyles();
    var dispatch = react_redux_1.useDispatch();
    var uid = react_redux_1.useSelector(userSlice_1.getUserId);
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    var id = props.id;
    var change = props.change;
    var name = props.name;
    console.log(props.images);
    var postInFavorite = react_redux_1.useSelector(userSlice_1.getPostsInFavorite);
    console.log(postInFavorite);
    var likesId = postInFavorite.map(function (post) {
        return post.postId;
    });
    var handleChange = function () {
        setOpen(true);
    };
    var images = props.images.length > 0 ? props.images : [{ path: no_image_png_1["default"] }];
    var allImages = props.allImages.length ? props.allImages : [{ path: no_image_png_1["default"] }];
    var _b = react_1["default"].useState(false), dialogOpen = _b[0], setDialogOpen = _b[1];
    var handleClickOpen = react_1.useCallback(function () {
        setDialogOpen(true);
    }, []);
    var handleClose = react_1.useCallback(function () {
        setDialogOpen(false);
    }, []);
    var modalOpen = function (id) {
        props.changeRelation ? props.changeRelation(id) :
            handleClickOpen();
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Card_1["default"], { className: change ? changeClass.root : classes.root },
            react_1["default"].createElement(CardMedia_1["default"]
            // 複数登録した画像のうちの最初のものを選択
            , { 
                // 複数登録した画像のうちの最初のものを選択
                className: change ? changeClass.media : classes.media, image: change ? allImages[0].path : images[0].path, 
                // onClick = {()=>dispatch(push("/post/" + props.id))}
                onClick: function () { return modalOpen(props.id); } }, !props.favorite && !change &&
                react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(Avatar_1["default"], { src: props.avatar, "aria-label": "recipe", className: classes.avatar }),
                    react_1["default"].createElement("div", { className: classes.favorite }, react_1["default"].createElement(Favorite_1["default"], { id: id, uid: uid, likesId: likesId, post: props.post, props: "true" }))))),
        react_1["default"].createElement(index_1.ProductDialog, { dialogId: props.id, name: name, dialogOpen: dialogOpen, handleClickOpen: handleClickOpen, handleClose: handleClose })));
};
exports["default"] = PostCard;
