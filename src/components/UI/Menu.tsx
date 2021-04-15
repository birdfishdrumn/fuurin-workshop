import React,{useCallback} from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components";
import Share from "./Share";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const ShareWrapper = styled.div`
margin-bottom:5px;
`

type Props = {
  url?: string
  type: string;
  deleteComment?: (comId: string) => void
  id?: string;
}


const MenuButton:React.FC<Props> = ({ url,type,id,deleteComment}) => {
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
        {type === "comment" ? <MoreHorizIcon /> : <ShareIcon />}
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
      </Menu>
   </ShareWrapper>
  )
 }
export default MenuButton
