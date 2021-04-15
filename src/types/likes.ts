import firebase from "firebase/app"
import { POST } from "./posts"

type Extension = {
  detail?: boolean;
  id?: string;
  post?: POST;
  likesPostsArray?: string[]; //いいねした作品のId
};

export type FAVORITE = Extension & {
  added_at?: firebase.firestore.Timestamp;
  description: string;
  images: { [key: string]: string }[]
  allImages: { [key: string]: string }[]
  name: string;
  postId: string;
  likesId: string;
  uid?: string;
};
