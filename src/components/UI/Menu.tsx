import React, { useCallback } from 'react'
import { useDispatch } from "react-redux";
import {dialogOpenAction} from "reducks/dialog/dialogSlice"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components";
import Share from "./Share";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FlagIcon from '@material-ui/icons/Flag';

const ShareWrapper = styled.div`
margin-bottom:5px;
`

type Props = {
  url?: string
  type: string;
  deleteComment?: (comId: string) => void
  id?: string;
  content?: {} | string;
}


const MenuButton: React.FC<Props> = ({ url, type, id, deleteComment,content }) => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  },[setAnchorEl]);

  return (
    <ShareWrapper>
      <IconButton onClick={handleClick}>
        {type === "report" && < MoreHorizIcon />}
        {type === "comment" && < MoreHorizIcon />}
        {type === "share" && <ShareIcon />}
      </IconButton>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {type === "share" &&
            <Share url={url} handleClose={handleClose}/>
            }
            {type === "comment" &&
             <MenuItem onClick={()=>deleteComment(id)}>
              コメントを削除
              </MenuItem>
            }
            {type === "report" &&
              <MenuItem onClick={() => dispatch(dialogOpenAction({ type: "report", title: "違反の報告", id: id,content:content}))}>
              <FlagIcon/>違反を報告
            </MenuItem>
            }
      </Menu>
   </ShareWrapper>
  )
 }
export default MenuButton
