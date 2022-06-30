import React, { useEffect, useState } from 'react'
//Navbar
import { Navbar } from '../Navbar'
//Atom
import { NewInput, Select, Button, Radioinput } from '../../atoms';
//Material ui
import { makeStyles, Grid, Box, Typography } from '@material-ui/core';
//Firebase
import { firestore } from '../../../utils'
//Framer
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animation";
//Toastify
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//Style
const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
    },
    mainBackground: {
        width: '80%',
        background: "black",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5% 0%',
        padding: '5%',

    },
    mainInBox: {
        width: '40%',
        margin: '5% 0%',
        [theme.breakpoints.down('md')]: {
            width: '50%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        },
    },
    regTitle: {
        font: 'normal normal normal 4rem Gopher',
        color: '#CFFE00',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem'
        }
    },
    regSubTitle: {
        font: 'normal normal bold 2.2rem Gopher-hairline ',
        lineHeight: '2.5',
        textAlign: 'center',
        color: 'white',
        padding: '2rem 0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.6rem',
            lineHeight: '2',
        }
    },
    regtxt: {
        font: 'normal normal bold 1.5rem Gopher-hairline ',
        width: '60%',
        lineHeight: '2',
        textAlign: 'center',
        color: '#B1B1B1',
        padding: '2rem 0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',
            width: '100%'
        }
    },
    mainInputContainer: {
        display: 'flex',
        justifyContent: 'space-around',

    },
    check: {
        padding: '3rem 0rem .8rem 0rem',
        font: 'normal normal normal 1.6rem Roboto',
    },
    registerBtnBox: {
        display: 'flex',
        justifyContent: 'center'
    },
    registerBtn: {
        textAlign: 'center'
    },
    resSelect: {
        width: '100%',
        padding: '1.3rem',
        border: ' 1px solid #2E2E2E',
        borderRadius: '2px',
        boxSizing: 'border-box',
        resize: 'vertical',
        background: 'transparent',
        color: '#b1b1b1',
    },
    label: {
        font: 'normal normal normal 1.3rem Roboto',
        marginLeft: '0px',
        display: 'inline-block',
        padding: '1rem 0rem .8rem 0rem',

    }
}))

export function ProductRegistrationpage() {

    const classes = useStyles()

    const [agree, setAgree] = useState("yes");

    const [proRegData, setproRegData] = useState({
        proName: '',
        proPurchase: '',
        orderNo: '',
        fullName: '',
        phoneNo: '',
        dop: '',
        email: '',
        address: '',
        city: '',
        state: '',
        radio: 'yes'
    })

    let name, value

    const onChangePro = (event) => {
        name = event.target.name
        value = event.target.value
        setproRegData({ ...proRegData, [name]: value })
    }

    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));

    const handle = async (event) => {
        event.preventDefault()

        const {
            proName,
            proPurchase,
            orderNo,
            fullName,
            phoneNo,
            dop,
            email,
            address,
            city,
            state,
            radio,
        } = proRegData


        if (
            !proName ||
            !proPurchase ||
            !orderNo ||
            !fullName ||
            !phoneNo ||
            !dop ||
            !email ||
            !address ||
            !city ||
            !state ||
            !radio
        ) {
            toast.error("Please fill in all the required fields !");
        } else {
            return new Promise((resolve, reject) => {
                firestore
                    .collection('Warranty')
                    .doc()
                    .set(proRegData)
                    .then(() => {
                        toast.promise(
                            resolveAfter3Sec,
                            {
                                pending: 'Please Wait',
                                success: 'Success Full 👌',
                                error: 'Somthing Went Wrong 🤯'
                            }
                        )
                        resolve();
                        setproRegData({
                            proName: '',
                            proPurchase: "",
                            orderNo: '',
                            fullName: '',
                            phoneNo: '',
                            dop: '',
                            email: '',
                            address: '',
                            city: '',
                            state: '',
                            radio: "yes",
                        })
                    })
                    .catch(err => {
                        toast.error("Somthing Went Wrong");
                        reject(err);
                    })
            })


        }
    }

    useEffect(() => {
        window.scroll({ top: 1, left: 0, behavior: 'smooth' });
    }, [1])

    return (
        <>
            <Navbar />

            <motion.div
                variants={pageAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <Box className={classes.mainBox}>
                    <Box className={classes.mainBackground}>
                        <h1 className={classes.regTitle}> Product Registration </h1>

                        <h2 className={classes.regSubTitle}>Kindly enter your product details and avail 1-year warranty on your purchase.</h2>

                        <h3 className={classes.regtxt}> Note - Details are to be filled mandatory regardless of the channel of purchase to avail the warranty. All Crossbeats products are covered under 12 months of the manufacturer's warranty. Only products purchased on Crossbeats authorized online/offline stores are eligible for the warranty claim. Customers are requested to keep the carton box and package for hassle-free warranty/return entitlement. Kindly register within 10 days of purchase. </h3>

                        <Box className={classes.mainInBox}>

                            <Grid className={classes.mainInputContainer} item xs={12} container >

                                <Grid className={classes.leftContainer} item xs={12} sm={5} >
                                    {/* <Grid className={classes.watchBox1} item xs={12} sm={12} >
                                        <Select
                                            label="Product Name"
                                            name={"proName"}
                                            // value={proRegData.proName}
                                            onChange={onChangePro}
                                            required="*"
                                            options={[
                                                { item: "smart watch", val: "smartwatch" },
                                                { item: "Neck Band", val: "neckband" },
                                            ]}
                                        />
                                        </Grid>*/}

                                    <Grid className={classes.watchBox1} item xs={12} sm={12} >
                                        <Box style={{
                                            "& input::placeholder": {
                                                font: 'normal normal normal 1.3rem Gopher',
                                            }
                                        }}>
                                            <label className={classes.label} >
                                                Product Name
                                                <span style={{ color: 'red', fontSize: '1.5rem' }}> *</span>
                                            </label>

                                            <select
                                                name={"proName"}
                                                value={proRegData.proName}
                                                onChange={onChangePro}
                                                className={classes.resSelect}
                                            >
                                                <option selected>Please Select</option>
                                                <option value="smartwatch">Smart watch</option>
                                                <option value="neckband">Neck Band</option>

                                            </select>
                                        </Box>
                                    </Grid>
                                    <Grid className={classes.watchBox1} item xs={12} sm={12} >
                                        <NewInput
                                            label="Order Number"
                                            placeholder="Enter your order number"
                                            required="*"
                                            name="orderNo"
                                            type="number"
                                            value={proRegData.orderNo}
                                            onChange={onChangePro}
                                        />
                                    </Grid>
                                    <Grid className={classes.watchBox1} item xs={12} sm={12} >
                                        <NewInput
                                            label="Phone Number"
                                            placeholder="Enter your phone number"
                                            required="*"
                                            name="phoneNo"
                                            type="number"
                                            value={proRegData.phoneNo}
                                            onChange={onChangePro}
                                        />
                                    </Grid>
                                    <Grid className={classes.watchBox1} item xs={12} sm={12} >
                                        <NewInput
                                            label="Email ID"
                                            placeholder="Enter Your Email ID"
                                            required="*"
                                            type="email"
                                            name="email"
                                            value={proRegData.email}
                                            onChange={onChangePro}
                                        />
                                    </Grid>
                                    <Grid className={classes.watchBox1} item xs={12} sm={12} >
                                        <NewInput
                                            label="City"
                                            placeholder="City"
                                            required="*"
                                            name="city"
                                            value={proRegData.city}
                                            onChange={onChangePro}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid className={classes.rightContainer} item xs={12} sm={5} >

                                    <Grid className={classes.contentInBox} item xs={12}>
                                        <>
                                            <label className={classes.label}>
                                                Place of Purchase
                                                <span style={{ color: 'red', fontSize: '1.5rem' }}> *</span>
                                            </label>

                                            <select
                                                name="proPurchase"
                                                value={proRegData.proPurchase}
                                                onChange={onChangePro}
                                                className={classes.resSelect}
                                            >
                                                <option selected>Please Select</option>
                                                <option value="amazon">Amazon</option>
                                                <option value="flipkart">Flipkart</option>
                                                <option value="other">Other</option>

                                            </select>
                                        </>
                                    </Grid>
                                    <Grid className={classes.contentInBox} item xs={12}>
                                        <NewInput
                                            label="Full Name"
                                            placeholder="Enter your full name "
                                            required="*"
                                            name="fullName"
                                            value={proRegData.fullName}
                                            onChange={onChangePro}
                                        />

                                    </Grid>
                                    <Grid className={classes.contentInBox} item xs={12}>
                                        <NewInput
                                            label="Date of Purchase"
                                            placeholder="Date of Purchase"
                                            required="*"
                                            type="date"
                                            name="dop"
                                            value={proRegData.dop}
                                            onChange={onChangePro}
                                        />

                                    </Grid>
                                    <Grid className={classes.contentInBox} item xs={12}>
                                        <NewInput
                                            label="Address"
                                            placeholder="Address"
                                            required="*"
                                            name="address"
                                            value={proRegData.address}
                                            onChange={onChangePro}
                                        />
                                    </Grid>
                                    <Grid className={classes.contentInBox} item xs={12}>
                                        {/* <Select
                                            label="State"
                                            required="*"
                                            name="state"
                                            value={proRegData.state}
                                            onChange={onChangePro}
                                            options={[
                                                { item: "Andhra Pradesh", val: "AndhraPradesh" },
                                                { item: "Arunachal Pradesh", val: "ArunachalPradesh" },
                                                { item: "Assam", val: "Assam" },
                                                { item: "Bihar", val: "Bihar" },
                                                { item: "Chhattisgarh", val: "Chhattisgarh" },
                                                { item: "Goa", val: "Goa" },
                                                { item: "Gujarat", val: "Gujarat" },
                                                { item: "Haryana", val: "Haryana" },
                                                { item: "Himachal Pradesh", val: "HimachalPradesh" },
                                                { item: "Jharkhand", val: "Jharkhand" },
                                                { item: "Karnataka", val: "Karnataka" },
                                                { item: "Kerala", val: "Kerala" },
                                                { item: "Madhya Pradesh	", val: "MadhyaPradesh	" },
                                                { item: "Maharashtra", val: "Maharashtra" },
                                                { item: "Manipur", val: "Manipur" },
                                                { item: "Meghalaya	", val: "Meghalaya" },
                                                { item: "Mizoram", val: "Mizoram" },
                                                { item: "Nagaland", val: "Nagaland" },
                                                { item: "Odisha", val: "Odisha" },
                                                { item: "Punjab", val: "Punjab" },
                                                { item: "Rajasthan", val: "Rajasthan" },
                                                { item: "Sikkim", val: "Sikkim" },
                                                { item: "Tamil Nadu	", val: "TamilNadu	" },
                                                { item: "Telangana", val: "Telangana" },
                                                { item: "Tripura", val: "Tripura" },
                                                { item: "Uttar Pradesh", val: "UttarPradesh" },
                                                { item: "Uttarakhand", val: "Uttarakhand" },
                                                { item: "West Bengal", val: "WestBengal" },
                                            ]}
                                        />*/}
                                        <>
                                            <label className={classes.label}>
                                                Product Name
                                                <span style={{ color: 'red', fontSize: '1.5rem' }}> *</span>
                                            </label>

                                            <select
                                                name="state"
                                                value={proRegData.state}
                                                onChange={onChangePro}
                                                className={classes.resSelect}
                                            >
                                                <option value="AndhraPradesh">Andhra Pradesh</option>
                                                <option value="ArunachalPradesh">Arunachal Pradesh</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Haryana">Haryana</option>
                                                <option value="HimachalPradesh">Himachal Pradesh</option>
                                                <option value="Jharkhand">Jharkhand</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Kerala">Kerala</option>
                                                <option value="MadhyaPradesh">Madhya Pradesh</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Manipur">Manipur</option>
                                                <option value="Meghalaya">Meghalaya</option>
                                                <option value="Mizoram">Mizoram</option>
                                                <option value="Nagaland">Nagaland</option>
                                                <option value="Odisha">Odisha</option>
                                                <option value="Punjab">Punjab</option>
                                                <option value="Rajasthan">Rajasthan</option>
                                                <option value="Sikkim">Sikkim</option>
                                                <option value="TamilNadu">Tamil Nadu</option>
                                                <option value="Telangana">Telangana</option>
                                                <option value="Tripura">Tripura</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="Uttarakhand">Uttarakhand</option>
                                                <option value="West Bengal">West Bengal</option>

                                            </select>
                                        </>
                                    </Grid>
                                </Grid>

                            </Grid>

                            <Box style={{ padding: '2%', margin: '2%' }}>
                                <Typography className={classes.check}> Have you used the product? <span style={{ color: 'red', fontSize: '1.5rem' }}> * </span> </Typography>
                                <Radioinput
                                    type="radio"
                                    label='Yes'
                                    checked={agree === "yes"}
                                    name="radio"
                                    value="yes"
                                    onChange={(event) => setAgree(event.target.value)}
                                />
                                <Radioinput
                                    type="radio"
                                    label='No'
                                    checked={agree === "no"}
                                    name="radio"
                                    value="no"
                                    onChange={(event) => setAgree(event.target.value)}
                                />
                            </Box>

                            <Box className={classes.registerBtn}>
                                <Button name="submit" style={{ width: "200px" }} onClick={handle} />
                            </Box>

                        </Box>
                    </Box>
                    <ToastContainer />
                </Box>
            </motion.div>

        </>
    )
}
