import React from 'react'
import { Box, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { ButtonOutlined, Button } from '../../atoms'
import { ArrowForward, Star } from '@material-ui/icons'
// import { orderDetails2 as data } from '../../../Data'

const useStyles = makeStyles((theme) => ({
    mainOrders: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        minHeight: '70vh',

    },
    head: {
        width: '100%',
        font: 'normal normal bold 24px/24px Gopher',
        display: 'flex'
    },
    arrowForward: {
        font: 'normal normal bold 1.2rem Access',
        alignSelf: 'center',
        margin: '0% 1%',
        color: 'white'
    },
    personForm: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap'
        },
    },
    cell1: {
        width: '60%',
        font: 'normal normal 1.2rem Gopher',
        display: 'flex',
        color: '#fff',
        lineHeight: '1.5',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            flexWrap:'wrap'
        }
    },
    imgBox: {
        width: '25%',
        display: 'flex',
        alignItems: 'center',
        padding: '1rem',
        marginRight: '1rem',
        background: 'white',
        [theme.breakpoints.down('sm')]: {
            width: '30%',
            padding: '5%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            padding: '5%',
            marginRight: '0',
        },
        "& img": {
            width: '100%',
            maxHeight: '100%',
        },
    },
    cell2: {
        color: '#fff',
        width: '40%',
        textAlign: 'right',
        borderBottom: 'none',
        font: 'normal normal 1.5rem Gopher',
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            textAlign: 'left',
            marginTop: '5%'
        }

    },
    tbData: {
        width: '100%',
        font: 'normal normal normal 1.1rem Gopher',
        lineHeight: '1.8',
        color: '#505151',
        alignSelf: 'center',
        "& i": {
            color: 'white',
            font: ' normal normal bold 1.8rem Gopher',
            [theme.breakpoints.down('sm')]: {
                fontSize:'1.2rem'
            }
        }
    },
    tbDataWhite: {
        width: '100%',
        font: 'normal normal normal 1.1rem Gopher',
        lineHeight: '1.8',
        color: 'white',
        alignSelf: 'center',
    },
    startRatings: {
        color: '#CFFE00',
        paddingTop: '1%'
    },
    butnOut: {
        width: '100%',
        marginTop: '5%',
    },
    statusMeter: {
        border: '2px solid yellow',
        height: '10vh'
    },
    btnBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            justifyContent: "space-around",
            alignItems: 'center',
            width: '100%',
        }
    },
    btn: {
        width: '35%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
            width: '80%',
            margin: '2% 0%'
        },
        "& a": {
            font: 'normal normal normal 1.2rem Gopher',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1rem',
            },
        }
    },
    pastHistory: {
        width: '100%',
        margin: '5% 0%',
        font: 'normal normal 1.5rem Gopher',
    },
    

}))



export function ViewDetails({data}) {
    const classes = useStyles()
    return (
        <Box className={classes.mainOrders} >
            <h2 className={classes.head}>
                <p className={classes.tbData} style={{ fontWeight: 'bold' }}> My Orders <ArrowForward className={classes.arrowForward} />
                    <i>{data[0].productname}</i>
                </p>
            </h2>

            <hr style={{ margin: '2% 0%', opacity: '.8' }} />

            <Box className={classes.personForm}>
                <Box align='left' className={classes.cell1}>
                    <Box className={classes.imgBox} >
                        <img src={data[0].productimage} alt="Product" />
                    </Box>
                    <Box>
                        <p className={classes.tbData} style={{ color: 'white' }}> {data[0].productname} </p>

                        <p className={classes.tbData}> {data[0].productdetails} </p>

                        <p className={classes.tbData}>Sold by -
                            <span className={classes.tbDataWhite}> {data[0].shopname}</span>
                        </p>

                        <p className={classes.tbDataWhite}> {data[0].productprice}</p>

                        <p className={classes.startRatings}>
                            <Star style={{ verticalAlign: 'middle' }} /> Rate & Review Product
                        </p>
                    </Box>
                </Box>
                <Box align='left' className={classes.cell2}>
                    <p >Delivery Address</p>

                    <p className={classes.tbDataWhite} style={{ marginTop: '3%' }}>{data[0].customername}</p>

                    <p className={classes.tbData}>{data[0].customeradd1}</p>
                    <p className={classes.tbData}>{data[0].customeradd2}</p>

                    <p className={classes.tbData}> Phone - {data[0].customerphone}</p>
                </Box>
            </Box>

            {/* <Box className={classes.statusMeter}>

            </Box> */}

            <Box className={classes.btnBox}>
                <ButtonOutlined className={classes.btn} style={{ marginRight: '1rem' }} name='CANCEL ORDER' />
                <Button className={classes.btn} name='CONTINUE SHOPPING' />
            </Box>


            <Box className={classes.pastHistory}>
                <p className={classes.pastHead}>Past History</p>
                <br />
                <hr />
                <br />
                <p className={classes.tbData}>25 Aug, 23:41</p>
                <p className={classes.tbDataWhite}>Order For Rebel 360 2nd Generation Smart Watch Placed</p>
                <br />

                <p className={classes.tbData}>25 Aug, 23:41</p>
                <p className={classes.tbDataWhite}>Order For Rebel 360 2nd Generation Smart Watch Placed</p>
                <br />

                <p className={classes.tbData}>25 Aug, 23:41</p>
                <p className={classes.tbDataWhite}>Order For Rebel 360 2nd Generation Smart Watch Placed</p>

            </Box>

        </Box >
    )
}
