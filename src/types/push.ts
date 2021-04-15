import firebase from "firebase/app"

export type PUSH = {
  title: string;
  message: string;
  id: string;
  images?: string;
  date?: firebase.firestore.Timestamp;
};
