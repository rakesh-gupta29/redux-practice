import React, { useEffect } from 'react';
//Material ui
import { Typography, Box, makeStyles } from '@material-ui/core';
//Routes
import { useHistory } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchProductsStart } from '../../../../../Redux/Action';


const useStyles = makeStyles((theme) => ({

    carouselBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // height: '100vh',
        [theme.breakpoints.down('md')]: {
            height: 'fit-content',
            padding: '4rem 0rem'
        },
        [theme.breakpoints.down('sm')]: {
            height: '80vh',
            marginBottom:'10%'
        },
    },

    watchBox: {
        position: 'relative',
        height: '30vh',
        width: '18%',
        top: '0%',
        [theme.breakpoints.down('md')]: {
            height: '28vh',
        },
        [theme.breakpoints.down('sm')]: {
            width: '20%',
            height: '15vh',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },

    watchImg: {
        width: '100%',
        position: 'absolute',
        top: '-60%',
        zIndex: '2',
        [theme.breakpoints.down('md')]: {
            top: '-60%',
        },
        [theme.breakpoints.down('sm')]: {
            top: '-60%',
        }

    },
    watchImg2: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        [theme.breakpoints.down('xs')]: {
            display: 'block',
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },

    textBox: {
        position: 'relative',
        width: '70%',
        display: 'flex',
        justifyContent: 'center'
    },

    watchHead: {
        font: 'normal normal bolder 12vw Gopher-black',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        zIndex: '1',
        [theme.breakpoints.down('md')]: {
            fontSize: '12rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '8rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '4.5rem',
        }
    },

    watchHeadShade: {
        font: 'normal normal bolder 12vw Gopher-black',
        background: 'transparent',
        color: 'transparent',
        position: 'absolute',
        top: '8%',
        zIndex: '0',
        WebkitTextStrokeWidth: '.08rem',
        WebkitTextStrokeColor: '#5d5d5d',
        [theme.breakpoints.down('md')]: {
            fontSize: '12rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '8rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '4.5rem',
        }
    },

    text3: {
        font: 'normal normal normal 4.5rem Gopher',
        color: '#CFFE00',
        [theme.breakpoints.down('md')]: {
            fontSize: '2.5rem',
        }
    },

    text4: {
        padding: '1rem',
        font: 'normal normal normal 5rem Ben',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
        }
    },

    text5: {
        font: 'normal normal normal 2rem Ben',
        textAlign: 'center',
        paddingBottom: '1rem',
        [theme.breakpoints.down('md')]: {
            paddingTop: '1rem',
        }
    },
    btn: {
        font: 'normal normal normal 1.8rem Gopher',
        padding: '1rem 4rem',
        margin: '0% 1rem',
        border: '.2rem solid rgba(255, 78, 0, 0.46)',
        borderRadius: '3rem',
        background: 'transparent',
        color: '#FFFFFF',
        transition: "all 500ms ease-in-out",
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#FF4E00'
        },
    },
}))

export function ProductIntro() {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.productsReducer);
    const { products } = selector

    useEffect(() => {
        dispatch(fetchProductsStart())
    }, [])

    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(
            addProduct(product)
        );
    };

    return (

        <Box className={classes.carouselBox}>

            <Box className={classes.textBox}>
                <h1 className={classes.watchHead}>WATCH 1.0</h1>
                <span className={classes.watchHeadShade} >WATCH 1.0</span>
            </Box>
            <div className={classes.watchBox}>
                <img className={classes.watchImg} src={'./images/pink.png'} alt="intro product images" />
            </div>

            <img className={classes.watchImg2} src={'./images/pink.png'} alt="intro product images" />

            <div className={classes.btnBox}>
                <Typography variant="h1" className={classes.text4}>From <span style={{ color: '#cffe00' }}>4100 /-</span> </Typography>
                <Typography variant="h1" className={classes.text5}>Inclusive of all taxes </Typography>
            </div>
            <Box className={classes.BuyCart}>
                <button className={classes.btn} onClick={() => history.push(`/product/${products[0].documentID}`)}>
                    Buy Now
                </button>
                <button className={classes.btn}
                    onClick={() => handleAddToCart(products[0])}
                >
                    Add Cart
                </button>
            </Box>

        </Box >
    )
}
