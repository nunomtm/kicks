import React, { Component } from 'react'
import axios from 'axios';
// import placeholderImage from '../assets/placeholderImage.png';

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
                    // image: '',
                }
            ]
        }
    }
    
    componentDidMount() {
        axios.get(`${api.baseUrl}/v1/sneakers?limit=20&brand=jordan`)
            .then(data => {
                const sneaker = data.data.results;
                console.log(sneaker);
                
                let arrayOfSneakers = [];

                sneaker.forEach(kick => {
                    if(kick.brand !== '' && kick.gender !== '') {
                        // if(kick.image === undefined) {
                        //     kick.image = placeholderImage
                        // }
                        const sneakerObject = {
                            brand: kick.brand,
                            colorway: kick.colorway,
                            gender: kick.gender,
                            title: kick.title,
                            releaseDate: kick.releaseDate,
                            year: kick.year,
                            // image: kick.media.imageUrl,
                        }
                        arrayOfSneakers.push(sneakerObject);
                    }
                });
                this.setState({
                    sneakerInfo: arrayOfSneakers
                })
            });
    }

    render() {
        const { sneakerInfo } = this.state;

        return(
            <div className="sneakerSlider">
                <div className="sneakerInfo">
                    <h3>{ sneakerInfo.brand }</h3>
                    <p>{ sneakerInfo.colorway }</p>
                    <p>{ sneakerInfo.gender }</p>
                    <p>{ sneakerInfo.title }</p>
                    <p>{ sneakerInfo.releaseDate }</p>
                    <p>{ sneakerInfo.year }</p>
                </div>

                {/* <div className="sneakerImg">
                    <img src={ this.state.sneakerInfo.img } alt=""/>
                </div> */}
            </div>
        )
    }
}

export default GetData
