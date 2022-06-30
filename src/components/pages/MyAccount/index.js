import React, { useEffect } from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { MyAccountTemplates } from '../../Tempelates'
import {
    Box,
} from '@material-ui/core';
import { ScrollTop } from "../../molecules";
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animation";
import { useHistory } from 'react-router';
import { auth } from '../../../utils';

export function MyAccount() {

    const history = useHistory()

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
        <Box className=" noise">
            <ScrollTop />
            <Navbar />
            <motion.div
                variants={pageAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <MyAccountTemplates />
            </motion.div>

            <Footer />
        </Box>
    )
}
