import { Fab } from '@material-ui/core'
import React from 'react'
import { IconBox, WhatsAppIcon } from './styles'

const FloatingButton = () => {
    return (
        <IconBox>
            <Fab component='a' href='https://wa.me/=+254746668206' target='_blank'>
                <WhatsAppIcon />
            </Fab>

        </IconBox>
    )
}

export default FloatingButton