import React from 'react';

import './ErrorModal.scss';

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            <div className="backdrop" onClick={props.onClose} />
            <div className="error-modal">
                <h2>{props.messageErr}</h2>
                <p>{props.children}</p>
                <div className="error-modal__actions">
                    <button type="button" onClick={props.onClose}>
                        Okay
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ErrorModal;