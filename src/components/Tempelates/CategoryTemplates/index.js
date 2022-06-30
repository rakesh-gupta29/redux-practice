import React from 'react'
import { ImageCarousel2 } from '../../molecules'
import { FeaturedCategory } from './FeaturedCategory'
import { FeaturedCategory2 } from './FeaturedCategory2'
import { FeaturedCategory3 } from './FeaturedCategory3'

import { cate1 } from '../../../Data'

export function CategoryTemplates() {
    return (
        <div>
            <ImageCarousel2
                ImageOne={'./images/young-pretty-woman-categorypage.png'}
                ImageTwo={'./images/young-pretty-woman-categorypage.png'}
                Imagethree={'./images/young-pretty-woman-categorypage.png'}
            />

            <FeaturedCategory data={cate1} />

            <FeaturedCategory2 data={cate1} />

            <FeaturedCategory3 data={cate1} />
            
        </div>
    )
}
