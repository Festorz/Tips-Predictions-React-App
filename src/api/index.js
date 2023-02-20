import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

// export const API = axios.create({baseURL:'http://127.0.0.1:8000/'})
export const API = axios.create({baseURL:'https://tips-predictions.com/'})


// auth
export const signin = (formData) => API.post('tips/login/', formData)
export const reset_password = (formData) => API.post('tips/resetPassword/', formData)
export const signup = (formData) => API.post('tips/register/', formData)
export const signout = (formData) => API.post('tips/logout/',null, { headers: {
    'Authorization':`Token ${formData}`
}});

// payments
export const lipanampesa = (paymentdata) => API.post('tips/mpesaPay/', {paymentdata})
export const paypalpay = (paymentdata) => API.post('tips/paypalPay/', {paymentdata})

// tips/results/ popular
export const fetchTips = (cat) => API.post('tips/api/', {category:cat});
export const fetchResults = () => API.get('tips/results/');
export const fetchPopular = () => API.get('tips/popular/');
export const singleMatch = (id) => API.post('tips/singleMatch/', {id});

// games
export const jackpotGames =(cat) => API.post('tips/jackpots/', {category:cat})
export const multibetGames =(cat) => API.post('tips/multibets/', {category:cat})
export const VIPGames =(cat) => API.post('tips/vip/', {category:cat})
export const upcomingVIPGames =(cat) => API.post('tips/upvip/', {category:cat})

// jackpots
export const sportpesaSubscribers =(user) => API.post('sub/sportpesa/', {user})
export const sportybetSubscribers =(user) => API.post('sub/sportybet/', {user})
export const betikaSubscribers =(user) => API.post('sub/betika/', {user})
export const betpawaSubscribers =(user) => API.post('sub/betpawa/', {user})
export const bongobongoSubscribers =(user) => API.post('sub/bongobongo/', {user})
export const mozzartSubscribers =(user) => API.post('sub/mozzart/', {user})

// VIP
export const VIPSubscribers =(user) => API.post('sub/vip/', {user})
export const fixedSubscribers =(user) => API.post('sub/fixedm/', {user})
export const premiumSubscribers =(user) => API.post('sub/premium/', {user})

// guru / multibets
export const guruSubscribers =(user) => API.post('sub/guru/', {user})
export const Ix2Subscribers =(user) => API.post('sub/1x2/', {user})
export const ggSubscribers =(user) => API.post('sub/gg/', {user})
export const ovundSubscribers =(user) => API.post('sub/ovund/', {user})
export const hftSubscribers =(user) => API.post('sub/htft/', {user})


