import React, { useEffect } from 'react'
import { Navbar, Footer } from '../index'
import { AboutTemplates } from '../../Tempelates'

export function About() {
    useEffect(() => {
        window.scroll({ top: 1, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <Navbar/>
                <AboutTemplates/>
            <Footer/>
        </div>
    )
}
