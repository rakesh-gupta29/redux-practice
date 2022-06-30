import React, { useEffect } from 'react'
import { ProductShow } from './ProductShow'
import { ProductSpecification } from './ProductSpecification'
import { BottomStickyNav } from './BottomStickyNav'
import { SimilarProduct } from '../../molecules'
import { products } from '../../../Data'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchProductStart, setProduct } from '../../../Redux/Action'


export function ProductDetailsTemplates() {

    const dispatch = useDispatch()
    const { productID } = useParams()
    const selector = useSelector((state) => state.productsReducer);
    const { product } = selector

    useEffect(() => {
        dispatch(fetchProductStart(productID))
        return () => {
            dispatch(
                setProduct({})
            )
        }
    }, [])

    return (
        <div>
            <ProductShow product={product} />
            <ProductSpecification product={product} />
            <SimilarProduct
                productImage="./images/Layer 002.png"
                data={products}
            />
            <BottomStickyNav product={product} />

        </div>
    )
}
