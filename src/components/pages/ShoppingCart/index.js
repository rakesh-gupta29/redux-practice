import React from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { useEffect } from 'react'
import { ScrollTop } from "../../molecules";
import { ShoppingCartTemplates } from '../../Tempelates';
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animation";

export function ShoppingCart() {
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
                <ShoppingCartTemplates />
            </motion.div>
            <Footer />
        </div>
    )
}