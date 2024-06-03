"use client"

import React, { useEffect } from 'react';

const DukascopyWidget = () => {
  useEffect(() => {
    // Create the script element for the widget configuration
    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.text = `
      DukascopyApplet = {
        "type": "online_news",
        "params": {
          "header": true,
          "borders": false,
          "defaultLanguage": "en",
          "availableLanguages": ["ar", "bg", "cs", "de", "en", "es", "fa", "fr", "he", "hu", "it", "ja", "ms", "pl", "pt", "ro", "ru", "sk", "sv", "th", "uk", "zh"],
          "newsCategories": ["finance", "forex", "stocks", "commodities"],
          "width": "100%",
          "height": "100%",
          "adv": "popup"
        }
      };
    `;
    document.body.appendChild(configScript);

    // Create the script element for the widget core
    const coreScript = document.createElement('script');
    coreScript.type = 'text/javascript';
    coreScript.src = 'https://freeserv-static.dukascopy.com/2.0/core.js';
    document.body.appendChild(coreScript);

    // Clean up the scripts when the component unmounts
    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(coreScript);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {/* The widget will be rendered here */}
    </div>
  );
};

export default DukascopyWidget;
