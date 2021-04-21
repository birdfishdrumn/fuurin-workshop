import styled from "styled-components"
import MessageIcon from "@material-ui/icons/Message"

export const PostComment = styled.div`
>div:first-child{
    display: flex;
}
  position:relative;
  align-items: center;
  word-break: break-all;
  margin: 10px 0;
  margin-left:${props=>(props.reply && "25px")};
  padding:10px 0;
  min-width: 300px;
  width:100%;
  justify-content:space-between;
  @media(max-width:450px){
   min-width:100%;
  }

`
export const PostCommentIcon = styled(MessageIcon)`
  margin-right: 10px;
  margin-bottom:-10px;
  color: grey;
  cursor: pointer;
  font-size:30px;

`
export const PostCommentLength = styled.span`
   color: grey;
   margin-left: 15px;
   margin-bottom: 50px;

`
  export const PostCommentUser = styled.span`
 font-weight: 500;
  font-size: 0.9rem;
  color: black;
  margin-right: 0px;
`
export const CommentTime = styled.span`
    color: grey;
    font-size: 0.9rem;
    margin-left: 5px;

`



export const PostCommentText = styled.p`
    font-size: 15px;
  color: black;
  margin-top:5px;
  margin-left: 25px;
  text-align:left;
  `

export const PostCommentForm = styled.div`
  margin: 40px;
  position: relative;
  display: flex;
  width:100%;
  margin-left:0 !important;
`

  export const PostCommentInput= styled.input`
   padding: 10px;
  outline: none;
  width: 100%;
  border-color: cornflowerblue;
  border-radius: 10px;
  margin-right: 10px;
`

export const PostButton = styled.button`
 border: none;
  color: cornflowerblue;
  background-color: transparent;
  cursor: pointer;
`

export const PostCommentWrapper = styled.div`
	overflow-y: scroll;
	margin: 30px auto 30px;
  background-color:white;
	max-height: 450px;
  padding:10px;
  border-radius:10px;
`

export const DeleteComment = styled.p`
 position:absolute;
 top:0px;
 right:0;
 font-size:0.8rem;
 font-weight:bold;
`
// .post_buttonDisable {
//   display: none;
// }
export const CommentMenu = styled.div`
position:absolute;
top:0;
right:5px;
`
export const CommentPostButton = styled.button`
 ${(props)=> props.comment ? `
     border: none;
    color: cornflowerblue;
    background-color: transparent;
    cursor: pointer;
    `
  :
  `display: none; `}
`
