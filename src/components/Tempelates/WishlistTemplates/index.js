import React from 'react'
import {
    Container,
    Box,
    makeStyles,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
}
    from "@material-ui/core";
import { ButtonOutlined } from '../../atoms';

const useStyles = makeStyles((theme) => ({
    Container: {
        margin: '5% 0%'
    },
    BoxContainer: {
        margin: '5% 0%',
    },
    header: {
        font: 'normal normal 45px/72px Gopher',
        textAlign: 'center'
    },
    head: {
        font: 'normal normal normal 15px/24px Gopher',
        textAlign: 'center'
    },
    CellStyle: {
        color: '#fff',
        font: 'normal normal 1.5rem Gopher',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },
    HeadCell: {
        width: 500,
        color: '#fff',
        font: 'normal normal 1.5rem Gopher',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },
    CircleBox: {
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        border: '2px solid #fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        font: 'normal normal 3rem Gopher',
        color: '#000',
        backgroundColor: '#fff',
        cursor: 'pointer',
        transition: "all 500ms ease-in-out",
        "&:hover": {
            backgroundColor: 'transparent',
            color: '#fff',
            border: 'none',
            transform: 'scale(1.2)',
        },
        [theme.breakpoints.down("sm")]: {
            width: '25px',
            height: '25px',
        }
    },
    ImageProduct: {
        width: '20%',
        paddingLeft: '2%',
        transition: "all 500ms ease-in-out",
        "&:hover": {
            transform: 'scale(1.2)',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    BoxFlex: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    BoxWidth: {
        width: "80%",
        margin: '0% auto',

    }
}))

export const WishlistTemplates = () => {
    const classes = useStyles()
    return (
        <Box className={classes.Container}>
            <Box className={classes.BoxWidth}>
                <Box className={classes.BoxContainer}>
                    <h1 className={classes.header}>My Wishlist</h1>
                    <h1 className={classes.head}>Home | Wishlist</h1>
                </Box>

                <TableContainer>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.HeadCell}>PRODUCT NAME</TableCell>
                                <TableCell align='center' className={classes.CellStyle}>UNIT PRICE</TableCell>
                                <TableCell align='center' className={classes.CellStyle}>STOCK STATUS</TableCell>
                                <TableCell className={classes.CellStyle}></TableCell>
                                <TableCell className={classes.CellStyle}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <TableCell className={classes.CellStyle}>
                                    <Box className={classes.BoxFlex}>
                                        <img className={classes.ImageProduct} src={'./images/attractive-sensual-african-american-feminine-girl-with-afro-haircut-wearing-winter-sweater-looking-left-with-pleasant-smile-wearing-headphones-listens.png'} alt="product image" />
                                        <p style={{ marginLeft: '5%' }}>PRODUCT NAME</p>
                                    </Box>
                                </TableCell>
                                <TableCell align='center' className={classes.CellStyle}>$24.00</TableCell>
                                <TableCell align='center' className={classes.CellStyle}>IN STOCK</TableCell>
                                <TableCell className={classes.CellStyle}><ButtonOutlined name='Add To Cart' /></TableCell>
                                <TableCell className={classes.CellStyle}><Box className={classes.CircleBox} onClick={() => alert('delete')}><p>X</p></Box></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>


            </Box>
        </Box>
    )
}
