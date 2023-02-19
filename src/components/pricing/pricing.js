import { Avatar, Container, ListItem, ListItemText } from '@material-ui/core';
import { amber } from '@material-ui/core/colors';
import { ListItemAvatar } from '@mui/material';
import { React } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ActionButton, CheckIcon, PaperTitle, PricingInnerpaper, PricingLowerpaper, PricingPaper, StyledAvatar, StyledBox, StyledGrid, StyledGridItem, StyledHeading, StyledList, StyledParagraph, StyledPrice } from '../styles/global-style';
import { Prices } from './prices';



const Pricing = () => {
  return (
    <Container align='center'>
      <Helmet>
        <title>Tips Predictions Top Fixed Matches | VIP predictions | Top Matches Today Prices </title>
        <meta name='description' content='Tips Predictions Fixed Matches prices, VIP tips prices, multibets prices, premium tips prices
                jackpot predictions prices, Free tips, Guru tips prices are shown below. Win your bet today!!'/>
      </Helmet>
      <StyledBox align='justify'>
        <StyledHeading variant='h5'>Tips Prediction markets Prices</StyledHeading>
        <StyledParagraph variant='caption'>
          Below are our distinct <b>tips predictions</b> betting markets categories
          in respect to their properties. Each categories has its own price as shown below.
          Click <b>subscribe</b> button of your predictions choice to purchase these tips.</StyledParagraph>
      </StyledBox>
      <StyledGrid container >
        {Prices.map((offer) => (
          <StyledGridItem item key={offer.id}>
            <PricingPaper>
              <StyledAvatar mcolor={offer.color}>
                {offer.acronym}
              </StyledAvatar>
              <PaperTitle textcolor={offer.color}>{offer.label}</PaperTitle>
              <PricingInnerpaper>
                <StyledList>
                  {offer.properties.map((property) => (
                    <ListItem key={property.id}>
                      <ListItemAvatar>
                        <Avatar>
                          <CheckIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText>
                        {property.label}
                      </ListItemText>
                    </ListItem>
                  ))}
                </StyledList>
              </PricingInnerpaper>
              <PricingLowerpaper>
                <StyledPrice>{offer.price} for {offer.duration}</StyledPrice>
                {/* <StyledPrice>2 Days</StyledPrice> */}
                <ActionButton mcolor={amber[900]} component={Link} to={offer.route} >
                  Subscribe
                </ActionButton>
              </PricingLowerpaper>
            </PricingPaper>
          </StyledGridItem>
        ))}
      </StyledGrid>

    </Container>

  )
}

export default Pricing