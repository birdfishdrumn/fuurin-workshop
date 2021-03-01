import React,{useEffect} from 'react'
import { useLocation } from "react-router-dom";
const ScrollTop = ({ children }) => {
    const { pathname } = useLocation();
  useEffect(() => {
        window.scrollTo(0, 0)
  }, [pathname]);
  return (
    <>
    {children}
    </>
  )
}

export default ScrollTop


// import React from 'react'

// export default class ScrollToTopOnMount extends React.Component {
//   componentDidMount(prevProps) {
//     window.scrollTo(0, 0)
//   }

//   render() {
//     return null
//   }
