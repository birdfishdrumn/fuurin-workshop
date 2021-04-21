import React from 'react'
import { WhiteIcon, IconFlex } from "assets/GlobalLayoutStyle"
import Tooltip from '@material-ui/core/Tooltip';
import GridOnIcon from '@material-ui/icons/GridOn';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

interface PROPS {
  setChange: React.Dispatch<React.SetStateAction<boolean>>
  changeSort?: (string) => void;
}

const ImageStyleChangeIcon:React.FC<PROPS> = ({setChange,changeSort}) => {
  return (
    <div>
        <IconFlex>
          {changeSort &&
            <>
              <Tooltip title="新しい準" interactive>
                <li onClick={()=>changeSort("asc")}><WhiteIcon><ArrowDownwardIcon fontSize="large"  /></WhiteIcon></li>
              </Tooltip>
              <Tooltip title="古い順" interactive>
                <li onClick={()=>changeSort("desc")}><WhiteIcon><ArrowUpwardIcon fontSize="large" /></WhiteIcon></li>
              </Tooltip>
            </>
          }
            <Tooltip title="グリッド" interactive>
              <li  onClick={() =>setChange(false) }>
              <WhiteIcon><GridOnIcon fontSize="large" /></WhiteIcon>
              </li>
            </Tooltip>
            <Tooltip title="短冊まで" interactive>
              <li  onClick={() =>setChange(true) }>
              <WhiteIcon ><ViewColumnIcon fontSize="large" /></WhiteIcon>
              </li>
            </Tooltip>
        </IconFlex>

    </div>
  )
}

export default ImageStyleChangeIcon
