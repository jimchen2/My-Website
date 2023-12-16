import React, { useState } from 'react';
import { Modal, Button, Form, FormCheck } from 'react-bootstrap';
import axios from 'axios';
import backendurl from "../config/config";

const EditLogModal = ({ show, handleClose, log, updateLog }) => {
  const [editedBody, setEditedBody] = useState(log.body);
  const [editedPin, setEditedPin] = useState(log.pin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedLog = { ...log, body: editedBody, pin: editedPin };
      const response = await axios.put(`${backendurl}/log/${log._id}`, updatedLog);
      updateLog(response.data);
      handleClose();
    } catch (error) {
      console.error('Error updating log:', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg"> {/* Adjusted size to 'lg' for larger modal */}
      <Modal.Header closeButton>
        <Modal.Title>Edit Log</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Log Content</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={10} /* Increased number of rows for more vertical space */
              style={{ minHeight: '200px' }} /* Or set a minimum height directly */
              value={editedBody} 
              onChange={(e) => setEditedBody(e.target.value)} 
            />
          </Form.Group>
          <Form.Group>
            <FormCheck 
              type="checkbox" 
              label="Pin this log" 
              checked={editedPin}
              onChange={(e) => setEditedPin(e.target.checked)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditLogModal;
