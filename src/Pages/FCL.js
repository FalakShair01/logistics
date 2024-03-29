import React, {useState, useEffect} from 'react'
import nvocc from '../Assets/nvocc.png'
import { Paper, FormControl, Select, InputLabel, MenuItem, Grid, Typography, Container } from '@mui/material'
import Table from '../sections/FCL/table'
import Table2 from '../sections/FCL/table2'
import FclExport from '../sections/FCL/calculators/fcl-export'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function FCL() {

    const [showFCL,setShowFCL] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
        <Container maxWidth="lg" sx={{mb:5}}>
            <div className="home-text-section" style={{ alignItems: "center", marginTop: "2rem" }}>
                <img src={nvocc} alt="" className='nvocc'/>
                <p className="primary-text" style={{ textAlign: "center", maxWidth: "400px", fontSize: "16px" }}>
                    AUTOMATIC SHIPPING RATES
                    GLOBAL FREIGHT CALCULATORS
                </p>
                <p className="primary-text" style={{ textAlign: "center", maxWidth: "900px" }}>
                    OCEAN CONTAINER SHIPPING FREIGHT CALCULATORS
                </p>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ padding: "20px",alignItems:"center",marginBottom:"2rem", bgcolor:"#FEF9F3"}}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={12} sm={4} >
                                    <Typography variant='subtitle1' textAlign="center">
                                        Select Service
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <FormControl fullWidth size='small' sx={{bgcolor:"white"}}>
                                        <InputLabel>Select FCL Export USA, LCL Export USA OR World to World Ocean Container</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="Select FCL Export USA, LCL Export USA OR World to World Ocean Container"
                                        // onChange={handleChange}
                                        >
                                            {/* <MenuItem value={10}><em>SELECT FCL EXPORT USA, LCL EXPORT USA OR WORLD TO WORLD OCEAN CONTAINER</em></MenuItem> */}
                                            <MenuItem value={20} onClick={() => {setShowFCL(true)}}>FCL Export From USA Ocean Container Shipping Rate Calculator</MenuItem>
                                            <MenuItem value={30}>LCL EXPORT SHARED CONTAINER SHIPPING RATE CALCULATOR</MenuItem>
                                            <MenuItem value={40}>IMPORT WORLDWIDE TO WORLDWIDE OCEAN CONTAINER SHIPPING RATE</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Paper>
                        {showFCL && <FclExport/>}
                        <Typography textAlign="center" sx={{marginBottom:"20px"}}>For International Air Cargo Click <Link>Here</Link></Typography>
                        <Table/>
                        <Table2/>
                    </Grid>
                </Grid>
            </div>
        </Container>
        <Footer/>
        </>
    )
}

export default FCL