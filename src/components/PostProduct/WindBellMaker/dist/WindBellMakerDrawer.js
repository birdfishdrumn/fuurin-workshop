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
var clsx_1 = require("clsx");
var styles_1 = require("@material-ui/core/styles");
var Drawer_1 = require("@material-ui/core/Drawer");
var style_1 = require("./style");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var index_1 = require("components/UI/index");
var Typography_1 = require("@material-ui/core/Typography");
var Divider_1 = require("@material-ui/core/Divider");
var IconButton_1 = require("@material-ui/core/IconButton");
var WindBellCropper_1 = require("./WindBellCropper");
var ChevronLeft_1 = require("@material-ui/icons/ChevronLeft");
var ChevronRight_1 = require("@material-ui/icons/ChevronRight");
var Mail_1 = require("@material-ui/icons/Mail");
var smart_png_1 = require("assets/img/src/shape/smart.png");
var prop_types_1 = require("prop-types");
var TreeView_1 = require("@material-ui/lab/TreeView");
var Delete_1 = require("@material-ui/icons/Delete");
var Label_1 = require("@material-ui/icons/Label");
var ArrowDropDown_1 = require("@material-ui/icons/ArrowDropDown");
var ArrowRight_1 = require("@material-ui/icons/ArrowRight");
var colorFlower_jpg_1 = require("assets/img/src/stripPattern/colorFlower.jpg");
var takasistatte_jpg_1 = require("assets/img/src/stripPattern/takasistatte.jpg");
var ULOCO_png_1 = require("assets/img/src/stripPattern/ULOCO.png");
var seigaiha_png_1 = require("assets/img/src/stripPattern/wagara/seigaiha.png");
var wood_jpg_1 = require("assets/img/src/stripPattern/wood.jpg");
var index_2 = require("components/UI/index");
var TreeItem_1 = require("@material-ui/lab/TreeItem");
var drawerWidth = 165;
if (window.matchMedia("(min-width: 768px)").matches) {
    drawerWidth = 250;
}
else {
    drawerWidth = 165;
}
var NormalText = function (props) {
    return react_1["default"].createElement(style_1.StyledText, __assign({}, props));
};
var useTreeItemStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            color: theme.palette.text.secondary
        },
        content: {
            color: theme.palette.text.secondary,
            borderTopRightRadius: theme.spacing(2),
            borderBottomRightRadius: theme.spacing(2),
            paddingRight: theme.spacing(1),
            fontWeight: theme.typography.fontWeightMedium,
            '&$expanded': {
                fontWeight: theme.typography.fontWeightRegular
            },
            '&:hover': {
                backgroundColor: theme.palette.action.hover
            },
            '&$focused, &$selected, &$selected$focused': {
                backgroundColor: "var(--tree-view-bg-color, " + theme.palette.action.selected + ")",
                color: 'var(--tree-view-color)'
            }
        },
        group: {
            marginLeft: 0,
            '& $content': {
                paddingLeft: theme.spacing(2)
            }
        },
        expanded: {},
        selected: {},
        focused: {},
        label: {
            fontWeight: 'inherit',
            color: 'inherit'
        },
        labelRoot: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0.5, 0, 0.5, 0.5)
        },
        labelIcon: {
            marginRight: theme.spacing(1)
        },
        labelText: {
            fontWeight: 'inherit',
            flexGrow: 1
        }
    });
});
function StyledTreeItem(props) {
    var classes = useTreeItemStyles();
    var bgColor = props.bgColor, color = props.color, LabelIcon = props.labelIcon, labelInfo = props.labelInfo, labelText = props.labelText, other = __rest(props, ["bgColor", "color", "labelIcon", "labelInfo", "labelText"]);
    return (react_1["default"].createElement(TreeItem_1["default"], __assign({ label: react_1["default"].createElement("div", { className: classes.labelRoot },
            react_1["default"].createElement(LabelIcon, { color: "inherit", className: classes.labelIcon }),
            react_1["default"].createElement(Typography_1["default"], { variant: "body2", className: classes.labelText }, labelText),
            react_1["default"].createElement(Typography_1["default"], { variant: "caption", color: "inherit" }, labelInfo)), style: {
            '--tree-view-color': color,
            '--tree-view-bg-color': bgColor
        }, classes: {
            root: classes.root,
            content: classes.content,
            expanded: classes.expanded,
            selected: classes.selected,
            // focused: classes.focused,
            group: classes.group,
            label: classes.label
        } }, other)));
}
StyledTreeItem.propTypes = {
    bgColor: prop_types_1["default"].string,
    color: prop_types_1["default"].string,
    labelIcon: prop_types_1["default"].elementType.isRequired,
    labelInfo: prop_types_1["default"].string,
    labelText: prop_types_1["default"].string.isRequired
};
var useStyles = styles_1.makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: {
            display: 'flex'
        },
        treeRoot: {
            height: 264,
            flexGrow: 1,
            maxWidth: 400
        },
        title: {
            flexGrow: 1
        },
        hide: {
            display: 'none'
        },
        drawer: (_a = {},
            _a[theme.breakpoints.down("sm")] = {
                width: drawerWidth,
                flexShrink: 0
            },
            _a),
        drawerPaper: {
            width: drawerWidth
        },
        drawerHeader: __assign(__assign({ display: 'flex', alignItems: 'center', padding: theme.spacing(0, 1) }, theme.mixins.toolbar), { justifyContent: 'flex-start' }),
        content: (_b = {},
            _b[theme.breakpoints.down("sm")] = {
                flexGrow: 1,
                padding: theme.spacing(0),
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                }),
                marginRight: -170
            },
            _b),
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginRight: 0
        }
    });
});
function PersistentDrawerRight(_a) {
    var _b;
    var textLength = _a.textLength, strip = _a.strip, setStrip = _a.setStrip, pathItem = _a.pathItem, windBellImage = _a.windBellImage, setPathItem = _a.setPathItem, setWindBellImage = _a.setWindBellImage, wishText = _a.wishText, inputWishText = _a.inputWishText;
    var classes = useStyles();
    var theme = styles_1.useTheme();
    var _c = react_1["default"].useState(false), open = _c[0], setOpen = _c[1];
    var _d = react_1.useState("default"), textColor = _d[0], setTextColor = _d[1];
    var handleDrawerOpen = function () {
        setOpen(true);
    };
    var handleDrawerClose = function () {
        setOpen(false);
    };
    react_1.useEffect(function () {
        setPathItem({
            path: pathItem.path,
            viewBox: pathItem.viewBox
        });
        console.log("@p");
    }, [setPathItem]);
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement(CssBaseline_1["default"], null),
        react_1["default"].createElement("main", { className: clsx_1["default"](classes.content, (_b = {},
                _b[classes.contentShift] = open,
                _b)) },
            react_1["default"].createElement("div", null),
            react_1["default"].createElement("div", { className: "center" },
                react_1["default"].createElement(style_1.SvgContainer, null,
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("svg", { width: 0, height: 0, style: { position: 'absolute', top: 0, left: 0 } },
                            react_1["default"].createElement("clipPath", { id: "clip01" },
                                react_1["default"].createElement("path", { id: "\u3079\u305F\u5857\u308A_1", "data-name": "\u3079\u305F\u5857\u308A 1", d: pathItem.path }))),
                        react_1["default"].createElement(style_1.Svg, { width: 200, height: 140, viewBox: pathItem.viewBox }, windBellImage &&
                            react_1["default"].createElement("image", { xlinkHref: windBellImage, width: "100%", height: "100%", style: { marginRight: "20px", boxShadow: "2px 2px" }, preserveAspectRatio: "xMidYMid slice", clipPath: "url(#clip01)" }))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("svg", { width: 0, height: 0, style: { position: 'absolute', top: 0, left: 0 } },
                            react_1["default"].createElement("clipPath", { id: "clip02" },
                                react_1["default"].createElement("path", { id: "\u3079\u305F\u5857\u308A_1", "data-name": "\u3079\u305F\u5857\u308A 1", d: "M32,0H463c2.128,57.109,8.881,115.333-12,157q-4,8-8,16l-33,12c-11.128-1.122-24.16-10.425-38-3-18.393,9.867-25.331,39.156-28,65,13,9.866,22.165,23.392,36,33,34.123-4.415,47.574-16.38,62-40q-4.5-16.5-9-33l26-11c36.209-44.493,32.7-124.819,23-193L760,5q-22.5,1356.365-45,2713L0,2733Q16,1366.635,32,0Z" }))),
                        react_1["default"].createElement(style_1.Svg, { width: 200, height: 295, viewBox: "0 0 760 2733" }, windBellImage &&
                            react_1["default"].createElement("image", { xlinkHref: strip, width: "100%", height: "100%", style: { marginRight: "20px", boxShadow: "2px 2px" }, preserveAspectRatio: "xMidYMid slice", clipPath: "url(#clip02)" }))),
                    react_1["default"].createElement(style_1.ImageContainer, null,
                        react_1["default"].createElement("img", { src: smart_png_1["default"], alt: "\u30AF\u30EA\u30C3\u30D4\u30F3\u30B0\u30B5\u30F3\u30D7\u30EB" })),
                    react_1["default"].createElement(NormalText, { textstyle: textColor, textLength: textLength }, wishText.slice(0, 48))),
                react_1["default"].createElement(index_2.PrimaryButton, { label: "\u98A8\u9234\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3059\u308B", onClick: handleDrawerOpen }),
                react_1["default"].createElement(WindBellCropper_1["default"], { pathItem: pathItem, setPathItem: setPathItem, imageUrl: windBellImage, setImageUrl: setWindBellImage })),
            react_1["default"].createElement(index_1.TextInput, { fullWidth: true, label: "願い事", multiline: true, required: true, onChange: inputWishText, rows: 5, value: wishText, type: "text", variant: "outlined" })),
        react_1["default"].createElement(Drawer_1["default"], { className: classes.drawer, variant: "persistent", anchor: "right", open: open, classes: {
                paper: classes.drawerPaper
            } },
            react_1["default"].createElement("div", { className: classes.drawerHeader },
                react_1["default"].createElement(IconButton_1["default"], { onClick: handleDrawerClose }, theme.direction === 'rtl' ? react_1["default"].createElement(ChevronLeft_1["default"], null) : react_1["default"].createElement(ChevronRight_1["default"], null))),
            "\u77ED\u518A\u306E\u6A21\u69D8",
            react_1["default"].createElement(Divider_1["default"], null),
            react_1["default"].createElement(TreeView_1["default"], { "aria-label": "gmail", className: classes.treeRoot, defaultExpanded: ['3'], defaultCollapseIcon: react_1["default"].createElement(ArrowDropDown_1["default"], null), defaultExpandIcon: react_1["default"].createElement(ArrowRight_1["default"], null), defaultEndIcon: react_1["default"].createElement("div", { style: { width: 24 } }) },
                react_1["default"].createElement(StyledTreeItem, { nodeId: "1", labelText: "\u548C\u7D19\u30FB\u5E03", labelIcon: Mail_1["default"] }),
                react_1["default"].createElement(StyledTreeItem, { nodeId: "2", labelText: "\u548C\u67C4", labelIcon: Delete_1["default"] },
                    react_1["default"].createElement(style_1.Flex, null,
                        react_1["default"].createElement(style_1.ImagePallet, { onClick: function () { return setStrip(colorFlower_jpg_1["default"]); } },
                            react_1["default"].createElement(style_1.Image, { src: colorFlower_jpg_1["default"] })),
                        react_1["default"].createElement(style_1.ImagePallet, { onClick: function () { return setStrip(takasistatte_jpg_1["default"]); } },
                            react_1["default"].createElement(style_1.Image, { src: takasistatte_jpg_1["default"] })),
                        react_1["default"].createElement(style_1.ImagePallet, { onClick: function () { return setStrip(ULOCO_png_1["default"]); } },
                            react_1["default"].createElement(style_1.Image, { src: ULOCO_png_1["default"] })),
                        react_1["default"].createElement(style_1.ImagePallet, { onClick: function () { return setStrip(wood_jpg_1["default"]); } },
                            react_1["default"].createElement(style_1.Image, { src: wood_jpg_1["default"] })),
                        react_1["default"].createElement(style_1.ImagePallet, { onClick: function () { return setStrip(seigaiha_png_1["default"]); } },
                            react_1["default"].createElement(style_1.Image, { src: seigaiha_png_1["default"] })))),
                react_1["default"].createElement(StyledTreeItem, { nodeId: "4", labelText: "\u30AF\u30E9\u30B7\u30C3\u30AF", labelIcon: Mail_1["default"] }),
                react_1["default"].createElement(StyledTreeItem, { nodeId: "4", labelText: "\u82B1\u67C4", labelIcon: Label_1["default"] }),
                react_1["default"].createElement(StyledTreeItem, { nodeId: "5", labelText: "\u6728\u76EE\u8ABF", labelIcon: Label_1["default"] }),
                react_1["default"].createElement(StyledTreeItem, { nodeId: "6", labelText: "\u590F\u306E\u67C4", labelIcon: Mail_1["default"] }),
                react_1["default"].createElement(Divider_1["default"], null),
                "\u6587\u5B57\u306E\u30B9\u30BF\u30A4\u30EB",
                react_1["default"].createElement(StyledTreeItem, { nodeId: "5", labelText: "\u66F8\u5F0F", labelIcon: Label_1["default"] }),
                react_1["default"].createElement(StyledTreeItem, { nodeId: "7", labelText: "\u6587\u5B57\u306E\u8272", labelIcon: Label_1["default"] },
                    react_1["default"].createElement(style_1.Flex, null,
                        react_1["default"].createElement(style_1.Color, { color: "black", onClick: function () { return setTextColor("default"); } }),
                        react_1["default"].createElement(style_1.Color, { color: "white", onClick: function () { return setTextColor("white"); } }),
                        react_1["default"].createElement(style_1.Color, { color: "blue", onClick: function () { return setTextColor("blue"); } }),
                        react_1["default"].createElement(style_1.Color, { color: "pink", onClick: function () { return setTextColor("pink"); } })))),
            react_1["default"].createElement(Divider_1["default"], null))));
}
exports["default"] = PersistentDrawerRight;
