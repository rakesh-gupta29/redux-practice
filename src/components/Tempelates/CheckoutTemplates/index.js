import React, { useEffect, useState } from 'react'
//Material ui
import {
    Box,
    Grid,
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableBody,
}
    from "@material-ui/core";
//Material Icon
import { ArrowForward } from '@material-ui/icons';
//Atom
import { Button, NewInput, TextArea, } from '../../atoms'
//Toastify
import { toast } from 'react-toastify';
import { resolveAfter3Sec } from '../../../Toastify'
//Style
import { useStyles } from './Style'
//Redux
import { selectCartItems, selectCartTotal, selectCartItemsCount } from '../../../Redux/Selector'
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { clearCart } from '../../../Redux/Action/CartAction';
//Routes
import { useHistory } from 'react-router';
//Logo
import logo from '../../assets/images/Logo/Logo.png'

//Selector Function
const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    itemCount: selectCartItemsCount
});


export const CheckoutTemplates = () => {
    const classes = useStyles()
    const history = useHistory();
    const dispatch = useDispatch();
    const { cartItems, total, itemCount } = useSelector(mapState);

    useEffect(() => {
        console.log(cartItems, "cartItems")
        if (itemCount < 1) {
            history.push("/")
        }
        return
    }, [itemCount])

    const [checkoutAddress, setCheckoutAddress] = useState({
        fristName: '',
        lastName: '',
        address: '',
        city: '',
        country: 'india',
        postcode: '',
        email: '',
        phoneNumber: '',
        orderNote: ''
    })

    const { fristName, lastName, address, city, country, postcode, email, phoneNumber, orderNote } = checkoutAddress;

    let name, value

    const onChangeGet = (event) => {
        name = event.target.name
        value = event.target.value
        setCheckoutAddress({ ...checkoutAddress, [name]: value })
    }

    const loadScript = (src) => {

        return new Promise((resolve) => {

            const script = document.createElement('script')

            script.src = src

            script.onload = () => { resolve(true) }

            script.onerror = () => { resolve(false) }

            document.body.appendChild(script)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            toast.error("You Are Offline Or Something wrong. Please Try After Sometime")
            return
        }

        var options = {
            "key": "rzp_test_7uts3PGRwFZPfZ", // Enter the Key ID generated from the Dashboard
            "amount": total * 100,
            "currency": "INR",
            "name": "Brebel",
            "description": "B.Rebel is an Indian wearables brand that’s bringing forth a new breed of smart electronic gadgets to the Indian marketplace.",
            "image": logo,
            handler: (response) => {
                toast.promise(
                    resolveAfter3Sec,
                    {
                        pending: 'Please Wait',
                        success: response.razorpay_payment_id,
                        error: 'Somthing Went Wrong 🤯'
                    }
                )
                toast.success("Payment Successfully")
                dispatch(clearCart())
            },
            prefill: {
                name: fristName,
                email: email,
                contact: phoneNumber
            },
            theme: { color: '#fff', },
            "modal": {
                "ondismiss": function () { toast.error('Checkout form closed') }
            },
            notes: { fristName, email, phoneNumber, address, city, postcode, orderNote }
        }

        if (
            !fristName ||
            !lastName ||
            !address ||
            !city ||
            !postcode ||
            !email ||
            !phoneNumber
        ) {
            toast.error("some input field are blank's")
        } else {
            const paymentObject = new window.Razorpay(options)
            paymentObject.open()
        }
    }


    return (
        <Box className={classes.Main}>
            <Box className={classes.BoxWidth}>
                <Box className={classes.BoxContainer}>
                    <Box className={classes.ContainerBox}>
                        <h3 className={classes.head}>
                            Home <ArrowForward className={classes.arrow} />
                            Shopping Cart <ArrowForward className={classes.arrow} />
                            Payment
                        </h3>
                        <br />
                        <br />
                        <br />
                        <h1 style={{ margin: '5% 0' }}>Billing Detail</h1>
                        <form >
                            <Grid xs={12} spacing={1} container>
                                <Grid item sm={6} xs={12}>
                                    <NewInput
                                        requiredStar="*"
                                        required
                                        label='FIRST NAME'
                                        name="fristName"
                                        value={fristName}
                                        onChange={onChangeGet}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <NewInput
                                        requiredStar="*"
                                        required
                                        label='LAST NAME'
                                        name="lastName"
                                        value={lastName}
                                        onChange={onChangeGet}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <NewInput
                                        requiredStar="*"
                                        required
                                        label='ADDRESS'
                                        name="address"
                                        value={address}
                                        onChange={onChangeGet}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <NewInput
                                        requiredStar="*"
                                        required
                                        label='CITY/TOWN'
                                        name='city'
                                        value={city}
                                        onChange={onChangeGet}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <NewInput
                                        label='COUNTRY/STATE'
                                        placeholder="India"
                                        disabled
                                        name="country"
                                        value={country}
                                        onChange={onChangeGet}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <NewInput
                                        requiredStar="*"
                                        required
                                        label='Postcode/Zip'
                                        name="postcode"
                                        value={postcode}
                                        onChange={onChangeGet}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <NewInput
                                        requiredStar="*"
                                        required
                                        label='EMAIL'
                                        name="email"
                                        value={email}
                                        onChange={onChangeGet}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <NewInput
                                        requiredStar="*"
                                        required
                                        label='PHONE'
                                        name="phoneNumber"
                                        value={phoneNumber}
                                        onChange={onChangeGet}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextArea
                                        rows='10'
                                        label='Order Note'
                                        name="orderNote"
                                        value={orderNote}
                                        onChange={onChangeGet}
                                    /> </Grid>
                            </Grid>
                        </form>
                    </Box>
                    <Box className={classes.ContainerBox}>

                        {/*<h2 style={{ margin: '5% 0' }}>Have a Coupon? Click here to enter your code</h2>
                        <Box className={classes.CouponBox}>
                            <NewInput 
                            requiredStar="*"
                            required
                         className={classes.inputWhite} placeholder="Enter your code here" />
                            <ButtonOutlined className={classes.btnOutline} name="APPLY COUPON" />
                        </Box>*/}

                        <Box className={classes.TotalWhiteBox}>
                            <h1 style={{ font: 'normal normal bold 2rem Gopher', color: 'black', width: '100%', textAlign: 'center', paddingBottom: '3%' }}>Cart total</h1>
                            <TableContainer>
                                <Table>
                                    <TableBody style={{ borderTop: '2px solid black' }}>
                                        <TableRow style={{ borderBottom: '2px solid white' }}>

                                            <TableCell className={classes.left} style={{ font: 'normal normal bold 1.5rem Gopher' }}>Products</TableCell>
                                            <TableCell className={classes.left} style={{ textAlign: 'center', font: 'normal normal bold 1.5rem Gopher' }}>Quantity</TableCell>
                                        </TableRow>
                                        {
                                            cartItems.map((item, index) => {
                                                const { ProductPrice, productName, quantity, documentID } = item
                                                return (
                                                    <TableRow style={{ borderBottom: '2px solid white' }} key={index}>
                                                        <TableCell className={classes.left}>{productName}</TableCell>
                                                        <TableCell className={classes.left} style={{ textAlign: 'center' }}>{quantity}</TableCell>
                                                        <TableCell className={classes.right} >&#x20B9; {ProductPrice * quantity}</TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                        <hr />
                                        <TableRow style={{ borderBottom: '2px solid black', borderTop: '2px solid black' }}>
                                            <TableCell className={classes.left} style={{ font: 'normal normal bold 1.5rem Gopher' }}>Sub Total</TableCell>
                                            <TableCell className={classes.left} style={{ font: 'normal normal bold 1.5rem Gopher' }}></TableCell>

                                            <TableCell className={classes.right} style={{ font: 'normal normal bold 1.5rem Gopher' }}>&#x20B9; {total}</TableCell>
                                        </TableRow>
                                        <TableRow style={{ borderBottom: '2px solid black', }}>

                                            <TableCell className={classes.left} style={{ font: 'normal normal bold 1.5rem Gopher' }}>Shipping</TableCell>
                                            <TableCell className={classes.left} style={{ font: 'normal normal bold 1.5rem Gopher' }}></TableCell>

                                            <TableCell className={classes.right} style={{ font: 'normal normal normal 1.5rem Gopher' }}>&#x20B9; 0</TableCell>
                                        </TableRow>
                                        <TableRow style={{ borderBottom: '2px solid white', }}>
                                            <TableCell className={classes.left} style={{ font: 'normal normal bold 1.5rem Gopher' }}>Total</TableCell>
                                            <TableCell className={classes.left} style={{ font: 'normal normal bold 1.5rem Gopher' }}></TableCell>

                                            <TableCell className={classes.right} style={{ font: 'normal normal bold 2rem Gopher' }}>&#x20B9; {total}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </Box>
            </Box >
            <Box className={classes.PaymentConfirm}>
                <Box className={classes.PaymentWidth}>
                    <Box className={classes.BoxProduct}>
                        <Box>
                            <h1 className={classes.PaymentProductName}>Total Price<br />  <span style={{ color: "#FF4E00" }}>&#8377;</span>{total}</h1>
                        </Box>
                    </Box>
                    <Button className={classes.PaymentButton} name="Make Payment" type="submit" onClick={(e) => handleSubmit(e)} />
                </Box>
            </Box>
        </Box>
    )
}










// if (
    //     !fristName ||
    //     !lastName ||
    //     !address ||
    //     !city ||
    //     !postcode ||
    //     !email ||
    //     !phoneNumber
    // ) {
    //     error show hoga
    // }else{
    //Yaha condition aaye gi
    //}