import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {db,FirebaseTimestamp} from "firebase/index"
import { makeStyles } from "@material-ui/core/styles";
import {PUSH} from "types/push"
import { BackgroundWhite,Title,BoldText,Text,SectionWrapping } from "assets/GlobalLayoutStyle";
import { dateToString ,returnCodeToBr} from "functions/function";
import CircularProgress from '@material-ui/core/CircularProgress';
// import { DragDropContext, Droppable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: 512,
        width: '100%'
  },
  listIcon: {
    margin:"auto",
    display: "flex",
    flexFlow: "row",
    justifyContent:"center",
    listStyle: "none",
    color:"grey",
    '& > li': {
      margin:10
    },
  },

}));




const PushList = (props) => {
  const classes = useStyles();
  const [pushItem, setPushItem] = useState <Partial<PUSH>>({
    title: "",
    message: "",
    images: "",
    date:FirebaseTimestamp.now()
  })
  const id = props.location.state
  console.log(id)
  useEffect(() => {
    db.collection("message").doc(id).get().then((snapshot) => {
      const data = snapshot.data()

      setPushItem(data)
    })

  }, [id])



  return (
    <div>
      <SectionWrapping>
        <Title>お知らせ</Title>

        <div className="module--space-medium" />
        <BackgroundWhite>
          {pushItem ?
            <>
              <Title>{pushItem.title}</Title>
              <BoldText right>{dateToString(pushItem.date.toDate())}</BoldText>
              <div className="module-spacer--medium" />
          <Text left >{returnCodeToBr(pushItem.message)}</Text>
            </>
            :
             <CircularProgress color="inherit"  style={{ marginTop: "20vh" }}/>
          }
          <div className="module-spacer--medium" />
          </BackgroundWhite>


        </SectionWrapping>
      </div>
  )
}

export default PushList
