import { Box } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { styled } from '@material-ui/core/styles'
import { WhatsApp } from '@material-ui/icons';


export const IconBox = styled(Box)(({ theme }) => ({
    zIndex:99999,
    bottom:20,
    position:'fixed',
    right:25,  
    [theme.breakpoints.down('sm')]: {
     
    },
  
  }));

export const WhatsAppIcon = styled(WhatsApp)(({ theme }) => ({
    color:green[900],
    textDecoration:'none',
    [theme.breakpoints.down('sm')]: {
     
    },
  
  }));