import React from 'react'
import { makeStyles } from '@material-ui/core'
import {BIndependent} from '../../molecules/'
// import { BFAQ } from './BFAQ';
import { FAQHeading } from './FAQHeading';

const useStyles = makeStyles((theme) => ({
  
}))


export function FaqTemplates() {
    const classes = useStyles();
    return (
        <div >
            {/* <BFAQ/>  */}
            <BIndependent
                brebelImg={'./images/Path 6362.svg'}
                title={'FAQ'}
                titleShade={'FAQ'}
            />
            <FAQHeading/>   
        </div>
    )
}
