"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Divider_1 = require("@material-ui/core/Divider");
var Drawer_1 = require("@material-ui/core/Drawer");
var List_1 = require("@material-ui/core/List");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var styles_1 = require("@material-ui/core/styles");
var react_redux_1 = require("react-redux");
var operations_1 = require("../../reducks/users/operations");
var Avatar_1 = require("@material-ui/core/Avatar");
var Search_1 = require("@material-ui/icons/Search");
var AddCircle_1 = require("@material-ui/icons/AddCircle");
var MenuBook_1 = require("@material-ui/icons/MenuBook");
var Person_1 = require("@material-ui/icons/Person");
var ShoppingCart_1 = require("@material-ui/icons/ShoppingCart");
var Help_1 = require("@material-ui/icons/Help");
var Https_1 = require("@material-ui/icons/Https");
var ExitToApp_1 = require("@material-ui/icons/ExitToApp");
var FavoriteBorder_1 = require("@material-ui/icons/FavoriteBorder");
var userSlice_1 = require("reducks/users/userSlice");
var Brush_1 = require("@material-ui/icons/Brush");
var react_router_dom_1 = require("react-router-dom");
// import {getUserRole} from "../../reducks/users/selectors";
// import { FilterSharp } from "@material-ui/icons";
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return styles_1.createStyles({
        drawer: (_a = {},
            _a[theme.breakpoints.up('sm')] = {
                width: 256,
                flexShrink: 0
            },
            _a),
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: 256
        },
        searchField: {
            alignItems: 'center',
            display: 'flex',
            marginLeft: 32
        }
    });
});
var ClosableDrawer = function (props) {
    var classes = useStyles();
    var container = props.container;
    var dispatch = react_redux_1.useDispatch();
    var isSignedIn = react_redux_1.useSelector(userSlice_1.getIsSignedIn);
    var avatar = react_redux_1.useSelector(userSlice_1.getUserAvatar);
    var username = react_redux_1.useSelector(userSlice_1.getUsername);
    var history = react_router_dom_1.useHistory();
    var selectMenu = function (event, path) {
        history.push(path);
        // 選択したらドロワーが閉じる
        props.onClose(event, false);
    };
    var menus = [
        { func: selectMenu, label: "検索", icon: react_1["default"].createElement(Search_1["default"], null), id: "search", value: "/search" },
        { func: selectMenu, label: "作品登録", icon: react_1["default"].createElement(AddCircle_1["default"], null), id: "register", value: "/posts/edit" },
        { func: selectMenu, label: "絵付け道場", icon: react_1["default"].createElement(Brush_1["default"], null), id: "paint", value: "/dojo" },
        { func: selectMenu, label: "お気に入りリスト", icon: react_1["default"].createElement(FavoriteBorder_1["default"], null), id: "history", value: "/likes" },
        { func: selectMenu, label: "プロフィール", icon: react_1["default"].createElement(Person_1["default"], null), id: "profile", value: "/user/mypage" },
        { func: selectMenu, label: "体験キットのご購入", icon: react_1["default"].createElement(ShoppingCart_1["default"], null), id: "workshop", value: "/workshopkit" },
        { func: selectMenu, label: "ヘルプ", icon: react_1["default"].createElement(Help_1["default"], null), id: "help", value: "/help" },
        { func: selectMenu, label: "利用規約", icon: react_1["default"].createElement(MenuBook_1["default"], null), id: "terms", value: "/terms" },
        { func: selectMenu, label: "プライバシーポリシー", icon: react_1["default"].createElement(Https_1["default"], null), id: "policy", value: "/policy" },
    ];
    return (react_1["default"].createElement("nav", { className: classes.drawer },
        react_1["default"].createElement(Drawer_1["default"], { container: container, variant: "temporary" //出したり閉じたり
            , anchor: "right" //右から出てくる。
            , open: props.open, onClose: function (e) { return props.onClose(e, false); }, classes: { paper: classes.drawerPaper }, ModalProps: { keepMounted: true } },
            react_1["default"].createElement("div", { onClick: function (e) { return props.onClose(e, false); }, onKeyDown: function (e) { return props.onClose(e); } },
                react_1["default"].createElement(Divider_1["default"], null),
                react_1["default"].createElement(List_1["default"], null,
                    react_1["default"].createElement(ListItem_1["default"], null,
                        react_1["default"].createElement(ListItemIcon_1["default"], null,
                            react_1["default"].createElement(Avatar_1["default"], { src: avatar, "aria-label": "recipe" })),
                        react_1["default"].createElement(ListItemText_1["default"], null,
                            "\u3088\u3046\u3053\u305D\u3001",
                            username,
                            "\u3055\u3093\uFF01"))),
                react_1["default"].createElement(Divider_1["default"], null),
                react_1["default"].createElement(List_1["default"], null,
                    menus.map(function (menu) { return (react_1["default"].createElement(ListItem_1["default"], { button: true, key: menu.id, onClick: function (e) { return menu.func(e, menu.value); } },
                        react_1["default"].createElement(ListItemIcon_1["default"], null, menu.icon),
                        react_1["default"].createElement(ListItemText_1["default"], { primary: menu.label }))); }),
                    react_1["default"].createElement(ListItem_1["default"], { button: true, key: "logout", onClick: function () { return dispatch(operations_1.signOut()); } },
                        react_1["default"].createElement(ListItemIcon_1["default"], null,
                            react_1["default"].createElement(ExitToApp_1["default"], null)),
                        react_1["default"].createElement(ListItemText_1["default"], { primary: "Logout" })))))));
};
exports["default"] = ClosableDrawer;
