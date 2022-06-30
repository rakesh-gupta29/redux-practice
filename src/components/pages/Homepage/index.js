import React, { useEffect, Suspense } from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { HomeTempelates } from '../../Tempelates'
import './homepage.css'
import { ScrollTop } from "../../molecules";
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animation";


export function Homepage() {
    useEffect(() => {
        window.scroll({ top: 1, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div className="noise">

            <ScrollTop />
            <Navbar />
            <motion.div
                variants={pageAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <HomeTempelates />

            </motion.div>
            <Footer />
        </div>
    )
}
