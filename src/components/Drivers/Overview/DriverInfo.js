import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  heading: {
    borderBottom: '1px solid #ddd'
  },
  formgroup: {
    display: 'flex',
    fontSize: '13px',
    paddingBottom: '20px'
  },
  label: {
    minWidth: '130px'
  }
}));

export const DriverInfo = ({ data }) => {
  const classes = useStyles();
  const driverInfo = data && data.driverDetails ? data.driverDetails : {};
  const personalInfo = driverInfo.personalInfo || {};
  const hierarchy = data && data.hierarchy ? data.hierarchy : [];
  const otherDetails = hierarchy[hierarchy.length - 1] || {};
  return (
    <Paper className={classes.root}>
      <Typography className={classes.heading} variant="h6">Information</Typography>
      <Grid container style={{ paddingTop: '10px' }}>
        <Grid item style={{ width: '50%' }}>
          <div className={classes.formgroup}>
            <span className={classes.label}>Email Id</span>
            <span>{driverInfo.empId}</span>
          </div>
          <div className={classes.formgroup}>
            <span className={classes.label}>Phone</span>
            <span>+91 {personalInfo.phone}</span>
          </div>
          <div className={classes.formgroup}>
            <span className={classes.label}>Date of Birth</span>
            <span>{personalInfo.dob}</span>
          </div>
          <div className={classes.formgroup}>
            <span className={classes.label}>Designation</span>
            <span>{otherDetails.designation}</span>
          </div>
          <div className={classes.formgroup}>
            <span className={classes.label}>Email Id</span>
            <span>{personalInfo.email}</span>
          </div>
          <div className={classes.formgroup}>
            <span className={classes.label}>Location</span>
            <span>{otherDetails.location}</span>
          </div>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item style={{ width: '40%', padding: '0 10px' }}>
          <div style={{ paddingBottom: '15px' }}>Address</div>
          <div>{personalInfo.address}</div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default DriverInfo;