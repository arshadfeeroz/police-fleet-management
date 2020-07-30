import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from "@material-ui/core/Avatar";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import blue from "@material-ui/core/colors/blue";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    width: '60px',
    height: '60px',
    marginRight: theme.spacing(2)
  },
  h6: {
    margin: 0
  },
  flex: {
    display: 'flex'
  },
  spacing2: {
    margin: '0 10px'
  },
  formGroup: {
    marginRight: theme.spacing(2),
    display: 'flex'
  },
  label: {
    fontSize: '12px'
  },
  value: {
    fontSize: '12px'
  },
  fontBlue: {
    color: blue[500]
  },
  statusEmailContainer: {
    paddingTop: '5px',
    display: 'flex'
  },
  vehicleInfo: {
    marginLeft: theme.spacing(2),
  },
  vehicle: {
    marginTop: '5px',
    color: blue[500]
  },
  startDate: {
    marginRight: theme.spacing(2),
    marginTop: '5px',
    display: 'flex'
  },
  btnConatiner: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center'
  }
}));

const DriverDetailsBrief = ({ data }) => {
  const classes = useStyles();
  const driverInfo = data && data.driverDetails ? data.driverDetails : {};
  const personalInfo = driverInfo.personalInfo || {};
  const assignedVehicle = driverInfo.assignedVehicle || {};
  // console.log(driverInfo, data);
  return (
    <Grid xs={12}>
      <Paper className={classes.root}>
        <Grid container >
          <Grid className={classes.container} item>
            <Avatar className={classes.avatar} alt="Remy Sharp">
              <AssignmentIndIcon fontSize="large" />
            </Avatar>
            <div>
              <Typography variant="h6" className={classes.h6}>{personalInfo.name}</Typography>
              <div className={classes.flex}>
                <span className={classes.formGroup}>
                  <Typography className={classes.label} variant="caption">EmpId&nbsp;-&nbsp;</Typography>
                  <Typography className={classes.value} variant="subtitle2">{driverInfo.empId}</Typography>
                </span>
                <span className={classes.formGroup}>
                  <Typography className={classes.label} variant="caption">Location&nbsp;-&nbsp;</Typography>
                  <Typography className={classes.value} variant="subtitle2">Bangalore City</Typography>
                </span>
              </div>
              <div className={classes.statusEmailContainer}>
                <Typography variant="body2">{driverInfo.status}</Typography>
                <Typography className={classes.spacing2} variant="subtitle2">-</Typography>
                <Typography variant="body2">{driverInfo.allotmentGroup}</Typography>
                <Typography className={classes.spacing2} variant="subtitle2">-</Typography>
                <Typography className={classes.fontBlue} variant="body2">{personalInfo.email}</Typography>
              </div>
            </div>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item className={classes.vehicleInfo}>
            <Typography className={classes.label} variant="caption">Assigned Vehicle</Typography>
            <Typography className={classes.vehicle} variant="subtitle2">{assignedVehicle.name} - {assignedVehicle.regNumber}</Typography>
            <span className={classes.startDate}>
              <Typography className={classes.label} variant="caption">Start Date&nbsp;-&nbsp;</Typography>
              <Typography className={classes.value} variant="subtitle2">{assignedVehicle.startDate}</Typography>
            </span>
          </Grid>
          <Grid className={classes.btnConatiner} item>
            <span>
              <Button variant="contained" color="primary">Edit</Button>
            </span>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default DriverDetailsBrief;