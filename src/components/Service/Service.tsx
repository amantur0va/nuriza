import React from 'react';
import service from '../../img/checklist 2.svg'

const Service = () => {
    return (
        <div id='Service'>
            <div className="container">
                <div className="service">
                    <div>
                        <h1>Our Service </h1>
                        <p>We turn information into actionable insights We work to understand your issues <br/>
                            and are driven to ask better questions in the pursuit of making work.</p>
                    </div>

                    <div className='service--our'>

                        <div className="service--our__order">
                            <img src={service} alt=""/>
                        </div>
                        <h2>Order Management</h2>
                        <h5>Lorem ipsum dolor sit amet, consectetur <br/>
                            the adipiscing elit. Sed quis accumsan nisi <br/>
                            Ut ut felis congue nisl hendrerit commodo.</h5>
                        <button>Learn more</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Service;