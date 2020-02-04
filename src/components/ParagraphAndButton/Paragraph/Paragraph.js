import React from 'react';
import './Paragraph.css';


const Paragraph = props => (
    <div className="paragraph">
        {props.paragraphText.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
    </div>
)

export default Paragraph;
