import React from 'react';

import { useNavigate } from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='navbar-fixed'>
                <nav className='nav'>
                    <div className="nav-wrapper">
                        <div className="brand-logo">URLx</div>
                    </div>
                </nav>
            </div>
            <div className='container' style={{ marginTop: "2rem", padding: "0 20px", display: "block" }}>
                <h4>An error occurred to generate the URL</h4>
                <div className="error-msg">
                    <p>The <span style={{ fontWeight: "bold" }}>URL is not valid</span>, make sure the URL you tried to shorten is correct.</p>

                    <p>Possible errors:</p>
                    <ol>
                        <li>Check if the domain is correct.</li>
                        <li>Check if the site is online.</li>
                        <li>Check the length of the url is not too small.</li>
                        <li>Check the address bars and punctuation.</li>
                        <li>The URL may be being used for spam.</li>
                        <li>The URL may have been blocked.</li>
                        <li>The URL may have been reported.</li>
                        <li>The URL was recently created.</li>
                    </ol>
                </div>
                <button className='waves-effect waves-light btn' onClick={() => navigate("/")}>Go back and try again</button>
            </div>
        </>
    )
}

export default Error;