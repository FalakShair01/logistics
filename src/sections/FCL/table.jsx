import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function createData(name, l, w, h, el, ew, eh, dl, dw, mp) {
    return { name, l, w, h, el, ew, eh, dl, dw, mp };
}

const rows = [
    createData("20' Container", "19' 10''", "8'", "8' 6''", "19' 4''", "7' 8''", "7' 9''", "7' 5''", "7' 8''", "38,000"),
    createData("40' Container", "19' 10''", "8'", "8' 6''", "19' 4''", "7' 8''", "7' 9''", "7' 5''", "7' 8''", "38,000"),
    createData("40' High Cube", "19' 10''", "8'", "8' 6''", "19' 4''", "7' 8''", "7' 9''", "7' 5''", "7' 8''", "38,000"),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper} style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                <Typography color="blue">FCL and LCL Export Calculator From USA</Typography>
                <Typography color="blue">LCL Shipping Calculator Import and Export </Typography>
                <Typography color="blue">Container Shipping Rates</Typography>
                <Typography color="blue"> Ocean Container Freight Calculator</Typography>
            </div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableHead>
                    <TableRow sx={{ borderTop: "1px solid #E0E0E0", backgroundColor:"#ccc" }}>
                        <TableCell sx={{ borderRight: "1px solid #E0E0E0" }} />
                        <TableCell />
                        <TableCell>Exterior</TableCell>
                        <TableCell sx={{ borderRight: "1px solid #E0E0E0" }} />
                        <TableCell />
                        <TableCell>Internal</TableCell>
                        <TableCell sx={{ borderRight: "1px solid #E0E0E0" }} />
                        <TableCell >Door Openings</TableCell>
                        <TableCell sx={{ borderRight: "1px solid #E0E0E0" }} />
                        <TableCell>Max</TableCell>
                    </TableRow>
                    <TableRow sx={{backgroundColor:"#ccc"}}>
                        <TableCell sx={{ borderRight: "1px solid #E0E0E0" }}>Size/Type</TableCell>
                        <TableCell>Length</TableCell>
                        <TableCell>Width</TableCell>
                        <TableCell sx={{ borderRight: "1px solid #E0E0E0" }}>Height</TableCell>
                        <TableCell>Length</TableCell>
                        <TableCell>Width</TableCell>
                        <TableCell sx={{ borderRight: "1px solid #E0E0E0" }}>Height</TableCell>
                        <TableCell>Length</TableCell>
                        <TableCell sx={{ borderRight: "1px solid #E0E0E0" }}>Width</TableCell>
                        <TableCell>Payload</TableCell>
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
                            <TableCell >{row.el}</TableCell>
                            <TableCell >{row.ew}</TableCell>
                            <TableCell >{row.eh}</TableCell>
                            <TableCell >{row.dl}</TableCell>
                            <TableCell >{row.dw}</TableCell>
                            <TableCell >{row.mp}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}