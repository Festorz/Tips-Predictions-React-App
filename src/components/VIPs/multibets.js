import { Container, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { blue, green, purple } from '@material-ui/core/colors';
import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import * as API from '../../api/index';
import Mpesa from '../../payments/mpesa/mpesa';
import ReactPaypal from '../../payments/paypal/paypal';
import { TableHeader, PaymentBoxHeader, SmartTitle, SelectPaper, SelectTitle, StyledBox, StyledHeading, StyledMultibetBox, StyledMultibetGamesBox, StyledParagraph, StyledPaymentBox, StyledPaymentPaper, StyledSection } from '../styles/global-style';
import GamesTable from './vip_table';


const Multibets = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [sub, setSub] = useState('')
    const username = user?.user.username

    // subscriptions 
    const [iuser, setI2] = useState(false);
    const [ouser, setOvund] = useState(false);
    const [guser, setGG] = useState(false);
    const [huser, setHTFT] = useState(false);

    // games
    const [ix2g, set12Games] = useState([]);
    const [ggames, setGGGames] = useState([]);
    const [ougames, setOVGames] = useState([]);
    const [hfgames, setHfGames] = useState([]);



    useEffect(() => {
        getUser();
        getGames();
    }, [])
  

    const getUser = async () => {
        await API.Ix2Subscribers(username).then(
            (response) => setI2(response.data[0].Ix2)

        ).catch((error) => console.log(error));

        await API.ggSubscribers(username).then(
            (response) => setGG(response.data[0].gg)

        ).catch((error) => console.log(error));

        await API.ovundSubscribers(username).then(
            (response) => setOvund(response.data[0].ovund)

        ).catch((error) => console.log(error));

        await API.hftSubscribers(username).then(
            (response) => setHTFT(response.data[0].htft)

        ).catch((error) => console.log(error));

    }
    const getGames = async () => {

        await API.multibetGames('12').then(
            (response) => set12Games(response.data[0].games)

        ).catch((error) => console.log(error));

        await API.multibetGames('GG').then(
            (response) => setGGGames(response.data[0].games) 
        ).catch((error) => console.log(error));

        await API.multibetGames('OU').then(
            (response) => setOVGames(response.data[0].games)

        ).catch((error) => console.log(error));

        await API.multibetGames('HF').then(
            (response) => setHfGames(response.data[0].games)

        ).catch((error) => console.log(error));

    }



    const handleChange = (event) => {
        const { target: { value: _value } } = event;
        setSub(_value)
    }
    return (
        <Container align='center'>
            <Helmet>
                <title>Multibets Predictions</title>
                <meta name='description' content='Tips predictions.com offers sure multibets predictions offers like 1X2, 
                GG/NG, Over/Under and HT|FT multibets for football matches daily. Subscribe now to win today!!'/>
            </Helmet>
            <StyledBox align='justify'>
                <StyledHeading variant='h5' >Multibets Predictions</StyledHeading>

                <StyledParagraph variant='caption'>
                    Multi bets tips are correct predictions with an evarage accuracy of 90%. This page displays <b>Multibet predictions </b>
                    for betting markets like <b>1X2</b>, <b>GG</b>, <b>OVER/UNDER</b> and the <b>Half Time | Full Time </b> multibets.
                    To access multibet of your choice, <b>Book now</b> and win big with these multibet predictions. Charges for these games are <b>2 USD</b> or <b>Ksh. 200</b>.
                </StyledParagraph>
            </StyledBox>
            <StyledSection>
                <StyledMultibetBox>
                    <StyledMultibetGamesBox>
                        <TableHeader>1X2 Multibets</TableHeader>
                        <GamesTable subscribed={iuser} games={ix2g} />
                    </StyledMultibetGamesBox>

                    <StyledMultibetGamesBox>
                        <TableHeader>GG Multibets</TableHeader>
                        <GamesTable subscribed={guser} games={ggames} />
                    </StyledMultibetGamesBox>

                    <StyledMultibetGamesBox>
                        <TableHeader>Over/Under Multibets</TableHeader>
                        <GamesTable subscribed={ouser} games={ougames} />
                    </StyledMultibetGamesBox>

                    <StyledMultibetGamesBox>
                        <TableHeader>Half/Full Time Multibets</TableHeader>
                        <GamesTable subscribed={huser} games={hfgames} />
                    </StyledMultibetGamesBox>


                </StyledMultibetBox>
                <StyledPaymentPaper>
                    <StyledPaymentBox >
                        <PaymentBoxHeader variant='h5'>Book Now</PaymentBoxHeader>
                        <SelectPaper>
                            <SelectTitle>Select a multibet to book </SelectTitle>
                            <RadioGroup onChange={handleChange} >
                                <FormControlLabel value='1X2' control={<Radio />} label='1X2 Multibets' />
                                <FormControlLabel value='GG' control={<Radio />} label='GG Multibets' />
                                <FormControlLabel value='OV' control={<Radio />} label='OVER | UNDER Multibets' />
                                <FormControlLabel value='HTFT' control={<Radio />} label='HT | FT Multibets' />
                            </RadioGroup>

                        </SelectPaper>
                        {sub !== '' ?
                            <>
                                <SmartTitle mleft={10} textcolor={green[900]}>Pay with Mpesa</SmartTitle>
                                <Mpesa price={200} product={sub} />
                                {/* <PaymentTitle mleft={10} textcolor={purple[900]}>Pay with PayPal</PaymentTitle>
                                <ReactPaypal price={2.0} product={sub} /> */}
                            </>
                            :
                            <SmartTitle mleft={10} textcolor={blue[900]}>Please Select a multibet above</SmartTitle>

                        }
                    </StyledPaymentBox>
                </StyledPaymentPaper>
            </StyledSection>


        </Container>
    );
};

export default Multibets;
