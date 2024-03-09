import React from 'react'
import { useTheme } from './../../components/Theme';
import NavBar from './../../components/NavBar/NavBar'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SelectedForYou from '../../components/SelectedForYou/SelectedForYou';
import ContactUs from '../../components/ContactUs/ContactUs';

const Home = () => {
    const { darkMode } = useTheme();
     return (
        <div className={darkMode ? 'dark' : 'light'}>
            <NavBar />
            <Header />
            <SelectedForYou/>
            <ContactUs/>
            <Footer/>
        </div>
     )
}

export default Home