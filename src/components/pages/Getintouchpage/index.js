import React from 'react'
import { useEffect } from 'react';
import { GetintouchTemplates } from '../../Tempelates'
import { Navbar, Footer } from '../index'
import { ScrollTop } from "../../molecules";
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animation";


export function Getintouch() {
    useEffect(() => {
        window.scroll(0, 0, { behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <Navbar />
            <motion.div
                variants={pageAnimation}
                initial="hidden"
                animate="show"
                exit="exit">
                <GetintouchTemplates />
            </motion.div>

            <Footer />
        </div>
    )
}
