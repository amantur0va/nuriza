import React from 'react';
import logo from    "../../img/hero.png"
import {AiFillPlayCircle} from "react-icons/ai";


const Hero = () => {
    return (
        <div id='Hero'>
            <div className="container">
                <div  className="hero" >
                    <div className="hero--group">
                        <h1>Virtual Reality <br/> Business Solutions</h1>
                        <p>We have over 15 year exprience in business consultting arena. We have over 15 year exprience
                            in business consultting arena and artficial intelligence.</p>
                        <div className="hero--group__block">
                            <button>Join Us</button>
                            <div className='hero--group__block--btn'>
                                <a href="https://www.youtube.com/watch?v=AaVZaB5EC4w"> <AiFillPlayCircle/> Watch video</a>
                            </div>

                        </div>


                    </div>
                    <div className='hero--group__image'>
                        <img src={logo} alt=""/>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Hero;