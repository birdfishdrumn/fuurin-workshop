import React from 'react'
import { SectionWrapping,Title,Text} from "assets/GlobalLayoutStyle"
import styled from "styled-components";
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {AddProductHelp,EdofuurinHelp,FavoriteHelp,ProfileHelp,SearchHelp,WindBellMakerHelp,} from "components/HelpComponents/index"

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));



const HelpDetail = (props) => {
  const classes = useStyles();
    const stateValue = props.location.state
  const [value, setValue] = React.useState(stateValue);

console.log(props.location.state)
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>

      <SectionWrapping>
            <Title>ヘルプ</Title>
     <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
              indicatorColor="primary"
              scrollButtons="on"
          textColor="primary"
          variant="scrollable"
          // scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
              <Tab label="作品の登録の仕方" {...a11yProps(0)} />
               <Tab label="風鈴メイカー" {...a11yProps(5)} />
          <Tab label="プロフィール" {...a11yProps(1)} />
          <Tab label="お気に入りシステム" {...a11yProps(2)} />
          <Tab label="作品の検索" {...a11yProps(3)} />
          <Tab label="江戸風鈴に関して" {...a11yProps(4)} />


        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
         <AddProductHelp/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <WindBellMakerHelp/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProfileHelp/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FavoriteHelp/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SearchHelp/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <EdofuurinHelp/>
      </TabPanel>

          </div>
      </SectionWrapping>
      </div>
  )
}

export default HelpDetail
