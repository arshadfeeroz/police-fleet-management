import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import DriverInfo from '../Overview/DriverInfo';
import AssignedIssues from '../Overview/AssignedIssues';
import RenewalReminders from '../Overview/RenewalReminders';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw'
  }
}));

export const DriverDetailsOverview = ({ data }) => {
  return (
    <React.Fragment>
      <Grid container justify="space-between">
        <Grid style={{ padding: '20px 0', flexGrow: 1, marginRight: '30px' }}>
          <DriverInfo data={data} />
        </Grid>
        <Grid style={{ padding: '20px 0', flexGrow: 0.4 }}>
          <RenewalReminders />
          <AssignedIssues />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default DriverDetailsOverview;