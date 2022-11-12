import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import InputShortener from './InputShortener';
import BackgroundAnimate from './BackgroundAnimate';
import Result from './Result';

const Main = () => {

    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <div className='about-button'>
                <div onClick={() => navigate("/about-us")} className="waves-effect waves-light btn">About Us</div>
            </div>
            <div className='container'>
                <InputShortener setInputValue={setInputValue} />
                <BackgroundAnimate />
                <Result inputValue={inputValue} />
            </div>
        </>
    )
}

export default Main;