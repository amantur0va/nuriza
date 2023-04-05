import React from 'react';
import man1 from '../../img/man1.svg'
import man2 from '../../img/man2.svg'
import women from '../../img/women.svg'
import women2 from '../../img/women2.svg'
import {AiFillFacebook, AiFillLinkedin, AiFillSkype} from "react-icons/ai";
import {BsTwitter} from "react-icons/bs";


const Met = () => {
    return (
        <div id='Met'>
            <div className="container">
                <h1>Met Our Team</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis <br/>
                    accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                <div className="met">

                    <div className='met--our'>
                        <div className='met--our__team'>
                            <img src={man1} alt=""/>
                            <h2>Sunny Khan</h2>
                            <h3>Executive officer</h3>
                            <div className='met--our__team--icon'>
                                <AiFillSkype/>
                                <AiFillLinkedin/>
                                <BsTwitter/>
                                <AiFillFacebook/>

                            </div>
                        </div>
                    </div>
                    <div className='met--our'>
                        <div className='met--our__team'>
                            <img src={women} alt=""/>
                            <h2>Alina Jesia</h2>
                            <h3>UX/UI DESIGNER</h3>
                            <div className='met--our__team--icon'>
                                <AiFillSkype/>
                                <AiFillLinkedin/>
                                <BsTwitter/>
                                <AiFillFacebook/>

                            </div>
                        </div>
                    </div>
                    <div className='met--our'>
                        <div className='met--our__team'>
                            <img src={man2} alt=""/>
                            <h2>Alex Sohag</h2>
                            <h3>BUSINESS DEVELOPMENT</h3>
                            <div className='met--our__team--icon'>
                                <AiFillSkype/>
                                <AiFillLinkedin/>
                                <BsTwitter/>
                                <AiFillFacebook/>

                            </div>
                        </div>
                    </div>
                    <div className='met--our'>
                        <div className='met--our__team'>
                            <img src={women2} alt=""/>
                            <h2>Afroza Mou</h2>
                            <h3>Head of marketing</h3>
                            <div className='met--our__team--icon'>
                                <AiFillSkype/>
                                <AiFillLinkedin/>
                                <BsTwitter/>
                                <AiFillFacebook/>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Met;