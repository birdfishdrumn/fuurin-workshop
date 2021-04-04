"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemAvatar_1 = require("@material-ui/core/ListItemAvatar");
var styles_1 = require("@material-ui/core/styles");
var Avatar_1 = require("@material-ui/core/Avatar");
var react_redux_1 = require("react-redux");
var userSlice_1 = require("reducks/users/userSlice");
var index_1 = require("../../firebase/index");
var connected_react_router_1 = require("connected-react-router");
var styled_components_1 = require("styled-components");
var Rank = styled_components_1["default"](ListItemAvatar_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nwidth:100%;\n"], ["\nwidth:100%;\n"])));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    list: {
        height: 168,
        background: "white",
        margin: "20px 0 20px 0"
    },
    listContent: {
        display: "column",
        // margin:"0 auto"
        marginLeft: "30px",
        width: "80%"
    },
    avatarContent: {
        display: "flex"
    },
    image: {
        objectFit: "cover",
        margin: 16,
        height: 126,
        width: 126,
        cursor: "pointer",
        borderRadius: "10%"
    },
    text: {
        width: "100%",
        fontSize: "1.3rem"
    },
    username: {
        fontSize: "1.3rem",
        color: "black",
        marginLeft: "5px"
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        marginRight: theme.spacing(1)
    }
}); });
var UserPopulationList = function (props) {
    var classes = useStyles();
    var dispatch = react_redux_1.useDispatch();
    var uid = react_redux_1.useSelector(userSlice_1.getUserId);
    var username = props.user.username;
    var id = props.user.uid;
    console.log(id);
    var removePostFromFavorite = function (id) {
        return index_1.db.collection("users").doc(uid)
            .collection('likes').doc(id)["delete"]();
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(ListItem_1["default"], { className: classes.list },
            react_1["default"].createElement("div", { onClick: function () { return dispatch(connected_react_router_1.push("/users/" + id)); } },
                react_1["default"].createElement(Rank, null,
                    react_1["default"].createElement(Avatar_1["default"], { src: props.user.avatar, "aria-label": "recipe", className: classes.large }))),
            react_1["default"].createElement("div", { className: classes.listContent },
                react_1["default"].createElement("div", { className: classes.avatarContent },
                    react_1["default"].createElement("p", { className: classes.username }, username))))));
};
exports["default"] = UserPopulationList;
var templateObject_1;