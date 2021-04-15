import firebase from "firebase/app"

export type COMMENT = {
  avatar: string;
  comId?: string;
  id: string;
  uid: string;
  postId?: string;
  reply?: boolean;
  text: string;
  timestamp: firebase.firestore.Timestamp;
  username: string;
};
