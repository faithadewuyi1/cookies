import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import '../Components/consentPreference.css';

const ConsentPreference = ({ handleClose }) => {
  
  const [isNecessaryOn, setIsNecessaryOn] = useState(true);
  const [isAnalyticsOn, setIsAnalyticsOn] = useState(false);
  const [isFunctionalOn, setIsFunctionalOn] = useState(false);

  const handleToggle = (type) => {
    switch(type) {
      case 'analytics':
        setIsAnalyticsOn(!isAnalyticsOn);
        break;
      case 'functional':
        setIsFunctionalOn(!isFunctionalOn);
        break;
      default:
        break;
    }
  };

  
  return (
    <>
    
      
      <div className='preferences'>
      <div class="close-modal-btn-container">
    <button onClick={handleClose} className="closeButton">&times;</button>
    </div>
        <h1 className="top-text">Customize Consent Preferences</h1>
        <p>Below you can choose which kind of cookies you allow on this website. Click on the "Save cookie settings" button to apply your choice.</p>

        <div className="toggle-container">
          <div>
            <div className="toggle">
              <h2>Necessary</h2>
              <FontAwesomeIcon
                icon={isNecessaryOn ? faToggleOn : faToggleOff}
                className="toggle-button disabled"
                size="2x"
              />
            </div>
            <p>Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.</p>
            <hr className="line-break"/>
          </div>

          <div>
            <div className="toggle">
              <h2>Analytics</h2>
              <FontAwesomeIcon
                icon={isAnalyticsOn ? faToggleOn : faToggleOff}
                onClick={() => handleToggle('analytics')}
                className="toggle-button"
                size="2x"
              />
            </div>
            <p>Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.</p>
            <hr className="line-break"/>
          </div>

          <div>
            <div className="toggle">
              <h2>Functional</h2>
              <FontAwesomeIcon
                icon={isFunctionalOn ? faToggleOn : faToggleOff}
                onClick={() => handleToggle('functional')}
                className="toggle-button"
                size="2x"
              />
            </div>
            <p>Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.</p>
          </div>
        </div>
        <button className="button">Accept All Cookies</button>
        <button className="button">Save All Cookies</button>
      </div>
    </>
  );
}

export default ConsentPreference;
