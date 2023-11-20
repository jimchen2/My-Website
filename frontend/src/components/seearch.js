import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PreviewCard from '../htmlelements/PreviewCard';
import backendurl from '../config/config';
import { useParams } from 'react-router-dom';

function Search() {
  const [data, setData] = useState([]); // Holds the original data
  const [filteredData, setFilteredData] = useState([]); // Holds the filtered data for display
  const { term } = useParams(); // Extracts the search term from the URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendurl}/blog`);
        setData(response.data);
      } catch (err) {
        // Error handling
      } finally {
        // Finalize loading
      }
    };

    fetchData();
  }, []);

  // Function to remove HTML tags
  const removeHtmlTags = (text) => {
    return text.replace(/<[^>]*>/g, '');
  };

  useEffect(() => {
    // Ensure that term is a string to prevent errors
    const searchTerm = term || "";

    // Filter the data based on the search term
    const filtered = data.filter(post =>
      (post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (post.body && removeHtmlTags(post.body).toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredData(filtered);
  }, [term, data]);

  return (
    <div style={{ paddingBottom: '2rem' }}>
      <br />
      <br />
      <div style={{ marginTop: '2rem' }}></div>
      {filteredData.map((post, index) => (
        <PreviewCard
          key={index}
          title={post.title}
          text={post.body}
          date={post.date}
          type={post.type}
          searchTerm={term} // Pass the search term here
        />
      ))}
      <div style={{ marginBottom: '2rem' }}></div>
    </div>
  );
}

export default Search;
