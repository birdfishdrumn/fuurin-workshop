import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { db } from "firebase/index";
import { PUSH } from "types/push";
import {MinText,PushWrapper} from "./style"
import Divider from "@material-ui/core/Divider";
import { BoldText } from "assets/GlobalLayoutStyle";
import CircularProgress from '@material-ui/core/CircularProgress';
import { dateToString } from "functions/function";
import { push } from "connected-react-router";


interface PROPS {
  handleClose:()=> void
}

const PushList:React.FC<PROPS> = ({handleClose}) => {
  const dispatch = useDispatch();
  const [pushList, setPushList] = useState<PUSH[]>([]);

  useEffect(() => {
    db.collection("message").orderBy("date", "desc").limit(5).get().then((snapshot) => {
      const list:any = []
      snapshot.forEach((doc) => {
        const data = doc.data()
        list.push(data)
      })
      setPushList(list)
    })
  }, []);

  const changePush = (id) => {
    dispatch(push({
      pathname: `/push/${id}`,
      state: id
    }))
    handleClose();
  };

  return (
      <PushWrapper>
      <MinText padding>お知らせ</MinText>

      <Divider />

      {pushList.length ? pushList.map((push: PUSH) => (
        <div key={push.id} style={{cursor:"pointer"}} onClick={()=>changePush(push.id)}>
          <MinText padding>{push.title}</MinText>
          <BoldText min color={"dimgray"}>{dateToString(push.date.toDate())}</BoldText>
          </div>
      ))
        :
        <CircularProgress color="inherit" style={{ margin:"50px 0" }}/>
    }
      <div style={{height:"25vh"}}/>
      </PushWrapper>
  )
}

export default PushList
