import React, {useState, useContext, useEffect} from 'react';


const Place = props => {
    
    return(
        <React.Fragment>
            <li>
                <div>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div>
                    <h2>{props.placeName}</h2>
                    <h3>{props.description}</h3>
                </div>
            </li>
        </React.Fragment>

    );
};

export default Place;