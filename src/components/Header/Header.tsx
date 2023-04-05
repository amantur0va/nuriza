import React from 'react';
import IMAGE from '../../img/logo.svg';

interface IMode {
    mode: boolean
    setMode: (value: boolean) => void
}
const Header = ({mode, setMode}: IMode) => {
    return (
        <div id='Header'>
            <div className="container">
                <div className="header">
                    <div className='header--log'>
                        <img src={IMAGE} alt=""/>
                        <h1>Zone.</h1>
                    </div>

                    <div className="header--block">
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Service</a>
                        <a href="#">Pricing</a>
                        <a href="#">Blog</a>
                        <button onClick={() => setMode(!mode)}>Theme</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;