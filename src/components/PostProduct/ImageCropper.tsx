import React, { useState, useEffect,useCallback } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../firebase";
import { makeStyles,withStyles,WithStyles,createStyles, Theme   } from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloseIcon from '@material-ui/icons/Close';
import {
  Typography,
  Box,

  LinearProgress,
  Dialog,
  Divider,
  DialogContent,
  DialogActions,
//  DialogTitle,
  Backdrop
} from "@material-ui/core";
import { PrimaryButton } from "components/UI";
import loadImage from 'blueimp-load-image';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import IconButton from "@material-ui/core/IconButton";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate"
import ImagePreview from "./ImagePreview";

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      // width:"600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      // border: "2px solid #000",
      // boxShadow: theme.shadows[5],

      padding: theme.spacing(2,0)
    },
    content: {
      padding:0,
    }
  })
);



const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(3),
      width:"100%"
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });


export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

interface PROPS {
  images: { [key: string]: string }[]
  setImages:React.Dispatch<React.SetStateAction<{[key:string]:string}[]>>
  all?: boolean;
}


const UpLoadTest:React.FC<PROPS> = ({ images, setImages,all }) => {
   const theme = useTheme();
 const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [image, setImage] = useState<string>("");

  // const [Images, setImages] = useState("");
  const [error, setError] = useState<string>("");
  const [progress, setProgress] = useState<number>(100);

  const classes = useStyles(); //Material-ui
  const [cropper, setCropper] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);

  const [openCircularProgress, setOpenCircularProgress] = useState<boolean>(false); //処理中みたいモーダル
// 画像を切り取る前の処理
  const handleImage = (e: any) => {
    setError("");
    try {

      e.preventDefault();
      let files;
      if (e.dataTransfer) {
        files = e.dataTransfer.files;
      } else if (e.target) {
        files = e.target.files;
      }
      const reader:any = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(files[0]);
      setOpen(true);
      e.target.value = null; //ファイル選択された内容をクリアする（クリアしないと同じファイルが編集できない）
    } catch (e) {
      e.target.value = null;
      setError("画像の切り取りをキャンセルまたは失敗しました");
      setOpen(false);
    }
  };

  const getCropData = async (e) => {
    e.preventDefault();
    if (typeof cropper !== "undefined" ) {
      //デフォルトのPNGはファイルサイズが大きいのでjpegにする
      let imagedata: any = await cropper.getCroppedCanvas().toDataURL("image/jpeg");
      //console.log(imagedata); //バイナリーが見たい人は出力すると見れます
        // 小さい画像に変換

             const canvas = await loadImage(imagedata, {
                maxWidth: 1000,
                canvas: true,
             });

         const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const N=16;
        const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n)=>S[n%S.length]).join('')

      // アップロード処理
      console.log("アップロード処理");
      canvas.image.toBlob((imagedata) => {
         const storageRef = storage.ref("images/test/"); //どのフォルダの配下に入れるかを設定
      const imagesRef = storageRef.child(fileName); //ファイル名

      console.log("ファイルをアップする行為");
      // const upLoadTask = imagesRef.put(imagedata, "data_url");
        const upLoadTask = imagesRef.put(imagedata)

      console.log("タスク実行前");
      setOpenCircularProgress(true);

      upLoadTask.on(
        "state_changed",
        (snapshot) => {
          console.log("snapshot", snapshot);
          const percent =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(percent + "% done");
          setProgress(percent);
        },
        (error) => {
          console.log("err", error);
          setError("ファイルアップに失敗しました。" + error);
          setProgress(100); //実行中のバーを消す
          setOpen(false);
          setOpenCircularProgress(false);
        },
        () => {
          // setImages("");
          upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("File available at", downloadURL);
            // setImages(downloadURL);
            const newImage={id:fileName,path:downloadURL}
                setImages((prevState => [...prevState,newImage]));
            setOpen(false);
            setOpenCircularProgress(false);
          });
        }
      );
      },"image/jpeg")



    }
    return;
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCircularProgressClose = () => {
    setOpenCircularProgress(false);
  };

      const deleteImage = useCallback(async (id) => {
        const ret = window.confirm('この画像を削除しますか？')
        if (!ret) {
            return false
        } else {
            const newImages = images.filter(image => image.id !== id)
            setImages(newImages);
            return storage.ref('images/test/').child(id).delete()
        }
    }, [images])
  return (
    <div>
      upload
      {error && <div>{error}</div>}
      <h2>

      </h2>


                   <IconButton >
                    <label>
                        <AddPhotoAlternateIcon />
                        <input className="u-display-none" type="file" id="image" onChange={handleImage}/>
                    </label>
      </IconButton>

       <div>
            <div className="p-grid__list-images" >

                {images.length > 0 ? (
                    images.map(image => <ImagePreview delete={deleteImage} id={image.id} path={image.path} key={image.id} all={all}  />))
                 : <div className="center border gray"><AddPhotoAlternateIcon /><p>こちらに画像が表示されます</p></div>
                }
            </div>
            {/* <div className="u-text-right">
          <span>{images.length > 0? "作品画像を追加する"　: "作品画像を登録する"}</span>
                <IconButton className={classes.icon}>
                    <label>
                        <AddPhotoAlternateIcon />
                        <input className="u-display-none" type="file" id="image" onChange={e => uploadImage(e)}/>
                    </label>
                </IconButton>
            </div> */}
        </div>
      <Dialog
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
          fullScreen={fullScreen}
           maxWidth="xl"
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <div className={classes.paper}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            画像の切り抜き
          </DialogTitle>
          <Divider/>
           <DialogContent className={classes.content}>
          <Cropper
            style={{ height: 450, width: "100%" }}
            initialAspectRatio={1}
            aspectRatio={all ? 3/6 : 1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            guides={true}
            minCropBoxHeight={150}
            minCropBoxWidth={150}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            />
            </DialogContent>
          <Divider/>
          <DialogActions>
               <button
            // variant="contained"
            // size="large"

            // color="primary"
            // label="画像を切り取る"
              onClick={getCropData}

          >切り取り</button>



          </DialogActions>

        </div>
      </Dialog>
      <Dialog
        className={classes.modal}
        open={openCircularProgress}
        onClose={handleCircularProgressClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <div className={classes.paper} style={{ textAlign: "center" }}>
          <div>Loading</div>
          {progress !== 100 && <LinearProgressWithLabel value={progress} />}
        </div>
      </Dialog>
    </div>
  );
};

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
export default UpLoadTest;