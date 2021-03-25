import styled from "styled-components"

export const FooterWrapper = styled.footer `

    color: dimgray;
  margin:auto 0;
    background-image: none;
    background-size: cover;
    background-color: #fff;
position:relative;
 /* padding-bottom: 20px;←footerの高さ */
    box-sizing: border-box;
`

export const FooterContainer = styled.div `



  margin:0 auto;
   position: absolute;
   bottom:0;
`



export const FooterNav = styled.ul `


    justify-content: center;
    list-style: none;

    display:flex;
    font-size:1rem;
     text-align:center;
    color: dimgray;
    padding-top:5px;
   @media(max-width:1024px){
     font-size:0.85rem;
   }
     @media(max-width:912px){
    flex-direction:column;
    text-align:center;
    font-size:1rem;
    margin-bottom:10px;

   }
    >li{
   margin:15px;
  cursor:pointer;
      @media(max-width:1024px){
        margin-bottom:6px;
   }
     @media(max-width:912px){
   padding-bottom:5px;
   border-bottom:1px solid white;
   margin:10px 0;
   }
   }



`

export const Privacy = styled.div `


cursor: pointer;
    text-align:center;

      padding:20px 0 20px 0;
  @media(max-width:767px){
    flex-direction:column;

    margin:0 auto;

  }
  >p{
    margin:15px;
    font-size:0.8rem;
  }
`
