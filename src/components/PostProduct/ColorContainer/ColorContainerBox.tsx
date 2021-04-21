import React from 'react'
import IconButton from "@material-ui/core/IconButton"
import { ColorContainer, Color, ColorBox } from "./style";
import { BoldText } from "assets/GlobalLayoutStyle"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { COLORS } from "types/colors";
interface PROPS {
  color: COLORS;
  board?: boolean;
}


const ColorContainerBox:React.FC<PROPS> = ({ color,board }) => {

  return (
       <div key={color.id}>
      <BoldText color={"dimgray"} min sub>{color.colorTitle}</BoldText>
      <ColorContainer>
                  <ColorBox>
                    <Color color={color.color1} size={color.quantity1} />
                    </ColorBox>
                  <p style={{ fontSize: "30px" }}>+</p>
                  <ColorBox>
                    <Color color={color.color2} size={color.quantity2} />
                    </ColorBox>
        {color.color3 &&
          <>
                    <p style={{ fontSize: "30px" }}>+</p>
                    <ColorBox>
                      <Color color={color.color3} size={color.quantity3} />
                      </ColorBox>
          </>
        }
                  <p style={{ fontSize: "30px" }}>=</p>
                  <ColorBox>
                    <Color color={color.resultColor} size={"50"} />
                    </ColorBox>
      </ColorContainer>
                </div>
  )
}

export default ColorContainerBox
