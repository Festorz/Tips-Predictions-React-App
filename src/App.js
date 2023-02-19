import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from "./components/blog/blog";
import FloatingButton from "./components/floatingButtons/floatingActionButton";
import Footer from "./components/footer/footer";
import Form from './components/form/Auth';
import PasswordReset from "./components/form/password_reset";
import Home from "./components/home/Home";
import Betika from './components/jackpots/betika';
import Betpawa from './components/jackpots/betpawa';
import BongoBongo from './components/jackpots/bongobongo';
import Jackpot from "./components/jackpots/jackpot";
import Mozzart from './components/jackpots/mozzart';
import Sportpesa from "./components/jackpots/sportpesa";
import SportyBet from './components/jackpots/sportybet';
import Navbar from './components/navbar/navbar';
import PopularDetails from "./components/popular/popularDetails";
import Payments from "./components/pricing/payments";
import Pricing from "./components/pricing/pricing";
import FixedMatches from "./components/VIPs/fixedMatches";
import Multibets from "./components/VIPs/multibets";
import Premium from "./components/VIPs/premium";
import VIP from "./components/VIPs/VIP";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <FloatingButton />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Form />} />
        <Route exact path="/password_reset" element={<PasswordReset />} />
        <Route exact path="/premium" element={<Premium />} />
        <Route exact path="/VIP" element={<VIP />} />
        <Route exact path="/fixed-matches" element={<FixedMatches />} />
        <Route exact path="/jackpots" element={<Jackpot />} />
        <Route exact path="/sportpesa" element={<Sportpesa />} />
        <Route exact path="/betika" element={<Betika />} />
        <Route exact path="/betPawa" element={<Betpawa />} />
        <Route exact path="/sportyBet" element={<SportyBet />} />
        <Route exact path="/mozzart" element={<Mozzart />} />
        <Route exact path="/bongoBongo" element={<BongoBongo />} />
        <Route exact path="/multibets" element={<Multibets />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/predictions/:id" element={<PopularDetails />} />
        <Route exact path="/payments" element={<Payments />} />
        {/* <Route exact path="/blog" element={<Blog/>} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
