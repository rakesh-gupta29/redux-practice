import React from 'react'
import { Box, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { NewInput, Button, ButtonOutlined } from '../../atoms'

const useStyles = makeStyles((theme) => ({
    mainOrders: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        minHeight:'70vh',

    },
    head: {
        color:'white',
        width: '100%',
        font: 'normal normal bold 2.2rem Gopher',
        textTransform: 'uppercase'
    },
    personForm: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    CellStyle: {
        color: '#fff',
        paddingLeft:'0px',
        borderBottom:'1px solid grey',
        font: 'normal normal 1.5rem Gopher',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem'
        }
    },
    CellStyle1:{
        color: '#fff',
        paddingLeft:'0px',
        borderBottom:'1px solid grey',
        font: 'normal normal 1.5rem Gopher',
        [theme.breakpoints.down('sm')]: {
            display:'none'
        }
    },
    tbData: {
        font: 'normal normal normal 1.2rem Gopher',
        opacity: '.4'
    },
    butnOut: {
        width: '100%',
        marginTop: '5%',
    },
}))

const data= [
    {
        order:'Rebel 360 2nd Generation S.....',
        date:'August 31, 2021',
        status:'Processing',
        total:'$121.00',
        quantity:'1',
    },
    {
        order:'Rebel 1st Generation Band',
        date:'August 20, 2021',
        status:'Completed',
        total:'$295.00',
        quantity:'1'
    },
    {
        order:'Rebel Music Standard A2....',
        date:'July 27, 2021',
        status:'Cancelled',
        total:'$121.00',
        quantity:'2',
    },

]

export function MyOrders({data}) {
    const classes = useStyles()
    return (
        <Box className={classes.mainOrders} >
            <h2 className={classes.head}>My Orders</h2>

            <hr style={{ margin: '2% 0%', opacity: '.8' }} />

            <Box className={classes.personForm}>
                <TableContainer >
                    <Table >
                        <TableHead>
                            <TableRow >
                                <TableCell className={classes.CellStyle}>Order</TableCell>
                                <TableCell align='left' className={classes.CellStyle1}>Date</TableCell>
                                <TableCell align='left' className={classes.CellStyle1}>Status</TableCell>
                                <TableCell className={classes.CellStyle1}>Total</TableCell>
                                <TableCell className={classes.CellStyle}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>


                            {
                                data.map((item, index) => {
                                    return (
                                        <TableRow >
                                            <TableCell className={classes.CellStyle}>
                                                <p className={classes.tbData}>{item.order}</p>
                                            </TableCell>
                                            <TableCell align='left' className={classes.CellStyle1}>
                                                <p className={classes.tbData}> {item.date}</p>
                                            </TableCell>
                                            <TableCell align='left' className={classes.CellStyle1}>
                                                <p className={classes.tbData}>{item.status}</p>
                                            </TableCell>
                                            <TableCell className={classes.CellStyle1}>
                                                <p className={classes.tbData}>{item.total} for {item.quantity} item</p>
                                            </TableCell>
                                            <TableCell className={classes.CellStyle}>
                                                <ButtonOutlined
                                                    name="View"
                                                    // onClick={()=>{ history.push('/') }}
                                                    style={{ fontSize: '1.2rem' }}
                                                    className={classes.butnOut} />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>





            </Box>

        </Box>
    )
}
