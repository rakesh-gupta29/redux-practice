import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { NewInput,Button } from '../../atoms'

const useStyles = makeStyles((theme) => ({
    mainPerson:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        minHeight:'65vh',
    },
    head: {
        color:'#fff',
        width:'100%',
        font: 'normal normal bold 2.2rem Gopher',
        textTransform: 'uppercase'
    },
    personForm:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    input: {
        width: '48%',
        [theme.breakpoints.down('sm')]:{
            width:'100%'
        }
    },
    butn:{
        width:'100%',
        marginTop:'5%',
    }
}))

export function PersonalInformation() {
    const classes = useStyles()
    return (
        <Box className={classes.mainPerson}>
            <h2 className={classes.head}>Personal Information</h2>

            <hr style={{ margin: '2% 0%', opacity: '.8' }} />

            <Box className={classes.personForm}>
                <NewInput
                    className={classes.input}
                    label="FIRST NAME " 
                    placeholder="First Name Here"
                    />
                <NewInput
                    className={classes.input}
                    label="LAST NAME" 
                    placeholder="Last Name Here"
                    />
                <NewInput
                    className={classes.input}
                    label="ADDRESS" 
                    placeholder="Address Here" 
                    /> 
                <NewInput
                    className={classes.input}
                    label="CITY / TOWN" 
                    placeholder="City Name Here" 
                    /> 
                <NewInput
                    className={classes.input}
                    label="COUNTRY / STATES" 
                    placeholder="Country / State" 
                    /> 
                <NewInput
                    className={classes.input}
                    label="POSTCODE / ZIP" 
                    placeholder="Post Code" 
                    /> 
                <NewInput
                    className={classes.input}
                    label="Email Address"  
                    placeholder="emailaddress@demo.com"
                    /> 
                <NewInput
                    className={classes.input}
                    label="PHONE" 
                    placeholder="Phone number" 
                    /> 

                <Button 
                name="SAVE CHANGES"
                className={classes.butn}
                style={{width:'40%',float:'right', fontSize:'1.2rem',padding:"1%"}}
                />
               
            </Box>

        </Box>
    )
}
