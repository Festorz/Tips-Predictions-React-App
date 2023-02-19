import { TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { React } from 'react';
import { Link } from 'react-router-dom';
import { SectionBox, StyledBox, StyledHeading, StyledLink, StyledParagraph, StyledTable, StyledTableRow } from '../../styles/global-style';
import { ResultsTableCell, ResultsTitle } from './results-styles';


const Results = ({ results }) => {

    return (
        <SectionBox>
            <StyledBox align='justify'>
                <StyledHeading variant='h5'>Tips Predictions Archives</StyledHeading>
                <StyledParagraph variant='caption'>
                    Below are the recent archives of correct football predictions results won by our customers who
                    subcribed for the <StyledLink mcolor={'black'} component={Link} to={'/fixed-matches'}>
                    Fixed Matches</StyledLink> by paying 100 USD, <StyledLink mcolor={'black'} component={Link} to={'/VIP'}>
                        VIP tips</StyledLink> for  12 USD and <StyledLink mcolor={'black'} component={Link} to={'/premium'}>
                            PREMIUM tips</StyledLink> by paying 3 US dollars.
                </StyledParagraph>
            </StyledBox>

            {results.map((result) => (
                <StyledBox mt={5}>
                    <ResultsTitle>{result.title}</ResultsTitle>
                    <TableContainer>
                        <StyledTable>
                            <TableHead>
                                <TableRow>
                                    <ResultsTableCell>Date</ResultsTableCell>
                                    <ResultsTableCell>Match</ResultsTableCell>
                                    <ResultsTableCell>Predictions</ResultsTableCell>
                                    <ResultsTableCell>Status</ResultsTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {result.games.map((game) => (
                                    <StyledTableRow key={game.id}>
                                        <ResultsTableCell>{game.Date}</ResultsTableCell>
                                        <ResultsTableCell>{game.Match}</ResultsTableCell>
                                        <ResultsTableCell>{game.Prediction}</ResultsTableCell>
                                        <ResultsTableCell>{game.Result}</ResultsTableCell>

                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </StyledTable>


                    </TableContainer>
                </StyledBox>
            ))}
        </SectionBox>
    );
};

export default Results;
