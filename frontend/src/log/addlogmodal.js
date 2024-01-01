import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, DropdownButton, Dropdown, FormCheck } from 'react-bootstrap';
import axios from 'axios';
import backendurl from "../config/config";
import Cookies from "js-cookie";

const AddLogModal = ({ show, handleClose, addNewLog }) => {
  const [logTypes, setLogTypes] = useState(['Studying', 'Rules', 'Entertainment', 'Journal']); // Default types
  const getInitialLogType = () => Cookies.get("logType") || 'Studying'; // Fetch the initial log type from cookies or default to 'Studying'
  
  const [newLog, setNewLog] = useState({ body: '', type: getInitialLogType(), pin: false });

  useEffect(() => {
    const storedLogTypes = Cookies.get("logTypes"); // Fetch log types from cookies
    if (storedLogTypes) {
      try {
        const parsedLogTypes = JSON.parse(storedLogTypes); // Parse the JSON string
        if (Array.isArray(parsedLogTypes)) {
          setLogTypes(parsedLogTypes); // Update log types if parsing is successful
          // No need to update newLog.type here as it's handled by getInitialLogType()
        }
      } catch (error) {
        console.error("Error parsing log types from cookies", error);
      }
    }
  }, []); // Empty dependency array means this effect runs once on mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const logData = { body: newLog.body, type: newLog.type, pin: newLog.pin };
      const response = await axios.post(`${backendurl}/log`, logData);
      addNewLog(response.data);
      handleClose();
      window.location.reload(); // This line will reload the page
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
