import { Avatar, Button, Container, Grid, MenuItem, Paper, Typography } from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import countries from 'i18n-iso-countries';
import enlocale from 'i18n-iso-countries/langs/en.json';
import itlocale from 'i18n-iso-countries/langs/it.json';
import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as api from '../../api';
import { CountryField, Input } from './input';
import { ErrorText } from '../styles/global-style';
import useStyles from './styles-auth';
import { StyledLink } from '../footer/footer-styles';



const initialState = { username: '', first_name: '', last_name: '', phone: '', country: '', email: '', password: '', confirmPassword: '' }
export const Auth = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const [isSignUp, setIsSignUp] = useState(false)
    const [errors, setErrors] = useState('')
    const [resErrors, setResErrors] = useState('')
    const [uniqErrors, setuniqErrors] = useState('')
    const [selectedCountry, setselectedCountry] = useState('')

    countries.registerLocale(enlocale);
    countries.registerLocale(itlocale);

    const countryObj = countries.getNames('en', { select: "official" });
    const countryArr = Object.entries(countryObj).map(
        ([key, value]) => {
            return {
                label: value,
                value: key
            };
        });


    useEffect(() => {

        document.title = isSignUp ?

            'Sign Up' : 'Sign In'

    })
    const classes = useStyles()
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

    const SignUp = async () => {
        try {
            const { data } = await api.signup(formData)
            localStorage.setItem('profile', JSON.stringify(data))
            navigate('/')

        } catch (error) {
            setuniqErrors(error?.response.data.Error)
        }
    }
    const SignIn = async () => {
        try {
            const { data } = await api.signin(formData)
            localStorage.setItem('profile', JSON.stringify(data))
            navigate('/')

        } catch (error) {
            setResErrors(error?.response.data.Error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            if (validatePassword()) {
                return
            }
            SignUp();
        } else {
            SignIn();
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleShowPass = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    const SwitchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        setShowPassword(false)
    }


    const selectCountryhandler = (e) => {
        setselectedCountry(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOpenOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name='first_name' label='First Name' handleChange={handleChange} autoFocus half />
                                    <Input name='last_name' label='Last Name' handleChange={handleChange} half />
                                    {uniqErrors !== '' &&
                                        <Grid item xs={12}>
                                            <ErrorText>{uniqErrors} !</ErrorText>
                                        </Grid>
                                    }
                                    <Input name='username' label='User Name' handleChange={handleChange} />
                                    <Input name='phone' label='Phone Number' handleChange={handleChange} />
                                    <Grid item xs={12}>
                                        <CountryField xs={12}
                                            value={selectedCountry}
                                            variant='outlined'
                                            required
                                            name='country'
                                            onChange={selectCountryhandler}
                                        >
                                            {
                                                countryArr.map(({ label, value }) => (
                                                    <MenuItem key={value} value={label}>
                                                        {label}
                                                    </MenuItem>
                                                ))}
                                        </CountryField>
                                    </Grid>
                                </>
                            )
                        }
                        {resErrors !== '' &&
                            <Grid item xs={12}>
                                <ErrorText>{resErrors} !</ErrorText>
                            </Grid>
                        }
                        <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                        {errors !== '' &&
                            <Grid item xs={12}>
                                <ErrorText>{errors} !</ErrorText>
                            </Grid>
                        }
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPass} />
                        {!isSignUp &&
                        <Grid container justifyContent='center'>
                        <Grid item>
                            <StyledLink component={Link} to='/password_reset' mcolor='black'>
                                Forgot Password?
                            </StyledLink>
                        </Grid>
                    </Grid>
}
                        {isSignUp &&
                                <Input name='confirmPassword' label='Confirm Password' handleChange={handleChange} type='password' />
                        }
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={SwitchMode}>
                                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}
export default Auth;
