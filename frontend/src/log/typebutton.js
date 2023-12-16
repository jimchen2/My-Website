import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Cookies from 'js-cookie'; // Import js-cookie

const TypeButtons = ({ setLogType }) => {
  // Retrieve initial type from cookie or default to 'Studying'
  const initialType = Cookies.get('logType') || 'Studying';
  const [activeType, setActiveType] = useState(initialType);

  const logTypes = ['Studying', 'Rules', 'Entertainment', 'Journal'];

  useEffect(() => {
    // Update cookie whenever activeType changes
    Cookies.set('logType', activeType);
    // Update the parent component's state
    if (setLogType) {
      setLogType(activeType);
    }
  }, [activeType, setLogType]);

  const handleButtonClick = (type) => {
    const newActiveType = type === activeType ? '' : type;
    setActiveType(newActiveType);
  };

  const buttonStyle = (type) => ({
    backgroundColor: activeType === type ? 'blue' : 'white',
    color: activeType === type ? 'white' : 'black',
    border: '1px solid',
    marginLeft: '5px',
    marginRight: '5px',
  });

  return (
    <div className="d-flex justify-content-center">
      {logTypes.map((type, index) => (
        <Button
          key={index}
          style={buttonStyle(type)}
          onClick={() => handleButtonClick(type)}
          className={activeType === type ? 'active' : ''}
        >
          {type}
        </Button>
      ))}
    </div>
  );
};

export default TypeButtons;
