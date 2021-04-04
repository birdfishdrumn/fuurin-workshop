import React,{useState,useCallback,useEffect} from "react"
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles,createStyles} from '@material-ui/core/styles';
import {push} from "connected-react-router";
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "../../reducks/users/operations";
import Avatar from "@material-ui/core/Avatar"
import SearchIcon from "@material-ui/icons/Search";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HelpIcon from '@material-ui/icons/Help';
import HttpsIcon from '@material-ui/icons/Https';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import { db } from "../../firebase";
import { getIsSignedIn, getUsername, getUserAvatar } from "reducks/users/userSlice";
import BrushIcon from '@material-ui/icons/Brush';
import { useHistory } from "react-router-dom";
// import {getUserRole} from "../../reducks/users/selectors";
// import { FilterSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
    createStyles({
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: 256,
                flexShrink: 0,
            }
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar, //appbarとtoolbarをセットで使うstyle
        drawerPaper: {
            width: 256,
        },
        searchField: {
            alignItems: 'center',
            display: 'flex',
            marginLeft: 32
        }
    }),
);
interface PROPS {

  onClose: any
  container?: any
  open: boolean

}


interface FILTER {
func: (event: any, path: string) => void;
  label: string;
  id: string;
  value: string
}

const ClosableDrawer: React.FC<PROPS> = (props) => {
  const classes = useStyles()
  const { container } = props;
  const dispatch = useDispatch();
  const isSignedIn = useSelector(getIsSignedIn);
  const avatar = useSelector(getUserAvatar)
   const username = useSelector(getUsername)
  const history = useHistory()
    const selectMenu = (event: any, path: string) => {
    history.push(path)
    // 選択したらドロワーが閉じる
    props.onClose(event,false)
}


  const menus = [
       { func: selectMenu, label: "検索", icon: <SearchIcon />, id: "search", value: "/search" },
    { func: selectMenu, label: "作品登録", icon: <AddCircleIcon />, id: "register", value: "/posts/edit" },
     { func: selectMenu, label: "絵付け道場", icon: <BrushIcon />, id: "paint", value: "/dojo" },
        { func: selectMenu, label: "お気に入りリスト", icon: <FavoriteBorderIcon />, id: "history", value: "/likes"},
    { func: selectMenu, label: "プロフィール", icon: <PersonIcon />, id: "profile", value: "/user/mypage" },

    { func: selectMenu, label: "体験キットのご購入", icon: <ShoppingCartIcon />, id: "workshop", value: "/workshopkit" },
    { func: selectMenu, label: "ヘルプ", icon: <HelpIcon />, id: "help", value: "/help" },
    { func: selectMenu, label: "利用規約", icon: <MenuBookIcon />, id: "terms", value: "/terms" },
                           { func: selectMenu, label: "プライバシーポリシー", icon: <HttpsIcon />, id: "policy", value: "/policy" },
  ]


  return (
    <nav className ={classes.drawer}>
      <Drawer
        container={container}
        variant="temporary" //出したり閉じたり
        anchor="right" //右から出てくる。
        open={props.open}
        onClose={(e) => props.onClose(e,false)}
        classes={{ paper: classes.drawerPaper }}
        ModalProps = {{keepMounted: true}} //スマホ表示の際にドロワーのパフォーマンスが上がる
      >
        <div
          onClick={(e: any): any=> props.onClose(e,false)}
          onKeyDown={(e:  React.KeyboardEvent<HTMLDivElement>): any =>props.onClose(e)}
        >

          <Divider />
                   <List><ListItem>
            <ListItemIcon>
                   <Avatar src={avatar} aria-label="recipe"/>
            </ListItemIcon>
            <ListItemText>
              ようこそ、{username}さん！
            </ListItemText>
          </ListItem>


          </List>
           <Divider />
          <List>
            {menus.map(menu => (
              <ListItem button key={menu.id} onClick={(e) => menu.func(e, menu.value)}>
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary = {menu.label} />
              </ListItem>
            ))}
            <ListItem button key="logout" onClick={() => dispatch(signOut())}>
              <ListItemIcon>
                   <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />

            </ListItem>
          </List>


</div>
</Drawer>
    </nav>
  )
}

export default ClosableDrawer
