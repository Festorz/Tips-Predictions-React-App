import { Box, Container, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import * as API from '../../api/index';
import { AdsDesc, AdsImage, adsImage, StyledAdsSection, StyledBox, StyledFreeTips, StyledHeading, StyledImage, StyledLink, StyledParagraph, StyledSection } from '../styles/global-style';
import Guru from './components/guru';
import Multibets from './components/multibets';
import PopularGames from './components/popular';
import Results from './components/results';
import useStyles from './styles';
import BET from '../../data/images/22BET.jpg'
import { amber } from '@material-ui/core/colors';
import LiveScoreGames from './components/livegames';
import { Link } from 'react-router-dom';





const Home = () => {
    const [games, setGames] = useState([]);
    const [free, setFree] = useState([]);
    const [results, setResults] = useState([]);
    const [popular, setpopular] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [subscribedGuru, setSubscribedGuru] = useState(false);
    const [subscribedVIP, setSubscribedVIP] = useState(false);

    useEffect(() => {
        fetchData();
        IsGuru();
        IsVIP();
        getGames();
    }, [])

    const getGames = async () => {
        await API.fetchTips('GR').then(
            (response) => setGames(response.data[0].games)

        ).catch((error) => console.log(error))

    }

    const fetchData = async () => {
        const getFree = API.fetchTips('FR');
        const getResults = API.fetchResults();
        const getPopular = API.fetchPopular();

        await axios.all([getFree, getResults, getPopular]).then(
            axios.spread((...allData) => {
                const allFree = allData[0].data
                const allResults = allData[1].data
                const allPopular = allData[2].data

                setFree(allFree);
                setResults(allResults);
                setpopular(allPopular);
            })
        ).catch((errors) =>
            console.log(errors)
        )

    }

    const IsGuru = async () => {
        try {
            const username = user?.user.username
            const { data } = await API.guruSubscribers(username)
            setSubscribedGuru(data[0].guru)

        } catch (error) {
            console.log(error);
        }
    }
    const IsVIP = async () => {
        try {
            const username = user?.user.username
            const { data } = await API.VIPSubscribers(username)
            setSubscribedVIP(data[0].vip)

        } catch (error) {
            console.log(error);
        }
    }



    const classes = useStyles();


    return (
        <Box align="center" >
            <Helmet>
                <title>Tips Predictions Home of Sure Tips | Free Predictions | Popular Matches | VIP tips, Fixed Matches and Premium Tips</title>
                <meta name='description' content='Get today Free tips ,top football matches ,jackpot predictions, Fixed matches, and VIP tips including correct scores here in tips-predictions.com!.
                To access these tips, login now or register and subscribe to have a blast in betting!!'/>
            </Helmet>
            <StyledBox align='justify'>
                <StyledParagraph variant='caption'>
                    Tips-predictions is the leading <b>sure tips</b> provider preferred by lots of soccer punters
                    as the core source of football sure betting tips including <b>correct scores</b>, <StyledLink mcolor={'black'} component={Link} to={'/fixed-matches'}>
                    Fixed Matches</StyledLink>,  <StyledLink mcolor={'black'} component={Link} to={'/VIP'}>VIP tips</StyledLink> and <StyledLink mcolor={'black'} component={Link} to={'/sportpesa'}>Jackpots</StyledLink>.
                    In this page we have <b>today Free tips</b>, <b>Guru tips</b> and the <b>top matches</b> prepared for you.
                    By use of advanced AI and data analysis algorithms we provide  <b>Correct</b> and <b>sure</b> predictions to our customers.
                    Book now these tips & predictions to win lot today.
                </StyledParagraph>
            </StyledBox>
            <StyledFreeTips align="center">
                <StyledHeading variant='h5'>
                    Tips-Predictions Free tips today
                </StyledHeading>
                <List mb={10} className={classes.list}>
                    {free.map((free) =>
                        free.category === 'FR' && (
                            <>
                                {free.games.map((game) =>
                                    <ListItem key={game.FIELD1} className={classes.listItems}>
                                        <ListItemText>
                                            <Typography variant='body2'>
                                                {game.FIELD1}.  {game.Time}, {game.Date} - <b>{game.Match}</b>, <u>tips:</u> <b>{game.Prediction}</b>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                )}
                            </>
                        )

                    )}
                </List>
            </StyledFreeTips>
            <StyledAdsSection mcolor={amber[600]} component='a' href='https://ad.22betpartners.com/redirect.aspx?pid=33809&bid=1484&lpid=15' target='_blank' >
            <AdsImage component='img' src={BET} />
            <AdsDesc component='a' >100% Bonus after Deposit!. Become the first to sign up today.</AdsDesc>

            </StyledAdsSection>
            {/* <StyledImage component='img' src={LBET}/>             */}

            <Guru subscribed={subscribedGuru} games={games} />
            <LiveScoreGames/>
            <PopularGames subscribed={subscribedVIP} popular={popular} />
            <Multibets />
            <Results results={results} />
        </Box>
    );
};

export default Home;