import { Grid, FormControl, Select, TextField, Typography, MenuItem, RadioGroup, FormControlLabel, Radio, Checkbox } from '@mui/material'
import React from 'react'

function fclExport() {
    return (
        <Grid container sx={{marginBottom:"2rem"}}>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item sm={1} />
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d" >First Name*</Typography>
                        <TextField size='small' placeholder='First Name' fullWidth color='warning'/>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Last Name*</Typography>
                        <TextField size='small' color='warning' placeholder='Last Name' fullWidth />
                    </Grid>
                    <Grid item sm={1} />
                    <Grid item sm={1} />
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Organization</Typography>
                        <TextField size='small' color='warning' placeholder='Organization' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Phone*</Typography>
                        <TextField size='small' color='warning' placeholder='Phone' fullWidth />
                    </Grid>
                    <Grid item sm={1} />
                    <Grid item sm={1} />
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Fax</Typography>
                        <TextField size='small' color='warning' placeholder='Fax' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Email*</Typography>
                        <TextField size='small' color='warning' placeholder='Email' fullWidth />
                    </Grid>
                    <Grid item sm={1} />
                    <Grid item sm={1} />
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Select Origin or Nearest City*</Typography>
                        <FormControl color='warning' fullWidth size='small'>
                            <Select>
                                <MenuItem value={20}>FCL </MenuItem>
                                <MenuItem value={30}>LCL </MenuItem>
                                <MenuItem value={40}>IMPORT </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Select Destination*</Typography>
                        <FormControl color='warning' fullWidth size='small'>
                            <Select>
                                <MenuItem value={20}>FCL </MenuItem>
                                <MenuItem value={30}>LCL </MenuItem>
                                <MenuItem value={40}>IMPORT </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sm={1} />
                    <Grid item sm={1} />
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Select Description Of Commodity*</Typography>
                        <FormControl color='warning' fullWidth size='small'>
                            <Select>
                                <MenuItem value={20}>FCL </MenuItem>
                                <MenuItem value={30}>LCL </MenuItem>
                                <MenuItem value={40}>IMPORT </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Weight (Estimate Ok)*</Typography>
                        <TextField size='small' color='warning' placeholder='12345' type='number' />
                        <FormControl color='warning' size='small' sx={{ width: "7rem", marginLeft: "2rem" }}>
                            <Select>
                                <MenuItem value={20}>Pounds </MenuItem>
                                <MenuItem value={30}>Kilograms </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sm={1} />
                    <Grid item sm={1} />
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">20' Container</Typography>
                        <TextField size='small' color='warning' placeholder='Enter number of Containers' fullWidth helperText="Subject to measurement limit of 1,161 cubic feet or 32.9 cubic meters & weight limit of 38,000 Pounds or 17,236 Kg. per Container" />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">40' Container</Typography>
                        <TextField size='small' color='warning' placeholder='Enter number of Containers' fullWidth helperText="Subject to measurement limit of 2,366 cubic feet or 67 cubic meters & weight limit of 43,000 Pounds or 19,504 Kg. per Container" />
                    </Grid>
                    <Grid item sm={1} />
                    <Grid item sm={1} />
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Type Of Goods</Typography>
                        <RadioGroup column >
                            <FormControlLabel value="Household" control={<Radio size='small' />} label={<Typography variant='body2' >Household Goods – International Move (with or without Cars)</Typography>} />
                            <FormControlLabel value="Industrial" control={<Radio size='small' />} label={<Typography variant='body2'>Industrial Goods – Commercial Items</Typography>} />
                            <FormControlLabel value="Cars" control={<Radio size='small' />} label={<Typography variant='body2'>Cars Only</Typography>} />
                            <FormControlLabel value="Donations" control={<Radio size='small' />} label={<Typography variant='body2' >Donations (Relief Goods)</Typography>} />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Is the Cargo Hazardous Material?</Typography>
                        <RadioGroup row >
                            <FormControlLabel value="Yes" control={<Radio size='small' />} label={<Typography variant='body2' color="#fe9e0d">Yes</Typography>} />
                            <FormControlLabel value="No" control={<Radio size='small' />} label={<Typography variant='body2' color="#fe9e0d">No</Typography>} />
                        </RadioGroup>
                    </Grid>
                    <Grid item sm={1} />
                    <Grid item sm={1} />
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">How far is your cargo in the USA to the US Loading Rail Ramp or Port You Selected Above? Distance in the USA?</Typography>
                        <FormControl color='warning' fullWidth size='small'>
                            <Select color='warning' placeholder='Refers to Distance from Origin City Selected Above to Loading Zip Code in USA.'>
                                <MenuItem value={20}>FCL </MenuItem>
                                <MenuItem value={30}>LCL </MenuItem>
                                <MenuItem value={40}>IMPORT </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Do you want to get charged by our Customs Broker for customs clearance at destination? Duties/Taxes Not Included.</Typography>
                        <RadioGroup row >
                            <FormControlLabel value="Yes" control={<Radio size='small' />} label={<Typography variant='body2' color="#fe9e0d">Yes</Typography>} />
                            <FormControlLabel value="No" control={<Radio size='small' />} label={<Typography variant='body2' color="#fe9e0d">No, I can go to customs or hire a broker.</Typography>} />
                        </RadioGroup>
                    </Grid>
                    <Grid item sm={1} />
                    <Grid item sm={1} />
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Do You Need Delivery?</Typography>
                        <FormControlLabel control={<Checkbox size="small" />} label="Yes" />
                        <FormControl color='warning' size='small' sx={{ width: "17rem" }}>
                            <Select color='warning' placeholder='Refers to Distance from Origin City Selected Above to Loading Zip Code in USA.'>
                                <MenuItem value={20}>FCL </MenuItem>
                                <MenuItem value={30}>LCL </MenuItem>
                                <MenuItem value={40}>IMPORT </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Do You Require Insurance?</Typography>
                        <FormControlLabel control={<Checkbox size="small" />} label=" Yes " />
                        <TextField color='warning' placeholder='Enter Insured Value:  US $' type='number' size='small' sx={{ width: "17rem" }} />
                    </Grid>
                    <Grid item sm={1} />
                    <Grid item sm={1} />
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Exporting Car or Boat?</Typography>
                        <FormControlLabel control={<Checkbox size="small" />} label=" Yes " />
                        <TextField color='warning' placeholder='Enter Quantity' type='number' size='small' sx={{ width: "17rem" }} />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Who is Loading the Car or Boat?</Typography>
                        <RadioGroup row >
                            <FormControlLabel value="Yes" control={<Radio size='small' />} label={<Typography variant='body2' color="#fe9e0d">Shipper (I am)</Typography>} />
                            <FormControlLabel value="No" control={<Radio size='small' />} label={<Typography variant='body2' color="#fe9e0d">Option Our Warehouse Will Charge</Typography>} />
                        </RadioGroup>
                    </Grid>
                    <Grid item sm={1} />
                    <Grid item sm={1} />
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">When Are You Shipping?</Typography>
                        <FormControl color='warning' fullWidth size='small'>
                            <Select color='warning' placeholder='Refers to Distance from Origin City Selected Above to Loading Zip Code in USA.'>
                                <MenuItem value={20}>FCL</MenuItem>
                                <MenuItem value={30}>LCL</MenuItem>
                                <MenuItem value={40}>IMPORT</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Origin Zip Code</Typography>
                        <TextField size='small' color='warning' placeholder='Zip Code' fullWidth />
                    </Grid>
                    <Grid item sm={1} />
                    <Grid item sm={1} />
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Declared value of Cargo*</Typography>
                        <TextField size='small' color='warning' placeholder='US $' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Typography variant='body2' color="#fe9e0d">Please provide a full description of the nature of your cargo. *</Typography>
                        <TextField fullWidth color='warning' placeholder="any additional services you may require and questions you may have." minRows={2} multiline />
                    </Grid>
                    <Grid item sm={1} />
                    <Grid item sm={7} />
                    <Grid item xs={12} sm={5} sx={{display:"flex"}}>
                        <button className="secondary-button" style={{background:"none", border:"2px solid #fe9e0d", color:"#fe9e0d", paddingTop:"8px",paddingBottom:"8px"}}>
                            Reset
                        </button>
                        <button className="secondary-button" style={{ marginLeft: "20px",paddingTop:"8px",paddingBottom:"8px" }}>
                            Calculate
                        </button>
                        </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default fclExport