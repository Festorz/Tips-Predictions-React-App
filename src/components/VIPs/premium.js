import { Container } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import { React, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import * as API from '../../api/index';
import Mpesa from '../../payments/mpesa/mpesa';
import ReactPaypal from '../../payments/paypal/paypal';
import { PaymentBoxHeader, SmartTitle, StyledBox, StyledGamesBox, StyledHeading, StyledParagraph, StyledPaymentBox, StyledPaymentPaper, StyledSection } from '../styles/global-style';
import GamesTable from './vip_table';





const Premium = () => {
    const [games, setGames] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [subscribed, setSubscribed] = useState(false);


    useEffect(() => {
        getUser();
        getGames();
    }, [])

    const getGames = async () => {
        try {
            const { data } = await API.VIPGames('PR')
            const match = data[0].games
            setGames(match)

        } catch (error) {
            console.log(error);
        }
    }

    const getUser = async () => {
        try {
            const username = user?.user.username
            const { data } = await API.premiumSubscribers(username)
            setSubscribed(data[0].premium)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container align='center'>
            <Helmet>
                <title>Premium Tips | Winning Premium Tips</title>
                <meta name='description' content='Tips predictions.com offers best premium tips for today football matches. 
                Sign Up and book now to Get these expert predictions with atleast 85% accuracy to win today!!'/>
            </Helmet>
            <StyledBox align='justify'>
                <StyledHeading variant='h5' >Premium Tips</StyledHeading>

                <StyledParagraph variant='caption'>
                    <b>Premium tips</b> are sure soccer predictions that we prepare for our customers. Average accuracy of these expert tips is atlease 85%.
                    In this page we list these winning Tips for you. Make you subscription now and obtain an unexceptional win with
                    these <b>premium football tips</b>. Charges for these games are <b>3 USD</b> or <b>Ksh. 300</b>.
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
                        <Mpesa price={300} product={'premium'} />
                        {/* <PaymentTitle mleft={10} textcolor={purple[900]}>Pay with PayPal</PaymentTitle>
                        <ReactPaypal price={3.0} product={'premium'} /> */}
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

export default Premium;
