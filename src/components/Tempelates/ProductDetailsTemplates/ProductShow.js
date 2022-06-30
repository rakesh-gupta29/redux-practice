import React, { useEffect } from 'react'
//Material ui
import {
    Box,
    makeStyles,
} from "@material-ui/core";
//Atom
import { Button, ButtonOutlined, InputOutlined } from '../../atoms';
//Images
// import pro1 from '../../assets/images/Layer 0.png'
//Routes
import { useParams } from 'react-router-dom'
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchProductStart, setProduct } from '../../../Redux/Action';

// import { Button, ButtonOutlined, InputOutlined, TextAreaOutlined } from '../../atoms';
import pro1 from '../../assets/images/Prodetail/Layer 0.png'

const useStyles = makeStyles((theme) => ({
    Container: {
        width: "80%",
        display: 'flex',
        margin: '12% auto',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },
    watchBox: {
        width: '50%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            flexDirection: 'column',
            margin: '5% 0%'
        }
    },
    watchInbox: {
        width: '13%',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    watchBoxSmall: {
        border: '1px solid #414141',
        margin: '3rem 0%',
        padding: '2rem',
        textAlign: 'center',
        "&:hover": {
            border: '.5px solid #CFFE00'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '5%',
        }
    },
    bigImageBox: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '10% 0%'
        }
    },
    colorShades: {
        width: '80%',
        display: 'flex',
        margin: '3% auto',
        [theme.breakpoints.down('sm')]: {
            width: '70%',
        }

    },
    colCircle: {
        background: 'white',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        margin: '0% 2%'
    },
    specBox: {
        width: '50%',
        "& h2": {
            font: 'normal normal bold 3rem Gopher',
            color: '#CFFE00'
        },
        "& h3": {
            font: 'normal normal normal 1.7rem Ben',
            paddingTop: '3%',
            lineHeight: '1.5'
        },
        "& h4": {
            font: 'normal normal normal 3rem Ben',
            paddingTop: '8%'
        },
        "& h5": {
            font: 'normal normal normal 1.5rem Ben',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            paddingTop: '5%'
        }
    },
    specInBox: {
        width: '65%',
        marginLeft: '10%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginLeft: '0%',
        }
    },
    image: {
        width: '100%',
        maxHeight: '100%',

    },
    btn: {
        width: '40%',
        marginLeft: '1rem',
        [theme.breakpoints.down('sm')]: {
            width: '35%',
        },
        "& a": {
            font: 'normal normal normal 1.8rem Gopher',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.5rem'
            },
        }
    },
    btnOutline: {
        width: '45%',
        [theme.breakpoints.down('sm')]: {
            width: '40%',
        },
        "& a": {
            font: 'normal normal normal 1.8rem Gopher',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.5rem'
            },
        }
    },
}))


const colors = [
    {
        colour: '#fff',
    },
    {
        colour: '#FF4E00',
    },
    {
        colour: '#7800FF',
    },
    {
        colour: '#CFFE00',
    },
    {
        colour: '#FFB7E5',
    },
]

export const ProductShow = ({ ...ProductDetails }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { product } = ProductDetails
    const { productName, productDiscrepation, ProductPrice } = product

    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(
            addProduct(product)
        );
    };

    return (
        <Box className={classes.Container}>

            {/* left images of the products */}

            <Box className={classes.watchBox}>

                <Box className={classes.watchInbox}>
                    <Box className={classes.watchBoxSmall}>
                        <img className={classes.image} src={'https://www.brebel.in/images/GroupGrid2.png'} />
                    </Box>
                    <Box className={classes.watchBoxSmall}>
                        <img className={classes.image} src={pro1} />
                    </Box>
                    <Box className={classes.watchBoxSmall}>
                        <img className={classes.image} src={pro1} />
                    </Box>
                </Box>

                <Box className={classes.bigImageBox}>
                    <img className={classes.image} src={'https://www.brebel.in/images/GroupGrid2.png'} />
                </Box>
                <Box className={classes.colorShades}>
                    {
                        colors.map((item, index) => {
                            return (
                                <Box className={classes.colCircle} style={{ background: `${item.colour}` }}></Box>
                            )
                        })
                    }
                </Box>
            </Box>


            {/* Right Side Box For the Details And prices */}


            <Box className={classes.specBox}>
                <Box className={classes.specInBox}>
                    <h2>{productName}</h2>
                    <h3>{productDiscrepation}</h3>

                    <h4 >From <span style={{ color: '#FF4E00' }}> &#8377; </span> <span style={{ color: '#CFFE00' }}>{ProductPrice}/-</span></h4>
                    <h5 style={{ opacity: '.7' }}>Inclusive of all taxes</h5>

                    <Box style={{ display: 'flex', marginTop: '10%' }}>
                        <ButtonOutlined
                            name="Add to cart"
                            className={classes.btnOutline}
                            onClick={() => handleAddToCart(product)}
                        />
                        <Button
                            name="Buy Now"
                            className={classes.btn}
                        />
                    </Box>
                    <InputOutlined
                        className={classes.textarea}
                        checkbtn="Check"
                        placeholder="Enter your pincode"
                        label="Enter pincode for delivery details"
                    />
                </Box>
            </Box>
        </Box>
    )
}
