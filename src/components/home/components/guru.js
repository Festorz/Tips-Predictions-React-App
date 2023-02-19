import { TableBody, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import guru from '../../../data/images/guru.png';
import { SectionBox, StyledBox, StyledCard, StyledGuru, StyledHeading, StyledImage, StyledParagraph, StyledTable, StyledTableCell, StyledTableHead, StyledTableRow } from '../../styles/global-style';
import OutlinedCard from './card';


const Guru = ({ subscribed, games }) => {

    return (
        <SectionBox>

            <StyledBox align='justify'>
                <StyledHeading variant='h5'>Guru Tips</StyledHeading>

                <StyledParagraph variant='caption'>
                    GURU tips compose of 5 games with 75% <b>accurate tips</b>. These predictions are normally
                    <b> 1X2 tips</b> and sum upto 6 odds. Charges are only <b>1 USD</b>.
                </StyledParagraph>

            </StyledBox>

            <StyledGuru>

                <StyledImage
                    component="img"
                    alt="Guru tips-predictions"
                    src={guru}
                />
                <StyledCard>
                    <OutlinedCard />
                </StyledCard>

            </StyledGuru>

            <StyledBox align='center'>
                <Typography variant='h6'>Guru Tips</Typography>
                <TableContainer >
                    <StyledTable>
                        <TableHead>
                            <TableRow>
                                <StyledTableHead>No.</StyledTableHead>
                                <StyledTableHead>Time</StyledTableHead>
                                <StyledTableHead>Date</StyledTableHead>
                                <StyledTableHead>Match</StyledTableHead>
                                <StyledTableHead>Prediction</StyledTableHead>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {subscribed ?
                                games.map((game) => (
                                                <StyledTableRow key={game.FIELD1}>
                                                    <StyledTableCell>{game.FIELD1}</StyledTableCell>
                                                    <StyledTableCell>{game.Time}</StyledTableCell>
                                                    <StyledTableCell>{game.Date}</StyledTableCell>
                                                    <StyledTableCell>{game.Match}</StyledTableCell>
                                                    <StyledTableCell>{game.Prediction}</StyledTableCell>
                                                </StyledTableRow>

                                            )
                                ) :
                                <StyledTableRow>
                                    <StyledTableCell colSpan={5} align='center'>BOOK Now to access today's GURU tips</StyledTableCell>
                                </StyledTableRow>
                            }
                        </TableBody>
                    </StyledTable>
                </TableContainer>
            </StyledBox>
        </SectionBox>
    );
};

export default Guru;
