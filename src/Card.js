import React from 'react';
import './Card.css';
import 'animate.css';
import Slider from 'react-slick';
import bdayCap from './img/bdaycap.png';
import flowers from './img/flowers.png';
import food from './img/food.png';
import sparkling from './img/sparkling.png';
import blossom from './img/blossom.png';
import german from './img/german.png';
import ski from './img/ski.png';
import dance from './img/dance.gif';
import hollywood from './img/hollywood.png';
import Button from './Button';
const textOne = "Hey you :) I see you selected the right answer"
const textTwo = "There's a lot to celebrate! Hitting the big 24, 2 months since we met, and me going from Nuna back to Yuna ;) to name a few"
const textThree = "The flowers you got me on our first date really left a strong impression. Even moreso that you've continuously made me new ones ever since. Your efforts have not gone unnoticed <3"
const textFour = "Same goes with all that you've been cooking for me (BIG YUM) alongside our wine & dines"
const textSix = "But what really stood out to me about you was (and is) your kind and pure heart. It's so much easier to be a critic than a celebrator. You feel intensely and your full embrace of your emotions is reflective of your full embrace of the human spirit. And the coolheadedness + acumen you have in responding to the experience afterwards is really attractive :P"
const textSeven = "I cherish how considerate you've been of me the past 2 months. You truly give freely to the world your gifts of love and compassion. By giving, you give the manifestations of what is alive in you, and you revitalize everthing in your vicinity as a result"
const textEight = "I look forward to all the shared ideas and intellectual exchanges we'll continue to have in the future. Your openmindedness and willingness to learn is palpable in all the lessons you blossom out of"
const textFive = "I also look forward to more silly moments with you :3"
const textNine = "With all that said, I hope I can learn to best help you carry the weight on your shoulders and to be your engine of buoyancy (you can trust German engineering). U don't ever have to struggle alone. I wanna make u happy (and ugly laugh)"
const textTen = "There's gonna be a lot more celebrations and happy days ahead! Here's to hitting everything on our hitlist, putting each other onto good films/music, and growing together through the process :)"
const textEleven = "Happy Birthday Sean"
const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
};

class Card extends React.Component {
    render() {
        return (
            <div className='cardContainer'>
                <Slider {...settings} className="slider">
                    <div>
                        {textOne}
                        <img alt="bdayCap" src={bdayCap} width="300"></img>
                        <iframe title="love" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/track/4hriybgE67pyiH6yz7J8R5?utm_source=generator" width="60%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div>
                    <div>
                        {textTwo}
                    </div>
                    <div>
                        {textThree}
                        <img alt="flowers" src={flowers} width="600"></img>
                    </div>
                    <div>
                        {textFour}
                        <img alt="food" src={food} width="500"></img>
                    </div>
                    <div>
                        {textSix}
                        <iframe title="bootleg" style={{borderRadius: '12px', marginTop: '20px'}} src="https://open.spotify.com/embed/track/0ywO9GgVuLXMhzGSyUrq6N?utm_source=generator" width="60%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div>
                    <div>
                        {textSeven}
                        <img alt="sparkling" src={sparkling} width="500"></img>
                    </div>
                    <div>
                        {textEight}
                        <img alt="blossom" src={blossom} width="600"></img>
                    </div>
                    <div>
                        {textFive}
                        <img alt="dance" src={dance} width="400"></img>
                    </div>
                    <div>
                        {textNine}
                        <img alt="german" src={german} width="600"></img>
                        <iframe title="woozy" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/track/4faTuWPQeMo24zvuTDre3c?utm_source=generator&theme=0" width="60%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div>
                    <div>
                        {textTen}
                        <img alt="hollywood" src={hollywood} width="420"></img>
                    </div>
                    <div>
                        {textEleven}
                        <img alt="ski" className="animate__animated animate__shakeX animate__infinite"
                        src={ski} width="200"></img>
                        <Button retBtn={true} type="back to envelope" sendDataToApp={this.props.sendDataToApp}/>
                    </div>
                </Slider>
            </div>
        )
    }
};

export default Card;