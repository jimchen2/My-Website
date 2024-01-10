import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Button } from "react-bootstrap";
import LogItem from "./logitem";
import AddLogModal from "./addlogmodal";
import EditLogModal from "./editlogitem";
import axios from "axios";
import backendurl from "../config/config";
import deleteLog from "./deletelogitem";
import { useParams } from 'react-router-dom'; // Import useParams
import TypeButtons from "./typebutton";

const Log = () => {
  const { type } = useParams(); // Use useParams to get the log type from the URL
  const [logs, setLogs] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentLog, setCurrentLog] = useState(null);

  // Function to sort and filter logs, no special treatment for 'public'
  const sortAndFilterLogs = useCallback((newLogs) => {
    const sortedLogs = newLogs.sort((a, b) => {
      if (b.pin && !a.pin) return 1;
      if (a.pin && !b.pin) return -1;
      return new Date(b.date) - new Date(a.date);
    });

    // Filter logs by type without any special treatment
    return sortedLogs.filter((log) => log.type === type);
  }, [type]);

  // Fetch logs from the backend
  const fetchLogs = useCallback(async () => {
    try {
      const response = await axios.get(`${backendurl}/log`);
      const filteredSortedLogs = sortAndFilterLogs(response.data);
      setLogs(filteredSortedLogs);
    } catch (error) {
      console.error("Error fetching logs:", error);
    }
  }, [sortAndFilterLogs]);

  // Fetch logs on mount
  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  // Handle deletion of a log
  const handleDeleteLog = async (id) => {
    await deleteLog(id, logs, setLogs);
  };

  // Handle editing of a log
  const editLog = (log) => {
    setCurrentLog(log);
    setShowEditModal(true);
  };

  // Update the log list after an edit
  const updateLog = (updatedLog) => {
    const updatedLogs = logs.map((log) => log._id === updatedLog._id ? updatedLog : log);
    setLogs(sortAndFilterLogs(updatedLogs));
  };

  // Add a new log
  const addNewLog = (newLog) => {
    const updatedLogs = [newLog, ...logs];
    setLogs(sortAndFilterLogs(updatedLogs));
  };

  // Close the edit modal
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    window.location.reload()
  };

  // Close the add modal
  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <Container style={{ maxWidth: "700px" }}>
      <br />

      <Row className="justify-content-md-center mb-3">
        <Button
          variant="outline-primary"
          style={{
            backgroundColor: 'white', color: 'black', border: 'none',
          }}
          onClick={() => setShowAddModal(true)}
        >
          Add New Log
        </Button>
      </Row>

      <TypeButtons />
      <br />

      {logs.map((log) => (
        <LogItem
          key={log._id}
          log={log}
          onDelete={handleDeleteLog}
          onEdit={editLog}
        />
      ))}

      <AddLogModal
        show={showAddModal}
        handleClose={handleCloseAddModal}
        addNewLog={addNewLog}
      />

      {currentLog && (
        <EditLogModal
          show={showEditModal}
          handleClose={handleCloseEditModal}
          log={currentLog}
          updateLog={updateLog}
        />
      )}
    </Container>
  );
};

export default Log;
