import React from 'react'
import Carditems from './Carditems'
import "./Cards.css"
import img1 from '../images/Himalayas-1.jpg'
import img2 from '../images/Everest.jpg'
import img3 from '../images/Himalayas-3.jpg'
import img4 from '../images/sunrise.jpg'
import img5 from '../images/himalayas-2.JPG'


export default function Cards() {
    return (
        <div className="cards">
        <h1>To the mountains...</h1>
        <div className="cards-container">
        <div className='cards__wrapper'>
            <ul className="card-list-items">
                <Carditems
                src={img1}
                text='Mount Himalayas' />
                <Carditems 
                text='Mount Everest'
                src={img2}/>
            </ul>
            <ul className="card-list-items">
                <Carditems 
                    text='Mount Sinai'
                    src={img3}/>
                <Carditems 
                    text='Mount SunUp'
                    src={img4}/>
                <Carditems 
                    text='Mount SunDown'
                    src={img5}/>
            </ul>
        </div>
        </div>
        </div>
    )
}
