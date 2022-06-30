import React,{useEffect} from 'react';
import { Navbar, Footer } from '..'
import { ScrollTop } from '../../molecules';
import { LoginTemplates } from '../../Tempelates'
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animation";


export function Login() {
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
        <LoginTemplates />
        </motion.div>
            <Footer />
        </div>
    )
}
