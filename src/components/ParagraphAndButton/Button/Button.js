import React from 'react';
import './Button.css';


const Button = ({buttonContent, action}) => (
    <div className="button-container">
        <button onMouseEnter={action} onClick={buttonContent.buttonAction}>
            {buttonContent.buttonText}
        </button>
    </div>
)

export default Button;
