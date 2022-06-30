import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { Select, TextArea, Button } from '../../atoms'

const useStyles = makeStyles((theme) => ({
    mainPerson: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        minHeight: '65vh',
    },
    head: {
        width: '100%',
        font: 'normal normal bold 2.2rem Gopher',
        color:'white'
    },
    personForm: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    input: {
        width: '48%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    butn: {
        width: '100%',
        marginTop: '5%',
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
            flexWrap: 'wrap'
        }
    },
    imgBox: {
        width: '25%',
        height: 'fit-content',
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
        // borderBottom: 'none',
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
                fontSize: '1.2rem'
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
    resSelect: {
        width: '100%',
        padding: '3% 2%',
        marginTop: '3%',
        outline: '1px solid grey',
        font: 'normal normal normal 1rem Gopher',
        borderRadius: '2px',
        boxSizing: 'border-box',
        resize: 'vertical',
        background: 'transparent',
        color: '#b1b1b1',
        "& option": {
            font: 'normal normal normal 1rem Gopher',
            color: 'black'
        },
        "& placeholder": {
            font: 'normal normal normal 1rem Gopher',
        }
    },
    label: {
        font: 'normal normal normal 1rem Gopher',
        marginLeft: '0px',
        color: 'grey',

    }
}))

const formsdata = [
    {
        label: 'Choose Return/Exchange item',
        name: 'Return',
        options: [
            {
                name: 'Return',
                value: 'return'
            },
            {
                name: 'Exchange',
                value: 'exchange'
            },

        ]
    },
    {
        label: 'Why are you returning/exchange this? ',
        name: 'Reason for return/exchange item',
        options: [
            {
                name: 'Reason',
                value: 'reason'
            },
            {
                name: 'Reason',
                value: 'reason'
            },
            {
                name: 'Reason',
                value: 'reason'
            },
        ]
    },
    {
        label: 'Method of return payment',
        name: 'B.Rebel Wallet',
        options: [
            {
                name: 'B.Rebel Wallet',
                value: 'wallet'
            },
            {
                name: 'B.Rebel Wallet',
                value: 'wallet'
            },
        ]
    },

]


export function ReturnRequest({ data }) {
    const classes = useStyles()
    return (
        <Box className={classes.mainPerson}>
            <h2 className={classes.head}>Return Request</h2>

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
                            {/* <Star style={{ verticalAlign: 'middle' }} /> Rate & Review Product */}
                        </p>
                    </Box>
                </Box>
                <Box align='left' className={classes.cell2}>
                    {
                        formsdata.map((item, index) => {
                            return (
                                <Box style={{ marginBottom: '2%' }}>
                                    <label className={classes.label} >
                                        {item.label}
                                    </label>

                                    <select
                                        // name={"proName"}
                                        // value={proRegData.proName}
                                        // onChange={onChangePro}
                                        className={classes.resSelect}
                                    >
                                        <option>Please Select</option>
                                        {
                                            item.options.map((opt, index) => {
                                                return (
                                                    <option value={opt.value}>{opt.name}</option>
                                                )
                                            })
                                        }

                                    </select>
                                </Box>
                            )
                        })
                    }

                    <Box style={{ marginTop: '2%' }}>
                        <label className={classes.label}>Comments</label>
                        <textarea className={classes.resSelect} rows='4' placeholder="comments here"></textarea>
                    </Box>
                    
                </Box>
            </Box>

            <Button
                name="SUBMIT"
                className={classes.butn}
                style={{ width: '45%', float: 'right', fontSize: '1.2rem', padding: "1%" }}
            />



        </Box >
    )
}
