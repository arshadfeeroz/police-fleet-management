import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DRIVER_TABLE_FIELDS } from '../../constants/drivers';

const DriversList = ({ list }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {DRIVER_TABLE_FIELDS.map(field => <TableCell key={field}>{field}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {list && list.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.vehicalAssigned}</TableCell>
              <TableCell>{row.jobLocation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default DriversList;