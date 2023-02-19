import { Box, Container, Typography } from '@material-ui/core';
import { amber, blue, deepOrange, lightBlue, red } from '@material-ui/core/colors';
import { React, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import * as API from '../../api/index';
import { DetailsPaper, PopularDetailsGrid, PopularDetailsGridItem, PredictionsPaper, PredictionTitle, RowTables, StyledBox, StyledColumn, StyledData, StyledHeading, StyledImage, StyledLink, StyledLogo, StyledParagraph, StyledPopularSection, StyledRow, StyledStat, StyledTablesRow, StyledTitle } from '../styles/global-style';
import PopularTable from './popular_table';



const PopularDetails = () => {
  const [match, setMatch] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [VIP, setSubscribed] = useState(false);

  const { id } = useParams();
  // console.log(`id is ${id}`);

  const getMatch = async () => {
    try {
      const { data } = await API.singleMatch(id);
      const match = data
      setMatch(match)

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

  useEffect(() => {
    getMatch();
    getUser();
  }, [])

  return (
    <Container align='center'>
      {match.map((game) => (
        game.games.map((data) => (
          <>
            <Helmet>
              <title>{data.Match} football match analysis and predictions | {data.Date} - {data.Time}</title>
              <meta name='description' content={`${data.Match} analysis, statistics and football predictions for this ${data.League} match on ${data.Date}`} />
            </Helmet>

            <StyledBox align='justify'>
              <StyledHeading>{data.Match}</StyledHeading>
              <StyledParagraph variant='caption'>
                This page displays <b>{data.Match}</b> match that falls in today's list of top matches analysed for you. Data shown below summarizes history of
                these two teams; <b>{data.Home}</b> and  <b>{data.Away}</b>. These data include previous <b>H2H</b> results, <b>latest played matches</b> by each 
                team, <b>Half Time/Full Time predictions</b>, <b>GG/NG tips</b>, <b>1X2 predictions</b>, <b>BTTS</b>, <b>CorrectScores</b>, <b>OVER/UNDER </b> tips
                and predictions among others. To view complete predictions on this match, subscribe to <StyledLink component={Link} to="/VIP" >VIP</StyledLink>.</StyledParagraph>
            </StyledBox>
            <StyledBox>
              <DetailsPaper>
              <StyledPopularSection>
                  <StyledImage component='img' alt={data.Match} src={game.images.image} />
                  </StyledPopularSection>

                <StyledRow>
                  <StyledLogo component='img' alt={data.Home} src={game.images.home} />
                  <StyledColumn>
                    <StyledData mcolor={red[900]}>{data.Time}</StyledData>
                    <StyledData mcolor={blue[700]} fs={11}>{data.League}</StyledData>
                  </StyledColumn>
                  <StyledLogo component='img' alt={data.away} src={game.images.away} />
                </StyledRow>
                <StyledRow>
                  <StyledColumn>
                    <StyledStat>Home Win </StyledStat>
                    <StyledStat textcolor={red[900]}>{data.Free ? data.Home_win : VIP ? data.Home_win : "?"} </StyledStat>
                  </StyledColumn>
                  <StyledColumn>
                    <StyledStat>Draw</StyledStat>
                    <StyledStat textcolor={red[900]}>{data.Draw}</StyledStat>
                  </StyledColumn>
                  <StyledColumn>
                    <StyledStat>Away Win </StyledStat>
                    <StyledStat textcolor={red[900]}>{data.Free ? data.Away_win : VIP ? data.Away_win : "?"} </StyledStat>
                  </StyledColumn>
                </StyledRow>
                <StyledPopularSection>
                  <StyledTitle textcolor={amber[900]}>Head 2 Head statistics</StyledTitle>
                  <PopularTable games={data.H2H} />
                </StyledPopularSection>

                {/* Home Fixtures */}
                <StyledPopularSection>
                  <StyledTitle textcolor={lightBlue[900]} >Recent Matches</StyledTitle>
                  <StyledTablesRow>
                    <RowTables>
                      <Typography variant='h6' >{data.Home} Recent matches</Typography>
                      <PopularTable games={data.HomeMatches} />
                    </RowTables>
                    <RowTables>
                      <Typography variant='h6' >{data.Away} Recent matches</Typography>
                      <PopularTable games={data.AwayMatches} />
                    </RowTables>
                  </StyledTablesRow>
                </StyledPopularSection>

                {/* Away Fixtures */}
                {/* <StyledPopularSection>
              <StyledTitle textcolor={lightBlue[900]} >{game.Away} Recent Matches</StyledTitle>
              <StyledTablesRow>
                <RowTables>
                  <Typography variant='h6'>Won matches</Typography>
                <PopularTable/>
                </RowTables>
                <RowTables>
                <Typography variant='h6'>Lost matches</Typography>
                <PopularTable/>
                </RowTables>
              </StyledTablesRow>
              </StyledPopularSection> */}

                {/* Our Predictions */}
                <StyledPopularSection>
                  <StyledTitle textcolor={deepOrange[900]}>{data.Match} Predictions</StyledTitle>
                  <PopularDetailsGrid container>


                    <PopularDetailsGridItem item>
                      <PredictionsPaper>
                        <PredictionTitle>Under | Over</PredictionTitle>
                        <StyledStat textcolor={red[900]} >{data.Free ? data.Predictions.OverUnder : VIP ? data.Predictions.OverUnder : "?"}</StyledStat>
                      </PredictionsPaper>
                    </PopularDetailsGridItem>

                    <PopularDetailsGridItem item>
                      <PredictionsPaper>
                        <PredictionTitle>Half / Full Time</PredictionTitle>
                        <StyledStat textcolor={red[900]} >{data.Free ? data.Predictions.HTFT : VIP ? data.Predictions.HTFT : "?"}</StyledStat>
                      </PredictionsPaper>
                    </PopularDetailsGridItem>

                    <PopularDetailsGridItem item>
                      <PredictionsPaper>
                        <PredictionTitle>BTTS</PredictionTitle>
                        <StyledStat textcolor={red[900]} >{data.Free ? data.Predictions.BTTS : VIP ? data.Predictions.BTTS : "?"}</StyledStat>
                      </PredictionsPaper>
                    </PopularDetailsGridItem>

                    <PopularDetailsGridItem item>
                      <PredictionsPaper>
                        <PredictionTitle>Double Chance</PredictionTitle>
                        <StyledStat textcolor={red[900]} >{data.Free ? data.Predictions.Double : VIP ? data.Predictions.Double : "?"}</StyledStat>
                      </PredictionsPaper>
                    </PopularDetailsGridItem>

                    <PopularDetailsGridItem item>
                      <PredictionsPaper>
                        <PredictionTitle >Correctscores</PredictionTitle>
                        <StyledStat textcolor={red[900]} >{data.Free ? data.Predictions.Correctscores : VIP ? data.Predictions.Correctscores : "?"}</StyledStat>
                      </PredictionsPaper>
                    </PopularDetailsGridItem>

                    <PopularDetailsGridItem item>
                      <PredictionsPaper>
                        <PredictionTitle>Corners</PredictionTitle>
                        <StyledStat textcolor={red[900]} >{data.Free ? data.Predictions.Corners : VIP ? data.Predictions.Corners : "?"}</StyledStat>
                      </PredictionsPaper>
                    </PopularDetailsGridItem>

                  </PopularDetailsGrid>
                </StyledPopularSection>


              </DetailsPaper>
            </StyledBox>
          </>
        ))
      ))}
    </Container>
  )
}

export default PopularDetails