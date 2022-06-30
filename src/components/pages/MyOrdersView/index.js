import React from 'react'
import { Box, Tabs, Tab, Typography, makeStyles, isWidthUp, isWidthDown } from "@material-ui/core";
import PropTypes from "prop-types";
import { ArrowForward, Menu } from '@material-ui/icons'
import { PersonalInformation } from '../../Tempelates/MyAccountTemplates/PersonalInformation'
import { ViewDetails } from './ViewDetails'
import { Navbar, Footer } from '..'

import {orderDetails2} from '../../../Data'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`
    };
}
const useStyles = makeStyles((theme) => ({
    Container: {
        margin: '8% 0%'
    },
    BoxContainer: {
        margin: '5% 0%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '20%',
        }
    },
    header: {
        font: 'normal normal Bold 45px/72px Gopher',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        }
    },
    head: {
        font: 'normal normal bold 15px/24px Gopher',
        textAlign: 'center'
    },

    BoxWidth: {
        width: "80%",
        margin: '0% auto',
    },
    mainBox: {
        display: 'flex',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
            flexWrap:'wrap'
        }
    },
    navigation: {
        width: '30%',
        background: '#030504',
        padding: '3%',
        borderRadius: '42px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '3rem'
        }
    },
    navPanel: {
        width: '65%',
        height: '100%',
        background: '#030504',
        padding: '2%',
        borderRadius: '42px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginTop: '10%'
        }
    },
    userImageBox: {
        position: 'relative',
        marginBottom: '15%',
    },
    userImage: {
        width: '100%',
        maxHeight: '100%',
    },
    iconsBox: {
        position: 'absolute',
        bottom: '-10%',
        right: '8%',
        background: '#7800FF',
        borderRadius: '50%',
        width: '5rem',
        padding: '1rem'
    },
    name: {
        font: 'normal normal bold 1.5rem Gopher',
        marginTop: '2%',
        [theme.breakpoints.down('sm')]: {
            fontSize:'1rem'
        }
    },
    tabs: {
        margin:'0px',
        paddingLeft:'0px',
        "& .MuiTab-wrapper":{
            alignItems:'baseline !important'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    tab: {
        minWidth: '100%',
        justifyContent: 'flex-start !important',
        alignItems: 'flex-start',
        margin: "1% 0px",
        opacity: '0.4',
        textTransform: 'none',
        font: 'normal normal normal 1.5rem Gopher',
        pointerEvents: 'cursor',
        "&:hover": {
            opacity: '1'
        },
        "& .MuiTab-wrapper":{
            alignItems:'left !important'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize:'1rem'
        }
    },
    menuIcon: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            fontSize: '3rem',
            color: 'white'
        }
    }

}))



export const MyOrdersView = () => {
    const classes = useStyles()

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Navbar />

            <Box className={classes.Container}>
                <Box className={classes.BoxWidth}>
                    <Box className={classes.BoxContainer}>
                        <h1 className={classes.header}>My Account</h1>
                        <h1 className={classes.head}>Home <ArrowForward style={{ font: 'normal normal bold 1.2rem Access' }} />  My Account</h1>
                    </Box>

                    <Box className={classes.mainBox}>
                        <Box className={classes.navigation}>

                            <Box className={classes.userImageBox}>
                                <img className={classes.userImage} src={'./images/Rectangle 300.png'} />
                                <Box className={classes.iconsBox}>
                                    <img style={{ width: '100%', height: '100%' }} src={'./images/Icon feather-camera.svg'} alt="camera icon" />
                                </Box>
                            </Box>

                            <h2 className={classes.name}>Name Here <br /> <h3 className={classes.name}>+91 9876543210</h3></h2>

                            <br /><br /><br />
                            <hr />
                            <br /><br /><br />

                            <Box >
                                <Menu className={classes.menuIcon} />

                                <Tabs
                                    disableRipple
                                    orientation='vertical'
                                    variant="scrollable"
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="Vertical tabs example"
                                    className={classes.tabs}
                                    TabIndicatorProps={{
                                        style: {
                                            display: "none"
                                        }
                                    }}
                                >
                                    <Tab disableRipple
                                        className={classes.tab}
                                        label="Personal Information"
                                        // align='left'
                                        {...a11yProps(0)}
                                    />
                                    <Tab disableRipple
                                        className={classes.tab}
                                        label="My Orders"
                                        {...a11yProps(1)}
                                    />
                                    <Tab disableRipple
                                        className={classes.tab}
                                        label="Return Request"
                                        {...a11yProps(2)}
                                    />
                                    <Tab disableRipple
                                        className={classes.tab}
                                        label="Logout"
                                        {...a11yProps(3)}
                                    />
                                </Tabs>

                            </Box>
                        </Box>

                        <Box className={classes.navPanel}>
                            <TabPanel className={classes.tabPanels} value={value} index={0}>
                                <PersonalInformation />
                            </TabPanel>

                            <TabPanel className={classes.tabPanels} value={value} index={1}>
                                <ViewDetails data={orderDetails2}/>
                            </TabPanel>

                            <TabPanel className={classes.tabPanels} value={value} index={2}>
                                <h6 style={{ lineHeight: "2", color: "white" }}>
                                    Forming the core of our technical expertise, our ready-to-integrate,
                                    rich turnkey offerings cover a vast range of target platforms.
                                </h6>

                            </TabPanel>
                            <TabPanel className={classes.tabPanels} value={value} index={3}>

                                <h6 style={{ lineHeight: "2", color: "white" }}>
                                    Forming the core of our technical expertise, our ready-to-integrate,
                                    rich turnkey offerings cover a vast range of target platforms.
                                </h6>
                            </TabPanel>
                        </Box>

                    </Box>
                </Box>
            </Box>

            <Footer />
        </>
    )
}
