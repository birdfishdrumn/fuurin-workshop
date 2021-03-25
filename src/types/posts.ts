import firebase from "firebase/app"
import * as React from 'react'
export type PathItem ={
  path: string;
  viewBox: string;
}

export type WindBellMakerType = {
  textLength: string;
   dialogOpen: boolean;
  handleClose: () => void;
  windBellImage: string;
  setWindBellImage: React.Dispatch<React.SetStateAction<string>>
  pathItem: PathItem;
  setPathItem: React.Dispatch<React.SetStateAction<PathItem>>;
  strip: string;
  setStrip:React.Dispatch<React.SetStateAction<string>>;

  wishText: string;
  inputWishText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type POST = {

  post?:any
  category?: string;
  description: string;
  name: string;
  images: {[key:string]:string}[]
  // image?: IMAGE;
  allImages: {[key:string]:string}[]
  username: string;
  avatar: string;
  uid: string;
  likesId?: string;
  tags?: string[];
  key?: string;
  change?: boolean
  updated_at?: firebase.firestore.Timestamp
  created_at?: firebase.firestore.Timestamp
  id: string
  relation?: boolean;
  // setId?: React.Dispatch<string>;
   changeRelation?:(id: string) => void;
  check?: boolean
  favorite?: boolean;
}
