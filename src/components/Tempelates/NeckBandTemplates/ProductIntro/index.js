import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { addProduct, fetchProductsStart } from '../../../../Redux/Action';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({

    carouselBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '85vh',
        [theme.breakpoints.down('md')]: {
            padding: '4rem 0rem'
        },
        [theme.breakpoints.down('sm')]: {

        },
    },

    watchBox: {
        position: 'relative',
        height: '25vh',
        width: '25%',
        top: '0%',
        [theme.breakpoints.down('md')]: {
            height: '20vh',
        },
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },

    watchImg: {
        width: '100%',
        position: 'absolute',
        top: '-110%',
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
            alignItems: 'center',
        }
    },

    textBox: {
        position: 'relative',
        width: '70%',
        display: 'flex',
        justifyContent: 'center',

    },

    watchHead: {
        font: 'normal normal bolder 10vw Gopher-black',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        zIndex: '1',
        [theme.breakpoints.down('md')]: {
            fontSize: '10vw ',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '6rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3.3rem',
        }
    },

    watchHeadShade: {
        font: 'normal normal bolder 10vw Gopher-black',
        background: 'transparent',
        color: 'transparent',
        position: 'absolute',
        top: '8%',
        zIndex: '0',
        WebkitTextStrokeWidth: '.08rem',
        WebkitTextStrokeColor: '#5d5d5d',
        [theme.breakpoints.down('md')]: {
            fontSize: '10vw ',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '6rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3.3rem',
        }
    },

    text3: {
        font: 'normal normal normal 4.5rem Gopher',
        color: '#CFFE00',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal normal 2.5rem Gopher',
        }
    },

    text4: {
        font: 'normal normal normal 5rem Ben',
        textAlign: 'center',
        marginTop: '2%',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal normal 1.5rem Ben',
        }
    },

    text5: {
        font: 'normal normal normal 1.5rem Ben',
        textAlign: 'center',
        paddingBottom: '2.5rem'
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

export function ProductIntro({
    title,
    productImage
}) {

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
                <h1 className={classes.watchHead}>Neck Band 101</h1>
                <span className={classes.watchHeadShade} >Neck Band 101</span>
            </Box>
            <div className={classes.watchBox}>
                <img className={classes.watchImg} src={'./images/neckband/546x546.png'} alt="intro product images" />
            </div>

            <img className={classes.watchImg2} src={'./images/neckband/546x546.png'} alt="intro product images" />


            <Typography variant="h1" className={classes.text4}>From <span style={{ color: '#cffe00' }}>1999 /-</span> </Typography>
            <Typography variant="h1" className={classes.text5}>Inclusive of all taxes </Typography>

            <Box className={classes.BuyCart}>
                <button className={classes.btn}
                    onClick={() => history.push(`/product/${products[1].documentID}`)}>
                    Buy Now
                </button>
                <button className={classes.btn}
                    onClick={() => handleAddToCart(products[1])}>
                    Add Cart
                </button>
            </Box>

        </Box >
    )
}
