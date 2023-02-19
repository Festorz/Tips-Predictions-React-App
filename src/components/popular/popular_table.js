import { TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { lightBlue, yellow } from '@material-ui/core/colors';
import { React } from 'react';
import { StyledPredictionsTable, StyledTableCell, StyledTableHead, StyledTableRow } from '../styles/global-style';


const PopularTable = ({games}) => {
// console.log(games)
    return (
        <TableContainer>
            <StyledPredictionsTable>
                <TableHead>
                    <TableRow>
                            <StyledTableHead mcolor={lightBlue[900]}>No.</StyledTableHead>
                            <StyledTableHead mcolor={lightBlue[900]}>Date</StyledTableHead>
                            <StyledTableHead mcolor={lightBlue[900]}>Match</StyledTableHead>
                            <StyledTableHead mcolor={lightBlue[900]}>Results</StyledTableHead>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {games &&(
                    games.map((game) => (
                            <StyledTableRow key={game.FIELD1}>
                                <StyledTableCell>{game.FIELD1}.</StyledTableCell>
                                <StyledTableCell>{game.Date}</StyledTableCell>
                                <StyledTableCell>{game.Match}</StyledTableCell>
                                <StyledTableCell>{ game.Results }</StyledTableCell>
                            </StyledTableRow>
                        ))
                    )                       
                }
                </TableBody>
            </StyledPredictionsTable>
        </TableContainer>

    );
};

export default PopularTable;
