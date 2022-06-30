import React from 'react';
import { HeadLogin } from './Head'
import { Login } from './Login'
import { FontFloat } from './FontFloat'
import { LogSignImage } from '../../molecules'
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  position: {
    position: 'relative',
    width: '80%',
    margin: '0 auto',
    marginBottom: '10%',
    [theme.breakpoints.between('md', 'lg')]: {
      marginBottom: '15%',
  },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  }
}))

export function LoginTemplates() {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.position}>
        <HeadLogin />
        <LogSignImage />
        <Login />
        <FontFloat/>
      </Box>
    </>
  )
}