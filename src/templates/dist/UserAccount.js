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
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var UI_1 = require("../components/UI");
var userSlice_1 = require("../reducks/users/userSlice");
var index_1 = require("firebase/index");
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@material-ui/core/styles");
var core_1 = require("@material-ui/core");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: "auto"
    },
    profile: {
        flexFlow: 'row wrap',
        marginBottom: 16,
        background: "white",
        padding: 16,
        borderRadius: "5%"
    }
}); });
var UserAccount = function () {
    var classes = useStyles();
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_dom_1.useHistory();
    var username = react_redux_1.useSelector(userSlice_1.getUsername);
    var avatar = react_redux_1.useSelector(userSlice_1.getUserAvatar);
    var profile = react_redux_1.useSelector(userSlice_1.getUserProfile);
    var userDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            user = index_1.auth.currentUser;
            console.log(user);
            return [2 /*return*/];
        });
    }); };
    var transition = react_1.useCallback(function (path) {
        history.push(path);
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("section", { className: "c-section-container center" },
            react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u30DE\u30A4\u30DA\u30FC\u30B8"),
            react_1["default"].createElement(core_1.Avatar, { className: classes.large, src: avatar }),
            react_1["default"].createElement("div", { className: "module-spacer--medium" }),
            react_1["default"].createElement(UI_1.PrimaryButton, { label: "パスワードを変更する", onClick: function () { return transition('/user/account/password'); } }),
            react_1["default"].createElement(UI_1.PrimaryButton, { label: "退会する", onClick: function () { return transition('/user/account/delete'); } }))));
};
exports["default"] = UserAccount;
