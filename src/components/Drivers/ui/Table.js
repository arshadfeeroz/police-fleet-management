import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'allotmentGroup', numeric: false, disablePadding: false, label: 'Allotment Group' },
  { id: 'assignedVehicle', numeric: false, disablePadding: false, label: 'Vehicle Assigned' },
  { id: 'action', numeric: false, disablePadding: false, label: 'Action' }
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  table: {
    minWidth: 750,
  },
  secondaryText: {
    color: "#9e9e9e",
    fontSize: "12px"
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

function MatchingString(empId, allotmentGroup, name, assignedVehicle, licensePlate, searchedData) {
  let testString = [empId, allotmentGroup, name, assignedVehicle, licensePlate].join(' ').toLowerCase();
  return testString.includes(searchedData.toLowerCase())
}

function NormalizedRows(filteredRows) {
    const rows = filteredRows.map(drivers => {
      return {
            id: drivers.driverDetails.empId,
            name: drivers.driverDetails.personalInfo.name,
            allotmentGroup: drivers.driverDetails.allotmentGroup,
            assignedVehicle: drivers.driverDetails.assignedVehicle ? drivers.driverDetails.assignedVehicle.name : "",
            licensePlate: drivers.driverDetails.assignedVehicle ? drivers.driverDetails.assignedVehicle.regNumber : ""
          }
    });
    return rows;
}

export default function EnhancedTable(props) {
  let searchedData = props.typedData ? props.typedData : "";

  const filteredRows = props.drivers.filter(drivers => {
    let { empId, allotmentGroup } = drivers.driverDetails;
    let name = drivers.driverDetails.personalInfo.name;
    let assignedVehicle = drivers.driverDetails.assignedVehicle ? drivers.driverDetails.assignedVehicle.name : "";
    let licensePlate = drivers.driverDetails.assignedVehicle ? drivers.driverDetails.assignedVehicle.regNumber : "";

    let existsFlag = MatchingString(empId, allotmentGroup, name, assignedVehicle, licensePlate, searchedData);
    return existsFlag == true;
  });
  const rows = NormalizedRows(filteredRows);

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => props.clicked(row.id)}
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                    >
                      <TableCell component="th" id={labelId} scope="row" padding="default">
                      <Box display="flex" p={1}>
                        <Box><AccountCircleIcon fontSize="large" style={{position: "relative"}}/></Box> 
                        <Box style={{position: "relative", left: "30px"}}>
                          {row.name}<br></br>
                          <span className={classes.secondaryText}>Emp Id: {row.id}</span><br></br>
                          <br></br>
                          <span className={classes.secondaryText}>Location: Bangalore</span>
                        </Box>
                      </Box>
                      </TableCell>
                      <TableCell className={classes.secondaryText} align="left">{row.allotmentGroup}</TableCell>
                      <TableCell className={classes.secondaryText} align="left">
                        {row.assignedVehicle ? row.assignedVehicle : "..."}
                        <br></br>
                        {row.assignedVehicle && `License plate: ${row.licensePlate}`}
                      </TableCell>
                      <TableCell className={classes.secondaryText} align="left">
                        <MoreHorizIcon />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
