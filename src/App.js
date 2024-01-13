import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileDetail from './routes/ProfileDetail';
import Orgs from './routes/Orgs';
import About from './routes/AboutUs/AboutUs';
import Nukhba from './routes/NukhbaPage/Nukhba';
import Nukhbapost from './routes/NukhbaPage/Nukhbapost';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    // Set the default language based on the user's browser language
    setSelectedLanguage(navigator.language);
  }, []);

  const translateText = (text, targetLanguage) => {
    try {
      const translatedText = new Intl.DisplayNames([targetLanguage], { type: 'language' }).of(text);
      return translatedText;
    } catch (error) {
      console.error('Error translating text:', error);
      return text; // Return the original text in case of an error
    }
  };

  return (
    <div>
      <Routes>
        <Route
          path="/orgs"
          element={<Orgs translateText={translateText} selectedLanguage={selectedLanguage} />}
        />
        <Route
          path="/"
          element={<About translateText={translateText} selectedLanguage={selectedLanguage} />}
        />
        <Route
          path="/nukhba"
          element={<Nukhba translateText={translateText} selectedLanguage={selectedLanguage} />}
        />
        <Route
          path="/orgs/:id"
          element={<ProfileDetail translateText={translateText} selectedLanguage={selectedLanguage} />}
        />
        <Route
          path="/Nukhba/:id"
          element={<Nukhbapost translateText={translateText} selectedLanguage={selectedLanguage} />}
        />
      </Routes>
    </div>
  );
};

export default App;
