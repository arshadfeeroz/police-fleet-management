import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import Drivers from '../constant';
import EnhancedTable from '../ui/Table';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    margin: {
        margin: theme.spacing(1),
    },
    formControl: {
        marginLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1)
        // width: 250,
    }
})
);

export default function DriversDetails(props) {
    const classes = useStyles();
    const [sort, setSortValue] = React.useState('');
    const handleChange = (event) => {
        setSortValue(event.target.value);
    };

    
    return (
        <div>
            <Box display="flex" justifyContent="space-between" p={1.5} bgcolor="white">
                <Box style={{ fontSize: "18px", fontWeight: "600" }}>
                    Assigned To / Drivers
                </Box>
                <Box>
                    <Button variant="contained" color="primary">
                        +Add new
                    </Button>
                </Box>
            </Box>
            <br></br>
            <Box display="flex" justifyContent="space-between">
                <Box style={{width: "35%"}}>
                    <Paper component="form" className={classes.root}>
                        <InputBase
                            className={classes.input}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange= {handleChange}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Box>
            </Box>
            <EnhancedTable drivers={Drivers.data} typedData={sort}  clicked={(id) => {props.history.push(`/drivers/${id}`)}}></EnhancedTable>
        </div>
    );
}
