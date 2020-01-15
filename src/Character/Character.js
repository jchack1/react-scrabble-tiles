import React from 'react';
import './Character.css';

const character = (props) => {
    return(
        <div className="Character" onClick={props.click}>
            <p >{props.character}</p>
        </div>
    )
}


export default character;