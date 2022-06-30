import React from 'react'
import {
    Box,
    makeStyles
} from '@material-ui/core'
import { Product } from '../../atoms'


const useStyles = makeStyles((theme) => ({
    productBox: {
        width: '100%',
        float: 'right',
        margin: '15% 0%',
        display: 'flex',
        justifyContent: 'right',
        flexWrap: 'wrap',
        position: 'relative'
    },
    headBox: {
        width: '85%',
        display: 'flex',
    },
    txtGradient: {
        font: 'normal normal normal 8rem Gopher-Medium',
        padding: '.8rem 0rem',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        [theme.breakpoints.down('sm')]: {
            fontSize: '6rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3.5rem',
        }
    },
    bgText: {
        background: 'transparent',
        color: 'transparent',
        font: 'normal normal bold 10.4vw Gopher-HeavyItalic',
        WebkitTextStrokeWidth: '.04rem',
        WebkitTextStrokeColor: '#FFFFFF',
        lineHeight: '1',
        position: 'absolute',
        top: '76%',
        left: '22%',
        [theme.breakpoints.down('md')]: {
            fontSize: '8rem',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    products: {
        width: '20%',
        marginLeft: '3%',
        padding: '2%',
        [theme.breakpoints.down('sm')]: {
            width: '60%',
            margin: '6%',
        }
    }
}))



export function SimilarProduct({
    data,
}) {
    const classes = useStyles();

    console.log(data)
    return (
        <>

            <Box className={classes.productBox}>

                <Box className={classes.headBox}>
                    <h1 className={classes.txtGradient} >Similar Products</h1>
                    {/* <img src={'./images/Group 6229.svg'}/> */}
                </Box>

                <Product className={classes.products}
                    data={data}/>

                <h1 className={classes.bgText}>DESIGN <br /> EXPERIENCE</h1>

            </Box>
        </>
    )
}