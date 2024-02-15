import React, { useState, useEffect } from 'react'
import nvocc from '../Assets/nvocc.png'
import { Paper, FormControl, Select, InputLabel, MenuItem, Grid, Typography, Container } from '@mui/material'
import FclExport from '../sections/FCL/calculators/fcl-export'
import Footer from '../Components/Footer'

function LCL() {

    const [showFCL, setShowFCL] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Container maxWidth="lg" sx={{ mb: 5 }}>
                <div className="home-text-section" style={{ alignItems: "center", marginTop: "2rem" }}>
                    <img src={nvocc} alt="" className='nvocc' />
                    <p className="primary-text" style={{ textAlign: "center", maxWidth: "400px", fontSize: "16px" }}>
                        AUTOMATIC SHIPPING RATES
                        GLOBAL FREIGHT CALCULATORS
                    </p>
                    <p className="primary-text" style={{ textAlign: "center", maxWidth: "900px" }}>
                        LCL OCEAN CONSOLIDATIONS - LCL EXPORT FROM USA SHIPPING RATES
                    </p>
                    <Typography color="error" textAlign="center">
                        Online LCL Freight Calculator - For Assistance Call 628-688-5272 or 786-402-2074
                    </Typography>
                    <Grid container>
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ padding: "20px", alignItems: "center", marginBottom: "2rem" ,bgcolor:"#FEF9F3"}}>
                                <Grid container spacing={5}>
                                    <Grid item sm={2} />
                                    <Grid item xs={12} sm={4}>
                                        <FormControl fullWidth size='small' sx={{bgcolor:"white"}}>
                                            <InputLabel>Select Origin</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                label="Select Origin"
                                            // onChange={handleChange}
                                            >
                                                {/* <MenuItem value={10}><em>SELECT FCL EXPORT USA, LCL EXPORT USA OR WORLD TO WORLD OCEAN CONTAINER</em></MenuItem> */}
                                                <MenuItem value={20} onClick={() => { setShowFCL(true) }}>Atlanta</MenuItem>
                                                <MenuItem value={30}>Baltimore</MenuItem>
                                                <MenuItem value={40}>Boston</MenuItem>
                                                <MenuItem value={50}>Charleston</MenuItem>
                                                <MenuItem value={60}>Charlotte</MenuItem>
                                                <MenuItem value={70}>Chicago</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <FormControl fullWidth size='small' sx={{bgcolor:"white"}}>
                                            <InputLabel>Select Continent of Destination</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                label="Select Continent of Destination"
                                            // onChange={handleChange}
                                            >
                                                {/* <MenuItem value={10}><em>SELECT FCL EXPORT USA, LCL EXPORT USA OR WORLD TO WORLD OCEAN CONTAINER</em></MenuItem> */}
                                                <MenuItem value={20} onClick={() => { setShowFCL(true) }}>Africa</MenuItem>
                                                <MenuItem value={30}>America</MenuItem>
                                                <MenuItem value={40}>Asia</MenuItem>
                                                <MenuItem value={40}>Europe</MenuItem>
                                                <MenuItem value={40}>Middle East</MenuItem>
                                                <MenuItem value={40}>Pacific</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item sm={2} />
                                </Grid>
                            </Paper>
                            {showFCL && <FclExport />}
                        </Grid>
                    </Grid>
                </div>
            </Container>
            <Footer />
        </> 
    )
}

export default LCL