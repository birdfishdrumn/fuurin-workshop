import React from "react"



import {FooterWrapper,FooterContainer,FooterNav,Privacy} from "./style"
import { getIsSignedIn } from "reducks/users/userSlice";
import logo from "assets/img/icons/logo2.png"
import {useSelector,useDispatch} from "react-redux"
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import {push} from "connected-react-router"
import PhoneIcon from '@material-ui/icons/Phone';



const Footer = () => {
	const date = new Date()
	const year = date.getFullYear()
  const isSignedIn = useSelector(getIsSignedIn)
  const dispatch = useDispatch()
  return (

    <FooterWrapper>



		<FooterNav>
        <li onClick={()=>dispatch(push("/help"))}>ヘルプ</li>
         <li onClick={()=>dispatch(push("/terms"))}>利用規約</li>
          <li onClick={()=>dispatch(push("/policy"))}>プライバシーポリシー</li>

         <li onClick={()=>dispatch(push("/workshopkit"))}>体験キットのご購入</li>
			</FooterNav>
<FooterNav>
        <li><TwitterIcon style={{ fontSize: "30px" }}/></li>
         <li><InstagramIcon  style={{ fontSize: "30px" }}/></li>

			</FooterNav>


      <div className="center" >
          <img src={logo} alt="ec" width="128px" onClick={() => dispatch(push("/"))} />
    </div>

 		<Privacy>

				<p>{year} &copy; 篠原まるよし風鈴 All Rights Reserved.</p>
        </Privacy>

</FooterWrapper>
  )







}
export default Footer
