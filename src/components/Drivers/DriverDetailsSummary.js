import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { DRIVER_TABLE_FIELDS_MAP } from '../../constants/drivers';

const DriverDetailsSummary = ({ details, onBack, onSubmit }) => {
  return (
    <Grid container spacing={3}>
      {details && Object.keys(DRIVER_TABLE_FIELDS_MAP).map(field => (
        <Grid item xs={12} sm={12}>
          <Grid container xs={12} sm={12} spacing={3}>
            <Grid item xs={5} sm={5}>{DRIVER_TABLE_FIELDS_MAP[field]}</Grid>
            <Grid item xs={5} sm={5}>{details[field]}</Grid>
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12} sm={12} spacing={4}>
        <Button onClick={onBack} variant="contained" color="primary" style={{ marginRight: '20px' }}>Back</Button>
        <Button onClick={onSubmit} variant="contained" color="primary">Confirm</Button>
      </Grid>
    </Grid>
  )
}

export default DriverDetailsSummary;