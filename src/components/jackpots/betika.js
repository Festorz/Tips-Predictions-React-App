import { Box } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import { React, useEffect, useState } from 'react';
import * as API from '../../api/index';
import Mpesa from '../../payments/mpesa/mpesa';
import ReactPaypal from '../../payments/paypal/paypal';
import { PaymentBoxHeader, SmartTitle, StyledBox, StyledGamesBox, StyledHeading, StyledParagraph, StyledPaymentBox, StyledPaymentPaper, StyledSection } from '../styles/global-style';
import JackpotTable from './jackpottable';
import { Helmet } from 'react-helmet'


const Betika = () => {
    const [games, setGames] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        getUser();
        getGames();
    }, [])

    const getGames = async () => {
        
        try {
            const { data } = await API.jackpotGames('BG')
            const match = data[0].games
            setGames(match)

        } catch (error) {
            console.log(error);
        }
    }

    const getUser = async () => {
        try {
            const username = user?.user.username
            const { data } = await API.betikaSubscribers(username)
            setSubscribed(data[0].betika_grand)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Box align='center'>
            <Helmet>
                <title>Betika Grand Jackpot | Betika Mid Week Jackpot tips and Predictions</title>
                <meta name='description' content='Get expert Betika Grand Jackpot betting predictions here today at your comfort. Register and subscribe now to win big!'/>
            </Helmet>
            <StyledBox align='justify'>
                <StyledHeading variant='h5'>Betika Grand Jackpot Prediction</StyledHeading>

                <StyledParagraph variant='caption'>
                    Below are this week's <b>Betika Grand Jackpot  games</b> that we have analysed for you in addition with <b>free 5 predictions</b> for the first 5 matches.
                    For complete predictions, subscribe by paying only <b>3 USD</b> or <b>Ksh 300</b> by any of the payment methods belows.
                </StyledParagraph>
            </StyledBox>
            <StyledSection>
                <StyledGamesBox>
                    <JackpotTable subscribed={subscribed} games={games} />
                </StyledGamesBox>
                <StyledPaymentPaper>
                    <StyledPaymentBox >
                        <PaymentBoxHeader variant='h5'>Book Now</PaymentBoxHeader>
                        <SmartTitle mleft={10} textcolor={green[900]}>Pay with Mpesa</SmartTitle>
                        <Mpesa price={300} product={'betika'} />
                        {/* <PaymentTitle mleft={10} textcolor={purple[900]}>Pay with PayPal</PaymentTitle>
                        <ReactPaypal price={3.0} product={'betika'} /> */}
                    </StyledPaymentBox>
                </StyledPaymentPaper>
            </StyledSection>

            <StyledBox mt={5} align='justify'>
                <StyledParagraph variant='caption'>
                    To access complete predictions for this Jackpot simply subscribe by making a payment of <b>$3 or Ksh. 300</b>. <b>Alternatively,</b> you can join <b>VIP</b> which comes in hand with a free jackpot prediction of your choice. Happy Betting.
                </StyledParagraph>
            </StyledBox>
        </Box>
    );
};

export default Betika;
