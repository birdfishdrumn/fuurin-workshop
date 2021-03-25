import React from "react";

import {Paper} from '@material-ui/core'
import {Button} from '@material-ui/core'
import styled from "styled-components"

const CarouselImage = styled.img`
margin:0 auto !important;
text-align:center;
padding:0;
object-fit:cover;
/* width:100%; */
/* @media(min-width:600px){
 width: 600px;
 */


`
const CarouselImageWrapper = styled(Paper)`

text-align: center;
@media(min-width:500px){
 width: 500px;

}

`

const CarouselItem = (props) => {
  return (
    <CarouselImageWrapper style={{boxShadow: "none",background:"#F5F5F5",margin:"0 auto"}}>

<CarouselImage className = "slider-img" src ={props.item.path}/>

    </CarouselImageWrapper>
  )
}


export default CarouselItem
