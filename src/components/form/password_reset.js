import { Avatar, Button, Container, Grid,Paper, Typography } from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api';
import { ErrorText } from '../styles/global-style';
import { Input } from './input';
import useStyles from './styles-auth';


const initialState = { email: '', password:'', confirmPassword:''}

const PasswordReset = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    const navigate = useNavigate()

    const validatePassword = () => {
        let error = false
        const password = formData['password']
        const confirmPass = formData['confirmPassword']

        if (password.length < 6) {
            error = true
            setErrors('Password must have at least 6 characters');

        }
        else if (confirmPass !== password) {
            error = true
            setErrors('Password does not match with your confirm password');
        }

        return error

    }

    const resetPass = async () => {
        try {
            const { data } = await api.reset_password(formData)
            navigate('/login')

        } catch (error) {
            setErrors(error?.response.data.Error)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePassword()) {
            return
        }
        resetPass();

    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleShowPass = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }
    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOpenOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>Reset Password</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {errors !== '' &&
                            <Grid item xs={12}>
                                <ErrorText>{errors} !</ErrorText>
                            </Grid>
                        }
                        <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                        <Input name='password' label='New Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPass}/>
                        <Input name='confirmPassword' label='Confirm Password' type='password' handleChange={handleChange} />
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        Reset Password
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default PasswordReset