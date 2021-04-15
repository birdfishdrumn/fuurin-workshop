import React,{useEffect,useState} from 'react'
import { SectionWrapping, Title, Text, SimpleGrid, BoldText } from "assets/GlobalLayoutStyle";
import { db, FirebaseTimestamp } from "firebase/index";
import { naturalColorData } from "./colorData";
import { COLORS } from "types/colors";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "reducks/users/userSlice";
import {snackbarOpenAction} from "reducks/snackbar/snackbarSlice"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from '@material-ui/core/CircularProgress';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ForwardIcon from '@material-ui/icons/Forward';
import { ColorContainerBox } from "components/PostProduct/index";
import {
  ColorBox, ColorContainer, Color, ColorWrapper, ColorBoard, SliderWrapper,
  PalletWrapper, PalletBackground, ColorBackGround
} from "components/PostProduct/ColorContainer/style";

const WorkshopCaution = () => {
  const dispatch = useDispatch();
  const uid = useSelector(getUserId);
  const timestamp = FirebaseTimestamp.now();
  const palletRef = db.collection("users").doc(uid).collection("pallet");
  const [colors, setColors] = useState<COLORS[]>([]);
  const [pallet, setPallet] = useState([]);
  const [selectColor, setSelectColor] = useState<any>("");

  const batch = db.batch();

  useEffect(() => {
    db.collection("color").orderBy("colorType", "asc").limit(30).get().then((snapshot) => {
      const list = []
      snapshot.forEach((doc) => {
        list.push(doc.data())
      })
      setColors(list)
    })
  }, []);


  useEffect(() => {
    const unSub = palletRef.orderBy("created_at", "asc").limit(15).onSnapshot((snapshot) => {
      const list = []
      snapshot.forEach((doc) => {
        const data = doc.data()
        list.push(data)
      })
      setPallet(list)
    })
    return () => {
      unSub()
    }
  }, []);


  const addFavoriteColor = (colorId, colorTitle, resultColor,) => {
    if (pallet.length < 15) {
      const id = palletRef.doc().id
      db.collection("users").doc(uid).collection("pallet").doc(id).set({
        id: id,
        colorId: colorId,
        colorTitle: colorTitle,
        resultColor: resultColor,
        created_at: timestamp
      }, {
        merge: true
      }).then(() => {
        dispatch(snackbarOpenAction({ text: `${colorTitle}をパレットに追加しました`, type: true }))
      })
    } else {
      alert("これ以上は登録できません")
    }
  };



  const resetPallet = async () => {
    const palletSnapshot = await palletRef
      .get()
    palletSnapshot.docs.forEach((palletDoc: any) => {
      batch.delete(palletDoc.ref);
    });
    await batch.commit();
  };

  // const deleteColor = (id) => {
  //   palletRef.doc(id).delete()
  // };

  const fetchColor = async (id) => {
    const colorRef = await db.collection("color").doc(id)
    colorRef.get().then((snapshot) => {
      const data = snapshot.data()
      setSelectColor(data)
      console.log(data)
    })
  };

  return (

    <SectionWrapping>
      <Title>色の作り方</Title>
      <Text left>こちらでは色の作り方を紹介します。+をクリックしてパレットに色を追加して配色を考えましょう。またパレットにとった色のみを下の木材の上に表示できます。</Text>

      <div className="module-spacer--medium" />

      <ColorBoard>
        {selectColor ?
          <ColorContainerBox color={selectColor} board /> :
          <BoldText>こちらにパレットで選択した色が表示されます。</BoldText>
      }
      </ColorBoard>

      <div className="module-spacer--medium" />

      <ColorBackGround>
        <BoldText>原色一覧</BoldText>
          <PalletWrapper scroll noneMargin>
          {naturalColorData.map((nature) => (
            <ColorContainer scroll key={nature.id}>
                <IconButton onClick={()=>addFavoriteColor(nature.id,nature.colorTitle,nature.resultColor)}>
                    <AddCircleIcon/>
                  </IconButton>
               <ColorBox >
                    <Color color={nature.resultColor} size={"50"} />
                    </ColorBox>
                    </ColorContainer>
           ))}

          </PalletWrapper>

      </ColorBackGround>

      <div className="module-spacer--medium" />

      <BoldText><ForwardIcon style={{ fontSize: "40px", marginBottom: "-10px", marginRight: "10px" }} />右にスライドできます</BoldText>

      <div className="module-spacer--small" />

      <SliderWrapper>
      <ColorBackGround>
        <ColorWrapper>
            {colors.length ? colors.slice(0,10).map((color) => (
                 <ColorContainerBox color={color} addFavoriteColor={addFavoriteColor}/>
            ))
              :
                 <CircularProgress color="inherit" style={{ margin:"50px auto !important",width:"20px !important"}}/>
          }
        </ColorWrapper>
        </ColorBackGround>

          <ColorBackGround>
        <ColorWrapper>

            {colors.length ? colors.slice(10,20).map((color) => (
                <ColorContainerBox color={color} addFavoriteColor={addFavoriteColor}/>
            ))
              :
                 <CircularProgress color="inherit" style={{ margin:"50px auto !important",width:"20px !important"}}/>
          }
        </ColorWrapper>
        </ColorBackGround>

          <ColorBackGround>
        <ColorWrapper>

            {colors.length ? colors.slice(20,30).map((color) => (
                <ColorContainerBox color={color} addFavoriteColor={addFavoriteColor}/>
            ))
              :
                 <CircularProgress color="inherit" style={{ margin:"50px auto !important",width:"20px !important"}}/>
          }
        </ColorWrapper>
        </ColorBackGround>

      </SliderWrapper>


      <PalletBackground>
        <PalletWrapper>
          <IconButton onClick={() => resetPallet()}>
            <RotateLeftIcon style={{fontSize:"50px"}} color="error"/>
                  </IconButton>
        {pallet.length ? pallet.map((item) => (
          <ColorBox key={item.id}   onClick={() => fetchColor(item.colorId)}>
            <Color color={item.resultColor} size={"50"} pointer/>
          </ColorBox>

        ))
          :
          <BoldText>色を組み合わせてみよう😀</BoldText>
          }
          </PalletWrapper>

      </PalletBackground>
        <div style={{height:"10vh"}}/>
    </SectionWrapping>
  )
}

export default WorkshopCaution
