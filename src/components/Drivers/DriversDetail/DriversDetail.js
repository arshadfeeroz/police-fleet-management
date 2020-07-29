import React from 'react';
import TextField from '@material-ui/core/TextField';
import TableView from './tableView';

class DriverDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            onSubmitflag: false
        }
        this.showTable = this.showTable.bind(this);
    }

    setName(e) {
        this.setState({
            name: e.target.value
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
                        <TextField id="standard-basic" label="Enter Driver Name" onChange={e => this.setName(e)} /><br></br>
                        <TextField id="standard-basic" label="Enter Driver Age" onChange={e => this.setAge(e)} />
                    </form> <br></br>
                    <button onClick={ this.showTable }>Submit</button> <br></br>

                    { this.state.onSubmitflag && 
                        <TableView  name= {this.state.name} age={this.state.age} />
                    }


                </div>

            </div>
        )
    }

}
export default DriverDetails;