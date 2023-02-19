import { Box } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { React, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import * as API from '../../api/index';
import Mpesa from '../../payments/mpesa/mpesa';
import { PaymentBoxHeader, SmartTitle, StyledBox, StyledGamesBox, StyledHeading, StyledParagraph, StyledPaymentBox, StyledPaymentPaper, StyledSection } from '../styles/global-style';
import JackpotTable from './jackpottable';



const Betpawa = () => {
    const [games, setGames] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [subscribed, setSubscribed] = useState(false);


    useEffect(() => {
        getUser();
        getGames();
        
    }, [])

    const getGames = async () => {
        try {
            const { data } = await API.jackpotGames('BTX')
            const match = data[0].games
            setGames(match)

        } catch (error) {
            console.log(error);
        }
    }

    const getUser = async () => {
        try {
            const username = user?.user.username
            const { data } = await API.betpawaSubscribers(username)
            setSubscribed(data[0].betpawa)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Box align='center'>
             <Helmet>
                <title>Betpawa 1X2 Jackpot tips and Predictions</title>
                <meta name='description' content='Get today sure Betpawa 1X2 Jackpot tips and predictions at a lower cost of only Ksh 300 or 3 USD here
                at tips-predictions.com. Subscribe now to win millions!'/>
            </Helmet>
            <StyledBox align='justify'>
                <StyledHeading variant='h5'>Betpawa Jackpot Prediction</StyledHeading>

                <StyledParagraph variant='caption'>
                    Below are this week's <b>Betpawa jackpot games</b> with their predictions for the 1X2 category. Tips Predictions provides you 
                    with <b>free 5 predictions</b> for the first 5 matches. To access complete predictions, subscribe by paying only <b>3 USD</b> or <b>Ksh 300</b> by any of payment methods belows.
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
                        <Mpesa price={300} product={'betpawa'} />
                        {/* <PaymentTitle mleft={10} textcolor={purple[900]}>Pay with PayPal</PaymentTitle>
                        <ReactPaypal price={3.0} product={'betpawa'} /> */}
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

export default Betpawa;
