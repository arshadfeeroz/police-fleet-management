import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { Container, CssBaseline } from "@material-ui/core";
import Dashboard from "../components/Dashboard/Dashboard";
import VehiclesContainer from "../container/VehiclesContainer";
import ServiceRequests from "../components/ServiceRequests/ServiceRequests";
import Expenses from "../components/Expenses/Expenses";
import DriversDetail from "../components/Drivers/DriversDetail/DriversDetail";
import Reports from "../components/Reports/Reports";
import VehicleList from "../container/VehiclesContainer/vehicleList";
import VehicleAllotment from "../container/VehiclesContainer/vehicleAllotment";
import VehicleAssignment from "../container/VehiclesContainer/vehicleAssignment";
import DriverDetails from "../components/Drivers/DriverDetails/DriverDetails";

import DashboardVehicleAllotment from "../components/Dashboard/VehicleAllotment.js";



const useStyles = makeStyles((theme) => ({
	root: {
    display: "flex"
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		height: "100vh",
		overflow: "auto",
		width: "100%",
		backgroundColor: 'rgba(0, 0, 0, 0.04)'
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		height: "100%",
	},
  }));

const App = () => {
	const [open, setOpen] = React.useState(true);

	const classes = useStyles();

	const handleDrawerToggle = () => {
		if (open) {
			setOpen(false);
			return;
		}
		setOpen(true);
	};

	function handleClick() {
		setOpen(!open)
	}

	return (
		<div className={classes.root}>
			<Header open={open} handleDrawerOpen={handleDrawerToggle} />
			<CssBaseline />
			<BrowserRouter>
				<Navigation open={open} handleDrawerClose={handleDrawerToggle} />
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Container maxWidth="xl-lg" className={classes.container}>
						<Switch>
							<Route exact path="/" component={Dashboard} />
              
							<Route path="/vehicleList" component={VehicleList} />
							<Route path="/vehicleAllotment" component={VehicleAllotment} />
							<Route path="/vehicleAssignment" component={VehicleAssignment} />

							<Route path="/drivers/:empId" exact component={DriverDetails} />
							<Route path="/drivers" exact component={DriversDetail} />

							<Route exact path="/vehicles" component={VehicleList} />
							<Route
								exact
								path="/servicerequests"
								component={ServiceRequests}
							/>
							<Route exact path="/expenses" component={Expenses} />
							<Route exact path="/reports" component={Reports} />
							<Route
								exact
								path="/dashboard/vehicleAllotment"
								component={() => <DashboardVehicleAllotment />}
							/>

						</Switch>
					</Container>
				</main>
			</BrowserRouter>
		</div>
	);
};

export default App;



