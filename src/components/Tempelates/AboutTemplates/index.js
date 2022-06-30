import React from 'react'
import { BIndependent, UnleashingText, GirlRight, GirlLeft } from '../../molecules'
import { FoundersIntro } from './FoundersIntro'
import { ManWithLights } from './ManWithLights'
import { ZigZagProducts } from './ZigZagProducts'
// import { ImatagramCarousel } from '../HomeTempelates/Instagram'
// import { ZigZagProducts } from './ZigZagProducts'


export function AboutTemplates() {
    return (
        <div>
            <BIndependent
                brebelImg={'./images/Path 6362.svg'}
                title={'ABOUT'}
            />

            <ZigZagProducts />

            <FoundersIntro />

            <UnleashingText
                brebelImgBG={'./images/Path 6362.svg'}
                textonImg1={'WHY '}
                textonImg2={'REBEL'}
                br={<br />}
                style={{ color: '#FF4E00' }}
                bottomPara={'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,'}
            />

            <GirlRight
                rightImage={'./images/attractive-sensual-african-american-feminine-girl-with-afro-haircut-wearing-winter-sweater-looking-left-with-pleasant-smile-wearing-headphones-listens.png'} />

            <UnleashingText
                brebelImgBG={'./images/Path 6362.svg'}
                textonImg1={'THE '}
                textonImg2={'BEGINNING'}
                br={<br />}
                bottomPara={'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,'}
                style={{ color: '#CFFE00' }}
            />

            <GirlLeft
                leftImage={'./images/NoPath.png'} />

            <UnleashingText
                brebelImgBG={'./images/Path 6362.svg'}
                textonImg1={'REBEL '}
                textonImg2={'TODAY'}
                br={<br />}
                bottomPara={'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,'}
                style={{ color: '#FF4E00' }}
            />

            <GirlRight
                rightImage={'./images/attractive-sensual-african-american-feminine-girl-with-afro-haircut-wearing-winter-sweater-looking-left-with-pleasant-smile-wearing-headphones-listens.png'} />

            <UnleashingText
                brebelImgBG={'./images/Path 6362.svg'}
                textonImg1={'THE '}
                textonImg2={'FUTURE'}
                br={<br />}
                bottomPara={'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,'}
                style={{ color: '#CFFE00' }}
            />


            <ManWithLights />


            {/*<ImatagramCarousel/>*/}


        </div>
    )
}
