import React, { useEffect, useState, memo } from 'react';
import clsx from 'clsx';
import firebase from 'firebase/app';
import {
  SvgContainer,
  Svg,
  ImageContainer,
  ImagePallet,
  Flex,
  Image,
  StyledText,
  StyleProps,
  Color,
} from './style';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { TextInput } from 'components/UI/index';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import WindBellCropper from './WindBellCropper';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';
import TreeView from '@material-ui/lab/TreeView';
import Label from '@material-ui/icons/Label';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { PrimaryButton } from 'components/UI/index';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';
import { db } from 'firebase/index';
import Button from '@material-ui/core/Button';
import { WINDBELLMAKERTYPE } from 'types/windBellMaker';

let drawerWidth = 165;

if (window.matchMedia('(min-width: 768px)').matches) {
  drawerWidth = 250;
} else {
  drawerWidth = 165;
}

type Props = StyleProps | any;

const NormalText: React.FC<Props> = (props) => {
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
  })
);

function StyledTreeItem(props: StyledTreeItemProps) {
  const classes = useTreeItemStyles();
  const { bgColor, color, labelInfo, labelText, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
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

  drawer: {
    [theme.breakpoints.down('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
      padding: theme.spacing(0),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -170,
    },
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

interface STRIP {
  title: string;
  category: string;
  created_at: firebase.firestore.Timestamp;
  images: {
    path: string;
    id: string;
  };
}

// ---------------------ここからがコンポーネント---------------------------

const WindBellMakerDrawer: React.FC<WINDBELLMAKERTYPE> = memo(
  ({
    textLength,
    strip,
    setStrip,
    pathItem,
    windBellImage,
    setPathItem,
    setWindBellImage,
    wishText,
    inputWishText,
    uploadImage,
    setBackground,
  }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [textColor, setTextColor] = useState<string>('default');
    const [patterns, setPatterns] = useState<STRIP[]>([]);
    const [textFont, setTextFont] = useState<string>('default');

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    useEffect(() => {
      setPathItem({
        path: pathItem.path,
        viewBox: pathItem.viewBox,
      });
    }, [setPathItem]);

    // 短冊の非同期処理
    useEffect(() => {
      db.collection('tanzaku')
        .get()
        .then((snapshot) => {
          const list = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            list.push(data);
          });
          setPatterns(list);
        });
    }, []);

    const flowerList: STRIP[] = patterns.filter((pattern) => {
      return pattern.category === '花柄';
    });

    const washiList: STRIP[] = patterns.filter((pattern) => {
      return pattern.category === '和紙・布';
    });

    const wagaraList: STRIP[] = patterns.filter((pattern) => {
      return pattern.category === '和柄';
    });

    const classicList: STRIP[] = patterns.filter((pattern) => {
      return pattern.category === 'クラシック';
    });

    const woodList: STRIP[] = patterns.filter((pattern) => {
      return pattern.category === '木目調';
    });

    const backgroundList: STRIP[] = patterns.filter((pattern) => {
      return pattern.category === '背景';
    });

    return (
      <div className={classes.root}>
        <CssBaseline />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div />
          <div className="center">
            <SvgContainer>
              <div>
                <svg width={0} height={0} style={{ position: 'absolute', top: 0, left: 0 }}>
                  <clipPath id="clip01">
                    <path id="べた塗り_1" data-name="べた塗り 1" d={pathItem.path} />
                  </clipPath>
                </svg>
                <Svg width={200} height={137} viewBox={pathItem.viewBox}>
                  {/* @ts-ignore */}
                  {windBellImage && (
                    <image
                      xlinkHref={windBellImage}
                      width="100%"
                      height="100%"
                      style={{ marginRight: '20px', boxShadow: '2px 2px' }}
                      preserveAspectRatio="xMidYMid slice"
                      clipPath="url(#clip01)"
                    />
                  )}
                </Svg>
              </div>
              {/* 短冊 */}
              <div>
                <svg width={0} height={0} style={{ position: 'absolute', top: 0, left: 0 }}>
                  <clipPath id="clip02">
                    <path
                      id="べた塗り_1"
                      data-name="べた塗り 1"
                      d="M266,0q-4,456.954-8,914L6,910,0,2,115,1q0.5,21,1,42c2.346,9.019,7.321,18.181,10,26-11.51,6.675-10.854,22.038,1,28,2.553,1.284,9.323,3.671,13,1,6-1.823,6.291-6.162,10-10,0.121-6.531-.918-10.427-2-15-2.377-1.449-4.615-4.962-7-6-6.887-3-6.633,1.727-11-5-9-11.176-8-40.536-8-61Z"
                    />
                    {/* @ts-ignore */}
                  </clipPath>
                </svg>
                <Svg width={200} height={285} viewBox="0 0 266 914">
                  {windBellImage && (
                    <image
                      xlinkHref={strip}
                      width="100%"
                      height="100%"
                      style={{ marginRight: '20px', boxShadow: '2px 2px' }}
                      preserveAspectRatio="xMidYMid slice"
                      clipPath="url(#clip02)"
                    />
                  )}
                </Svg>
              </div>
              <ImageContainer>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/fuurin_maker%2Fkirinuki_plane_last.png?alt=media&token=5a2accb2-1f37-4e0d-9610-021e768c9c7a"
                  alt="風鈴"
                />
              </ImageContainer>

              {/*  風鈴の願い事*/}
              <NormalText textstyle={textColor} fontstyle={textFont} textLength={textLength}>
                {wishText.slice(0, 48)}
              </NormalText>
            </SvgContainer>
            <WindBellCropper
              pathItem={pathItem}
              setPathItem={setPathItem}
              imageUrl={windBellImage}
              setImageUrl={setWindBellImage}
            />
          </div>
          <PrimaryButton label="短冊を変える" onClick={handleDrawerOpen} />

          <div className="module-spacer--medium" />

          <TextInput
            fullWidth={true}
            label={'願い事'}
            multiline={true}
            required={true}
            onChange={inputWishText}
            rows={5}
            value={wishText}
            type={'text'}
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
          {/* ここからドロワーメニューの内容 */}
          <TreeView
            aria-label="gmail"
            className={classes.treeRoot}
            defaultExpanded={['']}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
          >
            <StyledTreeItem nodeId="1" labelText="和紙・布">
              <Flex>
                {washiList.map((item) => (
                  <ImagePallet key={item.title} onClick={() => setStrip(item.images.path)}>
                    <Image src={item.images.path} />
                  </ImagePallet>
                ))}
              </Flex>
            </StyledTreeItem>
            <StyledTreeItem nodeId="2" labelText="和柄">
              <Flex>
                {wagaraList.map((item) => (
                  <ImagePallet key={item.title} onClick={() => setStrip(item.images.path)}>
                    <Image src={item.images.path} />
                  </ImagePallet>
                ))}
              </Flex>
            </StyledTreeItem>
            <StyledTreeItem nodeId="3" labelText="クラシック">
              <Flex>
                {classicList.map((item) => (
                  <ImagePallet key={item.title} onClick={() => setStrip(item.images.path)}>
                    <Image src={item.images.path} />
                  </ImagePallet>
                ))}
              </Flex>
            </StyledTreeItem>
            <StyledTreeItem nodeId="4" labelText="花柄">
              <Flex>
                {flowerList.map((item) => (
                  <ImagePallet key={item.title} onClick={() => setStrip(item.images.path)}>
                    <Image src={item.images.path} />
                  </ImagePallet>
                ))}
              </Flex>
            </StyledTreeItem>
            <StyledTreeItem nodeId="5" labelText="木目調">
              <Flex>
                {woodList.map((item) => (
                  <ImagePallet key={item.title} onClick={() => setStrip(item.images.path)}>
                    <Image src={item.images.path} />
                  </ImagePallet>
                ))}
              </Flex>
            </StyledTreeItem>
            <IconButton>
              <label>
                <PhotoCameraIcon />
                <input className="u-display-none" type="file" id="image" onChange={uploadImage} />
              </label>
            </IconButton>
            <Divider />
            文字のスタイル
            <StyledTreeItem nodeId="6" labelText="書式" labelIcon={Label}>
              <Button onClick={() => setTextFont('Mincho')}>明朝</Button>
              <Button onClick={() => setTextFont('StdN')}>ゴシック体</Button>
            </StyledTreeItem>
            <StyledTreeItem nodeId="7" labelText="文字の色" labelIcon={Label}>
              <Flex>
                <Color color="black" onClick={() => setTextColor('default')} />
                <Color color="white" onClick={() => setTextColor('white')} />
                <Color color="blue" onClick={() => setTextColor('blue')} />
                <Color color="pink" onClick={() => setTextColor('pink')} />
              </Flex>
            </StyledTreeItem>
            <Divider />
            背景
            <StyledTreeItem nodeId="8" labelText="背景" labelIcon={Label}>
              <Flex>
                {backgroundList.map((item) => (
                  <ImagePallet key={item.title} onClick={() => setBackground(item.images.path)}>
                    <Image src={item.images.path} />
                  </ImagePallet>
                ))}
              </Flex>
            </StyledTreeItem>
          </TreeView>
          <Divider />
        </Drawer>
      </div>
    );
  }
);

export default WindBellMakerDrawer;
