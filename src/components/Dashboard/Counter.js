import React from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { incrementCounter } from "../../store/actions/counter";

const styles = (theme) => ({
	numberSection: {
		display: "flex",
		flexDirection: "row",
		padding: "5px",
		alignItems: "center",
		height: "90%",
		justifyContent: "space-around",
	},
	number: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	numberTitle: {
		fontSize: "30px",
		color: "#5f5e5e",
	},
	numberDescription: {
		color: "#676262",
	},
});

class Counter extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   counter: 0
    // }
  }

  // increment = (e) => {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   })
  // }
	render() {
		const { classes } = this.props;
    console.log(this.props);
    //const { counter } = this.state;
		return (
			<div className={classes.numberSection}>
				<div className={classes.number}>
          <div className={classes.numberDescription}>The Local Count is</div>
          <div className={classes.numberTitle}>
            {this.props.counter}
          </div>
          <button onClick={() => this.props.dispatch(incrementCounter())}>Increment Local Count</button>
          <button>Reset Local Count</button>
          <button>Decrement Local Count</button>
        </div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Counter));