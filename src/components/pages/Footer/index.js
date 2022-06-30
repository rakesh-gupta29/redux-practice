import React, { useEffect } from 'react'
import {
    Box,
    makeStyles,
} from '@material-ui/core';
import 'aos/dist/aos.css'
import AOS from 'aos';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { useHistory, Link } from 'react-router-dom';

import FooterImg from '../../../components/assets/images/Footer/Group 6286@2x.png'
import InstagramIcon from '../../../components/assets/images/Footer/instagram.svg'
import FacebookIcon from '../../../components/assets/images/Footer/facebook.svg'
import TwitterIcon from '../../../components/assets/images/Footer/twitter.svg'


const useStyles = makeStyles((theme) => ({
    bImg: {
        width: '100%',
        objectFit: 'contain',
        height: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
    bImgTxt: {
        width: '51%',
        font: 'normal bold normal 6vw Ben-Italic',
        position: 'absolute',
        left: '15%',
        bottom: '5%',
    },
    footBox: {
        width: '100%',
        display: 'inline-block',
        background: '#000F15',
        padding: '5% 0%',
        [theme.breakpoints.up('md')]: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: '0%'
        },
    },
    footBG: {
        background: '#000F15',
        padding: '2% 0%'
    },
    liHead: {
        color: '#CFFE00',
        font: 'normal bold normal 1.5rem Gopher-hairline',
        padding: '1.8rem 5rem',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    liHeadShow: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            color: '#CFFE00',
            font: 'normal bold normal 1.5rem Gopher-hairline',
            padding: '1.8rem 5rem',
        }
    },
    li: {
        color: '#E9E9E9',
        font: 'normal bold normal 1.5rem Gopher-hairline',
        padding: '1.5rem 5rem',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    liShow: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            color: '#E9E9E9',
            font: 'normal bold normal 1.5rem Gopher-hairline',
            padding: '1.5rem 5rem',
        }
    },
    icons: {
        display: 'flex',
        justifyContent: 'center',
        margin: '8% 0% 2% 0%',
        background: '#000F15',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '2rem ',
        }
    },
    fa: {
        width: '54px',
        height: '54px',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        borderRadius: '50%',
        margin: '1%'
    },
    icon: {
        fontSize: '2.8rem',
        alignSelf: 'center'
    },
    copy: {
        font: 'normal normal 300 1.5rem Gopher',
        textAlign: 'center',
        padding: "2rem 0rem",
        overflow: 'hidden',
    },
    act: {
        margin: '2px',
        padding: '5px 1px',
        borderBottom: '1px solid white'
    }


}))

export function Footer() {
    const classes = useStyles()
    const [isShow, IsShow] = React.useState(false)
    const [isShow1, setIsShow1] = React.useState(false)
    const [isShow2, setIsShow2] = React.useState(false)
    const [isShow4, setIsShow4] = React.useState(false)

    const history = useHistory();
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])

    return (
        <footer>
            <Box style={{ position: 'relative' }}>

                <img src={FooterImg} className={classes.bImg} alt="Footer images" data-aos="fade-up" />

                <span className={classes.bImgTxt} data-aos="fade-up"> GROOVE TO YOUR OWN BEATS </span>

            </Box>

            <Box className={classes.footBG}>
                <Box className={classes.footBox} data-aos="fade-up">
                    <ul>
                        <li className={classes.liHead}>Products </li>
                        <li className={classes.li} onClick={() => { history.push('/smartwatch') }}><Link to="/">Smartwatch </Link></li>
                        <li className={classes.li} onClick={() => { history.push('/neckband') }}>Neckband</li>
                         {/* <li className={classes.li} onClick={() => { history.push('/commingsoon') }}>Airpods</li>
                        <li className={classes.li} onClick={() => { history.push('/commingsoon') }}>Airdots</li>
                        <li className={classes.li} onClick={() => { history.push('/commingsoon') }}>Ear Hook</li>
    <li className={classes.li} onClick={() => { history.push('/commingsoon') }}>PC Webcam</li>*/}

                        <li className={classes.liHeadShow} onClick={() => { isShow === false ? IsShow(true) : IsShow(false) }}>Products </li>
                        {isShow ?
                            <>
                                <li className={classes.liShow} onClick={() => { history.push('/smartwatch') }}>Smartwatch</li>
                                {   /*                             <li className={classes.liShow} onClick={() => { history.push('/neckband') }}>Neckband</li>
                                <li className={classes.liShow} onClick={() => { history.push('/commingsoon') }}>Airpods</li>
                                <li className={classes.liShow} onClick={() => { history.push('/commingsoon') }}>Airdots</li>
                                <li className={classes.liShow} onClick={() => { history.push('/commingsoon') }}>Ear Hook</li>
                        <li className={classes.liShow} onClick={() => { history.push('/commingsoon') }}>PC Webcam</li>*/}

                            </>
                            : null
                        }

                    </ul>

                    <ul >
                        <li className={classes.liHead}>We’re there for you!</li>
                        <li className={classes.li} onClick={() => { history.push('/getintouch') }}>Customer Support</li>
                        <li className={classes.li} onClick={() => { history.push('/warranty') }}>Register Warranty</li>
                        {/*<li className={classes.li} onClick={() => { history.push('/returns') }}>Return Policy</li>*/}
                        { /* <li className={classes.li} onClick={() => { history.push('/faqs') }}>FAQs</li>*/}

                        <li className={classes.liHeadShow} onClick={() => { isShow1 === false ? setIsShow1(true) : setIsShow1(false) }}>We’re there for you!</li>
                        {
                            isShow1 ?
                                <>
                                    <li className={classes.liShow} onClick={() => { history.push('/getintouch') }}>Customer Support</li>
                                    <li className={classes.liShow} onClick={() => { history.push('/returns') }} onClick={() => { history.push('/warranty') }}>Register Warranty</li>
                                    {/* <li className={classes.liShow}>Return Policy</li>*/}
                                    { /*  <li className={classes.liShow} onClick={() => { history.push('/faqs') }}>FAQs</li>*/}
                                </> : null
                        }

                    </ul>

                    <ul>
                        <li className={classes.liHead}>Company</li>
                       <li className={classes.li} onClick={() => { history.push('/about') }}>About B.Rebel</li>
                        { /* <li className={classes.li}>News</li>
                    <li className={classes.li}>Blog</li>*/}
                        <li className={classes.li} onClick={() => { history.push('/termsandconditions') }}>Terms of Service</li>
                        {/* <li className={classes.li}>Privacy Policy</li>*/}


                        <li className={classes.liHeadShow} onClick={() => { isShow2 === false ? setIsShow2(true) : setIsShow2(false) }}>Company</li>
                        {
                            isShow2 ?
                                <>
                                    <li className={classes.liShow} onClick={() => { history.push('/about') }}>About B.Rebel</li>
                                    {/*  <li className={classes.liShow}>News</li>
                        <li className={classes.liShow}>Blog</li>*/}
                                    <li className={classes.liShow} onClick={() => { history.push('/termsandconditions') }}>Terms of Service</li>
                                    {/* <li className={classes.liShow}>Privacy Policy</li>*/}
                                </> : null
                        }

                    </ul>
                    <ul>
                        <li className={classes.liHead}>Let’s Connect</li>
                        <li className={classes.li}>Email ID: support@brebel.in</li>
                        <li className={classes.li}>Phone: +91 83598 10101 </li>

                        <li className={classes.liHeadShow} onClick={() => { isShow4 === false ? setIsShow4(true) : setIsShow4(false) }}>Let’s Connect</li>
                        {
                            isShow4 ?
                                <>
                                    <li className={classes.liShow}>Email ID: support@brebel.in</li>
                                    <li className={classes.liShow}>Phone: +91 83598 10101 </li>
                                </>
                                :
                                null
                        }
                    </ul>
                </Box>
                <Box className={classes.icons} >
                    <a href={"https://www.instagram.com/b.rebel_india/"} target="_blank" className={classes.fa} style={{ background: '#FFB7E5' }}><img src={InstagramIcon} className={classes.icon} /></a>
                    <a href={"https://www.facebook.com/BRebel-105626898469065/?ti=as"} target="_blank" className={classes.fa} style={{ background: '#0230E5' }}><img src={FacebookIcon} className={classes.icon} /></a>
                    <a href={"https://twitter.com/brebel_in"} target="_blank" className={classes.fa} style={{ background: '#7800FF' }}><img src={TwitterIcon} className={classes.icon} /></a>
                    <a href={"https://www.linkedin.com/company/b-rebel"} target="_blank" className={classes.fa} style={{ background: ' #0e76a8' }}><LinkedIn className={classes.icon} /></a>
                </Box>

                <h3 className={classes.copy}>Copyright @ 2021 B.Rebel. All Rights Reserved</h3>

            </Box>
        </footer>
    )
}