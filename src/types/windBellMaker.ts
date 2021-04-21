import * as React from 'react'

export type PathItem = {
  path: string;
  viewBox: string;
};



export type WINDBELLMAKERTYPE =  {
  textLength: string;
  dialogOpen?: boolean;
  handleClose?: () => void;
  windBellImage: string;
  setWindBellImage: React.Dispatch<React.SetStateAction<string>>
  pathItem: PathItem;
  setPathItem: React.Dispatch<React.SetStateAction<PathItem>>;
  strip: string;
  setStrip: React.Dispatch<React.SetStateAction<string>>;

  wishText: string;
  inputWishText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  uploadImage?: (e: any) => void;
  setBackground?:React.Dispatch<React.SetStateAction<string>>;
};
