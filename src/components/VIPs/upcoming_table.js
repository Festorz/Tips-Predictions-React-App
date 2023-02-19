import { TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { React } from 'react';
import { StyledPredictionsTable, StyledTableCell, StyledTableHead, StyledTableRow } from '../styles/global-style';
import { upcoming } from './vipheader';


const UpcomingTable = ({ games }) => {

    return (
        <TableContainer>
            <StyledPredictionsTable>
                <TableHead>
                    <TableRow>
                        {upcoming.map((header) => (
                            <StyledTableHead key={header.id}>{header.title}</StyledTableHead>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {games.map((game) => (
                        <StyledTableRow key={game.FIELD1}>
                            <StyledTableCell>{game.Date}</StyledTableCell>
                            <StyledTableCell>{game.Time}</StyledTableCell>
                            <StyledTableCell>{game.Match}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </StyledPredictionsTable>
        </TableContainer>
    );
};

export default UpcomingTable;
