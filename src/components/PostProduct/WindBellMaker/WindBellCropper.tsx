import React, { useState, memo } from 'react';
import { storage } from 'firebase/index';
import { PrimaryButton, HelpButton, EventButton } from 'components/UI/index';
import loadImage from 'blueimp-load-image';
import Cropper from 'react-cropper';
import { SvgContainer, Svg, ImagePallet, Flex, Image } from './style';
import { pathData } from './pathData';
import { Title, IconFlex, BoldText } from 'assets/GlobalLayoutStyle';
import 'cropperjs/dist/cropper.css';
import IconButton from '@material-ui/core/IconButton';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { makeStyles, withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  Typography,
  Box,
  LinearProgress,
  Dialog,
  Divider,
  DialogContent,
  DialogActions,
  Backdrop,
} from '@material-ui/core';
import { PathItem } from 'types/windBellMaker';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      // width:"600px",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 0),
    },
    content: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      padding: 0,
      width: '600px',
    },
    button: {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      fontWeight: 'bold',
      //  color:"white"
    },
    title: {
      padding: 0,
    },
    cutButton: {
      position: 'absolute',
      right: theme.spacing(8),
      top: theme.spacing(-2),
    },
  })
);

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      display: 'flex',
      padding: '0 10px',
      width: '100%',
      position: 'relative',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: '-10px',
      color: 'white',
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

      <div className={classes.closeButton}>
        <HelpButton noneRightSpace name="写真の撮り方" type="windBellMaker" />
      </div>
    </MuiDialogTitle>
  );
});

interface PROPS {
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  pathItem: PathItem;
  setPathItem: React.Dispatch<React.SetStateAction<PathItem>>;
}

const WindBellCropper: React.FC<PROPS> = memo(
  ({ imageUrl, setImageUrl, pathItem, setPathItem }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles(); //Material-ui
    const [image, setImage] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [progress, setProgress] = useState<number>(100);
    const [cropper, setCropper] = useState<any>();
    const [check, setCheck] = useState<boolean>();
    const [open, setOpen] = useState<boolean>(false);
    const [openCircularProgress, setOpenCircularProgress] = useState<boolean>(false); //処理中モーダル

    const handleImage = (e) => {
      setError('');
      try {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
          files = e.dataTransfer.files;
        } else if (e.target) {
          files = e.target.files;
        }
        const reader: any = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
        setOpen(true);
        e.target.value = null; //ファイル選択された内容をクリアする（クリアしないと同じファイルが編集できない）
      } catch (e) {
        e.target.value = null;
        setError('画像の切り取りをキャンセルまたは失敗しました');
        setOpen(false);
      }
    };

    const getCropData = async (e) => {
      e.preventDefault();
      if (typeof cropper !== 'undefined') {
        //デフォルトのPNGはファイルサイズが大きいのでjpegにする
        let imagedata: any = await cropper.getCroppedCanvas().toDataURL('image/jpeg');

        // 小さい画像に変換

        const canvas = await loadImage(imagedata, {
          maxWidth: 1000,
          canvas: true,
        });

        const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const N = 16;
        const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
          .map((n) => S[n % S.length])
          .join('');

        // @ts-ignore
        canvas.image.toBlob((imagedata: any) => {
          const storageRef = storage.ref('images/test/'); //どのフォルダの配下に入れるかを設定
          const imagesRef = storageRef.child(fileName); //ファイル名
          // const upLoadTask = imagesRef.put(imagedata, "data_url");
          const upLoadTask = imagesRef.put(imagedata);

          setOpenCircularProgress(true);

          upLoadTask.on(
            'state_changed',
            (snapshot) => {
              const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(percent + '% done');
              setProgress(percent);
            },
            (error) => {
              setError('ファイルアップに失敗しました。' + error);
              setProgress(100); //実行中のバーを消す
              setOpen(false);
              setOpenCircularProgress(false);
            },
            () => {
              setImageUrl('');
              upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                const newImage = { id: fileName, path: downloadURL };

                setImageUrl(downloadURL);
                setOpenCircularProgress(false);
                window.location.href = '#cut';
              });
            }
          );
        }, 'image/jpeg');
      }
      return;
    };

    const handleClose = (): void => {
      setOpen(false);
      setCheck(false);
    };

    const handleCircularProgressClose = (): void => {
      setOpenCircularProgress(false);
    };

    const checkOpen = (): void => {
      setOpen(true);
      setCheck(true);
    };

    return (
      <div>
        {error && <div>{error}</div>}

        <div className="module-spacer--medium" />

        <BoldText>完成したらスクリーンショットで保存しよう！</BoldText>

        <div className="module-spacer--medium" />

        <IconFlex>
          <div>
            <IconButton className={classes.button}>
              <label>
                <AddAPhotoIcon style={{ fontSize: '40px' }} />
                <input className="u-display-none" onChange={handleImage} type="file" id="image" />
              </label>
            </IconButton>
            <BoldText>投稿</BoldText>
          </div>
          {imageUrl.length ? (
            <div>
              <IconButton className={classes.button} onClick={() => checkOpen()}>
                <label>
                  <DoneOutlineIcon style={{ fontSize: '40px' }} />
                </label>
              </IconButton>
              <BoldText>確認</BoldText>
            </div>
          ) : (
            <></>
          )}
        </IconFlex>
        <div></div>
        <Dialog
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          fullScreen={fullScreen}
          maxWidth="md"
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <div className={classes.paper}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              <Title min style={{ marginLeft: '10px' }}>
                画像の切り抜き
              </Title>
              <div className={classes.cutButton}>
                {!check && (
                  <IconButton onClick={getCropData} style={{ cursor: 'pointer' }}>
                    <img
                      alt="切り抜く"
                      src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2F%E3%81%AF%E3%81%95%E3%81%BF%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B4%A0%E6%9D%90%209%20(1).svg?alt=media&token=eb6c19e6-e6c8-476e-873f-129276aae954"
                      style={{ width: '50px', margin: '0 0 20px 0' }}
                    />
                  </IconButton>
                )}
              </div>
            </DialogTitle>

            <Divider />

            <DialogContent className={classes.content}>
              {!check && (
                <Cropper
                  style={{ height: 450, width: '100%' }}
                  initialAspectRatio={1}
                  aspectRatio={5 / 4.15}
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
              )}
              <div className="center">
                <div className="module-spacer--medium" />

                <Title min id="cut">
                  切り取った画像
                </Title>
                <SvgContainer>
                  <div>
                    <svg width={0} height={0} style={{ position: 'absolute', top: 0, left: 0 }}>
                      <clipPath id="clip03">
                        <path id="べた塗り_1" data-name="べた塗り 1" d={pathItem.path} />
                      </clipPath>
                    </svg>
                    <Svg width={200} height={170} viewBox={pathItem.viewBox}>
                      {/* @ts-ignore */}
                      {imageUrl && (
                        <image
                          xlinkHref={imageUrl}
                          id="img1"
                          width="100%"
                          height="100%"
                          style={{ marginRight: '20px' }}
                          preserveAspectRatio="xMidYMid slice"
                          clipPath="url(#clip03)"
                        />
                      )}
                    </Svg>
                  </div>
                </SvgContainer>
                <div style={{ height: '40vh' }} />
                <BoldText>切り抜く形</BoldText>

                <div className="module-spacer--small" />

                <Flex shape>
                  {pathData.map((p) => (
                    <ImagePallet
                      key={p.path}
                      onClick={() =>
                        setPathItem({
                          path: p.path,
                          viewBox: p.viewBox,
                        })
                      }
                    >
                      <Image svg src={p.img} />
                    </ImagePallet>
                  ))}
                </Flex>
              </div>
            </DialogContent>

            <Divider />

            <DialogActions>
              <PrimaryButton label="完了" onClick={handleClose} />
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
            timeout: 500,
          }}
        >
          <div className={classes.paper} style={{ textAlign: 'center' }}>
            <div>Loading</div>
            {progress !== 100 && <LinearProgressWithLabel value={progress} />}
          </div>
        </Dialog>
      </div>
    );
  }
);

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
export default WindBellCropper;
