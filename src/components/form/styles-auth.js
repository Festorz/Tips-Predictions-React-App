import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]:{
            marginTop: theme.spacing(2),
        }
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        }
    },
    country:{
        backgroundColor:theme.palette.common.white,
        paddingLeft:20,
        color:theme.palette.common.black,
        // width:'100%',
        height:50,
        [theme.breakpoints.down('sm')]:{
            width:"match-parent"
        }
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main

        
    },
    form: {
        width: '100%',
        margin:theme.spacing(3,0,2)
    },
    submit: {
        margin:theme.spacing(3,0,2)
    },
    googleButton: {
        marginBottom:theme.spacing(2)
    }
}))