import React from 'react'
import {
    Box,
    makeStyles
} from '@material-ui/core'
// import Carousel from 'react-elastic-carousel';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";


const useStyles = makeStyles((theme) => ({
    flickMainBox:{
        width:'100%',
        // padding:'0% 5%'
    },
    productName: {
        font: 'normal normal normal 3.5rem Gopher',
        padding: '15% 0%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem'
        }
    },
    whiteBox: {
        width: '100%',
        maxHeight: '100%',
        background: 'white',
        padding: '15%',
        position: 'relative',
        borderRadius: '50% 50% 0% 0%',
    },
    watchImg: {
        width: '100%',
        maxHeight: '100%',
    },
    borderBox: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        border: "2px solid #72F5FF",
        borderRadius: '50% 50% 0% 0%',

    }
}))

export function Product(
    {
        data,
        className,
        style,
    }
) {
    const classes = useStyles();
    const plugins = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })];
    console.log(data,"asd")
    return (
        <>

            <Box className={classes.flickMainBox} >
                <Flicking
                    plugins={plugins}
                    align="prev"
                    defaultIndex='0'
                    circular={true}
                >
                    {
                        data.map((item, index) => {
                            return (
                                <Box className={className}>
                                    <Box key={index} className={classes.productName}>{item.name}</Box>

                                    <Box className={classes.whiteBox}>
                                        <Box className={classes.borderBox}></Box>
                                        <img className={classes.watchImg} src={item.productimage} />
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Flicking>
            </Box >

        </>
    )
}
