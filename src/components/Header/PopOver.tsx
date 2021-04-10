import React from 'react'
import Popover from '@material-ui/core/Popover';
import { PopperWrapper } from "./style"
import PushList from "./PopOverPushList"
import PopOverProfile from "./PopOverProfile"

interface PROPS  {
  open: boolean;
  anchorEl: HTMLButtonElement;
  handleClose: ()=> void;
  id: string;
  type: string;
}


const PopOver:React.FC<PROPS> = ({open,anchorEl,handleClose,id,type}) => {
  return (
    <div>
                 <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <PopperWrapper>
          {type === "push" &&
               <PushList  handleClose={handleClose}/>
          }
              {type === "profile" &&
             <PopOverProfile handleClose={handleClose}/>

          }

      </PopperWrapper>
      </Popover>
    </div>
  )
}

export default PopOver
