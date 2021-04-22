'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
exports.__esModule = true;
var functions = require('firebase-functions');
// import algoliasearch from "algoliasearch"
var algoliasearch = require('algoliasearch');
var admin = require('firebase-admin');
admin.initializeApp();
var ALGOLIA_ID = functions.config().algolia.id;
var ALGOLIA_ADMIN_KEY = functions.config().algolia.key;
var client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);
var index = client.initIndex('posts');
exports.onWritePosts = functions
  .region('asia-northeast1')
  .firestore.document('posts/{postId}')
  .onWrite(function (change, context) {
    var postId = context.params.postId;
    var posts = change.after.data();
    var oldData = change.before.data();
    console.log(oldData);
    try {
      if (!!posts) {
        index.saveObject(__assign({ objectID: postId }, posts));
      } else if (!!oldData) {
        index.deleteObject(postId);
      }
    } catch (err) {
      console.log(err);
    }
  });
exports.onUpdateUser = functions
  .region('asia-northeast1')
  .firestore.document('users/{userId}')
  .onUpdate(function (change, context) {
    return __awaiter(void 0, void 0, void 0, function () {
      var userId, newUser, db, snapshot, batch_1, commentSnapshot, err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            userId = context.params.userId;
            newUser = change.after.data();
            db = admin.firestore();
            _a.label = 1;
          case 1:
            _a.trys.push([1, 5, , 6]);
            return [4 /*yield*/, db.collection('posts').where('uid', '==', userId).get()];
          case 2:
            snapshot = _a.sent();
            batch_1 = db.batch();
            snapshot.docs.forEach(function (postDoc) {
              var username = newUser.username;
              console.log(postDoc);
              var avatar = newUser.avatar;
              batch_1.update(postDoc.ref, { username: username, avatar: avatar });
            });
            return [4 /*yield*/, db.collectionGroup('comments').where('id', '==', userId).get()];
          case 3:
            commentSnapshot = _a.sent();
            commentSnapshot.docs.forEach(function (comDoc) {
              var username = newUser.username;
              console.log(comDoc);
              var avatar = newUser.avatar;
              batch_1.update(comDoc.ref, { username: username, avatar: avatar });
            });
            return [4 /*yield*/, batch_1.commit()];
          case 4:
            _a.sent();
            return [3 /*break*/, 6];
          case 5:
            err_1 = _a.sent();
            console.log(err_1);
            return [3 /*break*/, 6];
          case 6:
            return [2 /*return*/];
        }
      });
    });
  });
exports.onDeleteUser = functions
  .region('asia-northeast1')
  .firestore.document('users/{userId}')
  .onDelete(function (snap, context) {
    return __awaiter(void 0, void 0, void 0, function () {
      var deletedDocument, userId, firebaseTools, db, batch_2, likeUser, postSnapshot, err_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            deletedDocument = snap.data();
            if (!deletedDocument) {
              return [2 /*return*/];
            }
            userId = context.params.userId;
            firebaseTools = require('firebase-tools');
            _a.label = 1;
          case 1:
            _a.trys.push([1, 7, , 8]);
            // お気に入りの作品を削除する。
            return [
              4 /*yield*/,
              firebaseTools.firestore['delete']('users/' + userId + '/likes', {
                project: process.env.GCLOUD_PROJECT,
                recursive: true,
                yes: true,
                token: functions.config().fb.token,
              }),
              // お気に入りしたuserのサブコレクションを削除する。
            ];
          case 2:
            // お気に入りの作品を削除する。
            _a.sent();
            // お気に入りしたuserのサブコレクションを削除する。
            return [
              4 /*yield*/,
              firebaseTools.firestore['delete']('users/' + userId + '/likeUser', {
                project: process.env.GCLOUD_PROJECT,
                recursive: true,
                yes: true,
                token: functions.config().fb.token,
              }),
              // お気に入りされたユーザーから自分を削除する。
            ];
          case 3:
            // お気に入りしたuserのサブコレクションを削除する。
            _a.sent();
            db = admin.firestore();
            batch_2 = db.batch();
            return [4 /*yield*/, db.collectionGroup('likeUser').where('uid', '==', userId).get()];
          case 4:
            likeUser = _a.sent();
            likeUser.docs.forEach(function (doc) {
              batch_2['delete'](doc.ref);
            });
            return [4 /*yield*/, db.collection('posts').where('uid', '==', userId).get()];
          case 5:
            postSnapshot = _a.sent();
            postSnapshot.docs.forEach(function (postDoc) {
              batch_2['delete'](postDoc.ref);
            });
            return [4 /*yield*/, batch_2.commit()];
          case 6:
            _a.sent();
            return [3 /*break*/, 8];
          case 7:
            err_2 = _a.sent();
            console.error(err_2);
            return [3 /*break*/, 8];
          case 8:
            return [2 /*return*/];
        }
      });
    });
  });
exports.onDeletePost = functions
  .region('asia-northeast1')
  .firestore.document('posts/{postId}')
  .onDelete(function (snap, context) {
    return __awaiter(void 0, void 0, void 0, function () {
      var deletedDocument, postId, firebaseTools, err_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            deletedDocument = snap.data();
            if (!deletedDocument) {
              return [2 /*return*/];
            }
            postId = context.params.postId;
            firebaseTools = require('firebase-tools');
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [
              4 /*yield*/,
              firebaseTools.firestore['delete']('posts/' + postId + '/comments', {
                project: process.env.GCLOUD_PROJECT,
                recursive: true,
                yes: true,
                token: functions.config().fb.token,
              }),
            ];
          case 2:
            _a.sent();
            return [3 /*break*/, 4];
          case 3:
            err_3 = _a.sent();
            console.error(err_3);
            return [3 /*break*/, 4];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  });
