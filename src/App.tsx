import React,{useState,useEffect} from "react"

import Router from "./Router"
import "./assets/reset.css"
import "./assets/style.css"
import { Footer,BottomNavigator} from "./components/Footer"
import { Header } from "./components/Header"
import { Loading,ScrollTop,Snackbar} from "./components/UI"
import Auth from "./Auth";
const App = () => {
  return (
    <Loading>
      <Header />
      <ScrollTop>
        <main className="c-main">
          <Router />
               <Snackbar/>
        </main>
      </ScrollTop>

        <Footer />
        <Auth>
            <BottomNavigator/>
        </Auth>
      </Loading>
  )

}

export default App;
