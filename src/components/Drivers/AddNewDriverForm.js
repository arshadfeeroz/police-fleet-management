import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddNewDriverForm = ({ data, save }) => {
  const [driverDetails, setDriverDetails] = useState(data);

  const setData = (data) => setDriverDetails({ ...driverDetails, ...data });

  const validate = () => { }
  const onNext = () => save(driverDetails);

  return (
    <form onSubmit={onNext}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="id"
            name="id"
            label="Employee Id"
            fullWidth
            value={driverDetails.id}
            onChange={e => { setData({ id: e.target.value }); }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="name"
            name="name"
            label="Driver Name"
            fullWidth
            value={driverDetails.name}
            onChange={e => { setData({ name: e.target.value }); }}
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="dob"
            name="dob"
            label="Date of Birth"
            fullWidth
            value={driverDetails.dob}
            onChange={e => { setData({ dob: e.target.value }); }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="vehicalAssigned"
            name="vehicalAssigned"
            label="Vehical Assigned"
            fullWidth
            value={driverDetails.vehicalAssigned}
            onChange={e => { setData({ vehicalAssigned: e.target.value }); }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="jobLocation"
            name="jobLocation"
            label="City/Area"
            fullWidth
            value={driverDetails.jobLocation}
            onChange={e => { setData({ jobLocation: e.target.value }); }}
          />
        </Grid>
        <Grid item xs={12} sm={12} spacing={4}>
          <Button type="submit" variant="contained" color="primary">Next</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default AddNewDriverForm;