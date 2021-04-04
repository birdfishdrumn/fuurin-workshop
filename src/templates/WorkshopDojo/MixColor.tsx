import React,{useEffect,useState} from 'react'
import {SectionWrapping, Title, Text, SimpleGrid, BackgroundWhite,BoldText} from "assets/GlobalLayoutStyle"
import { cautionData, knackData } from "./cautionData"
import styled from "styled-components"

const ColorWrapper = styled.div`
  display:flex;
  @media(max-width:768px){
    flex-direction:column;
  }

`

const ColorContainer = styled.div`
  display:flex;
`


const Color = styled.div`
  background:${props => (props.color)};
  width:50px;
  height:50px;
  border-radius:50%;
   box-shadow: inset 0 0 5px 5px white;
   margin:5px;
`
const colorData = [{
  color1: "red",
  color2: "green",
  result: "purple"
},
  {
      color1:"green",
  color2: "green",
  result: "purple"
  }

]


const WorkshopCaution = () => {
  return (
    <SectionWrapping>
      <Title>色の作り方</Title>
      <div className="module-spacer--medium" />
      <img src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Fcolormix1.jpeg?alt=media&token=9f5a0c03-e2ba-43e7-a370-c7af6caf8212" />
      <BackgroundWhite>
        <ColorWrapper>
          <div>
      <ColorContainer>
        <Color color={"blue"} />
         <p style={{fontSize:"30px"}}>+</p>
              <Color color={"red"} />
        <p style={{ fontSize: "30px" }}>=</p>
         <Color color={"purple"} />


            </ColorContainer>

              {colorData.map((color) => (
                <ColorContainer>
                     <Color color={color.color1} />
         <p style={{fontSize:"30px"}}>+</p>
        <Color color={color.color2} />
        <p style={{ fontSize: "30px" }}>=</p>
         <Color color={color.result} />
                </ColorContainer>
              ))}




          </div>
                  <div>
      <ColorContainer>
        <Color color={"blue"} />
         <p style={{fontSize:"30px"}}>+</p>
        <Color color={"red"} />
        <p style={{ fontSize: "30px" }}>=</p>
         <Color color={"purple"} />


            </ColorContainer>
            </div>
          </ColorWrapper>
        </BackgroundWhite>

    </SectionWrapping>



  )
}

export default WorkshopCaution
