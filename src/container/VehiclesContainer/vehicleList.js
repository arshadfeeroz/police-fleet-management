import React from 'react'
import clsx from 'clsx';
import { useParams } from "react-router-dom";
import {Grid, Container, Button, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Link} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import VehicleListView from '../../components/Vehicles/VehicleList';

import {
    BrowserRouter as Router,
    Switch,
    NavLink,
    Route,
    useRouteMatch
  } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  	root: {
    	display: 'flex',
  	},
  appBarSpacer: theme.mixins.toolbar,
  	content: {
    	flexGrow: 1,
    	overflow: 'auto'
  	},
  	container: {
   		paddingTop: theme.spacing(1),
    	paddingBottom: theme.spacing(4),
  	},
  	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
  	},
  	fixedHeight: {
    	height: 240,
  	},
	rootHeaderButtons: {
    	'& > *': {
     		margin: theme.spacing(1),
		},
	},
	titleBar:{
		display:"flex",
		justifyContent: "space-between",
		backgroundColor:"#fff",
		padding:'15px',
		borderRadius:'10px'

	},
	pageTitle:{
		fontSize:14
	},
	title: {
    	flexGrow: 1,
  	},
  	titleBarAction:{
		display:"flex",
		justifyContent:"flex-end",
		'& > *': {
      		marginLeft:"20px",
    	},
  	},
    allocateMultipleVehicle: {
      borderRadius: '4px',
      border: 'solid 1px #0168fa',
      backgroundColor: '#ffffff',
      color: '#0168fa'
    },
    allocateVehicle: {
      backgroundColor: '#0168fa'
    },
	  tableDataFilter:{
	  	display:'flex',
		  '& > *': {
      		marginRight:"20px",
    	},
	  },
	  radio: {
    '&$checked': {
      color: '#FFF',
	  backgroundColor:'#000'
    }
  },
}));


function VehicleList (){
	const classes = useStyles();
	const {filter} =useParams();
	let { path, url } = useRouteMatch();

	return(
	<main className={classes.content}>
		<div className={classes.titleBar}>
			<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          	 Vehicle Allocation
          </Typography>
			<div className={classes.titleBarAction} >
				<Button variant="outlined" color="primary" className={classes.allocateMultipleVehicle}>
				+Allocate Multiple Vehicles
				</Button>
				<Button variant="contained" color="primary" className={classes.allocateVehicle}>
				+Allocate Vehicle
				</Button>
			</div>
		</div>
		<div className={classes.appBarSpacer} />
		<div className={classes.tableDataFilter}>
			<VehicleListView vehicleDetails={vehicleDetails()} />
		</div>

	</main>
	)
}
export default VehicleList;


function vehicleDetails (){
return({
"vehicles": [
{
"vehicleId": 123,
"vehicleBrand": "toyota",
"vehicleModel": "innova",
"vehicleYearOfMfc": 2018,
"vehicleCapacity": 5,
"vehicleType": "car",
"vehicleTankCapacity": 5,
"status": 1,
"onBoardingDate": "2020-07-15T12:04:07.689Z",
"OffBoardingDate": "2020-07-15T12:04:07.689Z",
"registrationNumber": "KA51MC3414",
"engineNumber": "1234FE34",
"chasisNo": "CH1234",
"registrationData": null,
"registrationAuthority": null,
"registrationExpDate": null,
"registrationIssueDate": null,
"petroCardId": null,
"createdAt": "2020-07-15T12:04:07.689Z",
"updatedAt": "2020-07-15T14:08:58.098Z",
"department": "State Intelligence Department",
"allotmentGroup": "Hoysalas"
},
{
"vehicleId": 125,
"vehicleBrand": "toyota",
"vehicleModel": "innova",
"vehicleYearOfMfc": 2018,
"vehicleCapacity": 5,
"vehicleType": "car",
"vehicleTankCapacity": 5,
"status": 1,
"onBoardingDate": "2020-07-15T12:04:07.689Z",
"OffBoardingDate": "2020-07-15T12:04:07.689Z",
"registrationNumber": "BR11AE3727",
"engineNumber": "1234FE34",
"chasisNo": "CH1234",
"registrationData": null,
"registrationAuthority": null,
"registrationExpDate": null,
"registrationIssueDate": null,
"petroCardId": null,
"createdAt": "2020-07-15T12:04:07.689Z",
"updatedAt": "2020-07-15T14:09:11.732Z",
"department": "Law and Order",
"allotmentGroup": "Officers"
},
{
"vehicleId": 123,
"vehicleBrand": "Yamaha YZF",
"vehicleModel": "R15 V3",
"vehicleYearOfMfc": 2019,
"vehicleCapacity": 5,
"vehicleType": "Two Wheeler",
"vehicleTankCapacity": 5,
"status": 1,
"onBoardingDate": "2020-07-15T12:04:07.689Z",
"OffBoardingDate": "2020-07-15T12:04:07.689Z",
"registrationNumber": "KA51MC3414",
"engineNumber": "1234FE34",
"chasisNo": "CH1234",
"registrationData": null,
"registrationAuthority": null,
"registrationExpDate": null,
"registrationIssueDate": null,
"petroCardId": null,
"createdAt": "2020-07-15T12:04:07.689Z",
"updatedAt": "2020-07-15T14:08:58.098Z",
"department": "State Intelligence Department",
"allotmentGroup": "Cheetas"
},
{
"vehicleId": 125,
"vehicleBrand": "Royal",
"vehicleModel": "Enfield",
"vehicleYearOfMfc": 2020,
"vehicleCapacity": 5,
"vehicleType": "Two Wheeler",
"vehicleTankCapacity": 5,
"status": 0,
"onBoardingDate": "2020-07-15T12:04:07.689Z",
"OffBoardingDate": "2020-07-15T12:04:07.689Z",
"registrationNumber": "BR11AE3727",
"engineNumber": "1234FE34",
"chasisNo": "CH1234",
"registrationData": null,
"registrationAuthority": null,
"registrationExpDate": null,
"registrationIssueDate": null,
"petroCardId": null,
"createdAt": "2020-07-15T12:04:07.689Z",
"updatedAt": "2020-07-15T14:09:11.732Z",
"department": "Law and Order",
"allotmentGroup": "Escort"
}
]
})
}
