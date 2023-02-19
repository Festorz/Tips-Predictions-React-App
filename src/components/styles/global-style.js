import { Avatar, Box, Button, CardActions, Container, FormControlLabel, Grid, Link, List, Paper, Table, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import { amber, blue, blueGrey, brown, cyan, green, grey, indigo, orange, pink, red, teal} from '@material-ui/core/colors';
import { styled } from '@material-ui/core/styles';
import { Check, ChevronRightOutlined, CloseRounded, PaymentSharp } from '@material-ui/icons';
import { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableHead = styled(TableCell)(({mcolor, theme }) => ({
  height: 10,
  fontSize: 15,
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: mcolor ? mcolor : cyan[900],
    color: theme.palette.common.white,

  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 11,
  }


}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  height: 10,
  fontSize: 14,
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      fontSize: 11,
    }

  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 8,
  }


}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  height: 10,
  '&:nth-of-type(odd)': {
    backgroundColor: grey[200],
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export const StyledTable = styled(Table)(({ theme }) => ({
  width: '70%',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  width: '70%',
  // fontSize:'14px',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  width: '80%',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}));

export const StyledLivescores = styled(Box)(({ theme }) => ({
  width: '80%',
  height:'50%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height:'50%'

  }
}));


export const StyledHeading = styled(Typography)(({ theme }) => ({
  fontSize: 25,
  fontWeight: 'bold',
  textTransform: 'Uppercase',
  paddingTop: 20,
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize:20,
    paddingTop: 15,

  }

}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor:theme.palette.common.white,
  // [theme.breakpoints.down('sm')]: {
  //   fontSize:16,
  // }
}));

export const StyledParagraph = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  [theme.breakpoints.down('sm')]: {
    fontSize:16,
  }
}));

export const SectionBox = styled(Box)(({ theme }) => ({
  border: 2,
  // backgroundColor:theme.palette.common.white,
  borderColor: "primary",
  borderRadius: 10,
  marginTop: 20
}));

export const StyledGuru = styled(Box)(({ theme }) => ({
  marginTop: 20,
  padding: 30,
  width: '75%',
  display: 'flex',
  border: 1,
  borderColor: '#9fa8da',


  [theme.breakpoints.down('sm')]: {
    padding: 0,
    marginTop: 20,
    width: '95%',
    display: 'inline'
  }

}));

export const StyledImage = styled(Box)(({ theme }) => ({
  width:"50%",
  borderRadius: 10,
  // height:mwidth? mwidth:"40%",

  [theme.breakpoints.down('sm')]: {
    width: '100%'
  },

}));

export const StyledAdsSection = styled(Box)(({ theme, mcolor }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  backgroundColor:mcolor,
  padding:theme.spacing(1),
  marginTop: 10,
  marginBottom: 10,
  borderRadius:10,
  width: '60%',
  [theme.breakpoints.down('sm')]: {
    width: '95%',
    flexDirection: 'column',

  }
}));

export const AdsImage = styled(Box)(({ theme }) => ({
  width:"50%",
  height:100,
  borderRadius: 10, 
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height:90,

  },
}));

export const AdsDesc = styled(Typography)(({ theme }) => ({
  justifyContent:'center',
  backgroundColor:'white',
  color:indigo[900],
  fontSize:18,
  width:"40%",
  padding:theme.spacing(2),
  fontWeight:'bolder',
  borderRadius: 10, 
  [theme.breakpoints.down('sm')]: {
    width: '95%',
  padding:theme.spacing(1),
  marginTop:10,
  fontSize:18,


  },
}));


export const StyledFreeTips = styled(Box)(({ theme }) => ({
  marginTop: 20,
  height: "70%",
  width: "60%",
  border: "teal",
  paddingBottom: 20,
  borderRadius: 10,
  backgroundColor: teal[500],
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  },

}));

export const StyledCard = styled(Box)(({ theme }) => ({
  // height: "70%",
  width: "50%",
  borderRadius: 10,
  backgroundColor: grey[400],
  padding: 5,
  marginLeft: 10,
  [theme.breakpoints.down('sm')]: {
    // height: "20%",
    marginLeft: 0,
    width: '97%',
    padding: 5,
    marginBottom: 10
  },

}));


export const StyledCardTitle = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 'bold',


}));

export const StyledCardText = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  fontWeight: 'bold',
  color: orange[500],
  marginBottom: 10,

}));


export const StyledCardAction = styled(CardActions)(({ theme }) => ({
  justifyContent: 'center'

}));

export const StyledCardPaymentBox = styled(Box)(({ theme }) => ({
  justifyContent: 'space-around',
  display: 'flex',
  width: '250px',
  padding: 10

}));
export const StyledCardPaymentTitle = styled(Box)(({ theme }) => ({
  justifyContent: 'center',
  display: 'flex',
  width: '250px',
}));

export const StyledPaymentTitle = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 'bold',
}));


export const StyledMpesa = styled(Button)(({ theme }) => ({
  backgroundColor: green[900],
  color: 'white',
  fontWeight: 'bolder',
  height: 27,
  "&:hover": {
    backgroundColor: green[700],
  },

}));

export const StyledPayPalButton = styled(Button)(({ theme }) => ({
  backgroundColor: amber['A700'],
  color: indigo[700],
  fontWeight: 'bolder',
  height: 27,
  "&:hover": {
    backgroundColor: amber[500],
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: green[900],
  color: "#fff",
  fontWeight: 'bolder',
  height: 27,
  "&:hover": {
    backgroundColor: green[500],
  },
}));

export const MultibetsButton = styled(Button)(({ theme }) => ({
  backgroundColor: blueGrey[700],
  color: "#fff",
  fontSize: 12,
  height: 22,
  padding: 0,
  margin: 0
}));

export const StyledPayPal = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2),
  flexDirection: 'column',
  overflow: 'hidden',
  overflowY: 'scroll',
  justifyContent: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  }
}));


export const StyledPayPalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  padding: 4,
  borderRadius: 20,
  border: '2px solid #212121',
  [theme.breakpoints.down('sm')]: {
    width: '80%',
    left: '50%',
  }
}));

export const MpesaPaper = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2),
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  }
}));

export const PaypalTitle = styled(Typography)((color) => ({ theme }) => ({
  fontSize: 16,
  color: green[900],
  fontWeight: 'bold',
  marginLeft: '20%'
}));


export const SmartTitle = styled(Typography)(({ textcolor, mleft, theme }) => ({
  fontSize: 20,
  color: textcolor,
  fontWeight: 'bold',
  marginLeft: mleft
}));

export const PaymentHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '10px 10px',
}));

export const ModalCloser = styled(CloseRounded)(({ theme }) => ({
  font: 13,
  fontWeight: 'bolder',
}));

export const MpesaButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1, 0, 2),
  backgroundColor: teal[900],
  color: 'white',
  "&:hover": {
    backgroundColor: teal[800],
  },

}));

export const MpesaCheckbox = styled(FormControlLabel)(({ theme }) => ({
  font: 2,
  color: 'black'
}));


export const ErrorText = styled(Typography)(({ tcolor, theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: red[500],
  fontSize: 12,
  marginBottom: 12,
  fontWeight: 'bold',
  maxHeight: 12,
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
  }

}));

export const SuccessText = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: blue[900],
  fontSize: 12,
  marginBottom: 12,
  fontWeight: 'bold',
  maxHeight: 12,
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
  }

}));

export const StyledSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 10,
  marginBottom: 10,
  width: '80%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    flexDirection: 'column-reverse',

  }
}));

export const StyledPredictionsTable = styled(Table)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('sm')]: {
  }
}));


export const StyledGamesBox = styled(Paper)(({ theme, mb }) => ({
  width: '65%',
  padding: 5,
  height: '20%',
  marginBottom:mb,
  boxShadow: 24,
  [theme.breakpoints.down('sm')]: {
    width: '98%',
    padding: 2,
  }
}));

export const StyledPaymentPaper = styled(Paper)(({ theme }) => ({
  marginLeft: 10,
  width: '35%',
  height: '55%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    marginLeft: 0,
    marginBottom: 5,
  }
}));

export const StyledPaymentBox = styled(Box)(({ theme }) => ({
  padding: 1,
  textAlign: 'start',
  [theme.breakpoints.down('sm')]: {

    padding: 2
  }
}));

export const PaymentBoxHeader = styled(Typography)(({ theme }) => ({
  color: pink[500],
  fontSize: 25,
  textAlign: 'center',
  margin: theme.spacing(1),
  textDecoration: 'underline',
  textDecorationColor: 'black',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: 24,
  }

}));

export const PaymentIcon = styled(PaymentSharp)(({ theme }) => ({
  color: amber[900],
  marginTop: '5px',
  fontSize: 25,
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: 20,
  }

}));

export const StyledMultibetBox = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 10,
  padding: theme.spacing(1),
  width: '65%',
  [theme.breakpoints.down('sm')]: {
    width: '96%',
    marginTop: 5,
    padding: theme.spacing(1),


  }
}));

export const StyledMultibetGamesBox = styled(Paper)(({ theme }) => ({
  width: '98%',
  padding: 5,
  marginBottom: theme.spacing(5),
  boxShadow: 24,
  [theme.breakpoints.down('sm')]: {
    width: '99%',
    padding: 2,
    marginBottom: theme.spacing(3),

  }
}));

export const TableHeader = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontSize: 25,
  textAlign: 'center',
  margin: theme.spacing(1),
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: 18,
  }

}));

export const SelectPaper = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2),
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  }
}));

export const SelectTitle = styled(Typography)(({ theme }) => ({
  fontSize: 17,
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: 15
  }
}));




export const StyledGrid = styled(Grid)(({ theme }) => ({
  marginTop: 2,
  width:'85%',
  justifyContent: 'space-between',

  [theme.breakpoints.down('sm')]: {
    width:"100%",
    justifyContent: 'space-around',
  }

}));

export const StyledGridItem = styled(Grid)(({ theme }) => ({
  width: '48%',
  height: '80%',
  margin: '15px 0',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  }

}));


export const PaperTitle = styled(Typography)(({ textcolor, bcolor, theme, mwidth }) => ({
  fontSize: 17,
  margin: theme.spacing(1),
  color: textcolor,
  borderRadius:10,
  height:24,
  backgroundColor:bcolor,
  width:mwidth,
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: 16,
  width:'90%',
  height:23

  }
}));

export const PricingPaper = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(1),
  height: '50%',
  [theme.breakpoints.down('sm')]: {
    margin: '15px 0'
  }
}));

export const PaymentPaper = styled(Paper)(({ theme, bcolor }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(1),
  border: `2px solid ${bcolor}`,
  height: '50%',
  borderRadius:10,
  [theme.breakpoints.down('sm')]: {
    margin: '15px 0'
  }
}));

export const PricingInnerpaper = styled(Paper)(({ theme }) => ({
  justifyContent: 'space-around',
  paddingLeft: 20,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 10,

  }
}));
export const PricingLowerpaper = styled(Paper)(({ theme }) => ({
  justifyContent: 'space-around',
  display: 'flex',
  marginTop: 5,
  [theme.breakpoints.down('sm')]: {
  }
}));

export const StyledList = styled(List)(({ theme }) => ({
  alignItems: 'flex-center',
  [theme.breakpoints.down('sm')]: {
  }
}));

export const CheckIcon = styled(Check)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 'bolder',
  color: red[900],
  [theme.breakpoints.down('sm')]: {
  }
}));

export const ChevronIcon = styled(ChevronRightOutlined)(({ theme }) => ({
  fontSize: 22,
  fontWeight: 'bold',
  color: red[900],
  [theme.breakpoints.down('sm')]: {
    // fontSize: 20
  }
}));

export const PaymentImage = styled(Box)(({ theme }) => ({
  width:'60%',
  height:70,
  borderRadius:10,
  [theme.breakpoints.down('sm')]: {
    width:'80%'
  }
}));

export const StyledAvatar = styled(Avatar)(({ mcolor, theme }) => ({
  backgroundColor: mcolor,
  color: 'white',
  textDecoration: 'bolder',
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    // fontSize:16
  }
}));

export const StyledPrice = styled(Typography)(({ theme }) => ({
  color: blue[900],
  fontSize: 18,
  margin: theme.spacing(1),
  padding: '5px 0',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: 15,
  }
}));

export const ActionButton = styled(Button)(({mcolor, mwidth, theme }) => ({
  backgroundColor: mcolor,
  color: theme.palette.common.white,
  fontSize: 15,
  borderRadius: 10,
  width:mwidth,
  height: 20,
  margin: theme.spacing(1),
  padding: theme.spacing(0.8),
  textDecoration: 'none',

  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
    height: 15,
  }
}));

//popular games
export const StyledPopular = styled(Box)(({ theme }) => ({
  marginTop: 5,
  width: '80%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  }

}));

export const StyledPopularGrid = styled(Grid)(({ theme }) => ({
  marginTop: 2,
  display:'flex',
  overflowX:'scroll',
  justifyContent: 'space-between',

  [theme.breakpoints.down('sm')]: {
    width:"100%",
    justifyContent: 'space-between',
  }

}));



export const StyledPopularGridItem = styled(Grid)(({ theme }) => ({
  width: '45%',
  height: '90%',
  margin: '5px 40px 5px 0',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    // margin: '5px 20px 5px 0',
  }

}));

export const PopularPaper = styled(Paper)(({bcolor, theme }) => ({
  padding:theme.spacing(1),
  width:'100%',
  border: `2px solid ${bcolor}`,
  borderRadius:10,
  [theme.breakpoints.down('sm')]: {
  }
}));


export const StyledRow = styled(Box)(({ theme }) => ({
  display:'flex',
  justifyContent:'space-around',
  [theme.breakpoints.down('sm')]: {
    // width: '100%'
  },

}));

export const StyledLogo = styled(Box)(({ theme }) => ({
  width:100,
  height:100,
  borderRadius: 10,
  [theme.breakpoints.down('sm')]: {
    width: 90,
    height:90,
  },

}));

export const StyledColumn = styled(Box)(({ theme }) => ({
  width: 80,
  padding:theme.spacing(1),
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-around',
  [theme.breakpoints.down('sm')]: {
  width: 70,
  padding:theme.spacing(1),
    // backgroundColor:grey[500],
  },

}));

export const StyledData = styled(Box)(({mcolor, theme, fs }) => ({
  width:'90%',
  padding:theme.spacing(1),
  color:'white',
  fontSize:fs ? fs : 13,
  fontWeight:'bold',
  backgroundColor:mcolor,
  borderRadius: 10,
  [theme.breakpoints.down('sm')]: {
    width:"75%",
    fontSize:11,
    borderRadius: 5,  
  },

}));

export const StyledStat = styled(Typography)(({textcolor, theme }) => ({
  padding:theme.spacing(1),
  textJustify:'auto',
  width:"50%",
  color:textcolor && textcolor,
  fontSize:16,
  fontWeight:'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize:14,
  
  },

}));

export const MoreButton = styled(Button)(({theme }) => ({
  backgroundColor: green[900],
  color: theme.palette.common.white,
  fontSize: 15,
  borderRadius: 10,
  width:'45%',
  height: 30,
  margin: theme.spacing(1),
  padding: theme.spacing(0.8),
  "&:hover": {
    backgroundColor: green[800],
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
    width:'35%',
    height: 25,
  }
}));


// popular details
export const DetailsPaper = styled(Box)(({ theme }) => ({
  padding:theme.spacing(1),
  width:'100%',
  [theme.breakpoints.down('sm')]: {
    width:'95%',
  }
}));

export const StyledLink = styled(Link)(({ theme, mcolor, mdecoration }) => ({
  fontSize: 18,
  color: mcolor ? mcolor : "white",
  fontWeight:'bold',
  textDecoration: mdecoration && 'none',
  [theme.breakpoints.down('sm')]: {
      fontSize:16
  }
   

}));


export const StyledTitle = styled(Typography)(({textcolor, theme }) => ({
    fontSize: 20,
    color:textcolor,
    fontWeight:'bold',
    [theme.breakpoints.down('sm')]: {
        fontSize:18
    }

}));


export const StyledPopularSection = styled(Box)(({ theme }) => ({
  margin:'20px 0',
  [theme.breakpoints.down('sm')]: {
    margin:'10px 0',
  },


}));

export const StyledTablesRow = styled(Box)(({ theme }) => ({
  display:'flex',
  justifyContent:'space-around',
  [theme.breakpoints.down('sm')]: {
    flexDirection:'column'

  },

}));

export const RowTables = styled(Paper)(({ theme }) => ({
  width:'49%',
  [theme.breakpoints.down('sm')]: {
    width:'100%',
    margin:'10px 0'
   }
}));

export const PopularDetailsGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-around',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'space-between',

  }

}));

export const PopularDetailsGridItem = styled(Grid)(({ theme }) => ({
  width: '45%',
  height: '90%',
  margin: '10px 0',

  [theme.breakpoints.down('sm')]: {    
  }

}));

export const PredictionsPaper = styled(Paper)(({bcolor, theme }) => ({
  padding:theme.spacing(1),
  border: `2px solid ${brown[700]}`,
  borderRadius:10,
  [theme.breakpoints.down('sm')]: {
  }
}));


export const PredictionTitle = styled(Typography)(({textcolor, theme }) => ({
  fontSize: 18,
  color:brown[800],
  fontWeight:'bold',
  [theme.breakpoints.down('sm')]: {
      fontSize:15
  }

}));
