import React from 'react'
import clsx from 'clsx';
import { useParams } from "react-router-dom";
import {Grid, Container, Button, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Link} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import VehicleAssignmentView from '../../components/Vehicles/VehicleAssignment';
import AssignVehicle from '../../components/Vehicles/AssignVehicle';
import Drawer from '@material-ui/core/Drawer';

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


function VehicleAssignment (){
	const classes = useStyles();
	const {filter} =useParams();
	let { path, url } = useRouteMatch();

	const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
	const openDrawer = () => {
		setIsDrawerOpen(true);
	}

	const closeDrawer = () => {
		setIsDrawerOpen(false)
	}

	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setIsDrawerOpen(open)
	};


	return(
	<main className={classes.content}>
		<div className={classes.titleBar}>
			<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          	 Vehicles Assignments
          </Typography>
			<div className={classes.titleBarAction} >
					<Button variant="contained" color="primary" className={classes.allocateVehicle} onClick={openDrawer}>
					+Assign Vehicle
				</Button>
			</div>
				<React.Fragment>
					<Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
						<AssignVehicle />
					</Drawer>
				</React.Fragment>
		</div>
		<div className={classes.appBarSpacer} />
		<div className={classes.tableDataFilter}>
			<VehicleAssignmentView />
		</div>

	</main>
	)
}
export default VehicleAssignment;
