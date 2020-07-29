import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddNewDriverForm from './AddNewDriverForm';
import DriverDetailsSummary from './DriverDetailsSummary';
import { useDispatch } from 'react-redux';
import { addNewDriver } from '../../store/actions';

const TITLE = { 1: 'Add New Driver', 2: 'Driver Summary' };

const AddNewDriver = ({ handleClose }) => {
  const [step, setStep] = useState(1);
  const [driverDetails, setDriverDetails] = useState({});
  const dispatch = useDispatch();

  const gotoSummary = (data) => { 
    setDriverDetails(data);
    setStep(2); 
  }

  const gotoForm = () => setStep(1);

  const onSubmit = () => { 
    dispatch(addNewDriver(driverDetails)); 
    handleClose(); 
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open>
      <DialogTitle id="form-dialog-title">{TITLE[step]}</DialogTitle>
      <DialogContent>
        {step === 1 && <AddNewDriverForm data={driverDetails} save={gotoSummary} />}
        {step === 2 && <DriverDetailsSummary details={driverDetails} onSubmit={onSubmit} onBack={gotoForm}/>}
      </DialogContent>
    </Dialog>
  )
}

export default AddNewDriver;