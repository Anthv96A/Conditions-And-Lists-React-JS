import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return(
        <div className="CharComponent" onClick={props.deleteChar} >
            <h3>{props.char}</h3>
        </div>
    );
}

export default charComponent;