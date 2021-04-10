import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {db} from "firebase/index"
import { makeStyles } from "@material-ui/core/styles";
import {PUSH} from "types/push"
import {MinText,PushWrapper} from "./style"
import Divider from "@material-ui/core/Divider"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from "react-router-dom";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

// import { DragDropContext, Droppable } from "react-beautiful-dnd";



interface PROPS {
  handleClose:()=> void
}


const PushList:React.FC<PROPS> = ({handleClose}) => {
  const dispatch = useDispatch()
  const history= useHistory()


      const selectMenu = (event: any, path: string) => {
        history.push(path)
         handleClose()
    // 選択したらドロワーが閉じる

}

  const profileMenu = [
    { func: selectMenu, label: "投稿作品", icon: <ImageIcon />, id: "post", value: "/user/post" },
    { func: selectMenu, label: "プロフィールの編集", icon: <PersonIcon />, id: "profile", value: "/user/edit" },
                { func: selectMenu, label: "アカウントの設定", icon: <LockIcon />, id: "account", value: "/user/account" },
  ]



  return (
      <PushWrapper>
      <MinText padding>アカウント</MinText>
      <Divider/>


           <List>
        {profileMenu.map((prof) => (
                   <ListItem button key={prof.id} onClick={(e) => prof.func(e, prof.value)}>
               <ListItemAvatar>
          <Avatar>
            {prof.icon}
          </Avatar>
        </ListItemAvatar>
              <ListItemText primary={prof.label} />

        </ListItem>
         ))}


          </List>


      {/* <div style={{height:"25vh"}}/> */}
      </PushWrapper>
  )
}

export default PushList
