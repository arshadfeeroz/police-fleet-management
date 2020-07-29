import React from 'react';
import TextField from '@material-ui/core/TextField';
import TableView from './tableView';
import Button from '@material-ui/core/Button';

class DriverDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            onSubmitflag: false
        }
        this.showTable = this.showTable.bind(this);
    }

    firstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    lastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    setAge(e) {
        this.setState({
            age: e.target.value
        })
    }

    showTable() {
        this.setState({
            onSubmitflag: true
        })
    }



    render() {
        return (
            <div>
                <div>
                    <h2>Enter Driver Details</h2>

                    <form noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Enter First Name" onChange={e => this.firstName(e)} /><br></br>
                        <TextField id="standard-basic" label="Enter Last Name" onChange={e => this.lastName(e)} /><br></br>
                        <TextField id="standard-basic" label="Enter Driver Age" onChange={e => this.setAge(e)} />
                    </form> <br></br>
                    <Button variant="contained" color="primary" onClick={ this.showTable }>
                        Submit
                    </Button>
                    { this.state.onSubmitflag && 
                        <TableView  firstName= {this.state.firstName}  lastName= {this.state.lastName} age={this.state.age} />
                    }


                </div>

            </div>
        )
    }

}
export default DriverDetails;