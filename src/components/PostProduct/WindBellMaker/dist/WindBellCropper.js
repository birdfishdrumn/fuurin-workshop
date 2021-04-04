"use strict";
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
var firebase_1 = require("../../../firebase");
var styles_1 = require("@material-ui/core/styles");
var styles_2 = require("@material-ui/core/styles");
var DialogTitle_1 = require("@material-ui/core/DialogTitle");
var useMediaQuery_1 = require("@material-ui/core/useMediaQuery");
var core_1 = require("@material-ui/core");
var UI_1 = require("components/UI");
var blueimp_load_image_1 = require("blueimp-load-image");
var react_cropper_1 = require("react-cropper");
require("cropperjs/dist/cropper.css");
var IconButton_1 = require("@material-ui/core/IconButton");
var AddAPhoto_1 = require("@material-ui/icons/AddAPhoto");
var style_1 = require("./style");
var pathData_1 = require("./pathData");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var Button_1 = require("@material-ui/core/Button");
var CloudUpload_1 = require("@material-ui/icons/CloudUpload");
var DoneOutline_1 = require("@material-ui/icons/DoneOutline");
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return styles_1.createStyles({
        modal: {
            // width:"600px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            // border: "2px solid #000",
            // boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 0)
        },
        content: (_a = {},
            _a[theme.breakpoints.down("sm")] = {
                width: "100%"
            },
            _a.padding = 0,
            _a.width = "600px",
            _a),
        button: {
            margin: theme.spacing(1),
            padding: theme.spacing(1),
            fontWeight: "bold"
        },
        title: {
            padding: 0
        },
        cutButton: {
            position: "absolute",
            right: theme.spacing(1),
            top: theme.spacing(2)
        }
    });
});
var styles = function (theme) {
    return styles_1.createStyles({
        root: {
            margin: 0,
            display: "flex",
            // padding: theme.spacing(3),
            padding: "0 10px",
            width: "100%"
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: "white"
        }
    });
};
var DialogTitle = styles_1.withStyles(styles)(function (props) {
    var children = props.children, classes = props.classes, onClose = props.onClose, other = __rest(props, ["children", "classes", "onClose"]);
    return (react_1["default"].createElement(DialogTitle_1["default"], __assign({ disableTypography: true, className: classes.root }, other),
        react_1["default"].createElement(core_1.Typography, { variant: "h6" }, children)));
});
var WindBellCropper = function (_a) {
    var imageUrl = _a.imageUrl, setImageUrl = _a.setImageUrl, pathItem = _a.pathItem, setPathItem = _a.setPathItem;
    var theme = styles_2.useTheme();
    var fullScreen = useMediaQuery_1["default"](theme.breakpoints.down('sm'));
    var _b = react_1.useState(""), image = _b[0], setImage = _b[1];
    // const [Images, setImages] = useState("");
    var _c = react_1.useState(""), error = _c[0], setError = _c[1];
    var _d = react_1.useState(100), progress = _d[0], setProgress = _d[1];
    var classes = useStyles(); //Material-ui
    var _e = react_1.useState(), cropper = _e[0], setCropper = _e[1];
    var _f = react_1.useState(), check = _f[0], setCheck = _f[1];
    var _g = react_1.useState(false), open = _g[0], setOpen = _g[1];
    var _h = react_1.useState(false), openCircularProgress = _h[0], setOpenCircularProgress = _h[1]; //処理中みたいモーダル
    // 画像を切り取る前の処理
    var d = 0;
    function kaiten(x) {
        var e = document.getElementById("img1");
        d = d + x;
        e.style.transform = "rotate(" + d + "deg)";
    }
    var handleImage = function (e) {
        setError("");
        try {
            e.preventDefault();
            var files = void 0;
            if (e.dataTransfer) {
                files = e.dataTransfer.files;
            }
            else if (e.target) {
                files = e.target.files;
            }
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                setImage(reader_1.result);
            };
            reader_1.readAsDataURL(files[0]);
            setOpen(true);
            e.target.value = null; //ファイル選択された内容をクリアする（クリアしないと同じファイルが編集できない）
        }
        catch (e) {
            e.target.value = null;
            setError("画像の切り取りをキャンセルまたは失敗しました");
            setOpen(false);
        }
    };
    var getCropData = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var imagedata, canvas, S_1, N, fileName_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!(typeof cropper !== "undefined")) return [3 /*break*/, 3];
                    return [4 /*yield*/, cropper.getCroppedCanvas().toDataURL("image/jpeg")];
                case 1:
                    imagedata = _a.sent();
                    return [4 /*yield*/, blueimp_load_image_1["default"](imagedata, {
                            maxWidth: 1000,
                            canvas: true
                        })];
                case 2:
                    canvas = _a.sent();
                    S_1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                    N = 16;
                    fileName_1 = Array.from(crypto.getRandomValues(new Uint32Array(N))).map(function (n) { return S_1[n % S_1.length]; }).join('');
                    // アップロード処理
                    console.log("アップロード処理");
                    canvas.image.toBlob(function (imagedata) {
                        var storageRef = firebase_1.storage.ref("images/test/"); //どのフォルダの配下に入れるかを設定
                        var imagesRef = storageRef.child(fileName_1); //ファイル名
                        console.log("ファイルをアップする行為");
                        // const upLoadTask = imagesRef.put(imagedata, "data_url");
                        var upLoadTask = imagesRef.put(imagedata);
                        console.log("タスク実行前");
                        setOpenCircularProgress(true);
                        upLoadTask.on("state_changed", function (snapshot) {
                            console.log("snapshot", snapshot);
                            var percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log(percent + "% done");
                            setProgress(percent);
                        }, function (error) {
                            console.log("err", error);
                            setError("ファイルアップに失敗しました。" + error);
                            setProgress(100); //実行中のバーを消す
                            setOpen(false);
                            setOpenCircularProgress(false);
                        }, function () {
                            setImageUrl("");
                            upLoadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                                console.log("File available at", downloadURL);
                                // setImages(downloadURL);
                                var newImage = { id: fileName_1, path: downloadURL };
                                setImageUrl(downloadURL);
                                setOpenCircularProgress(false);
                                window.location.href = "#cut";
                            });
                        });
                    }, "image/jpeg");
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleClose = function () {
        setOpen(false);
        setCheck(false);
    };
    var handleCircularProgressClose = function () {
        setOpenCircularProgress(false);
    };
    var checkOpen = function () {
        setOpen(true);
        setCheck(true);
    };
    return (react_1["default"].createElement("div", null,
        error && react_1["default"].createElement("div", null, error),
        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
        react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, null, "\u5B8C\u6210\u3057\u305F\u3089\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u3067\u4FDD\u5B58\u3057\u3088\u3046\uFF01"),
        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
        react_1["default"].createElement(GlobalLayoutStyle_1.IconFlex, null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(IconButton_1["default"], { className: classes.button },
                    react_1["default"].createElement("label", null,
                        react_1["default"].createElement(AddAPhoto_1["default"], { style: { fontSize: "40px" } }),
                        react_1["default"].createElement("input", { className: "u-display-none", onChange: handleImage, type: "file", id: "image" }))),
                react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, null, "\u6295\u7A3F")),
            imageUrl.length &&
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(IconButton_1["default"], { className: classes.button, onClick: function () { return checkOpen(); } },
                        react_1["default"].createElement("label", null,
                            react_1["default"].createElement(DoneOutline_1["default"], { style: { fontSize: "40px" } }))),
                    react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, null, "\u78BA\u8A8D"))),
        react_1["default"].createElement("div", null),
        react_1["default"].createElement(core_1.Dialog, { "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description", className: classes.modal, open: open, fullScreen: fullScreen, maxWidth: "md", onClose: handleClose, closeAfterTransition: true, BackdropComponent: core_1.Backdrop, BackdropProps: {
                timeout: 500
            } },
            react_1["default"].createElement("div", { className: classes.paper },
                react_1["default"].createElement(DialogTitle, { id: "customized-dialog-title", onClose: handleClose },
                    react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u753B\u50CF\u306E\u5207\u308A\u629C\u304D"),
                    react_1["default"].createElement("div", { className: classes.cutButton }, !check &&
                        react_1["default"].createElement(Button_1["default"], { variant: "contained", color: "primary", className: classes.button, startIcon: react_1["default"].createElement(CloudUpload_1["default"], null), onClick: getCropData }, "\u753B\u50CF\u3092\u5207\u308A\u629C\u304F"))),
                react_1["default"].createElement(core_1.Divider, null),
                react_1["default"].createElement(core_1.DialogContent, { className: classes.content },
                    !check &&
                        react_1["default"].createElement(react_cropper_1["default"], { style: { height: 450, width: "100%" }, initialAspectRatio: 1, aspectRatio: 5 / 4.3, preview: ".img-preview", src: image, viewMode: 1, guides: true, minCropBoxHeight: 150, minCropBoxWidth: 150, background: false, responsive: true, autoCropArea: 1, checkOrientation: false, onInitialized: function (instance) {
                                setCropper(instance);
                            } }),
                    react_1["default"].createElement("div", { className: "center" },
                        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
                        react_1["default"].createElement(GlobalLayoutStyle_1.Title, { id: "cut" }, "\u5207\u308A\u629C\u304B\u308C\u305F\u753B\u50CF"),
                        react_1["default"].createElement(style_1.SvgContainer, null,
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("svg", { width: 0, height: 0, style: { position: 'absolute', top: 0, left: 0 } },
                                    react_1["default"].createElement("clipPath", { id: "clip03" },
                                        react_1["default"].createElement("path", { id: "\u3079\u305F\u5857\u308A_1", "data-name": "\u3079\u305F\u5857\u308A 1", d: pathItem.path }))),
                                react_1["default"].createElement(style_1.Svg, { width: 200, height: 170, viewBox: pathItem.viewBox }, imageUrl &&
                                    react_1["default"].createElement("image", { xlinkHref: imageUrl, id: "img1", width: "100%", height: "100%", style: { marginRight: "20px" }, preserveAspectRatio: "xMidYMid slice", clipPath: "url(#clip03)" })))),
                        react_1["default"].createElement("button", { onClick: function () { return kaiten(90); } }, "\u56DE\u8EE2"),
                        react_1["default"].createElement("div", { style: { height: "50vh" } }),
                        react_1["default"].createElement(style_1.Flex, null, pathData_1.pathData.map(function (p) { return (react_1["default"].createElement(style_1.ImagePallet, { onClick: function () { return setPathItem({
                                path: p.path,
                                viewBox: p.viewBox
                            }); } },
                            react_1["default"].createElement(style_1.Image, { src: p.img }))); })))),
                react_1["default"].createElement(core_1.Divider, null),
                react_1["default"].createElement(core_1.DialogActions, null,
                    react_1["default"].createElement(UI_1.PrimaryButton, { label: "\u5B8C\u4E86", onClick: handleClose })))),
        react_1["default"].createElement(core_1.Dialog, { className: classes.modal, open: openCircularProgress, onClose: handleCircularProgressClose, closeAfterTransition: true, BackdropComponent: core_1.Backdrop, BackdropProps: {
                timeout: 500
            } },
            react_1["default"].createElement("div", { className: classes.paper, style: { textAlign: "center" } },
                react_1["default"].createElement("div", null, "Loading"),
                progress !== 100 && react_1["default"].createElement(LinearProgressWithLabel, { value: progress })))));
};
function LinearProgressWithLabel(props) {
    return (react_1["default"].createElement(core_1.Box, { display: "flex", alignItems: "center" },
        react_1["default"].createElement(core_1.Box, { width: "100%", mr: 1 },
            react_1["default"].createElement(core_1.LinearProgress, __assign({ variant: "determinate" }, props))),
        react_1["default"].createElement(core_1.Box, { minWidth: 35 },
            react_1["default"].createElement(core_1.Typography, { variant: "body2", color: "textSecondary" }, Math.round(props.value) + "%"))));
}
exports["default"] = WindBellCropper;
