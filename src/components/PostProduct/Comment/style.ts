import styled from "styled-components"
import MessageIcon from "@material-ui/icons/Message"

export const PostComment = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  margin: 1px;
  max-width: 100%;
`
export const PostCommentIcon = styled(MessageIcon)`
  margin-top: 25px;
  color: grey;
  cursor: pointer;
`
export const PostCommentLength = styled.span`
   color: grey;
   margin-left: 15px;
   margin-bottom: 50px;

`
  export const PostCommentUser = styled.span`
 font-weight: 500;
  font-size: 10px;
  color: black;
  margin-right: 12px;
`


export const PostCommentText = styled.span`
    font-size: 15px;
  color: black;
  margin-right: 10px;
  `

export const PostCommentForm = styled.div`
  margin: 40px;
  position: relative;
  display: flex;
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

// .post_buttonDisable {
//   display: none;
// }
