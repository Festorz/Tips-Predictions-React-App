import { Box, Container } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import { React, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import * as API from '../../api/index';
import Mpesa from '../../payments/mpesa/mpesa';
import ReactPaypal from '../../payments/paypal/paypal';
import { PaymentBoxHeader, SmartTitle, StyledBox, StyledGamesBox, StyledHeading, StyledParagraph, StyledPaymentBox, StyledPaymentPaper, StyledSection, TableHeader } from '../styles/global-style';
import UpcomingTable from './upcoming_table';
import GamesTable from './vip_table';



const FixedMatches = () => {
    const [games, setGames] = useState([]);
    const [uGames, setUGames] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [subscribed, setSubscribed] = useState(false);


    useEffect(() => {
        getUser();
        getGames();
        getUpcomingGames();
    }, [])

    const getGames = async () => {
        try {
            const { data } = await API.VIPGames('FM')
            const match = data[0].games
            setGames(match)

        } catch (error) {
            console.log(error);
        }
    }
    const getUpcomingGames = async () => {
        try {
            const { data } = await API.upcomingVIPGames('UFM')
            console.log(data)
            const match = data
            setUGames(match)

        } catch (error) {
            console.log(error);
        }
    }

    const getUser = async () => {
        try {
            const username = user?.user.username
            const { data } = await API.fixedSubscribers(username)
            setSubscribed(data[0].fixed_matches)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container align='center'>
            <Helmet>
                <title>Fixed Matches</title>
                <meta name='description' content='Dont miss out on our sure Fixed Matches with their predictions prepared for you here at tips-predictions.com.
                Book your claim now and score lot with these expert predictions today!!'/>
            </Helmet>
            <StyledBox align='justify'>
                <StyledHeading variant='h5' >Fixed Matches</StyledHeading>

                <StyledParagraph variant='caption'>
                    Fixed Matches compose of matches whose outcomes for either Half Time or Full Time are pre-determined or fixed.
                    Tips-predictions comes in between with <b>techs to spot and identify </b> these matches and unload their cumbersome predictions.
                    In this page are sure <b>Fixed Matches</b> coming up today well prepared for you. In this batch are <b>correct scores</b> predictions, <b>1X2</b> tips, <b>OVER/UNDER</b> tips,
                    among others. Cost for these 100% sure fixed odds predictions is only <b>100 USD</b> or <b>Ksh 10k</b>. Subscribe Now.
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
                        <Mpesa price={10000} product={'fixed_matches'} />
                        {/* <PaymentTitle mleft={10} textcolor={purple[900]}>Pay with PayPal</PaymentTitle>
                        <ReactPaypal price={100.0} product={'fixed_matches'} /> */}
                    </StyledPaymentBox>
                </StyledPaymentPaper>
            </StyledSection>

            <StyledBox mt={5} align='justify'>
                <StyledParagraph variant='caption'>
                    Our tips are quit reliable, sure and correct.  Below we have displayed upcoming <b>sure fixed matches</b> this week.
                    Book now to access their predictions for <b>7 consecutive days</b>.</StyledParagraph>
            </StyledBox>
            <Box>
                {uGames.map((game) => (
                    <StyledGamesBox mb={25}>
                        <TableHeader>{game.title}</TableHeader>
                        <UpcomingTable games={game.games} />
                    </StyledGamesBox>
                ))}
            </Box>
        </Container>
    );
};

export default FixedMatches;
