import { Grid, IconButton, InputAdornment, Select, styled, TextField } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import React from 'react'

export const Input = ({ name, label,type, half, autofocus,handleChange,handleShowPassword }) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12} >
            <TextField
                name={name}
                label={label}
                onChange={handleChange}
                variant='outlined'
                autoFocus ={autofocus}
                required
                fullWidth
                type={type}
                InputProps={name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={handleShowPassword}>
                                {type ==='password'? <Visibility/> :<VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    )
                }: null}
            />
    </Grid>
    )
}


export const CountryField = styled(Select)(({theme}) =>({
    width: "100%",
    backgroundColor:theme.palette.common.white,
    color:theme.palette.common.black,
    textDecoration:teal,
    [theme.breakpoints.down('sm')]:{
        width:"100%"
    }
   
}));

