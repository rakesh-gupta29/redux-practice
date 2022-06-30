import React from 'react'
import {
    Box, makeStyles,
} from '@material-ui/core';
import { LightWeight } from "./LightWeight";
import { Curved } from "./Curv";
import { WaterProof } from "./WaterProof";
import { FourWatches } from './FourWatches'
import { ProductIntro } from './ProductIntro'

import { WatchProductAutoSlider, QualityImage } from '../../../../Data'

import {
    // ProductFunctions,
    // SportMode,
    PlayButton,
    Unleashing,
    Quality,
    ImageCarousel,
    CutsAbove
} from "../../../molecules";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '0 auto',
        height: '90vh',
        marginBottom: '10%'
    },
    img: {
        width: '100%',
        height: '100%'
    }
}))

export function WatchProductTemplate1() {
    const classes = useStyles()

    return (
        <Box>
            <ProductIntro />
            <ImageCarousel
                ImageOne={'./images/banners/01.jpg'}
                ImageTwo={'./images/banners/02.jpg'}
                Imagethree={'./images/banners/03.jpg'}
            // ImageFour={'./images/luke.png'}

            />

            <FourWatches />

            {/* Video Section */}
            <PlayButton
                Video={'https://youtu.be/mjEUAE_C9cM'}
            />


            <LightWeight />


            {/* Cuts Above carousel from molecules */}
            <CutsAbove
                data={WatchProductAutoSlider}
            />


            <Curved />


            {/* <CutsAbove
                data={QualityImage}
                title1="sdjhfkj"
            /> */}


            {/* Designed to be Sassy */}
            <Quality
                data={QualityImage}
            />


            <WaterProof />

            {/*<ProductFunctions
                title="Product Functions"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                backgroundImage={'./images/Mask Group 8.png'}
                productImage={'./images/Layer 0.png'}
            />
            <SportMode
                title="Sports Mode"
                paragraph="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                backgroundImage={'./images/Mask Group 9.png'}
                productImage={'./images/Layer 002.png'}
           />*/}

            <Unleashing
                backgroundImage={'./images/Mask Group 3.png'}
                style={{ marginBottom: "10%" }}
            />


        </Box>
    )
}
