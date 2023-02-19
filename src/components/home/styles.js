import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    body:{
        backgroundColor:'#ffff',
        width:'80%'
    },
   
    list:{
        backgroundColor:'#ffebee',
        width:'70%', 
        [theme.breakpoints.down('sm')]:{
            width:"90%",
        },  
    },
    listItems:{
        display:'flex',
        justifyContents:'flex-center',

    },

    // guru:{
    //     width:'80%',
    //     marginTop:20,
    //     padding:10,
    //     backgroundColor:'#00e676',
    //     [theme.breakpoints.down('sm')]:{
    //         width:'100%'
    //     },
    // },
}),
);