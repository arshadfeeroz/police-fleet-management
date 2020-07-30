import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DriverDetailsBrief from './DriverDetailsBrief';
import DriverDetailsTabs from './DriverDetailsTabs';
import reportingLine from '../constant';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw'
  }
}));

export const DriverDetails = ({ match, location }) => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    const id = match.params.empId;
    const details = reportingLine.data.find(item => {
      return id == item.driverDetails.empId;
    });
    console.log(details);
    setDetails(details || {});
  }, [location]);

  return (
    <React.Fragment>
      <DriverDetailsBrief data={details} />
      <DriverDetailsTabs data={details} />
    </React.Fragment>
  );
}

export default DriverDetails;