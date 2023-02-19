import { TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { React } from 'react';
import { StyledPredictionsTable, StyledTableCell, StyledTableHead, StyledTableRow } from '../styles/global-style';
import { headers } from './vipheader';


const GamesTable = ({subscribed, games}) => {

    return (
        <TableContainer>
            <StyledPredictionsTable>
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <StyledTableHead key={header.id}>{header.title}</StyledTableHead>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>{
                    subscribed ?
                        games.map((game) => (
                            <StyledTableRow key={game.FIELD1}>
                                <StyledTableCell>{game.FIELD1}.</StyledTableCell>
                                <StyledTableCell>{game.Date}</StyledTableCell>
                                <StyledTableCell>{game.Time}</StyledTableCell>
                                <StyledTableCell>{game.Match}</StyledTableCell>
                                <StyledTableCell>{ game.Prediction }</StyledTableCell>
                            </StyledTableRow>
                        ))
                        : <StyledTableRow>
                            <StyledTableCell colSpan={5} align='center'>BOOK Now to view these games</StyledTableCell>
                        </StyledTableRow>
                }
                </TableBody>
            </StyledPredictionsTable>
        </TableContainer>

    );
};

export default GamesTable;
