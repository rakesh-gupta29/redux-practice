import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";


import { FavoriteBorder, ShoppingCartOutlined } from '@material-ui/icons'

import { Button } from '../Button'

const useStyles = makeStyles((theme) => ({
    productName: {
        font: 'normal normal normal 3rem Gopher',
        paddingBottom: '20%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem'
        }
    },
    borderBox: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        border: "1px solid #72F5FF",
        // borderRadius: '50% 50% 0% 0%',
        borderRadius: ' 300px 300px 0px 0px'

    },
    hoverEffect: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        // justifyContent:'center',
        alignItems: 'flex-end',
        flexDirection: 'column',
        "&:hover": {
            "& $pro": {
                right: '-25%',
                zIndex: '0',
            }
        }
    },
    whiteBox: {
        width: '90%',
        maxHeight: '100%',
        background: 'white',
        padding: '18%',
        // right:'0%',
        // marginLeft: '10%',
        position: 'relative',
        borderRadius: '300px 300px 0px 0px'
    },
    watchImg: {
        width: '100%',
        maxHeight: '100%',
    },
    
    hoverEffect: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        // justifyContent:'center',
        alignItems: 'flex-end',
        flexDirection: 'column',
        "&:hover": {
            "& $pro": {
                right: '-25%',
                zIndex: '0',
            }
        }
    },

    pro: {
        position: 'absolute',
        zIndex: '-1',
        bottom: '0%',
        right: '0%',
        transition: 'all 500ms ease-in-out',

    },
    icons: {
        width: '40px',
        height: '40px',
        marginTop: '.8rem',
        textAlign: 'center',
        background: 'transparent',
        border: '.1rem solid white',
        borderRadius: '50%',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            background: 'white',
            cursor: 'pointer',
            color: 'black',
            fontWeight: 'bold'
        }
    },


}))

export function Product1(
    {
        productname,
        productimage,
        productprice,
        className,
        style,
    }
) {

    const classes = useStyles();

    const plugins = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })];

    return (
        <>
            <Box className={className} >
                <Box className={classes.productName}>{productname}</Box>
                <Box className={classes.hoverEffect}>

                    <Box className={classes.whiteBox}>
                        <Box className={classes.borderBox}></Box>
                        <img className={classes.watchImg} src={productimage} />
                    </Box>

                    <Box className={classes.pro}>
                        <p className={classes.icons} style={{ border: "2px solid #0230E5" }}><ShoppingCartOutlined /></p>
                        <p className={classes.icons} style={{ border: "2px solid #FF4E00", marginTop:'2rem' }}><FavoriteBorder /></p>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
