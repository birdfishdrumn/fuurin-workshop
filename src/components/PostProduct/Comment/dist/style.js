"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.DeleteComment = exports.PostCommentWrapper = exports.PostButton = exports.PostCommentInput = exports.PostCommentForm = exports.PostCommentText = exports.CommentTime = exports.PostCommentUser = exports.PostCommentLength = exports.PostCommentIcon = exports.PostComment = void 0;
var styled_components_1 = require("styled-components");
var Message_1 = require("@material-ui/icons/Message");
exports.PostComment = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n>div:first-child{\n    display: flex;\n}\n   position:relative;\n  align-items: center;\n  word-break: break-all;\n  margin: 10px 0;\n  margin-left:", ";\n  padding:10px 0;\n  max-width: 100%;\n\n"], ["\n>div:first-child{\n    display: flex;\n}\n   position:relative;\n  align-items: center;\n  word-break: break-all;\n  margin: 10px 0;\n  margin-left:", ";\n  padding:10px 0;\n  max-width: 100%;\n\n"])), function (props) { return (props.reply && "25px"); });
exports.PostCommentIcon = styled_components_1["default"](Message_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: 10px;\n  margin-bottom:-10px;\n  color: grey;\n  cursor: pointer;\n  font-size:30px;\n\n"], ["\n  margin-right: 10px;\n  margin-bottom:-10px;\n  color: grey;\n  cursor: pointer;\n  font-size:30px;\n\n"])));
exports.PostCommentLength = styled_components_1["default"].span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n   color: grey;\n   margin-left: 15px;\n   margin-bottom: 50px;\n\n"], ["\n   color: grey;\n   margin-left: 15px;\n   margin-bottom: 50px;\n\n"])));
exports.PostCommentUser = styled_components_1["default"].span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n font-weight: 500;\n  font-size: 0.9rem;\n  color: black;\n  margin-right: 0px;\n"], ["\n font-weight: 500;\n  font-size: 0.9rem;\n  color: black;\n  margin-right: 0px;\n"])));
exports.CommentTime = styled_components_1["default"].span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    color: grey;\n    font-size: 0.9rem;\n    margin-left: 5px;\n\n"], ["\n    color: grey;\n    font-size: 0.9rem;\n    margin-left: 5px;\n\n"])));
exports.PostCommentText = styled_components_1["default"].p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font-size: 15px;\n  color: black;\n  margin-top:5px;\n  margin-left: 25px;\n  text-align:left;\n  "], ["\n    font-size: 15px;\n  color: black;\n  margin-top:5px;\n  margin-left: 25px;\n  text-align:left;\n  "])));
exports.PostCommentForm = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin: 40px;\n  position: relative;\n  display: flex;\n"], ["\n  margin: 40px;\n  position: relative;\n  display: flex;\n"])));
exports.PostCommentInput = styled_components_1["default"].input(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n   padding: 10px;\n  outline: none;\n  width: 100%;\n  border-color: cornflowerblue;\n  border-radius: 10px;\n  margin-right: 10px;\n"], ["\n   padding: 10px;\n  outline: none;\n  width: 100%;\n  border-color: cornflowerblue;\n  border-radius: 10px;\n  margin-right: 10px;\n"])));
exports.PostButton = styled_components_1["default"].button(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n border: none;\n  color: cornflowerblue;\n  background-color: transparent;\n  cursor: pointer;\n"], ["\n border: none;\n  color: cornflowerblue;\n  background-color: transparent;\n  cursor: pointer;\n"])));
exports.PostCommentWrapper = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\toverflow-y: scroll;\n\tmargin: 30px auto 30px;\n  background-color:white;\n\tmax-height: 250px;\n  padding:10px;\n  border-radius:10px;\n"], ["\n\toverflow-y: scroll;\n\tmargin: 30px auto 30px;\n  background-color:white;\n\tmax-height: 250px;\n  padding:10px;\n  border-radius:10px;\n"])));
exports.DeleteComment = styled_components_1["default"].p(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n position:absolute;\n top:0px;\n right:0;\n font-size:0.8rem;\n font-weight:bold;\n"], ["\n position:absolute;\n top:0px;\n right:0;\n font-size:0.8rem;\n font-weight:bold;\n"
    // .post_buttonDisable {
    //   display: none;
    // }
])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
// .post_buttonDisable {
//   display: none;
// }
