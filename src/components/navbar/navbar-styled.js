import { AppBar, Box, Button, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { green, orange, teal } from '@material-ui/core/colors';
import { makeStyles, styled } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

export const StyledAppbar = styled(AppBar)(({ theme }) => ({
    borderRadius: 15,
    height: 'inherit',
    margin: '10px 0',
    flexDirection: 'row',
    padding: '5px 10px',
    position: 'static',
    backgroundColor: teal[900],
    width: "100%",
    color: 'white',

    [theme.breakpoints.down('sm')]: {
        height: 'inherit'
    }


}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-between',
        }

}));

export const SmallScreenToolbar = styled(Toolbar)(({ theme }) => ({
    display:'none',
    [theme.breakpoints.down('sm')]: {
        display:'initial'
        }

}));

export const StyledLogo = styled(Box)(({ theme }) => ({
    height: 80,
    width: 80,
    borderRadius: 5,
    marginRight:30,
    [theme.breakpoints.down('sm')]: {
        height: 50,
        width: 50,  
        marginRight:0   
    }

}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
    marginRight: 6,
    fontWeight: 'bold',
    fontSize: "25px",
    color: orange[500],
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
        fontSize:18,
        marginRight:0,
    }
}));

export const SmallScreen = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
    display:'flex',
    justifyContent:'space-between',
    marginRight: 6,

    fontWeight: 'bold',
    fontSize: "25px",
    color: orange[500],
    textDecoration: 'none',
    
        fontSize: '20px',
        margin:"0 15px"
    }
}));

export const FullScreen = styled(Box)(({ theme }) => ({
    flexGrow:1,

    [theme.breakpoints.down('sm')]: {
    display:'none',
    }
}));

export const StyledMenu = styled(MenuIcon)(({ theme }) => ({
    display:'none',
    [theme.breakpoints.down('sm')]: {
    color: orange[500],
    display:'initial'
    }
}));

export const StyledFullButtonBox = styled(Box)(({ theme }) => ({
 
    [theme.breakpoints.down('sm')]: {
    display:'none',
    }
}));

export const SmallScreenBox = styled(Box)(({ theme }) => ({
}));

export const BoxItems = styled(Button)(({ theme, selected }) => ({
    color:'white',
    backgroundColor:'#357a38',
    margin:'3px 3px',
    [theme.breakpoints.down('sm')]: {
    // fontSize:'10px',
    }
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    "&:hover": {
        backgroundColor: "#009900 !important",
        color:green[700]
      },
    [theme.breakpoints.down('sm')]: {
    // fontSize:'10px',
    }
}));


export default makeStyles((theme) => ({
    menuIcon:{
       color:'#ff9100'
   },
   button:{
       marginRight:50,
       backgroundColor:'teal'
   },
   display: {
       flexGrow: 1
   },

   usermenu: {
       color: 'white',
       backgroundColor:'#ff9100',
       margin:'3px 3px ',
       
       [theme.breakpoints.down('sm')]:{
           fontSize:'10px'
       }
       
   },
   menu: {
       marginTop:55,
   },

   BoxItems: {
       color: 'white',
       backgroundColor:green[800],
       margin:'3px 3px ', 
       "&:hover": {
        backgroundColor: green[500],
      },
             
       [theme.breakpoints.down('sm')]:{
           fontSize:'10px',
        //    width:'100px', 
        //    fontSize:8
       }

   }   
   
}))


