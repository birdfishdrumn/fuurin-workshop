import React, { useState, useCallback, useEffect,memo} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { TextInput, SelectBox, PrimaryButton,WindBellDialog ,HelpButton} from "components/UI/index";
import { db } from "firebase/index"
import {savePost} from "reducks/posts/operations"
import { TagArea,ImageCropper } from "../components/PostProduct";
import { getUsername, getUserAvatar, getUserId } from "reducks/users/userSlice";
import { errorOpenAction, errorCloseAction, getErrorState } from "reducks/errorSlice"
import {PathItem} from "../types/windBellMaker"
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CircularProgress from '@material-ui/core/CircularProgress';
import Switch from "@material-ui/core/Switch";
import { SectionContainer,Title,BoldText } from 'assets/GlobalLayoutStyle';

interface Categories {
  id: string;
  name: string;
}

interface PROPS {
  dialog?: boolean;
  handleClose: () => void

}

const PostEdit: React.FC<PROPS> = ({ dialog, handleClose }) => {

  let id = dialog ? "" : window.location.pathname.split("/posts/edit")[1];

  if (id) {
    id = id.split("/")[1];
  }
  const dispatch = useDispatch();
  const username = useSelector(getUsername);
  const error = useSelector(getErrorState);
  const avatar = useSelector(getUserAvatar);
  const uid = useSelector(getUserId);
  const [name, setName] = useState<string>(""),
    [description, setDescription] = useState<string>(""),
    [category, setCategory] = useState<string>(""),
    [postUid, setPostUid] = useState<string>(""),
    [tags, setTags] = useState<string[]>([]),
    [wishText, setWishText] = useState<string>(""),
    [dialogOpen, setDialogOpen] = useState<boolean>(false),
    [categories, setCategories] = useState<Categories[]>([]),
    [images, setImages] = useState<{ [key: string]: string }[]>([]),
    [strip, setStrip] = useState<string>(""),
    [windBellImage, setWindBellImage] = useState<string>(""),
    [allImages, setAllImages] = useState<{ [key: string]: string }[]>([]),
    [textLength, setTextLength] = useState<string>(""),
    [pathItem, setPathItem] = useState<PathItem>({
      path: "M688,1C751.719-.152,809.922,9.067,860,21c58.438,13.925,111.4,22.5,162,44q21.495,12.5,43,25c32.74,19.182,66.97,34.722,97,57q21,19.5,42,39c31.81,25.535,66.5,56.454,91,89q21,33.5,42,67,21,32,42,64,7.005,25,14,50,15,56.994,30,114c16.01,75.327-1.79,185.669-17,245q-5.505,25-11,50c-22.11,55.387-56.8,101-90,145-17.76,23.54-35.16,53.59-58,72-38.34,30.9-73.75,67.04-117,93l-53,22q-10.995,7.005-22,14c-18.78,6.38-48.89-17.48-61-21q-14.5-1.005-29-2-12-3.495-24-7-38-1.005-76-2c-21.653-4.11-45.551-8.87-70-13q-19.5-.495-39-1c-37.7-6-84.771-5.64-121-12-26.9-4.72-55.842.96-80-3q-39.5,1.005-79,2-10-4.995-20-10-47.5-1.995-95-4c-18.584,0-68.783,13.64-74,12q-13.5-13.995-27-28c-36.374-16.87-78.458-67.09-103-98q-20.5-23-41-46C48.738,886.724-22.608,719.746,8,553l17-98C63.875,331.132,145.984,222.92,239,153,318.7,93.094,414.887,47.274,524,17c37.419-10.382,77.853-6.178,119-13ZM290,1152c2,0.33,4,.67,6,1C294,1152.67,292,1152.33,290,1152Z",
      viewBox: "0 0 1430 1210"
    }),
    [check, setCheck] = useState<boolean>(false);



  const commentCheck = ():void => {
    setCheck((prev) => !prev);
  };

  const inputName = useCallback(
    (event:React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputDescription = useCallback(
    (event:React.ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value);
           if (event.target.value.length > 280
        ) {
          dispatch(errorOpenAction())
        }else{
          dispatch(errorCloseAction())
        }
    },
    [setDescription]
  );

  // 願い事のイベントハンドラー
  const inputWishText = useCallback(
    (event:React.ChangeEvent<HTMLInputElement>) => {
      setWishText(event.target.value);
       const textLength = event.target.value.length
// 願い事の文字数に合わせて、位置を調整する。
    if (textLength >48) {
      alert("文字は48字以内で入力してください")
      event.preventDefault()
    }
       if (textLength <17) {
      setTextLength("first")
       } else if (16 < textLength  && textLength < 33) {
         setTextLength("second")
       }
       else {
         setTextLength("third")
    }
   if(12> textLength){
         setTextLength("short")
       }
    },
    [setWishText]
  );
  // ---------------風鈴メイカーのダイアログ---------
    const closeDialog = useCallback(():void => {
    setDialogOpen(false);

  },[]);

// 編集時に以前のデータをセットする。
  useEffect(() => {
    if (id !== "") {
      db.collection("posts")
        .doc(id)
        .get()
        .then((snapshot) => {
          const data: any = snapshot.data();
          const tags = data.tags
          setImages(data.images);
          setAllImages(data.allImages);
          setName(data.name);
          setDescription(data.description);
          setCategory(data.category);
          setTags(data.tags)
        }
        )
    }
  }, []);

  // カテゴリー一覧
  useEffect(() => {
    const unSub = db.collection("categories").orderBy("order", "desc").onSnapshot((snapshot: any) => {
      setCategories(
        snapshot.docs.map((doc: any) => ({
          id: doc.data().id,
          name: doc.data().name
        }))
      )
      return () => {
        unSub()
      }
    })
  }, []);

  // 投稿者のuidを取得する
  useEffect(() => {
    if (id) {
      db.collection("posts").doc(id).get().then((snapshot) => {
        const data: any = snapshot.data();
        setPostUid(data.uid)
      })
    }
  }, []);
// 投稿を完了する関数
  const save = () => {
    dispatch(
      savePost(id, name, description, category, images, allImages, username, avatar, uid, tags, check
      ))
    handleClose && handleClose()
  };
  //  投稿者のuidが自分のuidと同じなら編集画面の閲覧が可能
  if ( postUid === uid || !id ) {
    return (
    <div>
        <SectionContainer>
          <HelpButton name="作品の登録" type="register"/>
         <Title>作品の登録・編集</Title>
         <TextInput
          fullWidth={true}
          label={"作品タイトル"}
          multiline={false}
          required={true}
          onChange={inputName}
          rows={1}
          value={name}
              type={"text"}
              variant="outlined"
        />
        <TextInput
          fullWidth={true}
          label={"作品に込めた思い"}
          multiline={true}
          required={true}
          onChange={inputDescription}
          rows={12}
          value={description.slice(0,280)}
              type={"text"}
               variant="outlined"
          />
          {error &&
            <BoldText color={"red"}>
              ⚠️文字は280字以内でお願いします。
            </BoldText>}

        <SelectBox
          label={"カテゴリー"}
          required={true}
          options={categories}
          select={setCategory}
          value={category}
          />
          <div className="module-spacer--medium" />
          <div className="center">
            <BoldText>風鈴本体のみの写真</BoldText>
              <div className="module-spacer--small" />
              <ImageCropper images={images} setImages={setImages}/>
            <div className="module-spacer--medium" />

            <BoldText>風鈴から短冊までの写真</BoldText>
            <HelpButton name="風鈴メイカーの使い方" type="windBellMaker"/>

              <PrimaryButton onClick={() => setDialogOpen(true)} label="風鈴メイカーを使う" />


              <WindBellDialog
              textLength={textLength}
              pathItem={pathItem}
              setPathItem={setPathItem}
              windBellImage={windBellImage}
              setWindBellImage={setWindBellImage}
              dialogOpen={dialogOpen}
              handleClose={
                closeDialog
              }
              strip={strip}
              setStrip={setStrip}
              wishText={wishText}
              inputWishText={inputWishText}
            />

            <div className="module-spacer--medium" />
            {/* --------作品の写真を投稿する。------------*/}
            <ImageCropper images={allImages} setImages={setAllImages} all />
            <div className="module-spacer--medium" />

            <div style={{ textAlign: "left" }}>

              <TagArea tags={tags} setTags={setTags} />

            </div>

            <div className="module-spacer--medium" />

               <FormControl component="fieldset">

            <FormGroup>
            <FormControlLabel
              control={<Switch checked={check} onChange={commentCheck} />}
              label="コメントを非表示にする"
            />
            </FormGroup>
            </FormControl>

            <PrimaryButton
              disabled={name === "" || description==="" || category === "" || images.length === 0  || allImages.length === 0}
              label={"作品を投稿！"}
              onClick={() => save()}
            />
          </div>
       </SectionContainer>
    </div>
  )
  } else {
    return (
      <SectionContainer className="center">
            <CircularProgress color="inherit"  style={{ marginTop: "20vh" }}/>
      </SectionContainer>
    )
  }
}

export default PostEdit
