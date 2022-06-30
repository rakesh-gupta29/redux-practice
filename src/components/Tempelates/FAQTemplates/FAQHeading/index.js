import * as React from 'react';
import PropTypes from 'prop-types';

import {
    Box,
    makeStyles,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Tab,
    Tabs,
    Typography

} from '@material-ui/core'
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMoreIcon';

import { Add, Remove, ExpandMore } from '@material-ui/icons'





function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}>
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
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const useStyles = makeStyles((theme) => ({
    mainContainer:{
        margin: '10% auto',
        width:'80%'
    },
    headingMainBox: {
        display: 'flex',
        justifyContent: 'space-around',
        margin:'2% auto',
        "& .MuiTypography-body1": {
            lineHeight: '1'
        },
        "& .MuiBox-root": {
            padding: '0px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    helpful: {
        fontFamily: 'Gopher-hairline',
        fontSize: '4rem',
        width: '100%',
        margin: '0% auto',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
        }
    },
    tabs: {
        color: 'red',
        width: '35%',
        marginRight: '2rem',
        "& .MuiTab-wrapper": {
            alignItems: 'baseline !important'
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: '1rem',
        }
    },
    tab: {
        minWidth: '100%',
        color: 'white',
        paddingLeft: '2.5rem',
        marginBottom: '2rem',
        background: '#7800FF',
        borderRadius: '6px',
        textTransform: 'none',
        font: 'normal normal normal 1.5rem Gopher',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1rem',
            fontSize: '1rem',
            marginBottom: '1rem',
        }
    },
    panel: {
        color: 'white',
        background: 'transparent',
        width: '65%',
    },
    accordBox: {
        borderRadius: '6px',
        background: '#7800FF',
        marginBottom: '2rem',
        padding: '0px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '1rem',
        }

    },
    pri: {
        color: 'white',
        font: 'normal normal normal 1.5rem Gopher',
        [theme.breakpoints.down('sm')]: {
            width: '100px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontSize: '1rem',

        }
    },
    priContent: {
        color: 'white',
        font: 'normal normal 300 1.5rem Gopher',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },
    Plus: {
        fontSize: '2.5rem',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        }
    },


}))

export function FAQHeading() {

    const [value, setValue] = React.useState(0);

    const [expanded, setExpanded] = React.useState(false);

    const classes = useStyles()

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>

            <Box className={classes.mainContainer} >
                <h1 className={classes.helpful}> Helpful Categories </h1>
                <Box className={classes.headingMainBox}>
                    <Box className={classes.tabs}>
                        <Tabs
                            orientation="vertical"
                            variant="standard"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            TabIndicatorProps={{
                                style: {
                                    display: "none",
                                },
                            }}
                        >
                            <Tab className={classes.tab} label="Heading 01" {...a11yProps(0)} />
                            <Tab className={classes.tab} label="Heading 02" {...a11yProps(1)} />
                            <Tab className={classes.tab} label="Heading 03" {...a11yProps(2)} />
                            <Tab className={classes.tab} label="Heading 04" {...a11yProps(3)} />
                            <Tab className={classes.tab} label="Heading 05" {...a11yProps(4)} />
                            <Tab className={classes.tab} label="Heading 06" {...a11yProps(5)} />
                        </Tabs>
                    </Box>




                    <TabPanel className={classes.panel} value={value} index={0}>


                        <Accordion className={classes.accordBox}>
                            <AccordionSummary
                                expandIcon={<Add className={classes.Plus} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.pri}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box >
                                    <p className={classes.priContent}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>
                                </Box>
                            </AccordionDetails>
                        </Accordion>



                        <Accordion
                            className={classes.accordBox}>
                            <AccordionSummary
                                expandIcon={<Add className={classes.Plus} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.pri}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box >
                                    <p className={classes.priContent}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>

                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            className={classes.accordBox}>
                            <AccordionSummary
                                expandIcon={<Add className={classes.Plus} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.pri}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box >
                                    <p className={classes.priContent}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>

                                </Box>
                            </AccordionDetails>
                        </Accordion>



                    </TabPanel>




                    <TabPanel className={classes.panel} value={value} index={1}>


                        <Accordion
                            className={classes.accordBox}>
                            <AccordionSummary
                                expandIcon={<Add className={classes.Plus} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.pri}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box >
                                    <p className={classes.priContent}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>

                                </Box>
                            </AccordionDetails>
                        </Accordion>


                    </TabPanel>





                    <TabPanel className={classes.panel} value={value} index={2}>
                        <Accordion
                            className={classes.accordBox}>
                            <AccordionSummary
                                expandIcon={<Add className={classes.Plus} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.pri}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box >
                                    <p className={classes.priContent}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>

                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            className={classes.accordBox}>
                            <AccordionSummary
                                expandIcon={<Add className={classes.Plus} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.pri}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box >
                                    <p className={classes.priContent}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>

                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </TabPanel>





                    <TabPanel className={classes.panel} value={value} index={3}>
                        <Accordion
                            className={classes.accordBox}>
                            <AccordionSummary
                                expandIcon={<Add className={classes.Plus} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.pri}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box >
                                    <p className={classes.priContent}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>

                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            className={classes.accordBox}>
                            <AccordionSummary
                                expandIcon={<Add className={classes.Plus} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.pri}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box >
                                    <p className={classes.priContent}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>

                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </TabPanel>





                    <TabPanel className={classes.panel} value={value} index={4}>
                        <Accordion
                            className={classes.accordBox}>
                            <AccordionSummary
                                expandIcon={<Add className={classes.Plus} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.pri}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box >
                                    <p className={classes.priContent}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>

                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            className={classes.accordBox}>
                            <AccordionSummary
                                expandIcon={<Add className={classes.Plus} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.pri}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box >
                                    <p className={classes.priContent}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>

                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </TabPanel>





                    <TabPanel className={classes.panel} value={value} index={5}>
                        <Accordion
                            className={classes.accordBox}>
                            <AccordionSummary
                                expandIcon={<Add className={classes.Plus} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.pri}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box >
                                    <p className={classes.priContent}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>

                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            className={classes.accordBox}>
                            <AccordionSummary
                                expandIcon={<Add className={classes.Plus} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.pri}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box >
                                    <p className={classes.priContent}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>

                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </TabPanel>






                    <TabPanel className={classes.panel} value={value} index={6}>
                        <Accordion
                            className={classes.accordBox}>
                            <AccordionSummary
                                expandIcon={<Add className={classes.Plus} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.pri}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box >
                                    <p className={classes.priContent}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>

                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            className={classes.accordBox}>
                            <AccordionSummary
                                expandIcon={<Add className={classes.Plus} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.pri}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box >
                                    <p className={classes.priContent}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>

                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </TabPanel>
                </Box>
            </Box>
        </>
    );
}