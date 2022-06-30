import React, { useEffect } from 'react'
import {
    Box,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableRow,
}
    from "@material-ui/core";
//Routes
import { useParams } from 'react-router-dom'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductStart, setProduct } from '../../../Redux/Action'
//Images
import icon1 from '../../assets/images/Prodetail/Group 7136.png'
import icon2 from '../../assets/images/Prodetail/Group 7137.png'
import icon3 from '../../assets/images/Prodetail/Group 7138.png'

const useStyles = makeStyles((theme) => ({

    mainBox: {
        background: 'black',
        width: "80%",
        margin: '10% auto',
        borderRadius: '2rem',
        padding: '8% 10%'

    },
    specs: {
        font: 'normal normal normal 2.3rem Gopher',
        color: 'white',
        textAlign: 'left',
        marginLeft: '15%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',
            paddingLeft: '0rem',
            width: '100%'
        }
    },
    details: {
        font: 'normal normal normal 2.3rem Gopher',
        color: 'white',
        opacity: '0.5',
        textAlign: 'left',
        marginLeft: '20%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',
            marginLeft: '15%',
        }
    },
    threeIcons: {
        width: '80%',
        margin: '5% auto',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            // width: '90%',
            // flexDirection: 'column',
            flexWrap: 'wrap'

        }
    },
    iconBox: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginTop: '3%',
            border: '1px solid red',
            justifyContent: 'center'
        },
    },
    imgBox: {
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '20%',
            border: '1px solid red',

        },
        "& img": {
            width: '100%',
            maxHeight: '100%',
        }
    },
    info: {
        width: '60%',
        font: 'normal normal normal 2.3rem Gopher',
        color: 'white',
        textAlign: 'left',
        marginLeft: '15%',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            border: '1px solid red',

        }
    }


}))

const specifications = [
    {
        spec: 'Waterproof Rating ',
        data: 'IP68/3ATM'
    },
    {
        spec: 'Sensor',
        data: 'IP68/3ATM'
    },
    {
        spec: 'Battery',
        data: '260 mAh'
    },
    {
        spec: 'Sync Mode',
        data: 'Bluetooth'
    },
    {
        spec: 'Resolution',
        data: '240*280 Pixels'
    },
    {
        spec: 'Display',
        data: '1.69 Inch TFT Capacitive Full Touch Screen'
    },
    {
        spec: 'Working Time',
        data: 'Daily Use: 10-12 Days Standby: 25-30 Days'
    },
    {
        spec: 'Operating Temperature',
        data: '-10°C~50°C'
    },
    {
        spec: ' Packing List',
        data: 'Smart Watch, Magnetic Charging Cable'
    },
    {
        spec: 'Compatible System',
        data: 'iOS 10 or Above, Android 5.0 or Above'
    }
]

export const ProductSpecification = ({ ...ProductDetails }) => {

    const classes = useStyles()
    const { product } = ProductDetails

    return (
        <>
            <Box className={classes.mainBox}>
                <Table className={classes.table}>
                    <TableBody>
                        {
                            specifications.map((item, index) => {
                                return (
                                    <TableRow className={classes.tableRows}>
                                        <TableCell style={{ borderBottom: "none", padding: '0% 0%' }}><h3 className={classes.specs}>{item.spec}</h3></TableCell>
                                        <TableCell style={{ borderBottom: "none" }}><h3 className={classes.details}>{item.data}</h3></TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </Box>

            <Box className={classes.threeIcons}>
                <Box className={classes.iconBox}>
                    <Box className={classes.imgBox}>
                        <img src={icon1} />
                    </Box>
                    <h3 className={classes.info}> Free <br /> Shipping</h3>
                </Box>
                <Box className={classes.iconBox}>
                    <Box className={classes.imgBox}>
                        <img src={icon2} />
                    </Box>
                    <h3 className={classes.info}> 1 Year <br /> Warranty</h3>
                </Box>
            </Box>
        </>
    )
}
