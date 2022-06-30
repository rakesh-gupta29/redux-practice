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
    flickMainBox: {
        width: '100%',
        display: 'flex',
    },
    productName: {
        font: 'normal normal normal 3rem Gopher',
        paddingBottom: '20%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem'
        }
    },
    outerBox: {
        width: '100%',
        maxHeight: '100%',

        // marginLeft: '10%',
        position: 'relative',
        // border: "2px solid rgb(30,49,49)",
        // borderRadius: '0% 55% 0% 0%',
        // borderRadius: '0px 150px 0px 0px'
    },
    innerBox: {
        width: '100%',
        height: '100%',
        padding: '18%',
        position: 'absolute',
        bottom: '0%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    watchImg: {
        width: '100%',
        maxHeight: '100%',
        textAlign: 'center'
    },
    triImg: {
        position: 'absolute',
        width: '30%',
        top: '-12%',
        right: '-14%',

    },
    hoverEffect: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        transition: 'transform 500ms ease-in-out',
        "&:hover": {
            
            "& $pro": {
                right: '-25%',
                zIndex: '0',
            },
            "& $innerBox": {
                
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

export function Product3(
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
                    <Box className={classes.outerBox}>
                        <img className={classes.watchImg} src={'./images/Group 7135.svg'} />
                        <Box className={classes.triImg}>
                            <img className={classes.watchImg} src={'./images/Path 6317.svg'} />
                        </Box>

                        <Box className={classes.innerBox}>
                            {/* <img className={classes.watchImg} src={productimage} /> */}
                            <img className={classes.watchImg} src={'./images/smart-watch.png'} />
                        </Box>
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
