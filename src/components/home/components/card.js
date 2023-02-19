import { Box, Button, Card, CardContent, Modal, Popover, Typography } from '@material-ui/core';
import { green, indigo, red } from '@material-ui/core/colors';
import * as React from 'react';
import Mpesa from '../../../payments/mpesa/mpesa';
import ReactPaypal from '../../../payments/paypal/paypal';
import { ModalCloser, PaymentHeader, SmartTitle, StyledButton, StyledCardAction, StyledCardPaymentBox, StyledCardPaymentTitle, StyledCardText, StyledCardTitle, StyledMpesa, StyledPaymentTitle, StyledPayPalBox, StyledPayPalButton } from '../../styles/global-style';

// const card = (
//   <>
//     <CardContent>
//       <StyledCardTitle variant='subtitle1' gutterBottom>
//         Yesterday  percentage accuracy {80}%
//       </StyledCardTitle>
//       <StyledCardText color="primary" component="div">
//         Total odds won: {6}
//       </StyledCardText>

//       <StyledCardTitle variant='subtitle1' gutterBottom>
//         Today percentage accuracy {80}%
//       </StyledCardTitle>
//       <StyledCardText color={red['700']} component="div">
//         Pending Total odds: {7}
//       </StyledCardText>


//     </CardContent>
//     <StyledCardAction>
//       <StyledButton variant='contained' size="small">Subscribe</StyledButton>
//       <Popover
//       id={id}
//       open={open}
//       anchorEl={a}
//       >

//       </Popover>
//     </StyledCardAction>
//   </>
// );

export default function OutlinedCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpen] = React.useState(false);
  const [paypal, setPayPal] = React.useState(false);

  const handlePayPal = () => {
    setAnchorEl(null)
    setPayPal(true)
    setOpen(true);
  };

  const handleMpesa = () => {
    setAnchorEl(null)
    setPayPal(false)
    setOpen(true);
  };

  const handleClose2 = () => setOpen(null);

  const handleClick = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget)
  };

  const handleClose = (e) => {
    setAnchorEl(null)
  };


  const open = Boolean(anchorEl);
  const id = open ? 'simple-hover' : undefined;

  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <StyledCardTitle variant='subtitle1' gutterBottom>
            Yesterday  percentage accuracy {80}%
          </StyledCardTitle>
          <StyledCardText color="primary" component="div">
            Total odds won: {6}
          </StyledCardText>

          <StyledCardTitle variant='subtitle1' gutterBottom>
            Today percentage accuracy {80}%
          </StyledCardTitle>
          <StyledCardText color={red['700']} component="div">
            Pending Total odds: {7}
          </StyledCardText>


        </CardContent>
        <StyledCardAction>
          <StyledButton variant='contained' size="small" onClick={handleClick}>Subscribe</StyledButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          ><StyledCardPaymentTitle>
              <StyledPaymentTitle variant='subtitle1'>Select Payment method below</StyledPaymentTitle>
            </StyledCardPaymentTitle>
            <StyledCardPaymentBox>
              {/* <StyledPayPalButton onClick={handlePayPal}>PAYPAL</StyledPayPalButton> */}
              <StyledMpesa onClick={handleMpesa}>Mpesa</StyledMpesa>
            </StyledCardPaymentBox>
          </Popover>
        </StyledCardAction>
        <Modal
          open={openModal}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledPayPalBox>
            <PaymentHeader>
              <Typography variant='h5'>Payments</Typography>
              <Button onClick={handleClose2} ><ModalCloser /></Button>
            </PaymentHeader>
            <Box></Box>
            {paypal ? <>
              <SmartTitle mleft={'10%'} textcolor={indigo[900]}>PayPal</SmartTitle>
              <ReactPaypal price={1.0} product={'guru'} />
            </>
              : <>
                <SmartTitle mleft={'10%'} textcolor={green[900]}>Lipa Na Mpesa</SmartTitle>
                <Mpesa price={100.0} product={'guru'} />
              </>
            }
          </StyledPayPalBox>
        </Modal>

      </Card>
    </Box>
  );
}
