import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import DriversList from '../components/Drivers/DriversList';
import AddNewDriver from '../components/Drivers/AddNewDriver';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getDriversList } from '../store/actions';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px'
  }
}));

function DriversListContainer(props) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const driversList = useSelector(state => state.drivers.list)

  const onClickAddnew = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  useEffect(() => {
    dispatch(getDriversList());
  }, []);

  return (
    <div>
      <div className={classes.header}>
        <Typography variant="h5">Drivers List</Typography>
        <Button variant="contained" color="primary" onClick={onClickAddnew}>+Add new</Button>
      </div>
      <DriversList list={driversList}/>
      {isOpen && <AddNewDriver handleClose={closePopup} />}
    </div>
  );
}

export default DriversListContainer;
