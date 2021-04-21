import React,{useEffect,useState} from 'react'
import { SectionWrapping, Title, Text,MinText, BoldText,ScrollFlex} from "assets/GlobalLayoutStyle";
import {
   ColorWrapper, SliderWrapper, ColorBackGround
} from "components/PostProduct/ColorContainer/style";
import { db } from "firebase/index";
import { COLORS } from "types/colors";
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";
import ForwardIcon from '@material-ui/icons/Forward';
import { ColorContainerBox,ColorCommentary} from "components/PostProduct/index";
import { pictureListData,imagePictureList } from "./colorData";
import AnchorLink from "react-anchor-link-smooth-scroll";

const useStyles = makeStyles((theme) => ({
  avatar: {
    zIndex:10,
    opacity: 0.7,
    margin:"15px",
    width: theme.spacing(12),
    height: theme.spacing(12),
      "&:hover": {
           opacity: 1
      }
  },
}));

const WorkshopCaution = () => {
  const classes = useStyles();
  const [colors, setColors] = useState<COLORS[]>([]);
  const [picture,setPicture] = useState<string>("")
  const colorRef = db.collection("color").orderBy("colorType", "asc");


  let query = colorRef.where("colorType", "!=", "0").limit(30);
  query = picture ? colorRef.where("pictureList", "array-contains", picture) : query;

  useEffect(() => {
    query.get().then((snapshot) => {
      const list = []
      snapshot.forEach((doc) => {
        list.push(doc.data())
      })
      setColors(list)
    })
  }, [query]);

  return (

    <SectionWrapping>
      <Title>色の作り方</Title>
      <Text left>こちらでは色の作り方を紹介します。配色リストの絵をクリックすると、その柄で使う色を確認することができます。</Text>

      <div className="module-spacer--medium" />
      <Title min>配色リスト(柄編)</Title>
      <ScrollFlex>
        {pictureListData.map((picture) => (
          <div key={picture.name}>
            <AnchorLink style={{color:"dimgray"}}href="#list">
                <Avatar
                  src={picture.img}
                  aria-label="recipe"
                  className={classes.avatar}
                  onClick={() => setPicture(picture.name)}
                />
            </AnchorLink>
            <MinText nonePadding>{picture.name}</MinText>

          </div>
        ))}

      </ScrollFlex>
      <Title min>配色リスト(イメージ編)</Title>
       <ScrollFlex>
        {imagePictureList.map((picture) => (
          <div key={picture.name}>
              <AnchorLink style={{color:"dimgray"}}href="#list">
                <Avatar
                  src={picture.img}
                  aria-label="recipe"
                  className={classes.avatar}
                  onClick={() => setPicture(picture.name)}
                />
              </AnchorLink>
            <MinText nonePadding>{picture.name}</MinText>

          </div>
        ))}
      </ScrollFlex>

      <div className="module-spacer--medium" />

      <BoldText id="list"><ForwardIcon style={{ fontSize: "40px", marginBottom: "-10px", marginRight: "10px" }} />右にスライドできます
      </BoldText>

      <div className="module-spacer--small" />

      <SliderWrapper>
        <ColorBackGround>
          {picture &&
            <>
            <BoldText style={{padding:"10px 0"}}>{picture}に使う色</BoldText>
            <Divider />
              <div className="module-spacer--small" />
            </>
          }

        <ColorWrapper>
            {colors.length ? colors.slice(0,10).map((color) => (
              <ColorContainerBox key={color.id} color={color}/>
            ))
              :
              <CircularProgress color="inherit" style={{ margin:"50px auto !important",width:"20px !important"}}/>
          }
        </ColorWrapper>
        </ColorBackGround>
        {colors.length > 10 &&
          <ColorBackGround>
            <ColorWrapper>

              {colors.length ? colors.slice(10, 20).map((color) => (
                <ColorContainerBox  key={color.id} color={color} />
              ))
                :
                <CircularProgress color="inherit" style={{ margin: "50px auto !important", width: "20px !important" }} />
              }
            </ColorWrapper>
          </ColorBackGround>
        }
        {colors.length > 20 &&
          <ColorBackGround>
            <ColorWrapper>

              {colors.length ? colors.slice(20, 30).map((color) => (
                <ColorContainerBox  key={color.id} color={color}/>
              ))
                :
                <CircularProgress color="inherit" style={{ margin: "50px auto !important", width: "20px !important" }} />
              }
            </ColorWrapper>
          </ColorBackGround>
        }

      </SliderWrapper>
       <ColorCommentary picture={picture} />

        <div style={{height:"10vh"}}/>
    </SectionWrapping>
  )
}

export default WorkshopCaution
