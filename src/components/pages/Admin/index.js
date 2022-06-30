import React, { useEffect } from 'react';
//Material ui
import { Box, Tabs, Tab, Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
//Routes
import { useHistory, } from 'react-router-dom';
//Toastify
import { toast } from 'react-toastify';
//Inputs
import { AddProduct, ProductList, Warranty, GetInTouch, User } from './pages'
//Pages
import { Navbar, Footer } from "../index";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animation";
//Firebase
import { firestore } from '../../../utils';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart } from '../../../Redux/Action';


const useStyles = makeStyles((theme) => ({
    main: {
        height: '100%',
    },
    tabs: {
        "& .MuiTab-wrapper": {
            alignItems: 'baseline !important',
            fontSize: '2rem'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    tab: {
        margin: '5% 0%',
        marginLeft: '2%'
    }

}));

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

export const Admin = () => {
    const classes = useStyles();
    const history = useHistory()
    const token = localStorage.getItem('data')
    const [value, setValue] = React.useState(0);
    const [data, setdata] = React.useState("")
    const [git, setGit] = React.useState("")
    const [user, setUser] = React.useState("")
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.productsReducer);
    const { products } = selector

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const featchWarrantyData = () => {
        return new Promise((resolve, reject) => {
            firestore
                .collection('Warranty')
                .get()
                .then((snapshot) => {
                    const productsArray = snapshot.docs.map((doc) => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    })
                    setdata(productsArray)
                    resolve(productsArray);
                })
                .catch((error) => {
                    reject(error)
                    toast.error(error)
                })
        })
    }

    const featchUserData = () => {
        return new Promise((resolve, reject) => {
            firestore
                .collection('users')
                .orderBy('createdDate')
                .get()
                .then((snapshot) => {
                    const productsArray = snapshot.docs.map((doc) => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    })
                    setUser(productsArray)
                    resolve(productsArray);
                })
                .catch((error) => {
                    reject(error)
                    toast.error(error)
                })
        })
    }

    const featchGetInTouchData = () => {
        return new Promise((resolve, reject) => {
            firestore
                .collection('getintouch')
                .get()
                .then((snapshot) => {
                    const productsArray = snapshot.docs.map((doc) => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    })
                    setGit(productsArray)
                    resolve(productsArray);
                })
                .catch((error) => {
                    reject(error)
                    toast.error(error)
                })
        })
    }


    useEffect(() => {

        window.scroll({ top: 1, left: 0, behavior: 'smooth' });

        if (!token) {
            toast.error("login Frist")
            history.push('/')
        } else if (!token.includes('admin')) { history.push("/") }

        dispatch(fetchProductsStart())

        featchWarrantyData()

        featchUserData()

        featchGetInTouchData()

    }, [token])


    return (
        <Box className={classes.main}>

            <Navbar />

            <motion.div
                variants={pageAnimation}
                initial="hidden"
                animate="show"
                exit="exit">

                <Box style={{ display: 'flex', justifyContent: 'space-around', marginTop: '250px', marginBottom: '250px', width: '100%' }}>

                    <Box style={{ width: '15%', backgroundColor: '#000', borderRadius: '15px', padding: '5% 0%', marginLeft: '25px', }}>

                        <Tabs
                            orientation='vertical'
                            variant="scrollable"
                            value={value}
                            className={classes.tabs}
                            onChange={handleChange}>

                            <Tab className={classes.tab} label="Add Product" {...a11yProps(0)} />
                            <Tab className={classes.tab} label="Show Product" {...a11yProps(1)} />
                            <Tab className={classes.tab} label="Warranty" {...a11yProps(2)} />
                            <Tab className={classes.tab} label="Get In Touch" {...a11yProps(3)} />
                            <Tab className={classes.tab} label="User" {...a11yProps(4)} />

                        </Tabs>

                    </Box>

                    <Box style={{ width: '80%', backgroundColor: "#000", borderRadius: '15px' }}>

                        <TabPanel className={classes.tabPanels} value={value} index={0}>
                            <AddProduct />
                        </TabPanel>

                        <TabPanel className={classes.tabPanels} value={value} index={1}>
                            <ProductList products={products} />
                        </TabPanel>

                        <TabPanel className={classes.tabPanels} value={value} index={2}>
                            <Warranty data={data} />
                        </TabPanel>

                        <TabPanel className={classes.tabPanels} value={value} index={3}>
                            <GetInTouch data={git} />
                        </TabPanel>


                        <TabPanel className={classes.tabPanels} value={value} index={4}>
                            <User data={user} />
                        </TabPanel>

                    </Box>

                </Box>

            </motion.div>
            <Footer />
        </Box>
    );
}
