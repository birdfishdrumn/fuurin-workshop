import firebase from "firebase/app"

export type LESSON = {
  title: string;
  description: string;
  id: string;
};

export type SLIDE = {
  created_at?: firebase.firestore.Timestamp;
  title: string;
  description: string;
  id: string;
  category?: string;
  number?: number;
  images: {
    id: string;
    path: string;
  }
};
