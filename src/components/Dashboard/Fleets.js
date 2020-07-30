import React from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Tile from "./Tile";
import NumberSection from "./NumberSection";
import Vehicles from "./Vehicles";
import PieChart from "../CommonComponents/PieChart/PieChart";
import data from "../CommonComponents/PieChart/data/data2";

const styles = (theme) => ({
	content: {
		overflow: "auto",
	},
});

class Fleets extends React.Component {
	render() {
		const { classes } = this.props;
		const vehiclesData = {
			total: "2200",
			vehicles: [
				{
					name: "Innova",
					count: "210",
				},
				{
					name: "Scorpio",
					count: "240",
				},
				{
					name: "Bolero",
					count: "320",
				},
				{
					name: "Qualis",
					count: "80",
				},
				{
					name: "Eeco",
					count: "95",
				},
				{
					name: "Vans",
					count: "290",
				},
				{
					name: "Apache",
					count: "780",
				},
				{
					name: "Pulsar",
					count: "560",
				},
				{
					name: "Fiero",
					count: "470",
				},
			],
		};

		const serviceRemindersData = [
			{
				number: "18",
				description: "Overdue",
			},
			{
				number: "11",
				description: "Due Soon",
			},
		];
		const vehicleRenewalReminderData = [
			{
				number: "7",
				description: "Overdue",
			},
			{
				number: "5",
				description: "Due Soon",
			},
		];
		const incidentsData = [
			{
				number: "1",
				description: "Minor Accident",
			},
			{
				number: "5",
				description: "Major Accident",
			},
		];
		const maintenanceDeliveryStatusData = [
			{
				number: "12",
				description: "On Time",
			},
			{
				number: "5",
				description: "Delayed",
			},
		];
		const openIssuesData = [
			{
				number: "0",
				description: "Overdue",
			},
			{
				number: "13",
				description: "Open",
			},
		];
		const driversData = [
			{
				number: "300",
				description: "Active",
			},
			{
				number: "13",
				description: "Unassign",
			},
		];
		return (
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={12} lg={8}>
					<Tile
						title="TOTAL VEHICLES"
						body={<Vehicles data={vehiclesData} />}
						height="300px"
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={4}>
					<Tile
						title="VEHICLES ASSIGNMENTS"
						body={<PieChart data={data.data} height="250" width="100%" />}
						height="300px"
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={6} lg={4}>
					<Tile
						title="SERVICE REMINDERS"
						body={<NumberSection data={serviceRemindersData} />}
						height="200px"
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={6} lg={4}>
					<Tile
						title="VEHICLE RENEWAL REMINDERS"
						body={<NumberSection data={vehicleRenewalReminderData} />}
						height="200px"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={4}>
					<Tile
						title="INCIDENTS"
						body={<NumberSection data={incidentsData} />}
						height="200px"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={4}>
					<Tile
						title="MAINTENANCE DELIVERY STATUS"
						body={<NumberSection data={maintenanceDeliveryStatusData} />}
						height="200px"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={4}>
					<Tile
						title="OPEN ISSUES"
						body={<NumberSection data={openIssuesData} />}
						height="200px"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={4}>
					<Tile
						title="DRIVERS"
						body={<NumberSection data={driversData} />}
						height="200px"
					/>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Fleets);
