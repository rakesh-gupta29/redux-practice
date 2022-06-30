import React from 'react'
import { makeStyles, Box } from '@material-ui/core';
import { Navbar, Footer } from "../index";
import { useEffect } from 'react';
import Slide from 'react-reveal/Slide';
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animation";

const useStyles = makeStyles((theme) => ({
    comeing: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '500%',
        [theme.breakpoints.down('md')]: {
            fontSize: '100%',
        }
    }
}))

export function CommingSoon() {
    const classes = useStyles()
    useEffect(() => {
        window.scroll({ top: 1, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <Box>
            <Navbar />
            <motion.div
                variants={pageAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <Box className={classes.comeing}>
                    <h1>
                        <Slide right>
                            Coming Soon
                        </Slide>
                    </h1>
                </Box>
            </motion.div>
            <Footer />
        </Box>
    )
}
