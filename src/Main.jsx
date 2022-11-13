import React, { useState } from 'react';

import InputShortener from './Components/InputShortener';
import BackgroundAnimate from './Components/BackgroundAnimate';
import Result from './Components/Result';
import Navbar from './Components/Navbar';

const Main = () => {

    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <Navbar />
            <div className='app-container'>
                <InputShortener setInputValue={setInputValue} />
                <BackgroundAnimate />
                <Result inputValue={inputValue} />
            </div>
        </>
    )
}

export default Main;