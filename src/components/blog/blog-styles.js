import { Box, Paper, Typography } from '@material-ui/core';
import { indigo, teal } from '@material-ui/core/colors';
import { styled } from '@material-ui/core/styles';
import { ChevronRightOutlined } from '@material-ui/icons';

export const BlogRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 10,
  marginBottom: 10,
  width: '80%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    flexDirection: 'column-reverse',
  justifyContent:'',

  }
}));
export const BlogBox = styled(Box)(({ theme, mb }) => ({
  width: '65%',
  padding: 5,
  height: '20%',
  marginBottom: mb,
  boxShadow: 24,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: 2,
  }
}));

export const BlogSearch = styled(Paper)(({ theme, mb }) => ({
  width: '30%',
  padding: 5,
  height: '20%',
  boxShadow: 24,
  [theme.breakpoints.down('sm')]: {
    width: '98%',
    padding: 2,
    marginBottom: 10,
  }
}));
export const SearchBox = styled(Box)(({ theme, }) => ({
  textAlign: 'start',
  padding: 10,
  [theme.breakpoints.down('sm')]: {

    // padding: 2
  }
}));

export const InnerBox = styled(Box)(({ theme, }) => ({
  textAlign: 'start',
  marginTop: 20,
  [theme.breakpoints.down('sm')]: {
  }
}));

export const BlogTitle = styled(Typography)(({ theme, mcolor }) => ({
  color: mcolor,
  fontSize: 22,
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: 18,
  }
}));

export const CategoriesBox = styled(Box)(({ theme }) => ({
  textAlign: 'start',
  textDecoration:'none',
  display: 'flex',
  flexDirection: 'row',
  marginTop: 10,
  [theme.breakpoints.down('sm')]: {
  }
}));
export const Categories = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  color:'black',
  // textDecoration:'none',
  [theme.breakpoints.down('sm')]: {
  }
}));

export const BlogChevronIcon = styled(ChevronRightOutlined)(({ theme }) => ({
  fontSize: 17,
  color: teal[500],
  [theme.breakpoints.down('sm')]: {
  }
}));

export const CategoryInnerBox = styled(Paper)(({ theme, }) => ({
  textAlign: 'start',
  textDecoration:'none',
  padding: theme.spacing(1),
  marginBottom: 20,
  [theme.breakpoints.down('sm')]: {
  }
}));

export const CategoryImage = styled(Box)(({ theme, height }) => ({
  width: "100%",
  height: '50%',
  borderRadius: 10,
  textDecoration:'none',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    width: '100%',
    height: 175,

  },
}));

export const CategoryDescription = styled(Typography)(({ theme, mcolor }) => ({
  paddingLeft:theme.spacing(1),
  fontSize: 16,
  color:'black',
  textDecoration:'none',
  [theme.breakpoints.down('sm')]: {
  }}));

  export const MoreBox = styled(Box)(({ theme, }) => ({
    display:'flex',
    justifyContent:'flex-end',
    margin: '3px 0',
    [theme.breakpoints.down('sm')]: {
    margin: '2px 0',
    }
  }));

export const ViewButton = styled(Box)(({ theme, mcolor }) => ({
  fontSize: 14,
  padding:3,
  textAlign:'center',
  textDecoration:'none',
  fontWeight: 'bold',
  color:'white',
  backgroundColor:mcolor? mcolor:indigo[500],
  height:20,
  width:100,
  [theme.breakpoints.down('sm')]: {
    fontSize: 13,
    height:18,
    padding:2
  }}));


