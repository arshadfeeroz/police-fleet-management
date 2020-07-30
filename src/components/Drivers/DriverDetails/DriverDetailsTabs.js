import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import DriverDetailsOverview from '../Overview';
import ReportingLineComponent from '../ReportingLine/ReportingLine';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '10px'
  },
}));

function DriverDetailsTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static" color="default">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Overview" value="1" />
            <Tab label="Reporting Line" value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="1" style={{ padding: 0 }}>
          <DriverDetailsOverview  data={props.data} />
        </TabPanel>
        <TabPanel value="2">
          <ReportingLineComponent hierarchy={props.data.hierarchy} />
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default DriverDetailsTabs;
