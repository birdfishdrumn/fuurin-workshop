import React,{useState} from 'react'
import Fuurin from "assets/img/src/shape/smart.png"
import {SvgContainer,Svg,ImageContainer,ImagePallet,Flex,Image} from "./style"
import Flower from "assets/img/src/stripPattern/flowerPettern.jpg"
import {WindBellMakerType} from "types/posts"
import ColorFlower from "assets/img/src/stripPattern/colorFlower.jpg"

// import BlueWave from "assets/img/src/stripPattern/BlueWave.png"
import Taiko from "assets/img/src/stripPattern/Taiko.png"


import WindBellMakerDrawer from './WindBellMakerDrawer'


const WindBellMaker:React.FC<Partial<WindBellMakerType>> = ({textLength,strip,setStrip,pathItem,setPathItem,windBellImage,setWindBellImage,wishText,inputWishText}) => {

// const [pathItem, setPathItem] = useState(false)
  // const [strip, setStrip] = useState("")

  return (
    <div className="center">


      <WindBellMakerDrawer
        textLength={textLength}
      pathItem={pathItem}
        setPathItem={setPathItem}
        setWindBellImage={setWindBellImage}
        windBellImage={windBellImage}
        strip={strip}
        setStrip={setStrip}
        wishText={wishText}
        inputWishText={inputWishText}
        />

    </div>
  )
}

export default WindBellMaker
