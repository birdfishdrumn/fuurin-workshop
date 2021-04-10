import { AppThunk, RootState,AppDispatch,store } from '../../store';
import {fetchPostsAction,fetchUserPostsAction,deletePostAction} from "./postSlice"
import {db,auth,FirebaseTimestamp  } from "../../firebase/index"
import firebase from "firebase/app"
import { push } from "connected-react-router";
import { POST } from "../../types/posts"
import { hideLoadingAction, showLoadingAction } from "../loadingSlice";
import {snackbarOpenAction} from "../snackbar/snackbarSlice"


const postsRef = db.collection("posts")

export const deletePost = (id: string,uid:string) => {
  return async (dispatch: AppDispatch,getState) => {

    postsRef.doc(id).delete()
      .then(() => {
        //getStateで現在のstoreの情報を取得する。ここでは現在のposslistを取得してprevPostsに代入
        const prevPosts = store.getState().post.post.userList;
        // 今回削除した以外の配列を残す
        const nextPosts = prevPosts.filter(post => post.id !== id)
        dispatch(deletePostAction(nextPosts))
      })
        // db.collection("users").doc().collection("likes").where("postId", "==", id)


  }
}


export const savePost = (id: string, name: string, description: string, category: string, images: any,allImages:any,username: string,avatar: string,uid:string,tags:string[],check:boolean): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(showLoadingAction("作品を登録しています"));
      const timestamp = FirebaseTimestamp.now()
      const data: any = {
        category: category,
        description: description,
        name: name,
        images: images,
        allImages: allImages,
        username: username,
        avatar: avatar,
        uid: uid,
        tags: tags,
        updated_at: timestamp,
        check: check
      }

      if (id === "") {
        const ref = postsRef.doc()
        data.created_at = timestamp;
        // 新しく配列を定義してしまうので、constいらない　
        id = ref.id;
        data.id = id;
      }
      // 新しく配列を定義してしまうので、constいらない　
      console.log("失敗")
      return postsRef.doc(id).set(data, {
        merge: true
      }).then(async () => {
        console.log("失敗")
        // タグのみをタグコレクションに登録する処理
        // for分に配列で回ってきたタグを一つずつ展開してコレクションに入れていく。
        for (let i = 0; i < tags.length; i++) {
          const tagElement = tags[i];
          //  console.log(tagElement)
          const ref = db.collection("tags").doc()
          const id = ref.id
          const sameTag = db.collection("tags").where("tag", "==", tagElement).get()
          const result = await db.collection("tags").where("tag", "==", tagElement).get()
          //  console.log(result)
          //  もしタグの一つがデータベースに存在していたら統合する。
          if (result.size) {
            sameTag.then((snapshot) => {
              snapshot.forEach(doc => {
                const tagId = doc.data().id

                console.log(tagId)
                if (tagId) {
                  db.collection("tags").doc(tagId).
                    set({
                      tag: tagElement,
                      id: tagId
                    },
                      { merge: true }
                    )
                }
              })
            })
          } else {
            db.collection("tags").doc(id).set({
              tag: tagElement,
              id: id
            })
          }
        }



      }).then(() => {
        dispatch(push("/"))
        dispatch(hideLoadingAction());
        dispatch(snackbarOpenAction({ text: "作品を登録しました", type: true }))
      }
      ).catch((error) => {
        dispatch(hideLoadingAction())
        dispatch(snackbarOpenAction({ text: "処理に失敗しました", type: false }))
        throw new Error(error)
      })
    } catch (err) {
           dispatch(snackbarOpenAction({ text: "処理に失敗しました", type: false }))
             dispatch(hideLoadingAction())

    }
  }
}

export const fetchPosts = (id:string):AppThunk  => {
  return async (dispatch: AppDispatch) => {
    postsRef.where("uid","==",id).orderBy("updated_at", "desc").get()
      .then(snapshots => {
        const postList: any[] = []
        snapshots.forEach(snapshot => {
          const post = snapshot.data();
          postList.push(post)
        })
        dispatch(fetchPostsAction(postList))
    })
  }
}


export const addUserPost = (uid: string) => {
  return async (dispatch) => {
       dispatch(showLoadingAction("Loading"));

      db.collection("posts").where("uid", "==", uid).get().then((querySnapshot) => {
      const postList = []
      querySnapshot.forEach((doc) => {
         const data =doc.data();
        postList.push(data)

      })
            dispatch(hideLoadingAction());
          dispatch(fetchUserPostsAction(postList))
    })
  }
}
