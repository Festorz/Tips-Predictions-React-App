import { Box, Container } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import { React, useEffect, useState } from 'react';
import * as API from '../../api/index';
import Mpesa from '../../payments/mpesa/mpesa';
import ReactPaypal from '../../payments/paypal/paypal';
import { PaymentBoxHeader, SmartTitle, StyledBox, StyledGamesBox, StyledHeading, StyledParagraph, StyledPaymentBox, StyledPaymentPaper, StyledSection } from '../styles/global-style';
import JackpotTable from './jackpottable';
import { Helmet } from 'react-helmet';



const Mozzart = () => {
    const [games, setGames] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [subscribed, setSubscribed] = useState(false);


    useEffect(() => {
        getUser();
        getGames();
    }, [])

    const getGames = async () => {
        try {
            const { data } = await API.jackpotGames('MZ')
            const match = data[0].games
            setGames(match)

        } catch (error) {
            console.log(error);
        }
    }

    const getUser = async () => {
        try {
            const username = user?.user.username
            const { data } = await API.mozzartSubscribers(username)
            setSubscribed(data[0].mozzart)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Box align='center'>
             <Helmet>
                <title>Mozzart Jackpot tips and Predictions</title>
                <meta name='description' content='Below are upcoming Mozzart Jackpot games predictions for you
                that assures winning bet. Subscribe now at an only cost of Ksh 300 or 3 USD and win millions!'/>
            </Helmet>
            <StyledBox align='justify'>
                <StyledHeading variant='h5'>Mozzart Jackpot Prediction</StyledHeading>

                <StyledParagraph variant='caption'>
                    Below are upcoming <b>Mozzart jackpot games tips and predictions</b> already analysed for you. Tips predictions offers for you <b>5 free predictions</b> for 
                    the first 5 matches in this jackpot. For full predictions, subscribe by paying only <b>3 USD</b> or <b>Ksh 300</b> by any of payment methods belows.
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
                        <Mpesa price={300} product={'mozzart'} />
                        {/* <PaymentTitle mleft={10} textcolor={purple[900]}>Pay with PayPal</PaymentTitle>
                        <ReactPaypal price={3.0} product={'mozzart'} /> */}
                    </StyledPaymentBox>
                </StyledPaymentPaper>
            </StyledSection>

            <StyledBox mt={5} align='justify'>
                <StyledParagraph variant='caption'>
                    To access complete predictions for this Jackpot simply subscribe by making a payment of <b>$3 or Ksh 300</b>. <b>Alternatively</b> you can join <b>VIP</b> which comes in hand with a free jackpot prediction of your choice. Happy Betting.
                </StyledParagraph>
            </StyledBox>
        </Box>
    );
};

export default Mozzart;
