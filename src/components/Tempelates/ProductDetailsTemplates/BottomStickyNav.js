import { AppBar, Box, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, ButtonOutlined } from '../../atoms'
//Redux
import { useDispatch, } from 'react-redux'
import { addProduct } from '../../../Redux/Action';


const useStyles = makeStyles((theme) => ({
    btmNavBox: {
        width: '100%',
        background: '#2E2E2E',
        position: 'fixed',
        bottom: '0px',
        padding: '1% 0%',
        zIndex: '2'

    },
    btmInbox: {
        width: '65%',
        margin: '0% auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '2%'
        },
        "& p": {
            font: 'normal normal normal 2.5rem Ben',
            "& h6": {
                fontSize: '1.2rem',
                [theme.breakpoints.down('sm')]: {
                    display: 'none'
                },
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.6rem'
            },
        }
    },
    shipBox: {
        width: '60%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '60%',
        },
    },
    ship: {
        font: 'normal normal bold 2.4rem Gopher-hairline',
        marginRight: '4%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    btn: {
        width: '25%',
        paddingLeft: '1%',
        "& a": {
            font: 'normal normal bold 1.6rem Gopher',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.2rem'
            },
        },
        [theme.breakpoints.down('sm')]: {
            width: '45%',
        },
    }

}))

export const BottomStickyNav = ({ ...ProductDetails }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { product } = ProductDetails
    const { ProductPrice } = product

    console.log(ProductDetails)

    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(
            addProduct(product)
        );
    };
    return (
        <>
            <Box className={classes.btmNavBox}>
                <div className={classes.btmInbox}>
                    <p >From <span style={{ color: '#FF4E00' }}> &#8377; </span>
                        <span style={{ color: '#CFFE00' }}> {ProductPrice}/- </span>
                        <br /> <h6>Inclusive of all taxes</h6>
                    </p>
                    <Box className={classes.shipBox} >

                        <ButtonOutlined
                            name="Add to cart"
                            className={classes.btn}
                            onClick={() => handleAddToCart(product)}
                        />

                        <Button
                            name="Buy Now"
                            className={classes.btn}
                        />
                    </Box>
                </div>
            </Box>
        </>
    )
}
