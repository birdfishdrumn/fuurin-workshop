import React, { useCallback } from 'react';
import { WINDBELLMAKERTYPE } from "types/windBellMaker";
import { storage } from "firebase/index";
import { useDispatch } from "react-redux";
import { showLoadingAction, hideLoadingAction } from "reducks/loadingSlice";
import loadImage from 'blueimp-load-image';
import WindBellMakerDrawer from './WindBellMakerDrawer';


const WindBellMaker:React.FC<Partial<WINDBELLMAKERTYPE>> = ({textLength,strip,setStrip,pathItem,setPathItem,windBellImage,setWindBellImage,wishText,inputWishText}) => {
const dispatch = useDispatch()
  const uploadImage = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(showLoadingAction("uploading..."))
    const file: any = event.target.files;
    let blob = new Blob(file, { type: "image/jpeg" });
    const canvas = await loadImage(blob, {
      maxWidth: 600,
      canvas: true,
    });
    //
    const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N = 16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n) => S[n % S.length]).join('')
    //  @ts-ignore
    canvas.image.toBlob((blob: any) => {
      const uploadRef = storage.ref('tanzaku').child(fileName);
      const uploadTask = uploadRef.put(blob);
      uploadTask.then(() => {
        // Handle successful uploads on complete
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const newImage = { id: fileName, path: downloadURL };
          setStrip(newImage.path)
          dispatch(hideLoadingAction())
        });
      }).catch(() => {
        // dispatch(hideLoadingAction())
      });
    }, "image/jpeg")
  }, [setStrip]);


  return (
    <div className="center">
      <WindBellMakerDrawer
        textLength={textLength}
        pathItem={pathItem}
        setPathItem={setPathItem}
        setWindBellImage={setWindBellImage}
        windBellImage={windBellImage}
        strip={strip}
        setStrip={setStrip}
        wishText={wishText}
        inputWishText={inputWishText}
        uploadImage={uploadImage}
        />
    </div>
  )
}

export default WindBellMaker
