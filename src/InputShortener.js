import React from 'react';

function InputShortener() {
    return (
        <div className='input-container'>
            <h1>URL <span>Shortener</span></h1>
            <div>
                <input type='text' placeholder='Shorten a link here...' />
                <button>Shorten It!</button>
            </div>
        </div>
    )
}

export default InputShortener;