import { Box, Button, Modal, Typography } from '@material-ui/core';
import { React, useState, useEffect, useRef } from 'react'
import ReactPaypal from '../../payments/paypal/paypal';
import { StyledModal, StyledPayPalBox } from '../styles/global-style';

const PayPalModal = ({price}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(null);

    return (
        <div>
            <Button onClick={handleOpen}>click me</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <StyledPayPalBox>
                    <ReactPaypal price={price}/>                    
                    </StyledPayPalBox>
           </Modal>
        </div>
    )
}

export default PayPalModal