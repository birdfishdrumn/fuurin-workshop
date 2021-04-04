import React,{useState}  from 'react'
import algoliasearch from 'algoliasearch';
import {TextInput} from ".";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {useDispatch} from "react-redux"
import { searchReview } from "../../algolia/algolia";
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';
import SearchIcon from "@material-ui/icons/Search";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import { push } from "connected-react-router";
import styled from "styled-components"

interface Props {
  fullWidth: boolean;
  style?: boolean;
}

const SearchBoxWrapper = styled.div`
position:relative;
`
const SearchResult = styled.div`
margin:0 auto;
text-align:center;
   max-width: 500px;

`

const useStyles = makeStyles((theme) =>
  createStyles({
     root: {
    width: '100%',
    maxWidth: 500,
      backgroundColor: theme.palette.background.paper,
    position: 'absolute',
      overflow: 'auto',
      top: 50,
      // left: 500,
   paddingBottom:0,
   paddingTop:0,
      maxHeight: 300,
      cursor: "pointer",

    },
    searchText: {
       '&:hover': {
         background: "#eee",
      },
    },
    headerMenu: {
         display: 'flex',
      },
        searchField: {
          alignItems: 'center',
          justifyContent: "center",

          //   display: 'flex',
          //   marginRight: 32,
          textAlign: "center",
          //  position: 'relative',
          width: 500,
                 margin:"0 auto",
          // borderRadius:20,
          //   focus:500
            [theme.breakpoints.down("sm")]: {
              textAlign: "center",
              width: "90%",
              margin:"0 auto"
    },
    },



    }),
);
const smStyles =makeStyles((theme) =>
  createStyles({
     root: {
      width: '100%',
      margin:"0 auto",
      maxWidth: "500px",
    textAlign:"center",
      backgroundColor: theme.palette.background.paper,
    position: 'absolute',
      overflow: 'auto',
      top: 50,

   paddingBottom:0,
   paddingTop:0,
      maxHeight: 300,
      cursor: "pointer",
      zIndex: 1,


    },
    searchText: {
       '&:hover': {
         background: "#eee",
      },
    },
    headerMenu: {
         display: 'flex',
      },
        searchField: {
          alignItems: 'center',
          justifyContent:"center",
          //   display: 'flex',
          //   marginRight: 32,
          textAlign: "center",
          //  position: 'relative',
          // width: 800,
          // borderRadius:20,
          //   focus:500
    },



    }),
);

const SearchBox:React.FC<Props> = (props) => {
  const classes = useStyles()
  const sm = smStyles()
    const dispatch = useDispatch()
    const [keyword, setKeyword] = useState<string>("");
  const [search, setSearch] = useState([])
    const inputKeyword = async (event) => {
    setKeyword(event.target.value)
    if (!event.target.value) {
      setSearch([])
    } else {
      const result = await searchReview(event.target.value)
      if (result.hits.length > 0) {
        const search = result.hits.map((hit) => {
          return hit;

        });
        setSearch(search);
            //  setSearch([]);
      } else {
        setSearch([]);
      }
    }
      document.addEventListener('click', e=> {
  setSearch([])
  document.removeEventListener('click',inputKeyword)
})
    };
console.log(search)
  const changePage = (item) => {
    dispatch(push(`/post/${item.id}`))
    setSearch([])
  }

  return (<>
  <SearchBoxWrapper>
    <div className = {classes.searchField} >
               <TextInput
            fullWidth={props.fullWidth} label={"キーワードを入力"} multiline={false} onChange={inputKeyword} variant="outlined" required={false} rows={1} value={keyword} type={"text"}
             InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          ),
        }}
      />

      </div>
      <SearchResult>
    {search.length > 0 && <List className={props.style ? classes.root : sm.root}>
        {search.map((item) => (
             <>
            <ListItem className={classes.searchText} key={item.id} onClick={() => changePage(item)}
            >
               <ListItemText  primary={item.name} />
              <img src={item.images[0].path} width={50}/>
             </ListItem>
            <Divider  component="li" />
            </>
            ))}
        </List>}
        </SearchResult>
      </SearchBoxWrapper>
    </>
  )
}

export default SearchBox
