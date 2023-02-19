import React from 'react'
import { Avatar, Container, ListItem, ListItemText } from '@material-ui/core';
import { amber } from '@material-ui/core/colors';
import { ListItemAvatar } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { PaymentImage, ChevronIcon, PaperTitle, PricingInnerpaper, PricingLowerpaper, PaymentPaper, StyledAvatar, StyledBox, StyledGrid, StyledGridItem, StyledHeading, StyledList, StyledParagraph, StyledPrice } from '../styles/global-style';
import { payment_methods } from './payments_methods';
import man  from '../../data/images/manu.png'


const Payments = () => {
  return (
    <Container align='center'>
      <Helmet>
        <title>Tips Predictions Payments Methods </title>
        <meta name='description' content='Tips Predictions provides sure Fixed Matches, VIP, multibets, premium tips,
                jackpot predictions. Use the these payments methods to subscribe for these tips now!.'/>
      </Helmet>
      <StyledBox align='justify'>
        <StyledHeading variant='h5'>Payments Methods</StyledHeading>
        <StyledParagraph variant='caption'>
          Below are the payments methods supported by <b>tips predictions</b> for purchasing or subscribing to our tips.
          Choose your payment choice now and subscribe.</StyledParagraph>
      </StyledBox>
      <StyledGrid container >
        {payment_methods.map((offer) => (
          <StyledGridItem item key={offer.id}>
            <PaymentPaper bcolor={offer.color} >
              <PaymentImage component="img"
                    alt={offer.label}
                    src={offer.image}>
              </PaymentImage>
              <PaperTitle textcolor={offer.color}>{offer.label}</PaperTitle>
              <PricingInnerpaper>
                <StyledList>
                  {offer.directions.map((property) => (
                    <ListItem key={property.id}>
                      <ListItemAvatar>
                        <Avatar>
                          <ChevronIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText>
                        <StyledParagraph variant='body2'>
                        {property.dir}
                        </StyledParagraph>
                      </ListItemText>
                    </ListItem>
                  ))}
                </StyledList>
              </PricingInnerpaper>
            </PaymentPaper>
          </StyledGridItem>
        ))}
      </StyledGrid>

    </Container>
  )
}

export default Payments