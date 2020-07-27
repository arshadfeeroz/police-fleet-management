import React from "react";
import List from "@material-ui/core/List";
import NavItem from "./NavItem";

import Speed from "@material-ui/icons/Speed";
import Assessment from "@material-ui/icons/Assessment";
import Feedback from "@material-ui/icons/Feedback";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import AttachMoney from "@material-ui/icons/AttachMoney";

import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({});

class PrimaryNav extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div>
				<NavItem route="/" name="Dashboard" Icon={Speed} />
				<NavItem
					route="/servicerequests"
					name="Service Requests"
					Icon={Feedback}
				/>
				<NavItem route="/expenses" name="Expenses" Icon={AttachMoney} />
				<NavItem
					route="/drivers"
					name="Drivers"
					Icon={PermContactCalendarIcon}
				/>
				<NavItem route="/reports" name="Reports" Icon={Assessment} />
			</div>
		);
	}
}

export default withStyles(styles)(PrimaryNav);
