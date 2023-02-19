import { Grid, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FooterBox, FooterGrid, FooterInnerBox, LowerFooterBox, SocialIcons, StyledCheck, StyledCopyright, StyledDivider, StyledIcon, StyledInfo, StyledInfoTitle, StyledLink, StyledTitle } from './footer-styles';
import { icons, pages_links } from './footer_links';

const Footer = () => {

  const [isMobile, setIsMobile] = useState(false);
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));



  const handleResize = () => {
    if (mobile) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    handleResize()
  })
  return (
    <>
      <FooterBox align="center">
        <FooterInnerBox >
          <FooterGrid container spacing={!isMobile ? 10 : 4}>
            {pages_links.map((page) => (
              <Grid item key={page.id}>
                <StyledTitle>{page.label}</StyledTitle>
                {page.links.map((link) => (
                  <StyledLink key={link.id} component={Link} to={link.route}><StyledCheck /> {link.label}</StyledLink>
                ))}
              </Grid>
            ))}
          </FooterGrid>
        </FooterInnerBox>
        <StyledDivider />
        <FooterInnerBox>
          <FooterGrid container spacing={!isMobile ? 8 : 5}>
            <Grid item>
              <StyledInfoTitle variant='h5'>Contact Us</StyledInfoTitle>
              <StyledInfo variant='subtitle1'>1812 CBD Street</StyledInfo>
              <StyledInfo variant='subtitle1'>Nairobi</StyledInfo>
              <StyledInfo variant='subtitle1'>Kenya</StyledInfo>
              <StyledInfo variant='subtitle1'><b>Phone:</b>+254746668206</StyledInfo>
              <StyledInfo variant='subtitle1'><b>Email:</b>&nbsp; bettcare@gmail.com</StyledInfo>
            </Grid>

            <Grid item>
              <StyledInfoTitle>About Tips-predictions</StyledInfoTitle>
              <StyledInfo variant='subtitle1'>A dedicated platform that is 24 7 ready to serve and
                provide to its customers.</StyledInfo>

              <SocialIcons>
                {icons.map((icon) => (
                  <StyledIcon key={icon.id} component="a" href={icon.route} target='_blank' >
                    {icon.icon}</StyledIcon>
                ))}
              </SocialIcons>

            </Grid>
          </FooterGrid>
        </FooterInnerBox>
      </FooterBox>
      <LowerFooterBox align="center" >
        <FooterInnerBox>
          <StyledCopyright >
            &copy; Copyright
            <StyledCopyright component="a" href="https://tips-predictions.com" target='_blank'>
              <b> Tips-predictions.com</b>
            </StyledCopyright>.
            All Rights Reserved</StyledCopyright>
        </FooterInnerBox>
      </LowerFooterBox>
    </>
  );
};

export default Footer;
