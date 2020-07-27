import React from "react";
import Grid from "@material-ui/core/Grid";
import Tile from "./Tile";
import NumberSection from "./NumberSection";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({});

class Allotments extends React.Component {
	render() {
		const { classes } = this.props;
		const allotmentData = [
			{
				number: "2000",
				description: "Total",
			},
			{
				number: "1950",
				description: "Alotted",
			},
			{
				number: "50",
				description: "Unallotted",
			},
		];
		const requestData = [
			{
				number: "7",
				description: "For new vehicles",
			},
			{
				number: "3",
				description: "Other",
			},
		];
		return (
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<Tile
						title="ALLOTMENTS"
						body={<NumberSection data={allotmentData} />}
						height="200px"
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={6} lg={6}>
					<Tile
						title="PENDING REQUESTS FOR APPROVAL"
						body={<NumberSection data={requestData} />}
						height="200px"
					/>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Allotments);
