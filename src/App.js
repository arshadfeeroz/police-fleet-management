import React from "react";
import Header from "./components/Header/Header";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Speed from "@material-ui/icons/Speed";
import Assessment from "@material-ui/icons/Assessment";
import Feedback from "@material-ui/icons/Feedback";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import AttachMoney from "@material-ui/icons/AttachMoney";

import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
	appBar: {
		zIndex: 1,
	},
	menuButton: {
		marginRight: "10px",
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
		position: "relative",
		whiteSpace: "nowrap",
		zIndex: 0,
	},
	navList: {
		marginTop: "4em",
		width: "240px",
	},
});

class App extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div>
				<Header />
				<Drawer
					variant="persistent"
					anchor="left"
					open={true}
					className={classes.drawerPaper}
				>
					<List className={classes.navList}>
						<ListItem button>
							<ListItemIcon>
								<Speed />
							</ListItemIcon>
							<ListItemText primary="Dashboard" />
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<Feedback />
							</ListItemIcon>
							<ListItemText primary="Service Requests" />
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<AttachMoney />
							</ListItemIcon>
							<ListItemText primary="Expenses" />
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<PermContactCalendarIcon />
							</ListItemIcon>
							<ListItemText primary="Drivers" />
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<Assessment />
							</ListItemIcon>
							<ListItemText primary="Reports" />
						</ListItem>
					</List>
				</Drawer>
			</div>
		);
	}
}

export default withStyles(styles)(App);
