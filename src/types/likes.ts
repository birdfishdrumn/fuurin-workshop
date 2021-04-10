import firebase from "firebase/app"
import { POST } from "./posts"
export type LIKE = {
  id: string;
  uid: string;
  likesId: string[];
  post: POST;
  props?: string;
  userPost?: boolean;
}

export type addLike = {
  added_at?: firebase.firestore.Timestamp;
  description: string;
  images: string[];
  allImages: string[];
  name: string;
  postId: string;
  likesId?: string;
  uid?: string;
}
