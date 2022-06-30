import React from 'react'
import { useEffect } from 'react';
import { WatchProductTemplate1 } from '../../../Tempelates'
import { Navbar, Footer } from '../../index'
import { ScrollTop } from "../../../molecules";
import { motion } from "framer-motion";
import { pageAnimation } from "../../../Animation";

export function SmartWatch() {
    useEffect(() => {
        window.scroll({ top: 1, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <Navbar />
            <motion.div
                variants={pageAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <WatchProductTemplate1 />
            </motion.div>
            <Footer />
        </div>
    )
}
