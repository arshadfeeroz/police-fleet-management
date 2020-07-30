import React from "react";
import { withStyles } from "@material-ui/styles";
import DashboardNavBar from "./DashboardNavBar";
import Allotments from "./Allotments";
import Fleets from "./Fleets";
import StackedBarChart from "../CommonComponents/StackedBarChart/StackedBarChart";
import data from "../CommonComponents/StackedBarChart/data/data";

const styles = (theme) => ({
	content: {
		overflow: "auto",
	},
});

const navItemsData = [
	{
		key: "001",
		text: "Allotments",
	},
	{
		key: "002",
		text: "Fleets",
	},
	{
		key: "003",
		text: "Expense",
	},
];

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedNavId: navItemsData[0].key,
		};
	}

	handleNavClick = (id) => {
		this.setState({
			selectedNavId: id,
		});
	};

	renderNavDetailPage = (e) => {
		switch (this.state.selectedNavId) {
			case "001":
				return <Allotments />;
			case "002":
				return <Fleets />;
			case "003":
				return null;
			default:
				return <Allotments />;
		}
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.content}>
				<DashboardNavBar data={navItemsData} onClick={this.handleNavClick} />
				{this.renderNavDetailPage()}
				{/* <StackedBarChart data={data.data} height="320" width="100%" /> */}
			</div>
		);
	}
}

export default withStyles(styles)(Dashboard);
