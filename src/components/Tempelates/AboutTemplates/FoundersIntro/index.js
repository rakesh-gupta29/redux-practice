import React from 'react'
import { makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20% 0% 0% 0%'
    },
    foundersBox: {
        position: 'relative',
        width: '80%',
        height: '32vh',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            height: '20vh',
        },
    },
    foundersName: {
        width: '80%',
        font: 'Italic bold normal 12vw Ben',
        [theme.breakpoints.down('md')]: {
            bottom: '15%',
        }
    },
    foundersSubText: {
        textAlign: 'center',
        font: 'normal normal normal 3.2rem Ben',
        padding: '7% 0%',
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem'
        }
    },
    foundersIntro: {
        width: '75%',
        margin:'3% 0%'
    },
    foundersIntroText: {
        textAlign: 'center',
        lineHeight:'1.5',
        font: 'normal normal normal 6.2rem Ben',
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem'
        },[theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        }
    },
    btmImage:{
        width:'100%',
        height:'100%',
        marginTop:'3%'
    }
}))


export function FoundersIntro() {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <Box className={classes.foundersBox}>
                <h1 className={classes.foundersName} style={{ position: 'absolute', top: '10%', left: '0%' }}>NITIN</h1>
                <h1 className={classes.foundersName} style={{ position: 'absolute', top: '50%', left: '38%' }}>UJJAWAL</h1>
                <h1 className={classes.foundersName} style={{ position: 'absolute', top: '28%', left: '33%', color: '#FF4E00' }} >&</h1>
            </Box>

            <h1 className={classes.foundersSubText}>THE FOUNDERS</h1>

            <Box className={classes.foundersIntro}>
                <h1 className={classes.foundersIntroText}>Nitin and Ujjawal have both lived in China since 2005, Ujjawal moved to India in 2015 and Nitin moved
                    back in the year 2020 because of covid19 spread. Both of them are always fascinated with technology and
                    doing new things. In 2018 they started an <span style={{color:'#CFFE00'}}>  e-commerce business, and since then they have dreamed to go
                    into technology, and now this is happening. Their aim is to utilize the experience they gained in China
                    and use that in India to set up good-scale productions in technology-driven products in the future.</span>
                </h1>
            </Box>
                <img className={classes.btmImage} src={'./images/zsun-fu-TL2e9aPgENs-unsplash.png'}/>
        </div>
    )
}
