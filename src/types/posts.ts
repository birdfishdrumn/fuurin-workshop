import firebase from "firebase/app"



export type Image = {
  images: {
    id: string;
    path: string;
  }
};

type Extension = {
  relation?: boolean;
  changeRelation?: (id: string) => void;
  check?: boolean
  favorite?: boolean;
  change?: boolean
  post?: any
};

export type POST = Extension & {
  category?: string;
  description: string;
  name: string;
  images: { [key: string]: string }[]
  allImages: { [key: string]: string }[]
  username: string;
  likes?: string[];
  avatar: string;
  uid: string;
  likesId?: string;
  tags?: string[];
  updated_at?: firebase.firestore.Timestamp
  created_at?: firebase.firestore.Timestamp
  id?: string
};
