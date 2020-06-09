import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer'

import './sass/App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    
    render() {
        return (
            <div className="App">
                <Header />
                <Hero />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;