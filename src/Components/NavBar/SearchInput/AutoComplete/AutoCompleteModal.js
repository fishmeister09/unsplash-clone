import { useState, useEffect } from 'react';
import './autoComplete.css';

export const AutoCompleteModal = ({ query, width }) => {
  const [autoCompleteData, setAutoCompleteData] = useState([]);

  const autoComplete = () => {
    let array = [];
    fetch(`https://unsplash.com/nautocomplete/${query}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => array.push(item.query));
      });
    console.log(array);
  };

  useEffect(() => {
    autoComplete();
  }, [query]);
  return <div className="autoCompleteModal" style={{ width: width }}></div>;
};
