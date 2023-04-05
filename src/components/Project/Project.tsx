import React from 'react';
import man from '../../img/project.png'


const Project = () => {
    return (
        <div id='Project'>
            <div className="container">
                <div className="project">
                    <div className='project--we'>
                        <h1>We complete every project <br/>
                            extra care as customer need</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>
                            non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/>
                            scelerisque in. lorem ipsum  dolor sit amet, consectetur adipisicing elit.
                            Labore <br/>eius molestiae facere, natus reprehenderit
                            eaque eum, autem ipsam. Magfini, <br/> error.
                            Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                        <button>Read more</button>

                    </div>
                    <div>
                        <img src={man} alt=""/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Project;