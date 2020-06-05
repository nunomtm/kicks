import React, { Component } from 'react'
import axios from 'axios';

const api = {
    baseUrl: 'https://api.thesneakerdatabase.com'
}

class GetData extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            sneakerInfo: [
                {
                    brand: '',
                    colorway: '',
                    gender: '',
                    title: '',
                    releaseDate: '',
                    year: '',
                    image: '',
                }
            ]
        }
    }
    
    componentDidMount() {
        axios.get(`${api.baseUrl}/v1/sneakers?limit=20&brand=jordan`)
            .then(data => {
                let arrayOfSneakers = [];
                const sneaker = data.data.results;
                console.log(sneaker);
                sneaker.forEach(kick => {
                    const sneakerObject = {
                        brand: sneaker.brand,
                        colorway: sneaker.colorway,
                        gender: sneaker.gender,
                        title: sneaker.title,
                        releaseDate: sneaker.releaseDate,
                        year: sneaker.year,
                        // image: sneaker.media.imageUrl,
                    }
                    arrayOfSneakers.push(sneakerObject);
                });

                this.setState({
                    sneakerInfo: arrayOfSneakers
                })
            });
    }

    render() {
        return(
            <div className="sneakerSlider">
                <div className="sneakerInfo">
                    <h3>{ this.state.sneakerInfo.brand }</h3>
                    <p>{ this.state.sneakerInfo.colorway }</p>
                    <p>{ this.state.sneakerInfo.gender }</p>
                    <p>{ this.state.sneakerInfo.title }</p>
                    <p>{ this.state.sneakerInfo.releaseDate }</p>
                    <p>{ this.state.sneakerInfo.year }</p>
                </div>

                {/* <div className="sneakerImg">
                    <img src={ this.state.sneakerInfo.img } alt=""/>
                </div> */}
            </div>
        )
    }
}

export default GetData
