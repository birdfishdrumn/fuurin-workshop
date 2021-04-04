"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.CircleImage = exports.ImageWrapper = exports.WhiteIcon = exports.PrivacyNav = exports.BackgroundWhite = exports.StyledBoldText = exports.BoldText = exports.HelpNav = exports.Text = exports.Main = exports.MainTitle = exports.TwoColumn = exports.SectionContainer = exports.ScrollItem = exports.Scroll = exports.Title = exports.IconFlex = exports.SimpleGrid = exports.Flex = exports.GridLow = exports.GridList = exports.SectionWrapping = exports.SectionWrapper = exports.StyledLink = void 0;
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var IconButton_1 = require("@material-ui/core/IconButton");
exports.StyledLink = styled_components_1["default"](react_router_dom_1.Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n text-decoration:none;\n"], ["\n text-decoration:none;\n"])));
exports.SectionWrapper = styled_components_1["default"].section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin: 70px auto;\n    margin-top: 10px;\n    max-width:", " ;\n    position: relative;\n    padding: 0 auto;\n    text-align: center;\n    width: 100%;\n\n    /* margin:0 0 70px 0; */\n"], ["\n    margin: 70px auto;\n    margin-top: 10px;\n    max-width:", " ;\n    position: relative;\n    padding: 0 auto;\n    text-align: center;\n    width: 100%;\n\n    /* margin:0 0 70px 0; */\n"])), function (props) { return (props.top ? "1124" : "1024px"); });
exports.SectionWrapping = styled_components_1["default"].section(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin:", ";\n\n    max-width: 924px;\n    position: relative;\n    padding: 0 20px;\n    text-align: center;\n    /* width: 100%; */\n     width: calc(100% - 2rem);\n\n     background-color:", ";\n     @media(max-width:768px){\n       padding: 0;\n     }\n"], ["\n    margin:", ";\n\n    max-width: 924px;\n    position: relative;\n    padding: 0 20px;\n    text-align: center;\n    /* width: 100%; */\n     width: calc(100% - 2rem);\n\n     background-color:", ";\n     @media(max-width:768px){\n       padding: 0;\n     }\n"])), function (props) { return (props.large ? "80px auto" : "80px auto"); }, function (props) { return (props.white && "white"); });
exports.GridList = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\n  ", ";\n    grid-gap:", ";\n @media(max-width:1024px){\n grid-template-columns:1fr 1fr 1fr;\n }\n @media(max-width:767px){\n grid-template-columns:", ";\n margin:0;\n }\n"], ["\n\n  ",
    ";\n    grid-gap:", ";\n @media(max-width:1024px){\n grid-template-columns:1fr 1fr 1fr;\n }\n @media(max-width:767px){\n grid-template-columns:", ";\n margin:0;\n }\n"])), function (_a) {
    var change = _a.change;
    return change ? "\n\n   @media(max-width:767px){\n    overflow-x: auto;\n      white-space: nowrap;\n      -webkit-overflow-scrolling: touch;\n   }\n  "
        : "\nlist-style:none;\n display:grid;\n grid-template-columns:1fr 1fr 1fr 1fr;\n grid-gap:20px;\n max-width:1124px;\n text-align:center;\n margin:0 auto;\n//  cursor:pointer;\n//    height:70%; >div{\n\n//  }\n  ";
}, function (props) { return (props.gap && "20px"); }, function (props) { return (props.single ? "1fr" : "1fr 1fr"); });
exports.GridLow = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    margin:0 auto;\n    @media(min-width:1024px){\n       width:1024px;\n         display: flex;\n\n    flex-flow: row wrap;\n    justify-content: center;\n    }\n\n"], ["\n    margin:0 auto;\n    @media(min-width:1024px){\n       width:1024px;\n         display: flex;\n\n    flex-flow: row wrap;\n    justify-content: center;\n    }\n\n"])));
exports.Flex = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\ndisplay:flex;\njustify-content:", ";\n\n"], ["\ndisplay:flex;\njustify-content:", ";\n\n"])), function (props) { return (props.between ? "space-between" : "center"); });
exports.SimpleGrid = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\n    margin:0 auto;\n         display: grid;\n         max-width:", ";\n         grid-gap:", ";\n      grid-template-columns:", ";\n       @media(max-width:767px){\n grid-template-columns:1fr;\n }\n >div{\n    text-align:center;\n\n }\n\n\n"], ["\n\n    margin:0 auto;\n         display: grid;\n         max-width:", ";\n         grid-gap:", ";\n      grid-template-columns:", ";\n       @media(max-width:767px){\n grid-template-columns:1fr;\n }\n >div{\n    text-align:center;\n\n }\n\n\n"])), function (props) { return (props.two && "600px"); }, function (props) { return (props.two ? "100px" : "60px"); }, function (props) { return (props.two ? "1fr 1fr" : "1fr 1fr 1fr"); });
exports.IconFlex = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\ndisplay:flex;\nlist-style:none;\njustify-content:", ";\n ", ";\n      padding:", ";\n>div{\n       /* padding:", "; */\n  margin:10px 30px;\n  cursor:pointer;\n    ", ";\n\n}\n"], ["\ndisplay:flex;\nlist-style:none;\njustify-content:", ";\n ",
    ";\n      padding:", ";\n>div{\n       /* padding:", "; */\n  margin:10px 30px;\n  cursor:pointer;\n    ",
    ";\n\n}\n"
    //   ${props => props.custom && `
    //     display:inline-block;
    //   color: black;/*文字色*/
    //   padding: 0.5em 0;/*上下の余白*/
    //   border-top: solid 3px #ccc;/*上線*/
    //   border-bottom: solid 3px #ccc;/*下線*/
    //   // background: #ccc;
    //   padding-left:10px;
    //   padding-right:10px;
    //  `}
])), function (props) { return (props.between ? "space-between" : "center"); }, function (props) { return props.nav && "\n justify-content:space-between;\n       overflow-x: scroll;\n      white-space: nowrap;\n      -webkit-overflow-scrolling: touch;\n      width:100%;\n "; }, function (props) { return (props.padding && "30px"); }, function (props) { return (props.padding && "30px"); }, function (_a) {
    var isActive = _a.isActive;
    return isActive ? "\n    color:red;\n    "
        :
            "\n    color:dimgray;\n    ";
});
//   ${props => props.custom && `
//     display:inline-block;
//   color: black;/*文字色*/
//   padding: 0.5em 0;/*上下の余白*/
//   border-top: solid 3px #ccc;/*上線*/
//   border-bottom: solid 3px #ccc;/*下線*/
//   // background: #ccc;
//   padding-left:10px;
//   padding-right:10px;
//  `}
exports.Title = styled_components_1["default"].h2(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\ncolor:", ";\n  margin:0 auto;\n  padding:", ";\n  /* margin:10px; */\n  font-weight:bold;\n  font-size:", ";\ntext-align:", ";\n/* background-color:white: */\n"], ["\n\ncolor:", ";\n  margin:0 auto;\n  padding:", ";\n  /* margin:10px; */\n  font-weight:bold;\n  font-size:", ";\ntext-align:", ";\n/* background-color:white: */\n"])), function (props) { return (props.dimgray ? "dimgray" : "black"); }, function (props) { return (props.min ? "20px 0" : "30px 25px 20px 25px"); }, function (props) { return (props.min ? "1.1rem" : "1.5rem"); }, function (props) { return (props.left ? "left" : "center"); });
exports.Scroll = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      overflow-x: auto;\n      white-space: nowrap;\n      -webkit-overflow-scrolling: touch;\n"], ["\n      overflow-x: auto;\n      white-space: nowrap;\n      -webkit-overflow-scrolling: touch;\n"])));
exports.ScrollItem = styled_components_1["default"].li(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n     display: inline-block;\n     width:", ";\n     margin:10px;\n"], ["\n     display: inline-block;\n     width:", ";\n     margin:10px;\n"])), function (props) { return (props.width && "250px"); });
exports.SectionContainer = styled_components_1["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    position: relative;\n    margin: 0 auto;\n    max-width: 400px;\n    padding: 1rem;\n    height: auto;\n    width: calc(100% - 2rem);\n"], ["\n    position: relative;\n    margin: 0 auto;\n    max-width: 400px;\n    padding: 1rem;\n    height: auto;\n    width: calc(100% - 2rem);\n"])));
exports.TwoColumn = styled_components_1["default"].div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  display:flex;\n  @media(max-width:768px){\n    flex-direction:column;\n  }\n"], ["\n  display:flex;\n  @media(max-width:768px){\n    flex-direction:column;\n  }\n"])));
exports.MainTitle = styled_components_1["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n font-size:3rem;\n font-weight:bold;\n  @media(max-width:768px){\n    flex-direction:column;\n  }\n"], ["\n font-size:3rem;\n font-weight:bold;\n  @media(max-width:768px){\n    flex-direction:column;\n  }\n"])));
exports.Main = styled_components_1["default"].div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n       padding: ", ";\n\n"], ["\n       padding: ", ";\n\n"])), function (props) { return (props.auth ? "70px 0" : "70px 0 0 0 "); });
exports.Text = styled_components_1["default"].p(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n\n text-align:", " ;\n margin:0 15px;\n font-weight:600;\n color:", ";\n font-size:", ";\n padding:20px 0;\n"], ["\n\n text-align:", " ;\n margin:0 15px;\n font-weight:600;\n color:", ";\n font-size:", ";\n padding:20px 0;\n"])), function (props) { return (props.left ? "left" : "center"); }, function (props) { return (props.red ? "red" : "dimgray"); }, function (props) { return (props.large ? "1.2rem" : "1.1rem"); });
exports.HelpNav = styled_components_1["default"].ul(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n list-style:none;\n margin:10px 0;\n>li{\n  padding:10px 0;\n}\n"], ["\n list-style:none;\n margin:10px 0;\n>li{\n  padding:10px 0;\n}\n"])));
exports.BoldText = styled_components_1["default"].p(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\nfont-weight:bolder;\nfont-size:", ";\ntext-align:center;\ncolor:", ";\n text-align:", " ;\n text-align:", " ;\n ", ";\n"], ["\nfont-weight:bolder;\nfont-size:", ";\ntext-align:center;\ncolor:", ";\n text-align:", " ;\n text-align:", " ;\n ",
    ";\n"])), function (props) { return (props.min ? "0.7rem" : "0.95rem"); }, function (props) { return props.color; }, function (props) { return (props.left && "left"); }, function (props) { return (props.right && "right"); }, function (props) { return props.image && "\n   width:45%;\n   margin:10px auto;\n   @media(max-width:768px){\n     width:80%;\n\n   }\n "; });
exports.StyledBoldText = exports.BoldText.withComponent('span');
exports.BackgroundWhite = styled_components_1["default"].div(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n background:white;\n padding:", ";\n margin:0 auto;\n /* max-width:95% !important; */\n  box-shadow: 0 0px 10px rgba(0,0,0,0.2);\n width:100% !important;\n height:100%;\n border-radius:10px;\n"], ["\n background:white;\n padding:", ";\n margin:0 auto;\n /* max-width:95% !important; */\n  box-shadow: 0 0px 10px rgba(0,0,0,0.2);\n width:100% !important;\n height:100%;\n border-radius:10px;\n"])), function (props) { return (props.large ? "30px" : "20px"); });
exports.PrivacyNav = styled_components_1["default"].ol(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  text-align:left;\n  margin:0 15px;\n  line-height:2.0rem;\n  padding:20px;\n  color:#444444;\n  margin:", ";\n  @media(max-width:768px){\n    padding:0;\n  }\n"], ["\n  text-align:left;\n  margin:0 15px;\n  line-height:2.0rem;\n  padding:20px;\n  color:#444444;\n  margin:", ";\n  @media(max-width:768px){\n    padding:0;\n  }\n"])), function (props) { return (props.description ? "0 30px" : "0 15px"); });
exports.WhiteIcon = styled_components_1["default"](IconButton_1["default"])(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n background:white;\n  box-shadow: 2px 2px 4px gray;\nmargin:15px;\n\n"], ["\n background:white;\n  box-shadow: 2px 2px 4px gray;\nmargin:15px;\n\n"])));
exports.ImageWrapper = styled_components_1["default"].div(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n margin:40px auto;\n"], ["\n margin:40px auto;\n"])));
exports.CircleImage = styled_components_1["default"].img(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n border-radius:50%;\n"], ["\n border-radius:50%;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23;
