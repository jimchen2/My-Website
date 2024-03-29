import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, DropdownButton, Dropdown, FormCheck } from 'react-bootstrap';
import axios from 'axios';
import backendurl from "../config/config";
import { useParams } from 'react-router-dom';

const AddLogModal = ({ show, handleClose, addNewLog }) => {
  const { type } = useParams(); // Use useParams to get the log type from the URL

  // Default log types
  const logTypes = ['Studying', 'Rules', 'Entertainment', 'Journal', 'Public'];

  // Initialize newLog state
  const [newLog, setNewLog] = useState({ body: '', type: 'Studying', pin: false });

  // Update the log type based on URL parameter
  useEffect(() => {
    if (logTypes.includes(type)) {
      setNewLog(prevLog => ({ ...prevLog, type }));
    }
  }, [type]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const logData = { body: newLog.body, type: newLog.type, pin: newLog.pin };
      const response = await axios.post(`${backendurl}/log`, logData);
      addNewLog(response.data);
      handleClose();
      window.location.reload()
    } catch (error) {
      console.error('Error adding new log:', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Log</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formLogBody">
            <Form.Label>Log Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={newLog.body}
              onChange={(e) => setNewLog({ ...newLog, body: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group controlId="formLogType">
            <Form.Label>Log Type</Form.Label>
            <DropdownButton
              title={newLog.type}
              onSelect={(e) => setNewLog({ ...newLog, type: e })}
            >
              {logTypes.map((type, index) => (
                <Dropdown.Item key={index} eventKey={type}>{type}</Dropdown.Item>
              ))}
            </DropdownButton>
          </Form.Group>
          <Form.Group controlId="formLogPin">
            <FormCheck 
              type="checkbox" 
              label="Pin this log" 
              checked={newLog.pin}
              onChange={(e) => setNewLog({ ...newLog, pin: e.target.checked })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Log
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddLogModal;
