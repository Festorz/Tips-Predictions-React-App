import { React, useEffect, useRef, useState } from 'react';
import * as API from '../../api/index';
import { StyledPayPal } from '../../components/styles/global-style';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const ReactPaypal = ({ price, product }) => {
    const [paid, setPaid] = useState(false);
    const [error, setError] = useState(null);
    const user = useState(JSON.parse(localStorage.getItem('profile')))

    // console.log(process.env)

    // const paypalRef = useRef();

    // useEffect(() => {
    // window.paypal.Buttons({
    const createOrder = (data, actions) => {
        return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
                {
                    description: `Payments for ${product}`,
                    amount: {
                        currency_code: 'USD',
                        value: price
                    },
                },
            ],
        });
    }
    const onApprove = async (dat, actions) => {
        const order = await actions.order.capture();
        var payee = user ? user?.user.username : 'unregistered'
        var email = user ? user?.user.email : 'festaskibet@gmail.com'
        const paymentData = { user: payee, order, product, email, amount: price }
        const { data } = await API.paypalpay(paymentData)
        setPaid(true);
        console.log(order)
        console.log(data)
    }
    const onError = (err) => {
        setError(err)
        console.error(err)
    }
    // })
    // .render(paypalRef.current);
    // }, []);

    if (paid) {
        return <div>Payment Successful.!</div>;
    }

    if (error) {
        return <div>Error occurred in processing payment.! Please try again.</div>;
    }

    return (
        <StyledPayPal>

            <PayPalScriptProvider options={{ "client-id": "AaqI65LzuE6k34p0TPW--6mrHbmcWwTQmcNjFjFoFpn1753E3XQfNJnbe22PjnxArw6uqYkQ4nmkdzck"}}>
                <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>
        </StyledPayPal>
          
    )
}

export default ReactPaypal