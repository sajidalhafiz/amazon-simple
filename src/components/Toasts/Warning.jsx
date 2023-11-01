import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Warning = ({ warning }) => {
    // console.log(warning)

    return (
        <div id='warning-container'>
            <FontAwesomeIcon icon={faTriangleExclamation} />
            <p>{warning}</p>
        </div>
    );
};

export default Warning;