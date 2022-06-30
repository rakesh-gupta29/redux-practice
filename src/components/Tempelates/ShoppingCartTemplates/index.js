import React from 'react'
//Material ui
import {
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
//Atom
import { Button, ButtonOutlined, NewInput } from '../../atoms';
//Route
import { useHistory } from 'react-router-dom';
//Redux
import { selectCartItems, selectCartTotal } from '../../../Redux/Selector'
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addProduct, clearCart, reduceCartItem, removeCartItem } from '../../../Redux/Action/CartAction';
//style 
import { useStyles } from './Style'

const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const errMsg = 'You have no items in your cart.';

export const ShoppingCartTemplates = () => {
    const classes = useStyles()
    const history = useHistory();
    const dispatch = useDispatch();
    const { cartItems, total } = useSelector(mapState);

    console.log(total, "asd")

    const handleRemoveCartItem = (documentID) => {
        dispatch(
            removeCartItem({
                documentID
            })
        );
    }

    const handleReduceItem = (product) => {
        dispatch(
            reduceCartItem(product)
        );
    }

    const handleAddProduct = (product) => {
        dispatch(
            addProduct(product)
        )
    }

    const handleClearCart = () => {
        dispatch(
            clearCart()
        )
    }

    return (
        <Box className={classes.Container}>
            <Box className={classes.BoxWidth}>
                <Box className={classes.BoxContainer}>
                    <h1 className={classes.header}>Shopping Cart</h1>
                    <h1 className={classes.head}>Home | Shopping Cart</h1>
                </Box>
                {
                    cartItems.length > 0 ? (
                        <TableContainer sx={{ maxWidth: 800 }}>
                            <Table >
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.HeadCell}>PRODUCT NAME</TableCell>
                                        <TableCell align='center' className={classes.CellStyle}>UNIT PRICE</TableCell>
                                        <TableCell align='center' className={classes.CellStyle}>QUANTITY</TableCell>
                                        <TableCell className={classes.CellStyle}>TOTAL</TableCell>
                                        <TableCell className={classes.CellStyle}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        cartItems.map((item, index) => {
                                            const { ProductPrice, productName, quantity, documentID } = item
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell className={classes.CellStyle}>
                                                        <Box className={classes.BoxFlex}>
                                                            <img className={classes.ImageProduct} src={'./images/attractive-sensual-african-american-feminine-girl-with-afro-haircut-wearing-winter-sweater-looking-left-with-pleasant-smile-wearing-headphones-listens.png'} alt="product image" />
                                                            <Box style={{ width: '50%' }}>
                                                                <p style={{ marginLeft: '5%' }}>{productName}</p>
                                                                <p style={{ marginLeft: '5%' }}>Color</p>
                                                            </Box>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align='center' className={classes.CellStyle}>&#x20B9; {ProductPrice}</TableCell>
                                                    <TableCell align='center' className={classes.CellStyle}>
                                                        <Box className={classes.AddCardQun}>
                                                            <p style={{ fontSize: '2rem', cursor: 'pointer' }} onClick={() => handleReduceItem(item)}>-</p>
                                                            <p style={{ fontSize: '2rem' }}>{quantity}</p>
                                                            <p style={{ fontSize: '2rem', cursor: 'pointer' }} onClick={() => handleAddProduct(item)}>+</p>
                                                        </Box></TableCell>
                                                    <TableCell className={classes.CellStyle}>&#x20B9; {ProductPrice * quantity} </TableCell>
                                                    <TableCell className={classes.CellStyle}><Box className={classes.CircleBox} onClick={() => handleRemoveCartItem(documentID)}><p>X</p></Box></TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>) : <h1 style={{ textAlign: "center" }}>{errMsg}</h1>
                }

                <Box className={classes.ButtonBox}>
                    {
                        cartItems.length > 0 ?
                            <ButtonOutlined name="CLEAR CART" className={classes.ButtonOutLined} onClick={handleClearCart} /> : null
                    }
                    {  /* <ButtonOutlined name="UPDATE SHOPPING CART" className={classes.ButtonOutLined} /> */}
                    <Button name="CONTINUE SHOPPING" onClick={() => history.push('/')} className={classes.ButtonOutLined} style={{ fontSize: "1.rem", fontWeight: 'bolder' }} />
                </Box>

                <Box className={classes.UpdationBox}>

                    {/*{
                        cartItems.length > 0 ?
                            (<Box className={classes.LeftBox}>
                                <Box style={{ padding: '0% 3%' }}>
                                    <h1 style={{ font: 'normal normal bold 24px/48px Gopher' }}>Counpon discount</h1>
                                    <p className={classes.CouponPra}>Enter your code if you have one. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae</p>

                                </Box>
                                <Box style={{ marginTop: '5%' }}>

                                    <NewInput style={{ width: '60%', borderRadius: '3rem', border: '1px solid #fff', backgroundColor: "#fff" }} placeholder="Enter your code here" />

                                    <ButtonOutlined name="APPLY COUPON" className={classes.Apply} />
                            </Box>
                            </Box>) : null
                    }
                */}

                    {
                        cartItems.length > 0 ? (
                            <Box className={classes.RightBox}>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow style={{ borderBottom: '2px solid black' }}>
                                                <TableCell><h1 style={{ font: 'normal normal bold 2rem Gopher' }}>Cart total</h1></TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {/*<TableRow style={{ borderBottom: '2px solid white' }}>
                                                <TableCell><h1 style={{ font: 'normal normal bold 1.2rem Gopher' }}>SUB TOTAL</h1></TableCell>
                                                <TableCell><h1 style={{ font: 'normal normal bold 1.2rem Gopher' }}>&#x20B9;{total}</h1></TableCell>
                                          </TableRow>*/}
                                            <TableRow style={{ borderBottom: '2px solid white' }}>
                                                <TableCell><h1 style={{ font: 'normal normal bold 1.5rem Gopher' }}>TOTAL</h1></TableCell>
                                                <TableCell><h1 style={{ font: 'normal normal bold 1.5rem Gopher' }}>&#x20B9;{total}</h1></TableCell>
                                            </TableRow>
                                            <TableRow style={{ borderBottom: '2px solid white' }}>
                                                <TableCell><h1 style={{ font: 'normal normal bold 1.2rem Gopher' }}>Checkout with Mutilple Adresses</h1></TableCell>
                                            </TableRow>

                                        </TableBody>

                                    </Table>
                                </TableContainer>

                                <Button name="PROCEED TO CHECKOUT" style={{ fontSize: "1.rem", fontWeight: 'bolder', width: '100%' }} onClick={() => history.push('/checkout')} />

                            </Box>
                        ) : null
                    }
                </Box>

            </Box>
        </Box>
    )
}
