import { Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../api/index';
import { ErrorText, MpesaButton, MpesaPaper, StyledLink, SuccessText } from '../../components/styles/global-style';

const initialState = { phone_number: '', product: '', amount: '', user: '', email:'' }

export default function Mpesa({ price, product }) {
    const [require, setIsRequired] = useState(true);
    const [paymentData, setPaymentData] = useState(initialState)
    const [errors, setErrors] = useState('')
    const [success, setSuccess] = useState('')
    const [number, setNumber] = useState('')
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))


    useEffect(() => {
        user &&
        setNumber(user? user?.user.phone:'')
            // : setErrors('You must login first')
        
        paymentData['product'] = product;
        paymentData['amount'] = price;
        paymentData['email'] = user? user?.user.email: 'festaskibet@gmail.com';
        paymentData['user'] = user? user?.user.username: 'unregistered';
    }, [])
    const numErrors = () => {
        let error = false
        setSuccess('')
        const phone = paymentData['phone_number']

        if (phone.length <= 9) {
            setErrors('Check your phone number')
            error = true
        }
        else if (phone.length === 10) {
            error = false
            const new_number = phone.replace(0, '254')
            paymentData['phone_number'] = new_number
        }
        else if (phone.length > 12) {
            error = false
            const new_number = phone.replace('+', '')
            paymentData['phone_number'] = new_number
            console.log(new_number)
        }
        return error
    }

    const handleChange = (e) => {
        setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
    }
    const isRequired = () => {
        setIsRequired((prevRequired) => !prevRequired)
    }

    const lipa_na_mpesa = async () => {
        setSuccess("Check your Phone and enter Mpesa PIN...")
        try {
            const { data } = await API.lipanampesa(paymentData);
            setErrors('');
            setSuccess(data.response)
        } catch (error) {
            setErrors(error?.response.data.Error);

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
            if (require === false) {
                paymentData['phone_number'] = number
            }
            if (numErrors() === false){
              
                lipa_na_mpesa()
                console.log(paymentData['phone_number'])
            }
            
        }
    

    return (
        <MpesaPaper>
            <h4 variant='h6'>Total Amount in Ksh. {price} /-</h4>
            {errors &&
                <ErrorText>{errors} !</ErrorText>
            }
            {success &&
                <SuccessText>{success} !</SuccessText>
            }
            {/* {user &&
            user.user.country === 'Kenya' && */}
            <form onSubmit={handleSubmit} >

                {require &&
                    <TextField name='phone_number' label='Phone Number' variant='outlined' required fullWidth onChange={handleChange} autoFocus />
                }
                {user &&
                <FormControlLabel name='phone_number' variant='contained' control={<Checkbox onChange={isRequired} />} label={`use default No. ${number}`} />
                }
                <MpesaButton type='submit' fullWidth variant='contained'>Subscribe</MpesaButton>
            </form>
        {/* } */}
        <Typography variant='body1'>For other payment methods click <StyledLink component={Link} to={'/payments'} mcolor={purple[800]}>here</StyledLink>.</Typography>
        </MpesaPaper>

    );
}

