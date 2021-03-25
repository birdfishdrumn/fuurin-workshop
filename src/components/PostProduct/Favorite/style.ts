import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

export const FavoriteStyle = styled(FavoriteBorderIcon)`

color:${props =>(props.isActive && "red")};
padding-right:0 !important;
  margin-right: 10px;
  margin-bottom:3px;
`
export const FavoriteCount = styled.span`

    font-size: 1.1rem;
    margin-right: 8px;
    display:inline-block;
`
export const FavoriteWrapper = styled.div`
padding-bottom: 5px;
`

export const FavoriteText = styled.span`
margin-bottom:-8px;
`
