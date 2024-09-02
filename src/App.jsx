
import React, { useState } from 'react';
import DynamicForm from './Components/DynamicForm';
import CookieConsent from './Components/CookieConsent';
import ConsentPreference from './Components/ConsentPreference';

const App = () => {
    const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

    const openPreferences = () => {
        setIsPreferencesOpen(true);
    };

    const closePreferences = () => {
        setIsPreferencesOpen(false);
    };

    return (
        <div>
            <DynamicForm />
            <CookieConsent openPreferences={openPreferences} /> 
            {isPreferencesOpen && <ConsentPreference handleClose={closePreferences} />}
        </div>
    );
};

export default App;
