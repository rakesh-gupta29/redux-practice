import React from 'react'
import { Box, makeStyles, Grid } from '@material-ui/core';
import feature from '../HomeTempelates/FeaturedCollection/featureData'
import Slide from 'react-reveal/Slide';
import { useHistory } from 'react-router-dom'

import { Product3, Button } from '../../atoms'

const useStyles = makeStyles((theme) => ({
    FeatureBox1: {
        width: '100%',
        height: '100%',
    },
    proBox: {
        width: '80%',
        margin: '5% auto',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexWrap:'wrap',
            justifyContent: 'center',
            
        },
    },
    catProduct: {
        width: '20%',
        [theme.breakpoints.down('sm')]: {
            width:'70%',
            margin:'10% 5%'
        },
    },
    buyNowBox: {
        width: '100%',
        padding:'5% 0%',
        // height:'fit-content',
        display:'flex',
        justifyContent:'flex-end',
    },
    productPrice: {
        font: 'normal normal normal  2.8rem Gopher',
        textAlign:'right',
        "& span": {
            color: '#FF4E00',
        }
    },
    buyNowBtn: {
        width: '50%',
        "& a": {
            font:'normal normal normal 20px Ben'
        
        }
    }
}))

export function FeaturedCategory3({ data }) {

    const classes = useStyles();

    const history = useHistory();

    return (

            <Box className={classes.proBox}>
                {
                    data.map((item, index) => {
                        return (
                            <Box className={classes.catProduct}>
                                <Product3
                                    productname={item.productname}
                                    productimage={item.productimage}
                                    productprice={item.productprice}
                                />

                                <Box className={classes.buyNowBox}>
                                    <h1 className={classes.productPrice}>
                                        <span>₹</span> {item.productprice}
                                    </h1>
                                    {/* <Button name="Buy Now" className={classes.buyNowBtn} /> */}

                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>

    )
}
