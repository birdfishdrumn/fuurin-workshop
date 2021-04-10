import styled from "styled-components"

export const DetailWrapper = styled.div`
  margin: 0 auto;
  width: 400px;
 height: auto;
@media(max-width:1024px){
  margin-top:80px;
  width: 90%;
}
`
export const PostTag = styled.ul`
  list-style: none;
    align-items: center;
    display: flex;
    flex-flow: wrap;
  margin:0 40px;

 >li{
  margin:10px;
  background-color: #A4C6FF;
  border-radius: 15px;
  padding: 5px 10px;
  color: grey;
  font-weight: bold;
    cursor: pointer;
}
@media screen and (max-width:575px) {
>li{
  margin:5px;
  background-color: #A4C6FF;
  border-radius: 15px;
  padding: 5px 10px;
  color: grey;
  font-weight: bold;
  font-size:0.8rem;
}
}
  `



// .post_tag
