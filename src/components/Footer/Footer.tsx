import React from 'react';
import image from '../../img/logo.svg'
import {AiFillTwitterSquare} from "react-icons/ai";
import {BsFacebook, BsFillTelephoneInboundFill, BsPinterest} from "react-icons/bs";
import {FaInstagram} from "react-icons/fa";
import {CiLocationOn} from "react-icons/ci";
import {MdEmail} from "react-icons/md";


const Footer = () => {
    return (
        <div id='Footer'>
            <div className="container">
                <div className="footer">
                    <div className='footer--blocks'>
                        <div className='footer--blocks__zone'>
                            <img src={image} alt=""/>
                            <h1>Zone.</h1>
                        </div>
                        <div className='footer--blocks__link'>

                            <a href="#"> <CiLocationOn/> Dhaka, Bangladesh</a>
                            <a href="#"> <BsFillTelephoneInboundFill/> 0943833399</a>
                            <a href="#"> <MdEmail/> support @zone.com</a>
                        </div>

                        <div className='footer--blocks__ion'>
                            <BsFacebook/>
                            <AiFillTwitterSquare/>
                            <FaInstagram/>
                            <BsPinterest/>
                        </div>

                    </div>
                    <div className='footer--block'>
                        <a href="#"> Service</a>

                        <a href="#"> Order Management</a>
                        <a href="#"> Social Assistant</a>
                        <a href="#"> Crypto Platform</a>
                        <a href="#"> Analyzer of the News</a>

                    </div>
                    <div className='footer--block'>

                        <a href="#"> Company</a>
                        <a href="#"> About Us</a>
                        <a href="#"> News</a>
                        <a href="#"> Our trusted partner</a>
                        <a href="#"> New users FAQ</a>
                    </div>

                    <div className='footer--block'>

                        <a href="#">Supports</a>
                        <a href="#"> Help center</a>
                        <a href="#">Feedbcak</a>
                        <a href="#">Contact us</a>
                        <a href="#"> Terms conditins</a>
                    </div>
                    <div className='footer--block'>
                        <a href="#">Resources</a>
                        <a href="#"> Download app</a>
                        <a href="#">Blog</a>
                        <a href="#"> What’s new</a>
                        <a href="#"> Sitemap</a>
                    </div>

                </div>


                <hr/>
                <div className='end'>
                    <a href="#">© 2021 Zone. - All rights reserved.</a>

                  <div className='end--flex'>
                      <h1>Privacy</h1>
                      <h1>Security</h1>
                      <h1>Terms</h1>
                  </div>
                </div>

            </div>


        </div>
    );
};

export default Footer;