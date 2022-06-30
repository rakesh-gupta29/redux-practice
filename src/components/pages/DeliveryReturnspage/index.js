import React from 'react'
import { DeliveryReturnsTemplates } from '../../Tempelates'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { useEffect } from 'react'
import { ScrollTop } from "../../molecules";

export function DeliveryReturns() {
    useEffect(() => {
        window.scroll({ top: 1, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <Navbar />
            <DeliveryReturnsTemplates />
            <Footer />
        </div>
    )
}
