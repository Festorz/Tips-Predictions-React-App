import { Box } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import React from 'react'
import { Link } from 'react-router-dom'
import { SectionBox, StyledBox, StyledHeading, StyledLink, StyledLivescores, StyledParagraph } from '../../styles/global-style'

const LiveScoreGames = () => {
  return (
    <SectionBox>
        <StyledBox align='justify'>
            <StyledHeading variant='h5'>Live Score Games</StyledHeading>
            <StyledParagraph variant='caption'>
                This section displays today's live games and their scores. 
                To get tips on these games subscribe to <StyledLink mcolor={purple[800]} component={Link} to={'/VIP'}>VIP</StyledLink> now.
            </StyledParagraph>
        </StyledBox>

        <StyledLivescores>
        <iframe src="https://www.goaloo1.com/Free/FreeSoccer" width="100%" height="500" frameborder="0"/>
        </StyledLivescores>
    </SectionBox>
  )
}

export default LiveScoreGames