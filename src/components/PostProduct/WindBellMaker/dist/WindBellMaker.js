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
var index_1 = require("firebase/index");
var react_redux_1 = require("react-redux");
var loadingSlice_1 = require("reducks/loadingSlice");
var blueimp_load_image_1 = require("blueimp-load-image");
var WindBellMakerDrawer_1 = require("./WindBellMakerDrawer");
var WindBellMaker = function (_a) {
    var textLength = _a.textLength, strip = _a.strip, setStrip = _a.setStrip, pathItem = _a.pathItem, setPathItem = _a.setPathItem, windBellImage = _a.windBellImage, setWindBellImage = _a.setWindBellImage, wishText = _a.wishText, inputWishText = _a.inputWishText;
    var dispatch = react_redux_1.useDispatch();
    var uploadImage = react_1.useCallback(function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var file, blob, canvas, S, N, fileName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch(loadingSlice_1.showLoadingAction("uploading..."));
                    file = event.target.files;
                    blob = new Blob(file, { type: "image/jpeg" });
                    return [4 /*yield*/, blueimp_load_image_1["default"](blob, {
                            maxWidth: 600,
                            canvas: true
                        })];
                case 1:
                    canvas = _a.sent();
                    S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                    N = 16;
                    fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map(function (n) { return S[n % S.length]; }).join('');
                    //  @ts-ignore
                    canvas.image.toBlob(function (blob) {
                        var uploadRef = index_1.storage.ref('tanzaku').child(fileName);
                        var uploadTask = uploadRef.put(blob);
                        uploadTask.then(function () {
                            // Handle successful uploads on complete
                            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                                var newImage = { id: fileName, path: downloadURL };
                                setStrip(newImage.path);
                                dispatch(loadingSlice_1.hideLoadingAction());
                            });
                        })["catch"](function () {
                            // dispatch(hideLoadingAction())
                        });
                    }, "image/jpeg");
                    return [2 /*return*/];
            }
        });
    }); }, [setStrip]);
    return (react_1["default"].createElement("div", { className: "center" },
        react_1["default"].createElement(WindBellMakerDrawer_1["default"], { textLength: textLength, pathItem: pathItem, setPathItem: setPathItem, setWindBellImage: setWindBellImage, windBellImage: windBellImage, strip: strip, setStrip: setStrip, wishText: wishText, inputWishText: inputWishText, uploadImage: uploadImage })));
};
exports["default"] = WindBellMaker;
