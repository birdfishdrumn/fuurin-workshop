import React,{useEffect,useState,useCallback} from 'react'
import { SectionWrapping, Title, Text, SimpleGrid, BackgroundWhite, BoldText } from "assets/GlobalLayoutStyle"
import {db,FirebaseTimestamp} from "firebase/index"
import { cautionData, knackData } from "./cautionData"
import { COLORS } from "types/colors"
import { useDispatch, useSelector } from "react-redux";
import {getUserId} from "reducks/users/userSlice"
import styled from "styled-components"
import {PrimaryButton} from "components/UI"
import {snackbarOpenAction} from "reducks/snackbar/snackbarSlice"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from "@material-ui/core/IconButton"
import CircularProgress from '@material-ui/core/CircularProgress';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import firebase from "firebase/app"
import ForwardIcon from '@material-ui/icons/Forward';
import {ColorContainerBox} from "components/PostProduct/index"

const ColorWrapper = styled.div`
  display:flex;
  flex-wrap: wrap;
  >div{
  flex-basis:50%;
  }
  @media(max-width:768px){
    flex-direction:column;
  }
`

const ColorBoard = styled.div`
   background-image:url("https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/tanzaku%2FEe9d0Zhcp5foKJMP?alt=media&token=d7ec1f69-a8d7-4f2f-a8e3-ccc158d5d200");
    border-radius:30px;
    box-shadow: 0 0px 10px rgba(0,0,0,0.2);
max-width: 370px; /* 幅を指定する */
width:100%;
padding:20px;
margin:0 auto;

`


const SliderWrapper = styled.div`
 scroll-snap-type: x mandatory;
 /* position:relative; */
    width: 100%;
    overflow-x: scroll;
    display: flex;
    -webkit-overflow-scrolling: touch; /* スマホ対応のため必須 */
    >div{
          /* scroll-snap-align: center; */
    height: 100%;
    width: 90% !important;
    scroll-snap-align: start;
    flex: none;
    @media(max-width:768px){
     margin:0px;
         width: 100% !important;
    }
    }
`

const PalletWrapper = styled.div`
  display:flex;
  padding:20px;
   align-items:center;
  flex-wrap: ${props => (!props.scroll && "wrap")};
    ${props => props.scroll && `
   @media(max-width:767px){
     flex-wrap:row;
    overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
   };
   `};

 >div{
   margin:${props=>(props.noneMargin ?  "0" :"12px")};
 };
`


const PalletBackground = styled.div`
  background-image:url("https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/tanzaku%2FEe9d0Zhcp5foKJMP?alt=media&token=d7ec1f69-a8d7-4f2f-a8e3-ccc158d5d200");
  border-radius:30px;
    box-shadow: 0 0px 10px rgba(0,0,0,0.2);
    position:fixed;
    z-index:999 ;
    bottom: 10px; /* 基準の位置を画面の一番下に指定する */
right: 10px; /* 基準の位置を画面の一番右に指定する */
max-width: 660px; /* 幅を指定する */
width:100%;
  @media(max-width:767px){
    right: 0px;
     bottom: 35px; /
  }
`

const ColorContainer = styled.div`
  display:flex;
  align-items:center;
    ${props => props.scroll && `
     @media(max-width:767px){
     display: inline-block;
     };
    `};
`

const ColorBox= styled.div`
 width:50px;
 height:auto;
`


const Color = styled.div`
  background:${props => (props.color)};
  width:${props=>(props.size)}px;
  height:${props=>(props.size)}px;
  /* height:50px; */
  border-radius:50%;
   box-shadow: inset 0 0 5px 5px white;
  ${props => (props.color === "white" && `
  box-shadow: 1px 1px 5px 1px gray;
  width:40px;
  height:40px;
  `
)};
   margin:0 auto;
   ${props=>props.pointer && `cursor:pointer`};

`
const ColorBackGround = styled(BackgroundWhite)`
@media(max-width:768px){
  padding:5px;
}
`

const WorkshopCaution = () => {
  const [colors, setColors] = useState<COLORS[]>([])
  const [pallet, setPallet] = useState([])
   const [selectColor,setSelectColor] = useState<any>("")

  const uid = useSelector(getUserId)
  const timestamp = FirebaseTimestamp.now()
  const palletRef = db.collection("users").doc(uid).collection("pallet")

  const dispatch = useDispatch()

  useEffect(() => {
    db.collection("color").orderBy("colorType", "asc").limit(30).get().then((snapshot) => {
      const list = []
      snapshot.forEach((doc) => {
        list.push(doc.data())
      })
      setColors(list)

    })

  }, [])


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


   const batch = db.batch();
  const resetPallet = async() => {
     const palletSnapshot = await palletRef
       .get()
        palletSnapshot.docs.forEach((palletDoc: any) => {
        batch.delete(palletDoc.ref);
        });

       await batch.commit();


  }
  const deleteColor = (id) => {
    palletRef.doc(id).delete()
  }

  const fetchColor = async(id) => {
    const colorRef = await db.collection("color").doc(id)
    colorRef.get().then((snapshot) => {
      const data = snapshot.data()
      setSelectColor(data)
      console.log(data)
    })
  }

  const naturalColorData = [
    {
      id: "red",
      colorTitle: "赤",
      resultColor:"red"
    },
       {
      id: "blue",
      colorTitle: "青",
      resultColor:"blue"
    },
          {
      id: "yellow",
      colorTitle: "黄色",
      resultColor:"yellow"
    },
             {
      id: "green",
      colorTitle: "緑",
      resultColor:"#32cd32"
    },
                {
      id: "pink",
      colorTitle: "ピンク",
      resultColor:"#FF69B4"
    },
                   {
      id: "white",
      colorTitle: "白",
      resultColor:"white"
    },
                      {
      id: "black",
      colorTitle: "黒",
      resultColor:"black"
    },
  ]

  console.log(pallet)
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
      <BoldText><ForwardIcon style={{ fontSize: "40px",marginBottom:"-10px",marginRight:"10px" }} />右にスライドできます</BoldText>
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
