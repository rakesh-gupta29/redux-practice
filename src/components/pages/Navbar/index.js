import React, { useEffect, useState } from 'react';
//Material ui
import {
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    makeStyles,
    Box
} from '@material-ui/core';
//Css
import './Navbar.css'
//Routes
import { useHistory, NavLink } from 'react-router-dom';
//Redux
import { useSelector } from 'react-redux'
import { selectCartItemsCount } from '../../../Redux/Selector'
//Images
import bg from '../../../components/assets/images/Group 6236.jpg'
import Logo from '../../../components/assets/images/Navbar/Group 6068.svg'
import icon1 from '../../../components/assets/images/Navbar/Group 7142.svg'
import icon2 from '../../../components/assets/images/Navbar/Group 6277.svg'
import icon3 from '../../../components/assets/images/Navbar/Group 6276.svg'


const useStyles = makeStyles((theme) => ({
    nav: {
        boxShadow: 'none'
    },
    responsive: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        margin: '0 auto',

    },
    navBgImage: {
        backgroundImage: `url('${bg}')`,
    },
    navBgTransparent: {
        background: 'transparent',
        boxShadow: 'none',
    },
    logo: {
        width: '8rem',
        transition: "all 500ms ease-in-out",
        '&:hover': {
            transform: 'scale(1.2)',
        },
        [theme.breakpoints.up('lg')]: {
            width: '15rem',
        },
    },
    u: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyle: 'none',
        // display: 'none', 
    },
    lio: {
        padding: '0 1rem',
        color: 'white',
        font: 'normal 2.2rem Ben',
        cursor: 'pointer',
        transition: "all 500ms ease-in-out",
        '&:hover': {
            transform: 'scale(1.2)',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem'
        }
    },

    shopimg: {
        width: '5rem',
        [theme.breakpoints.down('sm')]: {
            width: '2.5rem',
        },
    },

    title: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },

    ul: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyle: 'none',
        color: "black",
    },

    lios: {
        display: 'none',
        // fontSize: '1.2rem',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            color: 'black',
            padding: '2rem 1rem',
            fontSize: '1.5rem',
            font: 'normal 1.2rem Ben',
        }
    },

    act: {
        margin: '2px',
        padding: '5px 1px',
        borderBottom: '1px solid white'
    },
    cartBox: {
        position: 'relative',
    },
    Cart: {
        position: 'absolute',
        right: '10%',
        top: '0%',
        fontWeight: 'bolder',
        fontSize: '2.5rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',
        }
    },
    rahul: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    }

}));

const mapState = (state) => ({
    currentUser: state.userReducer.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
});


export function Navbar() {

    const classes = useStyles();

    const { currentUser, totalNumCartItems } = useSelector(mapState);

    const [mobilemenu, setMobilemenu] = useState(null)

    const isMobileMenuOpen = Boolean(mobilemenu);

    const admin = localStorage.getItem('data')

    // const user = "admin.includes('admin')"
    // State for changing th navbar background on scroll
    const [navBackground, setnavBackground] = useState('navBgTransparent')
    const navref = React.useRef()
    navref.current = navBackground

    const openMobileMenu = (event) => {
        setMobilemenu(event.currentTarget);
    };

    const closeMobileMenu = () => {
        setMobilemenu(null);
    };

    const history = useHistory();

    const mobileMenu = (
        <Menu
            anchorEl={mobilemenu}
            id="menuId"
            keepMounted
            open={isMobileMenuOpen}
            onClose={closeMobileMenu}
        >
            <ul className={classes.ul}>
                <li className={classes.lios} onClick={closeMobileMenu} onClick={() => { history.push("/smartwatch") }}>Smartwatch</li>
                <li className={classes.lios} onClick={closeMobileMenu} onClick={() => { history.push("/neckband") }}>NeckBand</li>
                {    /* <li className={classes.lios} onClick={closeMobileMenu} onClick={() => { history.push("/commingsoon") }}>Airpods</li>
                <li className={classes.lios} onClick={closeMobileMenu} onClick={() => { history.push("/commingsoon") }}>Airdots</li>
                <li className={classes.lios} onClick={closeMobileMenu} onClick={() => { history.push("/commingsoon") }}>Ear Hook</li>
    <li className={classes.lios} onClick={closeMobileMenu} onClick={() => { history.push("/commingsoon") }}>PC Webcam</li>*/}
            </ul>
        </Menu>
    )

    useEffect(() => {

        const handleScroll = () => {
            const show = window.scrollY >= 80

            if (show) {
                setnavBackground('navBgImage')
            } else {
                setnavBackground('navBgTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={classes.nav}>
            <AppBar
                position="fixed"
                color="transparent"
                // elevation={0}
                className={classes[navref.current]}>
                <Toolbar className={classes.responsive}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src={Logo} className={classes.logo} alt="logo" onClick={() => { history.push('/') }} />
                    </IconButton>
                    <div variant="h6" className={classes.title}>
                        <ul className={classes.u}>
                            <li className={classes.lio} ><NavLink to="/smartwatch" activeClassName={classes.act}>Smartwatch</NavLink></li>
                            <li className={classes.lio} ><NavLink to="/neckband" activeClassName={classes.act}>Neckband</NavLink></li>
                            {/*<li className={classes.lio} ><NavLink to="/commingsoon" activeClassName={classes.act}>Airpods</NavLink></li>
                            <li className={classes.lio} ><NavLink to="/commingsoon" activeClassName={classes.act}>Airdots</NavLink></li>
                            <li className={classes.lio} ><NavLink to="/commingsoon" activeClassName={classes.act}>Earhook</NavLink></li>
                                <li className={classes.lio} ><NavLink to="/commingsoon" activeClassName={classes.act}>Webcam</NavLink></li>*/}
                            </ul>
                        </div>

                    <ul className={classes.u}>
                        <li className={classes.lio}>
                            <Box className={classes.cartBox}>
                                <img className={classes.shopimg} src={icon1} alt="Cart" onClick={() => { history.push('/shoppingcart') }} />
                                <p className={classes.Cart} onClick={() => { history.push('/shoppingcart') }}>{totalNumCartItems > 0 ? totalNumCartItems : null}</p>
                            </Box>
                        </li>
                        <li className={classes.lio}><img className={classes.shopimg} src={icon2} alt="User" onClick={() => { currentUser ? history.push('/myaccount') : history.push('/login') }} /></li>
                        {/*  
                <li className={classes.lios}><img className={classes.shopimg} src={icon3} alt="Menu"
                            onClick={openMobileMenu} /></li>
*/}
                        {!admin || !admin.includes('admin') ? "" : <li className={classes.lio} onClick={() => { history.push('/admin') }}>Admin</li>}

                    </ul>
                    <ul className={classes.rahul}>
                        {/*  <li className={classes.lio}><img className={classes.shopimg} src={"./images/Group 7142.svg"} alt="Cart" onClick={() => { history.push('/wishlist') }}/></li>
                    <li className={classes.lio}><img className={classes.shopimg} src={"./images/Group 6277.svg"} alt="User" onClick={() => { history.push('/login') }}/></li>
*/}
                        <li className={classes.lios}>
                            <img className={classes.shopimg} src={"./images/Group 6276.svg"} alt="Menu"
                                onClick={openMobileMenu} /></li>

                    </ul>

                </Toolbar>
            </AppBar>
            {mobileMenu}
        </div>

    );
}