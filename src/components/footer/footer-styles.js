import { Box, Divider, Grid, Icon, Link, Typography } from "@material-ui/core";
import { cyan, green, teal, yellow } from "@material-ui/core/colors";
import { styled } from '@material-ui/core/styles';
import { ChevronRight } from "@material-ui/icons";


export const FooterBox = styled(Box)(({ theme }) => ({
    backgroundColor: teal[900],
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    marginTop: 70,
    color: 'white',
    [theme.breakpoints.down('sm')]: {
        marginTop: 70,
    }

}));

export const FooterInnerBox = styled(Box)(({ theme }) => ({
    width: "90%",

}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
    margin: '10px 0px',
    [theme.breakpoints.down('sm')]: {
        margin: '4px 0px',
    }

}));

export const FooterGrid = styled(Grid)(({ theme }) => ({
    justifyContent: 'space-around',
    paddingBottom:10,
    [theme.breakpoints.down('sm')]: {
        // justifyContent: 'space-evenly',
    }

}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
    fontSize: 20,
    textAlign:'start',
    color: yellow[700],
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        fontSize:16
    }
    
}));

export const StyledLink = styled(Link)(({ theme, mcolor }) => ({
    fontSize: 15,
    color: mcolor ? mcolor : "white",
    display: 'flex',
    padding: '5px 0',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
        fontSize:14
    }

}));

export const StyledCheck = styled(ChevronRight)(({ theme }) => ({
    fontSize: 16,
    color: yellow[300],
    
}));


export const StyledInfoTitle = styled(Typography)(({ theme }) => ({
    fontSize: 20,
    color: "black",
    fontWeight: 'bold',
}));

export const StyledInfo = styled(Typography)(({ theme }) => ({
    fontSize: 15,
    color: "white",
    display: 'flex',
    padding: '5px 5px',

    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
    }
}));

export const StyledInfoBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        // textAlign:'center',
        // paddingLeft:30
        
        
    }
}));

export const SocialIcons = styled(Box)(({ theme }) => ({
    justifyContent:'center',
    display: 'flex',
  
}));
export const StyledIcon = styled(Icon)(({ theme }) => ({
    margin:5,
    color:'white',
  
}));
export const LowerFooterBox = styled(Box)(({ theme }) => ({
    backgroundColor: green[900],
    width: "100%",
    color: 'white',
    marginTop:20,
    padding:"20px 0",
    marginBottom:-10,
    [theme.breakpoints.down('sm')]: {
        padding:"10px 0"
    }
}));

export const StyledCopyright = styled(Typography)(({ theme }) => ({
    fontSize: 17,
    color: "white",
    textDecoration: 'none',
    fontVariant:'h1'
}));
