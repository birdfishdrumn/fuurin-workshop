import React, { useState,useCallback } from "react";
import logo from "assets/img/icons/logo2.png";
import { useSelector,useDispatch } from "react-redux";
import { getIsSignedIn } from "reducks/users/userSlice";
import { useHistory } from "react-router-dom";
import { BoldText } from "assets/GlobalLayoutStyle";
import { ConfirmModal } from "components/UI/index";
import {HeaderMenus,ClosableDrawer} from "./index"
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { dialogOpenAction } from "reducks/dialog/dialogSlice";
import { push } from "connected-react-router";
import styled from "styled-components";

const Logo = styled.div`
margin-top:-12px;
`

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  menuBar: {
    backgroundColor: "#fff",
    color: "#444"
  },
  toolbar: {
    margin: "0 auto",
    maxWidth: 1024,
    width: "100%"
  },
  iconButtons: {
    margin: "0 0 0 auto"
  },
  outlined: {
    padding: "0px 5px !important",
    margin: "10px 3px 0px 3px",
    fontWeight: "bold",
    color: "white",
    height: "30px",
    fontSize: "0.9rem"
  },
  loginButton: {
    marginLeft: "auto"
  },
  search: {
    marginTop: "7px"
  }
});

const Header: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isSignedIn = useSelector(getIsSignedIn);
  const history = useHistory();
  const [open, setOpen] = useState<boolean>(false);


  const handleDrawerToggle = useCallback((event: any) => {
    if (event.type === "keydown" || (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(!open)
  }, [setOpen, open]);

  return (
   <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuBar}>
        <Toolbar className={classes.toolbar}>
          <Logo onClick={() =>isSignedIn  ? history.push("/timeline") : history.push("/")}>
            {/* <img src={logo} alt="ec" width="128px" /> */}
            <BoldText pointer style={{marginTop:"10px"}}>ふうりん体験</BoldText>
          </Logo>
          {isSignedIn ? (
            <div className ={classes.iconButtons}>
              <HeaderMenus handleDrawerToggle={handleDrawerToggle}/>
            </div>
          )
            :
            (
              <>
                <div className={classes.loginButton}>

                  <IconButton className={classes.search}>
                    <SearchIcon style={{fontSize:"30px"}}onClick={ ()=>dispatch(push("/search"))}/>
                  </IconButton>

                  <Button className={classes.outlined} color="primary" variant="contained" onClick={() => dispatch(dialogOpenAction({ title: "アカウントの登録", type: "signup" }))} >
                    新規登録
                  </Button>
                  </div>
                  <ConfirmModal />
          </>
            )
        }
        </Toolbar>
      </AppBar>
      <ClosableDrawer open={open} onClose={handleDrawerToggle} />
    </div>
  )
}

export default Header
