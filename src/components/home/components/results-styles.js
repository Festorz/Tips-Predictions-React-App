import { styled, TableCell, Typography } from "@material-ui/core";
import { lightBlue, teal } from "@material-ui/core/colors";
import { tableCellClasses } from "@mui/material";
import { padding } from "@mui/system";

export const ResultsTableCell = styled(TableCell)(({theme}) =>({
  height:10,
  fontSize:15,
    [`&.${tableCellClasses.head}`]:{
        backgroundColor:lightBlue[800],
        color:theme.palette.common.white,
        
         
    },
    [`&.${tableCellClasses.body}`]: {
      },
      
      [theme.breakpoints.down('sm')]:{
        fontSize: 12,
      }   
}))
export const ResultsTitle = styled(Typography)(({theme})=>({
   fontSize:16,
   color:teal[800],
   fontWeight:'bold',
   padding:10
}))