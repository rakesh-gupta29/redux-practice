import React from 'react'
import { Box, makeStyles, Grid } from '@material-ui/core';
import feature from '../HomeTempelates/FeaturedCollection/featureData'
import Slide from 'react-reveal/Slide';
import { useHistory } from 'react-router-dom'

import { Product1, Button, Select } from '../../atoms'

const useStyles = makeStyles((theme) => ({
    FeatureBox1: {
        width: '100%',
        height: '100%',
    },
    txtGradient: {
        font: 'normal normal normal 5vw Gopher',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        marginTop: '2%',
        [theme.breakpoints.down('xs')]: {
            fontSize: '3rem',
        },
    },

    lorem: {
        font: 'normal normal normal 2.5vw Ben',
        textAlign: 'center',
        lineHeight: '2',
        [theme.breakpoints.down('sm')]: {
            fontSize: '5vw',
        },
    },
    proBox: {
        position:'relative',

        width: '80%',
        margin: '5% auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            justifyContent: 'center',

        },

    },

    catProduct: {
        width: '20%',
        marginTop:'5%',
        [theme.breakpoints.down('sm')]: {
            width: '70%',
            margin: '10% 5%'
        },
    },
    buyNowBox: {
        width: '100%',
        padding: '5% 0%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    productPrice: {
        font: 'normal normal normal 2.8rem Gopher',
        textAlign: 'right',
        "& span": {
            color: '#FF4E00',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem'
        }
    },
    buyNowBtn: {
        width: '50%',
        "& a": {
            font: 'normal normal normal 20px Ben'

        }
    },
    slct: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        "& select": {
            width: '20%',
            background: 'transparent',
            color: 'white',
            font: 'normal normal normal 1.8rem Gopher',
            outline: 'none',
            border: 'none',
            padding: '0 .5rem',
            [theme.breakpoints.down('sm')]: {
                width: '50%',
                fontSize: '1.4rem'
            }

        },
        "& label": {
            font: 'normal normal normal 1.8rem Gopher',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.4rem'
            }
        }
    }
}))

const options = [
    {
        name: '123',
        value: 'return'
    },

]

export function FeaturedCategory({ data }) {

    const classes = useStyles();

    const history = useHistory();

    return (
        <Box className={classes.FeatureBox1}>

            <h1 className={classes.txtGradient} > Featured Collection  </h1>
            <h1 className={classes.lorem}>The first and best of B.Rebel. Let’s move the world.</h1>



            <Box className={classes.proBox}>
                <Box className={classes.slct} style={{ marginBottom: '2%' }}>
                    <label className={classes.label} >
                        Sort By :
                    </label>

                    <select
                    // name={"proName"}
                    // value={proRegData.proName}
                    // onChange={onChangePro}

                    >
                        <option>Please Select</option>
                        {
                            options.map((opt, index) => {
                                return (
                                    <option value={opt.value}>{opt.name}</option>
                                )
                            })
                        }
                    </select>
                </Box>
                {
                    data.map((item, index) => {
                        return (
                            <Box className={classes.catProduct}>
                                <Product1
                                    productname={item.productname}
                                    productimage={item.productimage}
                                    productprice={item.productprice}
                                />

                                <Box className={classes.buyNowBox}>
                                    <p className={classes.productPrice}>
                                        <span>₹</span> {item.productprice}
                                    </p>
                                    {/* <Button name="Buy Now" className={classes.buyNowBtn} /> */}
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>

        </Box >
    )
}
