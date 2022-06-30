import {
    makeStyles,
}
    from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    Main: {
        marginTop: '10%'
    },
    BoxContainer: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    ContainerBox: {
        padding: '2%',
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginTop: '10%',
            padding: '0%',
        },
        "& h1": {
            font: 'normal normal normal 2.4rem Gopher'
        },
        "& h2": {
            font: 'normal normal normal 1.5rem Gopher',
            marginLeft: '2%'
        },
    },
    head: {
        font: 'normal normal bold 1.4rem Gopher',
    },
    arrow: {
        margin: '0rem .8rem',
        fontSize: '1.2rem'
    },
    InputUserName: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    PaymentConfirm: {
        width: '100%',
        padding: '2% 0%',
        backgroundColor: '#000'
    },
    PaymentWidth: {
        width: '80%',
        margin: '0 auto',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        }
    },
    PaymentConfirmImage: {
        width: '5rem',
        [theme.breakpoints.down('sm')]: {
            width: '5rem'
        }
    },
    BoxProduct: {
        width: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '60%'
        }
    },
    PaymentProductName: {
        font: 'normal normal 2.5rem Gopher',
        marginLeft: '2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
            marginLeft: '2rem',
        }
    },
    PaymentButton: {
        width: '15%',
        [theme.breakpoints.down('sm')]: {
            width: '40%'
        },
        "& a": {
            font: 'normal normal 1.3rem Gopher',
        }
    },
    BoxWidth: {
        width: "80%",
        margin: '0% auto',
    },
    CouponBox: {
        width: "90%",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            flexWrap: 'wrap',
            height: 'fit-content'
        }
    },
    inputWhite: {
        width: '60%',
        "& input": {
            background: '#fff',
            borderRadius: '3rem',
            outline: 'none',
            color: 'black'
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    btnOutline: {
        width: '30%',
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginTop: '4%'
        }
    },
    TotalWhiteBox: {
        width: '90%',
        padding: '8%',
        marginTop: '30%',
        backgroundColor: '#fff',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '5% 0%',
        }
    },
    left: {
        paddingLeft: '0px',
        font: 'normal normal normal 1.3rem Gopher'
    },
    right: {
        paddingRight: '0px',
        font: 'normal normal normal 1.3rem Gopher',
        textAlign: 'right'
    }
}))