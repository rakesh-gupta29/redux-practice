import React, { useEffect } from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { NeckBandTemplates } from '../../Tempelates'
import {
    Box,
} from '@material-ui/core';
import { ScrollTop } from "../../molecules";
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animation";

export function NeckBand() {

    useEffect(() => {
        window.scroll({ top: 1, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <Box className=" noise">
            <ScrollTop />
            <Navbar />
            <motion.div
                variants={pageAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <NeckBandTemplates />
            </motion.div>

            <Footer />
        </Box>
    )
}
