import { blue, green, purple, red, teal, yellow } from '@material-ui/core/colors';
import { React } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MoreButton, PaperTitle, PopularPaper, SectionBox, StyledBox, StyledColumn, StyledData, StyledHeading, StyledLink, StyledLogo, StyledParagraph, StyledPopular, StyledPopularGrid, StyledPopularGridItem, StyledRow, StyledStat } from '../../styles/global-style';

const PopularGames = ({ popular, subscribed }) => {
    const navigate = useNavigate();

    return (
        <SectionBox>
            <StyledBox align='justify'>
                <StyledHeading variant='h5'>Popular Games</StyledHeading>
                <StyledParagraph variant='caption'>
                    This section shows <b>today's top matches and their predictions</b> that we have analysed for you. For
                    more info on these matches, click the <b>read more</b> button. To access complete predictions for these
                    games kindly subscribe to <StyledLink mcolor={purple[800]} component={Link} to={'/VIP'}>VIP</StyledLink>. </StyledParagraph>
            </StyledBox>
            <StyledPopular>
                <StyledPopularGrid>
                    {popular.map((game, index) => (
                        <StyledPopularGridItem item key={index} >
                            {game.games.map((data) => (
                                <PopularPaper bcolor={green[900]} >
                                    <PaperTitle textcolor={'#121858'} bcolor={yellow[900]} mwidth={'50%'} >{data.Date}</PaperTitle>
                                    <PaperTitle textcolor={teal[900]}>{data.Match}</PaperTitle>
                                    <StyledRow>
                                        <StyledLogo component='img' alt={data.Home} src={game.images.home} />
                                        <StyledColumn>
                                            <StyledData mcolor={red[900]}>{data.Time}</StyledData>
                                            <StyledData mcolor={blue[700]} fs={10} >{data.League}</StyledData>
                                        </StyledColumn>
                                        <StyledLogo component='img' alt={data.Away} src={game.images.away} />
                                    </StyledRow>
                                    <StyledRow>
                                        <StyledColumn>
                                            <StyledStat>Home Win </StyledStat>
                                            <StyledStat textcolor={red[900]}>
                                                {data.Free ? data.Home_win : subscribed ? data.Home_win : "?"}</StyledStat>
                                        </StyledColumn>
                                        <StyledColumn>
                                            <StyledStat>Draw</StyledStat>
                                            <StyledStat textcolor={red[900]}>{data.Draw}</StyledStat>
                                        </StyledColumn>
                                        <StyledColumn>
                                            <StyledStat>Away Win </StyledStat>
                                            <StyledStat textcolor={red[900]}>
                                                {data.Free ? data.Away_win : subscribed ? data.Away_win : "?"} </StyledStat>
                                        </StyledColumn>
                                    </StyledRow>
                                    <MoreButton onClick={() => navigate(`/Predictions/${game.slug}`)} >Read More</MoreButton>

                                </PopularPaper>
                            ))}

                        </StyledPopularGridItem>
                    ))}

                </StyledPopularGrid>
            </StyledPopular>
        </SectionBox>
    )
}

export default PopularGames