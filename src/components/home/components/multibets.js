import { TableBody, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { purple, teal } from '@material-ui/core/colors';
import React from 'react';
import { Link } from 'react-router-dom';
import { MultibetsButton, SectionBox, StyledBox, StyledHeading, StyledLink, StyledParagraph, StyledTable, StyledTableCell, StyledTableHead, StyledTableRow } from '../../styles/global-style';


const multibets = [
    {
        id: 1,
        label: '1X2',
        route: '1X2',

    },
    {
        id: 2,
        label: 'GG/NG',
        route: 'GG/NG',

    },
    {
        id: 3,
        label: 'OVER/UNDER',
        route: 'OVER/UNDER',

    },
    {
        id: 4,
        label: 'HT/FT ',
        route: 'HT/FT ',

    },
]

const Multibets = () => {

    return (
        <SectionBox>
            <StyledBox align='justify'>
                <StyledHeading variant='h5'>
                    Multi Bet Predictions
                </StyledHeading>
                <StyledParagraph variant='caption'>
                    Tips-prediction's <StyledLink component={Link} to='/multibets' mcolor={'black'}>sure multibet tips</StyledLink> includes the <b>1X2 multibets</b>,
                    <b> OVER/UNDER multibets</b>, <b>GG/NG multibets</b> and <b>Halftime/Fulltime 
                        multibets</b> whose accuracy is above 85% and they only cost 2 dollars.
                </StyledParagraph>
            </StyledBox>

            <StyledBox mt={5}>

                <TableContainer>
                    <StyledTable>
                        <TableHead>
                            <TableRow>
                                <StyledTableHead>No.</StyledTableHead>
                                <StyledTableHead>Title</StyledTableHead>
                                <StyledTableHead>Day</StyledTableHead>
                                <StyledTableHead>Category</StyledTableHead>
                                <StyledTableHead>Book | View</StyledTableHead>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {multibets.map((multibet) => (
                                <StyledTableRow key={multibet.id}>
                                    <StyledTableCell>{multibet.id}</StyledTableCell>
                                    <StyledTableCell>MBP</StyledTableCell>
                                    <StyledTableCell>Today</StyledTableCell>
                                    <StyledTableCell>{multibet.label}</StyledTableCell>
                                    <StyledTableCell>
                                        <MultibetsButton variant='contained' ><StyledLink component={Link} to='/multibets' mdecoration={true}>View</StyledLink></MultibetsButton>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </StyledTable>


                </TableContainer>
            </StyledBox>
        </SectionBox>
    );
};

export default Multibets;
