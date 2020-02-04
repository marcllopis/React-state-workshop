import React from 'react';
import './Picture.css';


const Picture = props => (
    <div className="img-container">
        <img src={props.imgUrl} alt={props.imgAlt} />
    </div>
);

export default Picture;
