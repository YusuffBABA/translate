import React, { useState, useEffect } from 'react';

const Translate = () => {
  const [translation, setTranslation] = useState('');
  const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': 'd5e5da8e25mshc45c6ca93738f18p18ec48jsn3f308e348784',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    },
    body: new URLSearchParams({
      source: 'en',
      target: 'es',
      q: 'Hello, world!',
    }).toString(),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (data.data && data.data.translations && data.data.translations.length > 0) {
          setTranslation(data.data.translations[0].translatedText);
        } else {
          console.error('Translation data not found.');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      
      <p>{translation}</p>
    </div>
  );
};

export default Translate;
