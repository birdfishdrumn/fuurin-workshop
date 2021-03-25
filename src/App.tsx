import React,{useState,useEffect} from "react"

import Router from "./Router"
import "./assets/reset.css"
import "./assets/style.css"
import { Footer,BottomNavigator} from "./components/Footer"
import { Header } from "./components/Header"
import { Loading,ScrollTop,Snackbar} from "./components/UI"
import Auth from "./Auth";
import { Main  } from "assets/GlobalLayoutStyle";
const App = () => {
  return (
    <Loading>
      <Header />
      <ScrollTop>
        <Main>
          <Router />
               <Snackbar/>
        </Main>
      </ScrollTop>


        <Auth notUseEffect>
        <BottomNavigator />
        <div className="mobile_only">
         <Footer />
        </div>

        </Auth>
      </Loading>
  )

}

export default App;
