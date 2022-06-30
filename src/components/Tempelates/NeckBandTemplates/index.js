import React from 'react'
import {
    PlayButton,
    Quality,
    ProductFunctions,
    SportMode,
    Unleashing,
    // SimilarProduct,
    ImageCarousel,
    CutsAbove
} from "../../molecules";
import { ProductIntro } from "./ProductIntro";
import { Specifications } from './Specifications'
import { HighTech } from './HighTech';
import { Colors } from './Colors'
import { Professional } from './Professional'

import {
    Box,
} from '@material-ui/core';
import { QualityImage ,NeckProductAutoSlider} from '../../../Data';

export function NeckBandTemplates() {

    return (
        <Box>

            <ProductIntro />

            <ImageCarousel
                ImageOne={'./images/neckband/banner/black_03.jpg'}
                ImageTwo={'./images/neckband/banner/black_04.jpg'}
                Imagethree={'./images/neckband/banner/black_07.jpg'}
            />
            <Specifications />
            <PlayButton
                Video={'https://firebasestorage.googleapis.com/v0/b/brebeltesting.appspot.com/o/Video%2FNeckband%20ii.mp4?alt=media&token=e9ba4baf-4ab0-41e0-884e-0852d6474c11'}
            />
            {/* //Carousel */}
            <CutsAbove
            data={NeckProductAutoSlider}
            />
            <HighTech />

            <Colors />

            <Professional />

           {/*<Quality
                data={QualityImage}
           />*/}

            {/*  <ProductFunctions
                title="Product Functions"
                paragraph="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                backgroundImage={'./images/Bman.png'}
                productImage={'./images/neckband.png'}
            />
          <SportMode
                title="Sport Mode"
                paragraph="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                backgroundImage={'./images/bgirl.png'}
                productImage={'./images/Png_2.png'}
                style={{ border: "2px solid red" }}
            />*/}

            <Box style={{ marginTop: "20%" }}></Box>

            <Unleashing
                backgroundImage={'./images/Mask Group 3.png'}
                style={{ marginBottom: "10%" }}
            />
            {/*<SimilarProduct />*/}

        </Box>
    )
}
