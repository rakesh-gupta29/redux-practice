import React from 'react'
import { CarouselMolecule } from './Carousel'
import { Static4Images } from './Static4Images'
import { FeaturedCollections } from './FeaturedCollection'
import { UnleashingText } from '../../molecules'
import { PlayAround } from './PlayAround'
// import { Feedback } from './Feedback'
import { ImatagramCarousel } from './Instagram'
import { PlayButton } from "../../molecules";

export function HomeTempelates() {
    return (
        <div>
            <CarouselMolecule />
            <Static4Images />
            <FeaturedCollections />
            <PlayButton
                Video={'https://firebasestorage.googleapis.com/v0/b/brebeltesting.appspot.com/o/Video%2FHome.mp4?alt=media&token=c7c8e2e0-70a6-45f9-a831-cd1e70bc2e9f'}
            />
            <UnleashingText
                textonImg1={'UNLEASHING THE '}
                textonImg2={'REALYOU'}
                style={{ color: '#FF4E00' }}
            />

            {/*<PlayAround />*/}
            {/*<Feedback />*/}
            {/*<ImatagramCarousel />*/}
        </div>
    )
}
