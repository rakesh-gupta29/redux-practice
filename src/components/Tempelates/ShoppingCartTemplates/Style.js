import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    Container: {
        margin: '5% 0%'
    },
    BoxContainer: {
        margin: '5% 0%'
    },
    header: {
        font: 'normal normal 45px/72px Gopher',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem'
        }
    },
    head: {
        font: 'normal normal normal 15px/24px Gopher',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem'
        }
    },
    CellStyle: {
        color: '#fff',
        font: 'normal normal 1.5rem Gopher',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },
    HeadCell: {
        width: 500,
        color: '#fff',
        font: 'normal normal 1.5rem Gopher',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },
    CircleBox: {
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        border: '2px solid #fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        font: 'normal normal 3rem Gopher',
        color: '#000',
        backgroundColor: '#fff',
        cursor: 'pointer',
        transition: "all 500ms ease-in-out",
        "&:hover": {
            backgroundColor: 'transparent',
            color: '#fff',
            border: 'none',
            transform: 'scale(1.2)',
        },
        [theme.breakpoints.down("sm")]: {
            width: '25px',
            height: '25px',
        }
    },
    ImageProduct: {
        width: '20%',
        paddingLeft: '2%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    BoxFlex: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    AddCardQun: {
        border: '2px solid #fff',
        width: '70%',
        margin: '0 auto',
        height: '5rem',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: '#000',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#fff',
        }
    },
    ButtonBox: {
        marginTop: '2%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: '5%',
        }
    },
    ButtonOutLined: {
        width: '25%',
        height: '5rem',
        padding: '0% 2%',
        [theme.breakpoints.down('sm')]: {
            width: '50%',
            height: '4rem',
            fontSize:'1rem'
        }
    },
    UpdationBox: {
        margin: '5% 0%',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            margin: '10% 0%',
        }
    },
    LeftBox: {
        width: '60%',
        padding: '0%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '0%',
        }
    },
    CouponPra: {
        font: 'normal normal 2rem Gopher',
        lineHeight: '2',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem'
        }
    },
    RightBox: {
        width: '30%',
        padding: '2%',
        backgroundColor: '#fff',
        borderRadius: '5%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '5% 0%',
        }
    },
    Apply: {
        width: '30%',
        height: '5rem',
        float: 'right',
    },
    BoxWidth: {
        width: "80%",
        margin: '0% auto'
    }
}))