import React, { Component } from 'react'
import axios from 'axios';
import placeholderImage from '../assets/placeholderImage.png';

const api = {
    baseUrl: 'https://api.thesneakerdatabase.com'
}

class GetData extends Component {

    constructor() {
        super()
        this.state = {
            sneakerInfo: {
                // {
                    brand: '',
                    colorway: '',
                    gender: '',
                    title: '',
                    releaseDate: '',
                    year: '',
                    image: '',
                // }
            },
            randomSneakerInfo: {}
        }
    }
    
    componentDidMount() {
        axios.get(`${api.baseUrl}/v1/sneakers?limit=20&brand=jordan`)
            .then(data => {
                const sneaker = data.data.results;
                // console.log(sneaker);
                
                let arrayOfSneakers = [];

                sneaker.forEach(kick => {
                    if(kick.brand !== '' && kick.gender !== '') {
                        if (kick.media.image === '' || kick.media.image === undefined ) {
                            kick.media.image = placeholderImage
                        }
                        const sneakerObject = {
                            brand: kick.brand,
                            colorway: kick.colorway,
                            gender: kick.gender,
                            title: kick.title,
                            releaseDate: kick.releaseDate,
                            year: kick.year,
                            image: kick.media.imageUrl,
                        }
                        arrayOfSneakers.push(sneakerObject);
                    }
                });
                this.setState({
                    sneakerInfo: arrayOfSneakers
                })
                this.getRandomSneaker();
            });
    }

    getRandomSneaker = () => {
        const { sneakerInfo } = this.state

        const arrayLenght = sneakerInfo.length

        const randomSneakerNumber = Math.floor(Math.random() * arrayLenght)

        const randomSneaker = sneakerInfo[randomSneakerNumber]

        this.setState({
            randomSneakerInfo: randomSneaker
        })

        const appState = {}
        appState.randomSneakerInfo = randomSneaker
    }

    render() {
        const { randomSneakerInfo } = this.state
        
        return(
            <div className="sneakerSlider">
                <div className="sneakerContainer">
                    <div className="sneakerImg">
                        <img src={ randomSneakerInfo.image } alt={ randomSneakerInfo.name }/>
                    </div>

                    <div className="sneakerInfo">
                        <h3>{ randomSneakerInfo.brand }</h3>
                        <p><span>Colorway:</span> { randomSneakerInfo.colorway }</p>
                        <p><span>Gender:</span> { randomSneakerInfo.gender }</p>
                        <p><span>Title:</span> { randomSneakerInfo.title }</p>
                        <p><span>Release Date:</span> { randomSneakerInfo.releaseDate }</p>
                        <p><span>Year:</span> { randomSneakerInfo.year }</p>
                    </div>
                </div>
            </div>
        )

        // const { sneakerInfo } = this.state

        // return (
        //     <div className="sneakerSlider">
        //         <div className="sneakerContainer">
        //             <div className="sneakerImg">
        //                 <img src={sneakerInfo.image} alt={sneakerInfo.name} />
        //             </div>

        //             <div className="sneakerInfo">
        //                 <h3>{sneakerInfo.brand}</h3>
        //                 <p><span>Colorway:</span> {sneakerInfo.colorway}</p>
        //                 <p><span>Gender:</span> {sneakerInfo.gender}</p>
        //                 <p><span>Title:</span> {sneakerInfo.title}</p>
        //                 <p><span>Release Date:</span> {sneakerInfo.releaseDate}</p>
        //                 <p><span>Year:</span> {sneakerInfo.year}</p>
        //             </div>
        //         </div>
        //     </div>
        // )
    }
}

export default GetData
