import React, { useState } from 'react'
//Material ui
import { makeStyles, Box, Dialog } from '@material-ui/core'
//Atom
import { ButtonOutlined, NewInput, Button } from '../../../atoms'
//Redux
import { useDispatch, } from 'react-redux'
import { addProductStart } from '../../../../Redux/Action'
//ck
import { CKEditor } from "ckeditor4-react";
//Toastify
import { toast } from 'react-toastify'
export const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));

//Style
const useStyles = makeStyles((theme) => ({

    main: {
        // width: '20%',
    },
    Form: {
        padding: '2%',
        margin: '0 0 2% 0',
    }

}))

export const AddProduct = () => {

    const classes = useStyles()
    const dispatch = useDispatch();

    const [productDetails, setProductDetails] = useState({
        productName: '',
        ProductPrice: '',
        stock: '',
        productDiscrepation: '',
    })

    const { productName, ProductPrice, productDiscrepation, stock } = productDetails

    let name, value

    const handleChamge = (event) => {
        name = event.target.name
        value = event.target.value
        setProductDetails({ ...productDetails, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!productName || !ProductPrice || !productDiscrepation || !stock) {
            toast.error("fill All field")
        } else {
            dispatch(addProductStart({ productName, ProductPrice, productDiscrepation, stock }))
            setOpen(false);
        }
        setProductDetails({
            productName: '',
            ProductPrice: '',
            productDiscrepation: '',
            stock: ''
        })

    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (

        <Box className={classes.main}>

            <Box style={{ width: '100%', backgroundColor: '#000', padding:'2% 25%',borderRadius:'15px' }}>
                <h1 style={{ color: '#fff', textAlign: 'center', marginTop: '2%' }}>Add Product</h1>
                <form onSubmit={handleSubmit} className={classes.Form}>
                    <NewInput placeholder="Product Name"
                        required
                        name='productName'
                        value={productName}
                        onChange={handleChamge}
                    />

                    <br />
                    <br />

                    <NewInput placeholder="price"
                        type="number"
                        required
                        name="ProductPrice"
                        value={ProductPrice}
                        onChange={handleChamge}
                    />

                    <br />
                    <br />

                    <NewInput placeholder="stock"
                        type="number"
                        required
                        name="stock"
                        value={stock}
                        onChange={handleChamge}
                    />

                    <br />
                    <br />

                    <NewInput placeholder="Discrepation"
                        required
                        name="productDiscrepation"
                        value={productDiscrepation}
                        onChange={handleChamge}
                    />


                    <br />
                    <br />
                    <br />
                    <br />
                    <ButtonOutlined type="submit" name="Submit" />
                </form>
            </Box>


        </Box>


    )
}
