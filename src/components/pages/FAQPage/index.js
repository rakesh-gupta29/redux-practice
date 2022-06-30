import React from 'react'
import { useEffect } from 'react';
import { FaqTemplates } from '../../Tempelates'
import { Footer, Navbar } from "../index";

export function FAQPage() {
    useEffect(() => {
        window.scroll({ top: 1, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <Navbar />
            <FaqTemplates />    
            <Footer />
        </div>
    )
}
