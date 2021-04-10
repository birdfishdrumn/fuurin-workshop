import { POST } from "./types/posts";
import { USER} from "./types/user";
const functions = require('firebase-functions');
// import algoliasearch from "algoliasearch"
const algoliasearch = require("algoliasearch")

const admin = require('firebase-admin')
admin.initializeApp()

const ALGOLIA_ID = functions.config().algolia.id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.key

const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

const index = client.initIndex("posts");

exports.onWritePosts = functions
  .region("asia-northeast1")
  .firestore
  .document("posts/{postId}")
  .onWrite((change: any, context:any) => {

    const { postId } = context.params
    const posts = change.after.data() as POST
    const oldData = change.before.data();
    console.log(oldData)
    try {
      if (!!posts) {
            index.saveObject({
        objectID: postId,
        ...posts
      })
      } else if (!!oldData) {
                index.deleteObject(postId)
            }

    }catch(err) {
      console.log(err)
    }
  });

  exports.onUpdateUser = functions
  .region("asia-northeast1")
  .firestore.document("users/{userId}")
  .onUpdate(async (change: any, context: any) => {
    const { userId } = context.params;
    const newUser = change.after.data() as USER;

    const db = admin.firestore();
    try {
      const snapshot = await db
        .collection("posts")
        .where("uid", "==", userId)
        .get();

      const batch = db.batch();

      snapshot.docs.forEach((postDoc: any) => {
        const username = newUser.username ;
        console.log(postDoc)
        const avatar = newUser.avatar
        batch.update(postDoc.ref, { username,avatar });
      });

            const commentSnapshot = await db
        .collectionGroup("comments")
        .where("id", "==", userId)
        .get();

            commentSnapshot.docs.forEach((comDoc: any) => {
        const username = newUser.username ;
        console.log(comDoc)
        const avatar = newUser.avatar
        batch.update(comDoc.ref, { username,avatar });
      });

      await batch.commit();



    } catch (err) {
      console.log(err);
    }
  });

exports.onDeleteUser = functions
  .region("asia-northeast1")
  .firestore.document("users/{userId}")
  .onDelete(async (snap: any, context: any) => {
        const deletedDocument = snap.data()
    if (!deletedDocument) {
      return
    }
    const userId = context.params.userId
    const firebaseTools = require('firebase-tools')

    try {
          // お気に入りの作品を削除する。
      await firebaseTools.firestore
        .delete(`users/${userId}/likes`, {
          project: process.env.GCLOUD_PROJECT,
          recursive: true,
          yes: true,
          token: functions.config().fb.token
        })
          // お気に入りしたuserのサブコレクションを削除する。
            await firebaseTools.firestore
        .delete(`users/${userId}/likeUser`, {
          project: process.env.GCLOUD_PROJECT,
          recursive: true,
          yes: true,
          token: functions.config().fb.token
        })
          // お気に入りされたユーザーから自分を削除する。
          const db = admin.firestore();
          const batch = db.batch();
             const likeUser = await db
        .collectionGroup("likeUser")
        .where("uid", "==", userId)
        .get();

            likeUser.docs.forEach((doc: any) => {
      batch.delete(doc.ref);
            });
      // 投稿した作品を全て削除
        const postSnapshot = await db
        .collection("posts")
        .where("uid", "==", userId)
        .get();


      postSnapshot.docs.forEach((postDoc: any) => {
        batch.delete(postDoc.ref);
      });

      await batch.commit();



    } catch (err) {
      console.error(err)
    }
  })


exports.onDeletePost = functions
  .region("asia-northeast1")
  .firestore.document("posts/{postId}")
  .onDelete(async (snap: any, context: any) => {
        const deletedDocument = snap.data()
    if (!deletedDocument) {
      return
    }
    const postId = context.params.postId
    const firebaseTools = require('firebase-tools')

    try {
      await firebaseTools.firestore
        .delete(`posts/${postId}/comments`, {
          project: process.env.GCLOUD_PROJECT,
          recursive: true,
          yes: true,
          token: functions.config().fb.token
        })
    }catch (err) {
      console.error(err)
    }




  })
