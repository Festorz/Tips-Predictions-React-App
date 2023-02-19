import { TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { React } from 'react';
import { StyledPredictionsTable, StyledTableCell, StyledTableHead, StyledTableRow } from '../styles/global-style';
import { headers } from './tableheaders';


const JackpotTable = ({subscribed, games}) => {

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
            <TableBody>
                {games.map((game) => (
                    <StyledTableRow key={game.FIELD1}>
                        <StyledTableCell>{game.Field1}.</StyledTableCell>
                        <StyledTableCell>{game.Date}</StyledTableCell>
                        <StyledTableCell>{game.Time}</StyledTableCell>
                        <StyledTableCell>{game.Match}</StyledTableCell>
                        <StyledTableCell>{subscribed ? game.Prediction
                            : game.Initials}</StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
        </StyledPredictionsTable>
    </TableContainer>

    );
};

export default JackpotTable;
