import React, { useEffect } from 'react';
import { Navbar, Footer } from '..'
import { SignupTemplates } from '../../Tempelates'
import { ScrollTop } from '../../molecules';
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animation";

export function Signup() {
    useEffect(() => {
        window.scroll({ top: 1, left: 0, behavior: 'smooth' });
    }, [1])

    return (
        <div >
            <ScrollTop />
            <Navbar />
            <motion.div
                variants={pageAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <SignupTemplates />
            </motion.div>
            <Footer />
        </div>
    )
}
