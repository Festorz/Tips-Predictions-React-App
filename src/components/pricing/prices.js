import { brown, cyan, green, grey, indigo, lime, pink } from "@material-ui/core/colors";

export const Prices = [
    {
        id: 1,
        label: "Fixed Matches",
        price: '$120 | Ksh 10k',
        route: "/Fixed-Matches",
        duration:'7 days',
        acronym: 'F',
        color: pink[900],
        properties: [
            {
                id: 1,
                label: "Correct Scores"
            },
            {
                id: 2,
                label: "1X2 Tips"
            },
            {
                id: 3,
                label: "GG | NG Tips"
            },
            {
                id: 4,
                label: "OVER | UNDER Tips"
            },
            {
                id: 5,
                label: "HT | FT Tips"
            },
        ]
    },
    {
        id: 2,
        label: "VIP",
        price: '$ 12 | Ksh 1200',
        route: "/VIP",
        duration:'2 days',
        acronym: 'V',
        color: indigo[900],
        properties: [
            {
                id: 1,
                label: "1X2 Tips"
            },
            {
                id: 2,
                label: "GG | NG Tips"
            },
            {
                id: 3,
                label: "OVER | UNDER Tips"
            },
            {
                id: 4,
                label: "HT | FT Tips"
            },
        ]
    },
    {
        id: 3,
        label: "Premium",
        price: '$ 3 | Ksh 300',
        route: "/Premium",
        duration:'1 day',
        color: green[900],
        acronym: 'P',
        properties: [
            {
                id: 2,
                label: "1X2 Tips"
            },
            {
                id: 3,
                label: "GG | NG Tips"
            },
            {
                id: 4,
                label: "OVER | UNDER Tips"
            },
        ]
    },
    {
        id: 4,
        label: "Multi Bets",
        price: '$ 2 | Ksh 200',
        route: "/Multibets",
        duration:'1 day',
        color: cyan[900],
        acronym: 'M',
        properties: [
            {
                id: 1,
                label: "1X2 Tips"
            },
            {
                id: 2,
                label: "GG | NG Tips"
            },
            {
                id: 3,
                label: "OVER | UNDER Tips"
            },
            {
                id: 4,
                label: "HT | FT Tips"
            },
        ]
    },
    {
        id: 5,
        label: "Jackpots",
        price: '$ 3 | Ksh 300',
        route: "/Sportpesa",
        duration:'1 day',
        color: grey[900],
        acronym: 'J',
        properties: [
            {
                id: 1,
                label: "Home Win Tips"
            },
            {
                id: 2,
                label: "Draw tips"
            },
            {
                id: 3,
                label: "Away Win Tips"
            },

        ]
    },
    {
        id: 6,
        label: "Guru Tips",
        price: '$ 1 | Ksh 100',
        route: "/#guru",
        duration:'1 day',
        color: brown[900],
        acronym: 'G',
        properties: [
            {
                id: 1,
                label: "1X2"
            },

        ]
    }
]