import React, { useState, useEffect } from 'react';

const Translate = () => {
  const [translation, setTranslation] = useState('');
  const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages';
  const options = {
    method: 'GET',
    headers: {
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': 'd5e5da8e25mshc45c6ca93738f18p18ec48jsn3f308e348784',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setTranslation(JSON.stringify(result)); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>Translation Result:</p>
      <pre>{translation}</pre>
    </div>
  );
};

export default Translate;
