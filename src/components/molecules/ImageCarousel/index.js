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
import { AutoPlay } from "@egjs/flicking-plugins";



const useStyles = makeStyles((theme) => ({
    margin: {
        marginBottom: '20%',
    },
    BoxWidth: {
        height: '90vh',
        width: '80%',
        margin: "0 150px",
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            height: '25vh',
        }
    },
    BoxImages: {
        height: '100%',
        width: '100%',
        borderRadius: '1%'
    }

}))

export function ImageCarousel({
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
            duration: 500,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])

    const Auto = new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })

    const plugins = [Auto, Arrows];

    return (
        <>

            <Box className={classes.margin} data-aos="fade-up">

                <Flicking
                    selector="center"
                    plugins={plugins}
                    align="center"
                    defaultIndex='1'
                    circular={true}
                >
                    <Box className={classes.BoxWidth}>
                        <img className={classes.BoxImages} src={ImageOne} alt="Carousel Images" />
                    </Box>

                    <Box className={classes.BoxWidth}>
                        <img className={classes.BoxImages} src={ImageTwo} alt="Carousel Images" />
                    </Box>

                    <Box className={classes.BoxWidth}>
                        <img className={classes.BoxImages} src={Imagethree} alt="Carousel Images" />
                    </Box>

                    <ViewportSlot>
                        <span className="flicking-arrow-prev"></span>
                        <span className="flicking-arrow-next"></span>
                    </ViewportSlot>

                </Flicking>
            </Box>
        </>
    )
}
