import React,{useEffect,useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme,Theme, createStyles  } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {SvgContainer,Svg,ImageContainer,ImagePallet,Flex,Image,Text,StyledText,StyleProps,Color} from "./style"
import CssBaseline from '@material-ui/core/CssBaseline';
import {TextInput} from "components/UI/index"
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import WindBellCropper from "./WindBellCropper"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';
import styled from "styled-components"
import Fuurin from "assets/img/src/shape/smart.png"
import PropTypes from 'prop-types';
import TreeView from '@material-ui/lab/TreeView';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ColorFlower from "assets/img/src/stripPattern/colorFlower.jpg"
import Takasi from "assets/img/src/stripPattern/takasistatte.jpg"
import ULOCO from "assets/img/src/stripPattern/ULOCO.png"
import Seigaiha from "assets/img/src/stripPattern/wagara/seigaiha.png"
import Wood from "assets/img/src/stripPattern/wood.jpg"
import Check from "assets/img/src/stripPattern/check.png"
import Momiji from "assets/img/src/stripPattern/Momiji.png"
import {PrimaryButton} from "components/UI/index";
import Taiko from "assets/img/src/stripPattern/Taiko.png"
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

let  drawerWidth = 165;

if (window.matchMedia( "(min-width: 768px)" ).matches) {
      drawerWidth = 250;
} else {
  drawerWidth = 165
}

type Props = StyleProps | any;

const NormalText: React.FC<Props> = props => {
  return <StyledText {...props} />;
};



declare module 'react' {
  interface CSSProperties {
    '--tree-view-color'?: string;
    '--tree-view-bg-color'?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  color?: string;
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
};


const useTreeItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.secondary,
    },
    content: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '&$expanded': {
        fontWeight: theme.typography.fontWeightRegular,
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '&$focused, &$selected, &$selected$focused': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
        color: 'var(--tree-view-color)',
      },
    },
    group: {
      marginLeft: 0,
      '& $content': {
        paddingLeft: theme.spacing(2),
      },
    },
    expanded: {},
    selected: {},
    focused: {},
    label: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
    labelRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0.5, 0, 0.5, 0.5),
    },
    labelIcon: {
      marginRight: theme.spacing(1),
    },
    labelText: {
      fontWeight: 'inherit',
      flexGrow: 1,
    },
  }),
);

interface PROPS {
  pathItem:string;
  windBellImage:string;
  strip:string;

}

function StyledTreeItem(props: StyledTreeItemProps) {
  const classes = useTreeItemStyles();
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        // focused: classes.focused,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
    treeRoot: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },

  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    }
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
      padding: theme.spacing(0),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -170,
    }
  },
  contentShift: {

    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0
  },
}));

export default function PersistentDrawerRight({textLength,strip,setStrip,pathItem,windBellImage,setPathItem,setWindBellImage,wishText,inputWishText}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [textColor,setTextColor] = useState("default")

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setPathItem({
      path: pathItem.path,
      viewBox:pathItem.viewBox
    })
    console.log("@p")
  },[setPathItem])



  return (
    <div className={classes.root}>
      <CssBaseline />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div/>
    <div className="center">
      <SvgContainer>

            <div>
  <svg width={0} height={0} style={{position: 'absolute', top: 0, left: 0}}>
    <clipPath id="clip01">

            <path id="べた塗り_1" data-name="べた塗り 1" d={pathItem.path}/>
    </clipPath>
      </svg>

        <Svg width={200} height={140}  viewBox={pathItem.viewBox}>
          {/* @ts-ignore */}
          {windBellImage &&
              <image xlinkHref={windBellImage} width="100%" height="100%" style={{marginRight:"20px",boxShadow:"2px 2px"}} preserveAspectRatio="xMidYMid slice" clipPath="url(#clip01)" />
          }

            </Svg>


      </div>
 {/* 短冊 */}
       <div>
  <svg width={0} height={0} style={{position: 'absolute', top: 0, left: 0}}>
    <clipPath id="clip02">

            <path id="べた塗り_1" data-name="べた塗り 1" d="M32,0H463c2.128,57.109,8.881,115.333-12,157q-4,8-8,16l-33,12c-11.128-1.122-24.16-10.425-38-3-18.393,9.867-25.331,39.156-28,65,13,9.866,22.165,23.392,36,33,34.123-4.415,47.574-16.38,62-40q-4.5-16.5-9-33l26-11c36.209-44.493,32.7-124.819,23-193L760,5q-22.5,1356.365-45,2713L0,2733Q16,1366.635,32,0Z"/>
          {/* @ts-ignore */}
    </clipPath>
      </svg>

        <Svg width={200} height={295}  viewBox="0 0 760 2733">
          {windBellImage &&
              <image xlinkHref={strip} width="100%" height="100%" style={{marginRight:"20px",boxShadow:"2px 2px"}} preserveAspectRatio="xMidYMid slice" clipPath="url(#clip02)" />
          }

            </Svg>


      </div>


      <ImageContainer>
         <img src={Fuurin} alt="クリッピングサンプル"/>
            </ImageContainer>
       {/*  風鈴の願い事*/}
            <NormalText textstyle={textColor} textLength={textLength}>{wishText.slice(0, 48)}</NormalText>
            {/* 風鈴の願い事 */}
        </SvgContainer>

          <PrimaryButton
          label="風鈴をカスタマイズする"
           onClick={handleDrawerOpen}
          />
     <WindBellCropper pathItem={pathItem} setPathItem={setPathItem} imageUrl={windBellImage} setImageUrl={setWindBellImage} />
        </div>
      {/* {wishText.includes("死ね" || "アホ") && <p>だめです</p>} */}

                   <TextInput
          fullWidth={true}
          label={"願い事"}
          multiline={true}
          required={true}
          onChange={inputWishText}
          rows={5}
          value={wishText}
          type={"text"}
                variant="outlined"
          />

      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
                短冊の模様
        <Divider />

     <TreeView
      aria-label="gmail"
      className={classes.treeRoot}
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
          <StyledTreeItem nodeId="1" labelText="和紙・布" labelIcon={MailIcon} />

          <StyledTreeItem nodeId="2" labelText="和柄" labelIcon={DeleteIcon}>
          <Flex>
                  <ImagePallet onClick={()=>setStrip(ColorFlower)}>
          <Image src={ColorFlower} />

        </ImagePallet>
          <ImagePallet onClick={()=>setStrip(Takasi)}>
          <Image src={Takasi} />

        </ImagePallet>
          <ImagePallet onClick={()=>setStrip(ULOCO)}>
          <Image src={ULOCO} />

        </ImagePallet>
          <ImagePallet onClick={()=>setStrip(Wood)}>
          <Image src={Wood} />

              </ImagePallet>

          <ImagePallet onClick={()=>setStrip(Seigaiha)}>
          <Image src={Seigaiha} />

        </ImagePallet>

        </Flex>
      </StyledTreeItem>
        <StyledTreeItem nodeId="4" labelText="クラシック" labelIcon={MailIcon} />
          <StyledTreeItem nodeId="4" labelText="花柄" labelIcon={Label} />
          <StyledTreeItem nodeId="5" labelText="木目調" labelIcon={Label} />
           <StyledTreeItem nodeId="6" labelText="夏の柄" labelIcon={MailIcon} />
          <Divider />
          文字のスタイル
          <StyledTreeItem nodeId="5" labelText="書式" labelIcon={Label} />
          <StyledTreeItem nodeId="7" labelText="文字の色" labelIcon={Label}>
            <Flex>
             <Color color="black" onClick={() => setTextColor("default")}/>
              <Color color="white" onClick={() => setTextColor("white")}/>
              <Color color="blue" onClick={() => setTextColor("blue")} />
               <Color color="pink" onClick={() => setTextColor("pink")}/>


        </Flex>
                      </StyledTreeItem>
    </TreeView>
        <Divider />

      </Drawer>
    </div>
  );
}
