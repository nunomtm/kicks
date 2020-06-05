import React from 'react';
import Header from './components/Header';
// import GetData from './components/GetData';
import Hero from './components/Hero';
// import Main from './components/Main';
import Footer from './components/Footer'

import './styles/App.css';


function App() {

    return (
        <div className="App">
            <Header />
            <Hero />
            {/* <Main /> */}
            <Footer />
        </div>
    );
}

export default App;