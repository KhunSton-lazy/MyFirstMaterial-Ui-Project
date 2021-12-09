import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Typography} from "@mui/material"


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export function PaitentChart() {
  return (
    
        <TableContainer >
        <Table style={{justifyItems: "center"}} sx={{ minWidth: "600"}} aria-label="simple table" align="center" alignItem="center">
            <TableHead>
            <TableRow>
                <TableCell><Typography variant="h5">Dessert (100g serving)</Typography></TableCell>
                <TableCell align="right"><Typography variant="h5">Calories</Typography></TableCell>
                <TableCell align="right"><Typography variant="h5">Fat&nbsp;(g)</Typography></TableCell>
                <TableCell align="right"><Typography variant="h5">Carbs&nbsp;(g)</Typography></TableCell>
                <TableCell align="right"><Typography variant="h5">Protein&nbsp;(g)</Typography></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    <Typography variant="h6">{row.name}</Typography>
                </TableCell>
                <TableCell align="right"><Typography variant="h6">{row.calories}</Typography></TableCell>
                <TableCell align="right"><Typography variant="h6">{row.fat}</Typography></TableCell>
                <TableCell align="right"><Typography variant="h6">{row.carbs}</Typography></TableCell>
                <TableCell align="right"><Typography variant="h6">{row.protein}</Typography></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
  );
}
