import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FaLink, FaHandPaper, FaMoneyBillAlt } from 'react-icons/fa';
import { GoThumbsup } from 'react-icons/go';
import { BsShieldFillCheck } from 'react-icons/bs';
import { MdOutlineDevices } from 'react-icons/md';

import Footer from '../Components/Footer';

const AboutUs = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <h1><FaLink /> URLx</h1>
                <h4>Simple and fast URL shortener!</h4>
                <p className='description'>URLx allows to reduce long links from <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>, <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and top sites on the
                    Internet, just paste the long URL and click the Shorten URL button. On the next screen, copy the shortened URL
                    and share it on websites, chat and e-mail.</p>

                <h4>Shorten, share and track</h4>
                <p className="description" style={{ marginBottom: "3rem" }}>
                    Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant messages, and
                    other locations. Track statistics for your business and projects by monitoring the number of hits from your URL
                    with the click counter, you do not have to register.
                </p>

                <div className='row desc'>
                    <div className="col s12 m6 l4" style={{ marginBottom: "3rem" }}>
                        <GoThumbsup className='icon' />
                        <h5>Easy</h5>
                        <p className="description">URLx is easy and fast, enter the long link to get your shortened link</p>
                    </div>
                    <div className="col s12 m6 l4" style={{ marginBottom: "3rem" }}>
                        <FaLink className='icon' />
                        <h5>Shortened</h5>
                        <p className="description">Use any link, no matter what size, URLx always shortens</p>
                    </div>
                    <div className="col s12 m6 l4" style={{ marginBottom: "3rem" }}>
                        <BsShieldFillCheck className='icon' />
                        <h5>Secure</h5>
                        <p className="description">It is fast and secure, our service have HTTPS protocol and data encryption</p>
                    </div>
                    <div className="col s12 m6 l4" style={{ marginBottom: "3rem" }}>
                        <FaHandPaper className='icon' />
                        <h5>Reliable</h5>
                        <p className="description">All links that try to disseminate spam, viruses and malware are deleted</p>
                    </div>
                    <div className="col s12 m6 l4" style={{ marginBottom: "3rem" }}>
                        <MdOutlineDevices className='icon' />
                        <h5>Devices</h5>
                        <p className="description">Compatible with smartphones, tablets and desktop</p>
                    </div>
                    <div className="col s12 m6 l4" style={{ marginBottom: "3rem" }}>
                        <FaMoneyBillAlt className='icon' />
                        <h5>Free</h5>
                        <p className="description">URLx is a free tool to shorten a URL or reduce a link
                            Use our URL Shortener to create a shortened link making it easy to remember</p>
                    </div>
                </div>
                <button onClick={() => navigate('/')} className='go-to btn'>Go to URL Shortener</button>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs;