"use strict";
exports.__esModule = true;
var react_1 = require("react");
var IconButton_1 = require("@material-ui/core/IconButton");
var Badge_1 = require("@material-ui/core/Badge");
// import { fetchProductsInCart } from "../../reducks/users/operations"
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
var FavoriteBorder_1 = require("@material-ui/icons/FavoriteBorder");
var Search_1 = require("@material-ui/icons/Search");
var userSlice_1 = require("../../reducks/users/userSlice");
var userSlice_2 = require("../../reducks/users/userSlice");
var operations_1 = require("../../reducks/users/operations");
var Menu_1 = require("@material-ui/icons/Menu");
var NotificationsNone_1 = require("@material-ui/icons/NotificationsNone");
var index_1 = require("../../firebase/index");
var PushList_1 = require("./PushList");
var Popover_1 = require("@material-ui/core/Popover");
var style_1 = require("./style");
var connected_react_router_1 = require("connected-react-router");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            width: '100%',
            maxWidth: 500,
            backgroundColor: theme.palette.background.paper,
            position: 'absolute',
            overflow: 'auto',
            top: 60,
            // left: 500,
            paddingBottom: 0,
            paddingTop: 0,
            maxHeight: 300,
            cursor: "pointer"
        },
        searchText: {
            '&:hover': {
                background: "#eee"
            }
        },
        headerMenu: {
            display: 'flex'
        },
        searchField: {
            alignItems: 'center',
            justifyContent: "center",
            display: 'flex',
            marginRight: 32,
            textAlign: "center",
            position: 'relative',
            width: 500,
            borderRadius: 20,
            focus: 500
        },
        popRoot: {
            width: 500
        },
        typography: {
            padding: theme.spacing(2)
        }
    });
});
var HeaderMenus = function (props) {
    var isSP = window.matchMedia('screen and (max-width: 767px)').matches;
    var dispatch = react_redux_1.useDispatch();
    var uid = react_redux_1.useSelector(userSlice_1.getUserId);
    var isSignedIn = react_redux_1.useSelector(userSlice_1.getIsSignedIn);
    var classes = useStyles();
    var likesPost = react_redux_1.useSelector(userSlice_2.getPostsInFavorite);
    var postInFavorite = [];
    // const [open, setOpen] = useState<boolean>(false)
    var _a = react_1["default"].useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var id = open ? 'simple-popover' : undefined;
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    console.log(postInFavorite);
    react_1.useEffect(function () {
        if (isSignedIn) {
            index_1.db.collection("users").doc(uid).collection("likes").onSnapshot(function (snapshot) {
                snapshot.docChanges().forEach(function (change) {
                    var post = change.doc.data();
                    console.log(post);
                    var changeType = change.type;
                    switch (changeType) {
                        case "added":
                            // Object.preventExtensions(postInFavorite)
                            postInFavorite.push(post);
                            break;
                        case "modified":
                            var index = postInFavorite.findIndex(function (post) { return post.likesId === change.doc.id; });
                            postInFavorite[index] = post;
                            break;
                        case "removed":
                            postInFavorite = postInFavorite.filter(function (post) { return post.likesId !== change.doc.id; });
                            break;
                        default:
                            break;
                    }
                });
                dispatch(operations_1.fetchPostsInFavorite(postInFavorite));
            });
        }
    }, []);
    return (react_1["default"].createElement("div", { className: classes.headerMenu },
        react_1["default"].createElement(Popover_1["default"], { id: id, open: open, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'center'
            } },
            react_1["default"].createElement(style_1.PopperWrapper, null,
                react_1["default"].createElement(PushList_1["default"], { handleClose: handleClose }))),
        react_1["default"].createElement(IconButton_1["default"], null,
            react_1["default"].createElement(Search_1["default"], { style: { fontSize: "30px" }, onClick: function () { return dispatch(connected_react_router_1.push("/search")); } })),
        isSignedIn &&
            react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(IconButton_1["default"], { onClick: handleClick },
                    react_1["default"].createElement(Badge_1["default"], { badgeContent: "1", color: "error" },
                        react_1["default"].createElement(NotificationsNone_1["default"], { style: { fontSize: "28px" } }))),
                react_1["default"].createElement("div", { className: "mobile_only" },
                    react_1["default"].createElement(IconButton_1["default"], { onClick: function () { return dispatch(connected_react_router_1.push("/likes")); } },
                        react_1["default"].createElement(Badge_1["default"], { badgeContent: likesPost && likesPost.length, color: "error" },
                            react_1["default"].createElement(FavoriteBorder_1["default"], { style: { fontSize: "28px" } })))),
                react_1["default"].createElement(IconButton_1["default"], { onClick: function (event) { return props.handleDrawerToggle(event); } },
                    react_1["default"].createElement(Menu_1["default"], { style: { fontSize: "28px" } })))));
};
exports["default"] = HeaderMenus;
