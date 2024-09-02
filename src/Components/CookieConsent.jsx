      
import React, { useState, useEffect } from 'react';
import '../Components/cookieConsent.css';

const CookieConsent = ({ openPreferences }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isCircleVisible, setIsCircleVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        } else {
            setIsCircleVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', true);
        setIsVisible(false);
        setIsCircleVisible(true);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleCircleClick = () => {
        openPreferences();
    };

    return (
        <>
            {isVisible && (
                <div className="banner">
                    <button onClick={handleClose} className="closeButton">&times;</button>
                    <h3 className='privacy'> <span className='cookie'>⚙️</span>We value your privacy</h3>
                    <p className='text'>
                        We use cookies to provide the necessary site functionality and improve your experience on our website.
                       <br/> By clicking "Accept All", you agree to the use of cookies and the terms of our <a href="/privacy-policy" className="link">Privacy and Data Protection Policy</a>.
                    </p>
                    <button onClick={handleAccept} className="button" >Accept All Cookies</button>
                    <button className='cookie-button'>Cookie Preferences</button>
                </div>
            )}
            {isCircleVisible && (
                <div className="cookie-circle" onClick={handleCircleClick}>
                    ⚙️
                </div>
            )}
        </>
    );
};

export default CookieConsent;
