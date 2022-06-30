import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos';
import ScrollToTop from "react-scroll-to-top";

export function ScrollTop() {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 50,
        });
    }, [])

    return (
        <ScrollToTop data-aos="fade-up"
            smooth
            style={{
                border:'1px solid red',
                borderRadius: "50%",
                padding: '5px',
                background: 'black',
                boxShadow: 'none'
            }}
            color="white"
        />
    )
}
