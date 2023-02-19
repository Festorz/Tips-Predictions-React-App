export const pages = [
    {
        id: 1,
        label: 'Home',
        route: '/',
        mobile: false,
        selected:false
    },
    {
        id: 2,
        label: 'Jackpots',
        route:'#',
        selected:false,
        dropDown: [
            {
                id:1,
                label: "Sportpesa",
                route: '/sportpesa'
            },
            {
                id:2,
                label: "Betika",
                route: "/betika",
            },
            {
                id:3,
                label: "BetPawa",
                route: "/betPawa"
            },
            {
                id:4,
                label: "SportyBet",
                route: "/sportyBet"
            },
            {
                id:5,
                label: "Mozzart",
                route: "/mozzart"
            },
            {
                id:6,
                label: "BongoBongo",
                route: "/bongoBongo"
            },
        ],
        mobile: false
    },
    {
        id: 3,
        label: 'Predictions',
        route:'#',
        selected:false,
        dropDown: [
            {
                id:1,
                label: "Fixed Matches",
                route: '/fixed-matches'
            },
            {
                id:2,
                label: "VIP Tips",
                route: "/VIP",
            },
            {
                id:3,
                label: "Premium",
                route: "/premium"
            },

        ],
        mobile: false

    },
    {
        id: 4,
        label: "Multi Bets",
        route: '/multibets',
        mobile: false
    },
    {
        id: 5,
        label: "Pricing",
        route: "/pricing",
        mobile: true
    },
    {
        id: 6,
        label: "Payments M.",
        route: "/payments",
        mobile: true
    },
    {
        id: 7,
        label: "Blog",
        route: "/blog",
        mobile: true
    }

];
