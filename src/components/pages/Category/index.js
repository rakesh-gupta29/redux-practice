import React from 'react'
import { useEffect } from 'react';
import { Footer, Navbar } from "../index";
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animation";
import { CategoryTemplates } from "../../Tempelates"


export function Category() {
    useEffect(() => {
        window.scroll({ top: 1, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <Navbar />
            <motion.div
                variants={pageAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
            >


            </motion.div>

            <CategoryTemplates />
            <Footer />
        </div>
    )
}
