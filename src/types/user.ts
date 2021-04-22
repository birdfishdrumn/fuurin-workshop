import firebase from 'firebase/app';

export type USER = {
  uid: string;
  username: string;
  avatar: string;
  isSignedIn: boolean;
  role: string;
  email: string;
  list: string[];
  likes: string[];
  commentId?: string[];
  profile: string;
  url: string;
  created_at: firebase.firestore.Timestamp;
  updated_at?: firebase.firestore.Timestamp;
  firstLogin?: boolean;
  twitter: string;
  instagram: string;
};
