import { amber, blue, green, indigo, red } from "@material-ui/core/colors";
import airtel from '../../data/images/airtel.png';
import airtm from '../../data/images/airtm.png';
import mpesa from '../../data/images/mpesa.jpeg';
import mtn from '../../data/images/mtn.jpg';

export const payment_methods = [
    {
        id: 1,
        label: "Mpesa",
        image: mpesa,
        acronym: 'M',
        color: green[900],
        directions: [
            {
                id: 1,
                dir: "Login or Signup first."
            },
            {
                id: 2,
                dir: "Navigate to page with your interested tips, to use your default number, check the box else fill in a new number in the form."
            },

            {
                id: 3,
                dir: "Click the subscribe button then enter your MPESA PIN on the stk pushed screen on your mobile phone to subscribe."
            }

        ]
    },
    {
        id: 2,
        label: "Airtm",
        image: airtm,
        acronym: 'A',
        color: blue[500],
        directions: [
            {
                id: 1,
                dir: "Login or Signup first at airtm.com"
            },
            {
                id: 2,
                dir: "Navigate to send/request page."
            },
            {
                id: 3,
                dir: "Send to email festaskibet@gmail.com"
            },
            {
                id: 4,
                dir: "Enter amount."
            },
            {
                id: 5,
                dir: "Click Send"
            },
        ]
    },
    {
        id: 3,
        label: "MTN Uganda",
        image: mtn,
        color: amber[900],
        acronym: 'UG',
        directions: [
            {
                id: 1,
                dir: "Login or Signup first."
            },
            {
                id: 2,
                dir: "Dial *165*1# on your MTN money inline."
            },
            {
                id: 3,
                dir: "Choose to send money internationally to Mpesa Kenya."
            },
            {
                id: 4,
                dir: "Send money to +254 746 668206."
            },
        ]
    },
    {
        id: 4,
        label: "MTN Vodacom TZ",
        image: mtn,
        color: amber[900],
        acronym: 'TZ',
        directions: [
            {
                id: 1,
                dir: "Login or Signup first."
            },

            {
                id: 2,
                dir: "Dial *165*1# on your MTN money inline. "
            },
            {
                id: 3,
                dir: "Choose to send money internationally to Mpesa Kenya. "
            },
            {
                id: 4,
                dir: "Send money to +254 746 668206"
            },

        ]
    },
    {
        id: 5,
        label: "Airtel Money",
        image: airtel,
        color: red[900],
        acronym: 'A',
        directions: [
            {
                id: 1,
                dir: "Login or Signup first."
            },

            {
                id: 2,
                dir: "1. Dial *222#, choose Send Money, then select Another country"
            },
            {
                id: 3,
                dir: "Select KENYA, Enter Recipient Number as +254789048489 thEn enter Amount."
            },
            {
                id: 4,
                dir: "Confirm transactions details, Enter PIN and Press OKAY"
            },

        ]
    },
    // {
    //     id: 6,
    //     label: "Nigeria Pay Method",
    //     color: grey[900],
    //     image: paypal_nigeria,
    //     acronym: 'NG',
    //     directions: [
    //         {
    //             id: 1,
    //             dir: "Register to PayPal.com, then link your Bank Account to PayPal"
    //         },
    //         {
    //             id: 2,
    //             dir: "Send money to your PayPal account from your bank account."
    //         },
    //         {
    //             id: 3,
    //             dir: "Follow the PayPal method instructions above."
    //         },

    //     ]
    // }
]