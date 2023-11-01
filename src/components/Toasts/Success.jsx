import React from 'react';
import './Toasts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Success = ({success}) => {
    console.log(success)
    
    return (
        <div id='success-container'>
            <FontAwesomeIcon icon={faCircleCheck} />
            <p>{success}</p>
        </div>
    );
};

export default Success;