import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import { Container, CssBaseline } from "@material-ui/core";
import Dashboard from "../components/Dashboard/dashboard";
import ServiceRequests from "../components/ServiceRequests/ServiceRequests";
import Expenses from "../components/Expenses/Expenses";
import Drivers from "../components/Drivers/Drivers";
import Reports from "../components/Reports/Reports";

import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
	root: {
		display: "flex",
	},
	content: {
		height: "100vh",
		overflow: "auto",
		width: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.04)",
	},
	container: {
		paddingTop: "6em",
		paddingLeft: "2em",
		height: "100%",
	},
});

class Router extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Header />
				<CssBaseline />
				<BrowserRouter>
					<Navigation />
					<main className={classes.content}>
						<Container maxWidth="xl-lg" className={classes.container}>
							<Switch>
								<Route exact path="/" component={Dashboard} />
								<Route exact path="/servicerequests" component={ServiceRequests} />
								<Route exact path="/expenses" component={Expenses} />
								<Route exact path="/drivers" component={Drivers} />
								<Route exact path="/reports" component={Reports} />
							</Switch>
						</Container>
					</main>
				</BrowserRouter>
			</div>
		);
	}
}

export default withStyles(styles)(Router);
