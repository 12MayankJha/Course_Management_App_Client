import React from 'react';
import './spinner.scss';

const Spinner = () => (
    <div className="loading-load">
        {/* <svg width="80" height="80" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" >
            <circle cx="50" cy="50" fill="none" stroke="#775ae4" strokeWidth="5" r="30"
                strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(275.845 50 50)">
                <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50"
                    keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />

            </circle>
        </svg> */}

        <svg className="spinner" viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
        <p>Please wait...</p>
    </div>
);
export default Spinner;