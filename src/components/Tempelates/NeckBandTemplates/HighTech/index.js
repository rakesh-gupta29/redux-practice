import React from 'react'
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        margin: '20% 0',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    content: {
        width: '80%',
        height: '110vh',
        background: '#7800FF',
        borderRadius: '2rem',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '20% 0%',
        [theme.breakpoints.down('sm')]: {
            height: '60vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '60vh',
            margin: '25% 0%',
        }
    },
    topImg: {
        width: '50%',
        position: 'absolute',
        bottom: '65%',
        zIndex: '1',
        [theme.breakpoints.down('xs')]: {
            bottom: '70%',
        }
    },
    contentUL: {
        width: '90%',
    },
    contentLI: {
        font: 'normal normal normal 3rem Ben',
        // display: 'inline',
        lineHeight: '2',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem',
            display: 'block',
        }
    },
    highTechBtmBox: {
        width: '55%',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1',
        [theme.breakpoints.down('md')]: {
            bottom: '-110%',
        }
    },
    btmImg: {
        width: '70%',
        position: 'absolute',
        top: '70%',
        zIndex: '1',
        [theme.breakpoints.down('xs')]: {
            top: '90%',
        }
    },
    highTechHead: {
        font: 'normal normal bold 8rem Gopher',
        padding: '1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '6rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3rem'
        }
    },
    highTechSub: {
        padding: '1rem',
        font: 'normal normal normal 4.5rem Gopher',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem'
        }
    }

}))

export function HighTech() {
    const classes = useStyles()
    return (
        <Box className={classes.main}>
            <div className={classes.content}>
                <img className={classes.topImg} src={'./images/neckband/Layer 7.png'} alt="NeckBandImage" />
                <ul className={classes.contentUL}>
                    <li className={classes.contentLI}>Type-C Fast Charging</li>
                    <li className={classes.contentLI}>One-Touch Voice Assistant</li>
                    <li className={classes.contentLI}>Lightweight design for 24*7 comfort</li>
                    <br />
                    <br />

                    {/*<li className={classes.contentLI}>MFB/Power On/Off/Pairing/Voice Assistant / Answer Call/Reject Call/Hang Up/ Play/Pause/Last number Re-dial</li>*/}

                </ul>
                <img className={classes.btmImg} src={'./images/BT001-PRO-ppt-英文_05.png'} alt="HeighTech" />
            </div>

            <div className={classes.highTechBtmBox}>
                <h1 className={classes.highTechHead}>HIGH-Tech Latest CHIPSET: BK3288</h1>
                <h1 className={classes.highTechSub}>Stronger Bluetooth v5.1 Connectivity</h1>
                <h1 className={classes.highTechSub}>Immersive Sound Quality</h1>
            </div>

        </Box>
    )
}
