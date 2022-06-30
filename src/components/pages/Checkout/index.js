import React from 'react'
import { useEffect } from 'react';
import { CheckoutTemplates } from '../../Tempelates'
import {  Navbar } from "../index";
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animation";
import { auth } from '../../../utils';
import { useHistory } from 'react-router';

export function Checkout() {

    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (!userAuth) {
                history.push('/login')
            }
        })
        window.scroll({ top: 1, left: 0, behavior: 'smooth' });
        return
    }, [1])
    return (
        <div>
            <Navbar/>
            <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
        <CheckoutTemplates />
        </motion.div>  
        </div>
    )
}
