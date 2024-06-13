import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    setResults([]);
    if (!query.trim()) {
      setError('Please enter a search term.');
      return;
    }
    try {
      const response = await axios.get(`https://api.alquran.cloud/v1/search/${query}/all/en`);
      if (response.data.data.matches.length === 0) {
        setError('No results found.');
      } else {
        setResults(response.data.data.matches);
      }
    } catch (error) {
      setError('Fetchin error. Reload page and try again.');
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <h2>Search Quran Verses</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search term"
          required
        />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <strong>Surah {result.surah.englishName} ({result.surah.englishNameTranslation})</strong>: {result.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
