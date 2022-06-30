import React, { useEffect } from 'react'
import {
    Box,
    makeStyles,
} from '@material-ui/core';
import 'aos/dist/aos.css'
import AOS from 'aos';
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { AutoPlay, Pagination } from "@egjs/flicking-plugins";



const useStyles = makeStyles((theme) => ({
    margin: {
        marginBottom: '20%',
    },
    flickings:{
        "& .flicking-pagination-bullet":{
            border:'1px solid #707070',
            padding:'.4rem',
            marginBottom:'1rem'
        },
        "& .flicking-pagination-bullet-active":{
           background:'#CFFE00'
        }
    },
    BoxWidth: {
        height: 'fit-content',
        width: '100%',
        // margin: "0 150px",

    },
    BoxImages: {
        height: '100%',
        width: '100%',
    }

}))

export function ImageCarousel2({
    ImageOne,
    ImageTwo,
    Imagethree,
    // ImageFour
}) {
    const classes = useStyles();

    const Arrows = new Arrow()

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 200,
        });
    }, [])

    const Auto = new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })

    const paginationsPlugins = new Pagination({ type: 'bullet' })

    const plugins = [Auto, paginationsPlugins];

    return (
        <>

            <Box className={classes.margin}>

                <Flicking
                    selector="center"
                    plugins={plugins}
                    align="center"
                    defaultIndex='1'
                    circular={true}
                    className={classes.flickings}
                >
                    <Box className={classes.BoxWidth}>
                        <img className={classes.BoxImages} src={ImageOne} alt="Carousel Images" data-aos="fade-right" />
                    </Box>

                    <Box className={classes.BoxWidth}>
                        <img className={classes.BoxImages} src={ImageTwo} alt="Carousel Images" data-aos="fade-up" />
                    </Box>

                    <Box className={classes.BoxWidth}>
                        <img className={classes.BoxImages} src={Imagethree} alt="Carousel Images" data-aos="fade-left" />
                    </Box>

                    <ViewportSlot>
                        {/* <span className="flicking-arrow-prev"></span>
                        <span className="flicking-arrow-next"></span> */}
                        <span className="flicking-pagination "></span>
                    </ViewportSlot>

                </Flicking>
            </Box>
        </>
    )
}
