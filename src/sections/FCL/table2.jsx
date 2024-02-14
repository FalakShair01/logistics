import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function createData(name,l,w,h  ) {
  return { name, l,w,h };
}

const rows = [
  createData("Inside Container Cubic Capacity", "32.9 CBM (1,161 CF.)" , "67 CBM (2,366 CF.)", "75.6 CBM (2,671 CF.)" ),
  createData("Maximum Container Payload", "38,000 lbs.", "43,000 lbs.", "43,000 lbs." ),
  createData("Tare Weight/ weight of empty container", "5,138 lbs.", "9,151 lbs.", "9,658 lbs."   ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} style={{textAlign:"center"}}>
        <div style={{marginBottom:"20px",marginTop:"20px"}}>
      <Typography variant='h6' color="error">INTERNATIONAL OCEAN SHIPPING FREIGHT RATES CALCULATOR</Typography>
      <Typography>Call 628-688-5272 For Assistance</Typography>
        </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
       
        <TableHead>
        <TableRow sx={{border:"1px solid #E0E0E0", backgroundColor:"#ccc"}}>
            <TableCell sx={{borderRight:"1px solid #E0E0E0"}}>Specifications</TableCell>
            <TableCell sx={{borderRight:"1px solid #E0E0E0"}}>8X8'6" Standard 20'</TableCell>
            <TableCell sx={{borderRight:"1px solid #E0E0E0"}}>8X8'6" Standard 40'</TableCell>
            <TableCell sx={{borderLeft:"1px solid #E0E0E0"}}>8X9'6" 40' Hi-Cube'</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.l}</TableCell>
              <TableCell >{row.w}</TableCell>
              <TableCell >{row.h}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}