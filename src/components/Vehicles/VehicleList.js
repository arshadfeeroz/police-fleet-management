import React from 'react';
import _ from 'lodash';
import {TableContainer, Table, TableHead,TableBody, TableRow, TableCell, Paper, Icon,Typography} from '@material-ui/core'
import {DirectionsCar, Motorcycle } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  	backgroundColor:'#fff',
  	borderRadius:'10px',
  	paddingBottom:"63px",
  },
  tableHead:{
    '& > *':{
      borderBottom:"2px solid #6c7aa2"
    }
  },
  vehicleType:{
  	height:"50px",
  	width:"60px",
  	padding: "5px",
    textAlign: "center",
  	backgroundColor:"#f1f5f7",
  	borderRadius:"10px",
  	marginRight: "15px"
  },
  title: {
    	flexGrow: 1,
		  textTransform: "capitalize",
  	},
  titlename: {
    flexGrow: 1,
    textTransform: "capitalize",
    color: '#0168fa'
  },
  details: {
    color: '#0168fa'
  },
	vehicleName:{
		display:'flex',
	},
	vehicleNameDetails:{
		display:'flex',
		flexDirection:'column'
	}
});


function VehicleListView(props){
  const classes = useStyles();
  const {vehicleDetails} = props;
  return (
    <TableContainer className={classes.table} >
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tableHead}>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Allotment Group</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicleDetails.vehicles.map((row) =>(
            <TableRow key={row.vehicleId}>
              <TableCell component="th" scope="row">
                <div>
                  {vehicleNameComponent(row, classes)}
                </div>
              </TableCell>
              <TableCell>{row.status == 1 ? 'Active':'Inactive' }</TableCell>
              <TableCell>{row.department}</TableCell>
              <TableCell>{row.allotmentGroup}</TableCell>
              <TableCell className={classes.details}>View</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default VehicleListView

function vehicleNameComponent(detail, classes){
  return(
  <div className={classes.vehicleName}>
	<div className={classes.vehicleType}>
		{detail.vehicleType == 'car'&& <DirectionsCar fontSize="large" color="primary"/>}
		{detail.vehicleType == 'Two Wheeler'&& <Motorcycle fontSize="large" color="primary"/>}
	</div>
  	<div className={classes.vehicleNameDetails}>
	  	<Typography component="h6" variant="subtitle2" color="inherit" noWrap className={classes.titlename}>
          	{detail.vehicleYearOfMfc} - {detail.vehicleBrand}  {detail.vehicleModel}
        </Typography>
	  	<Typography component="p" variant="caption" color="inherit" noWrap className={classes.title}>
          	SN: {detail.chasisNo}
        </Typography>
		<Typography component="p" variant="caption" color="inherit" noWrap className={classes.title}>
          	License Plate.: {detail.registrationNumber}
        </Typography>
	</div>
  </div>)
}
