import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams

const TypeButtons = () => {
  const { type } = useParams(); // Get the log type from the URL parameter
  const [activeType, setActiveType] = useState(type || 'Studying');

  const logTypes = ['Studying', 'Rules', 'Entertainment', 'Journal', 'Public'];

  useEffect(() => {
    // Update the activeType when the URL parameter changes
    setActiveType(type);
  }, [type]);

  const buttonStyle = (type) => ({
    backgroundColor: activeType === type ? 'blue' : 'white',
    color: activeType === type ? 'white' : 'black',
    border: '1px solid',
    marginLeft: '5px',
    marginRight: '5px',
    textDecoration: 'none' // To ensure the Link does not have underlined text
  });

  return (
    <div className="d-flex justify-content-center">
      {logTypes.map((logType, index) => (
        <Link 
          key={index}
          to={`/embed/announcement/${logType}`}
          style={{ textDecoration: 'none' }} // Remove underline from Link
        >
          <Button
            style={buttonStyle(logType)}
            className={activeType === logType ? 'active' : ''}
          >
            {logType}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default TypeButtons;
