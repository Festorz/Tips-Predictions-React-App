import { Container } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import { React, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import * as API from '../../api/index';
import Mpesa from '../../payments/mpesa/mpesa';
import ReactPaypal from '../../payments/paypal/paypal';
import { PaymentBoxHeader, SmartTitle, StyledBox, StyledGamesBox, StyledHeading, StyledParagraph, StyledPaymentBox, StyledPaymentPaper, StyledSection } from '../styles/global-style';
import GamesTable from './vip_table';




const VIP = () => {
    const [games, setGames] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [subscribed, setSubscribed] = useState(false);


    useEffect(() => {
        getUser();
        getGames();
    }, [])

    const getGames = async () => {
        try {
            const { data } = await API.VIPGames('VIP')
            const match = data[0].games
            setGames(match)

        } catch (error) {
            console.log(error);
        }
    }

    const getUser = async () => {
        try {
            const username = user?.user.username
            const { data } = await API.VIPSubscribers(username)
            setSubscribed(data[0].vip)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container align='center'>
            <Helmet>
                <title>VIP Football Predictions</title>
                <meta name='description' content="Tips predictions.com presents smart and sure VIP tips for today's football games. 
                Claim these tips now, sign Up and  subscribe to get these expert predictions today!!"/>
            </Helmet>

            <StyledBox align='justify'>
                <StyledHeading variant='h5'>VIP Tips Today</StyledHeading>

                <StyledParagraph variant='caption'>
                    This page is for VIP subscribers. Here we display <b>VIP Predictions</b>  for today's football games. These tips are
                    sure predictions with an evarage accuracy of 95%. Betting with these tips in your bet will result to great lumpsome.
                    VIP subscriptions lasts for 2 days. They cost only <b>12 USD</b> or <b>Ksh 1200</b>. Click <b>Subscribe</b> button below and get these miraculous tips today.
                </StyledParagraph>
            </StyledBox>
            <StyledSection>
                <StyledGamesBox>
                    <GamesTable subscribed={subscribed} games={games} />
                </StyledGamesBox>
                <StyledPaymentPaper>
                    <StyledPaymentBox >
                        <PaymentBoxHeader variant='h5'>Book Now</PaymentBoxHeader>
                        <SmartTitle mleft={10} textcolor={green[900]}>Pay with Mpesa</SmartTitle>
                        <Mpesa price={1200} product={'VIP'} />
                        {/* <PaymentTitle mleft={10} textcolor={purple[900]}>Pay with PayPal</PaymentTitle>
                        <ReactPaypal price={12.0} product={'VIP'} /> */}
                    </StyledPaymentBox>
                </StyledPaymentPaper>
            </StyledSection>

            <StyledBox mt={5} align='justify'>
                <StyledParagraph variant='caption'>
                    {/* To access complete predictions for this Jackpot simply subscribe by making a payment of <b>$3 or Ksh. 300</b>.
                    <b>Alternatively,</b> you can join <b>VIP</b> which comes in hand with a free jackpot prediction of your choice. Happy Betting. */}
                </StyledParagraph>
            </StyledBox>
        </Container>
    );
};

export default VIP;
