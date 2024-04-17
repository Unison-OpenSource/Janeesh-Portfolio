import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const { content, author } = response.data;
      setQuote(`${content} - ${author}`);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div>
      <h2>{quote}</h2>
    </div>
  );
};

export default Quote;
