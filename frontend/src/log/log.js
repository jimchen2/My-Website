import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Button } from "react-bootstrap";
import LogItem from "./logitem";
import TypeButtons from "./typebutton";
import AddLogModal from "./addlogmodal";
import EditLogModal from "./editlogitem";
import axios from "axios";
import backendurl from "../config/config";
import Cookies from "js-cookie";
import deleteLog from "./deletelogitem";

const Log = () => {
  const getInitialLogType = () => {
    return Cookies.get("logType") || "Studying";
  };

  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [logType, setLogType] = useState(getInitialLogType());
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentLog, setCurrentLog] = useState(null);

  const sortAndFilterLogs = useCallback((newLogs) => {
    // First, sort by pin status (pinned first), then by date (most recent first)
    const sortedLogs = newLogs.sort((a, b) => {
      // Compare by pin status
      if (b.pin && !a.pin) return 1;
      if (a.pin && !b.pin) return -1;
  
      // If pin status is the same, compare by date
      return new Date(b.date) - new Date(a.date);
    });
  
    setFilteredLogs(
      logType ? sortedLogs.filter((log) => log.type === logType) : sortedLogs
    );
  }, [logType]); // Dependency array includes logType
  
  const fetchLogs = useCallback(async () => {
    try {
      const response = await axios.get(`${backendurl}/log`);
      setLogs(response.data);
      sortAndFilterLogs(response.data);
    } catch (error) {
      console.error("Error fetching logs:", error);
    }
  }, [sortAndFilterLogs]);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  useEffect(() => {
    sortAndFilterLogs(logs);
  }, [logType, logs, sortAndFilterLogs]);

  const handleDeleteLog = async (id) => {
    await deleteLog(id, logs, setLogs);
  };

  const editLog = (log) => {
    setCurrentLog(log);
    setShowEditModal(true);
  };

  const updateLog = (updatedLog) => {
    const updatedLogs = logs.map((log) =>
      log._id === updatedLog._id ? updatedLog : log
    );
    sortAndFilterLogs(updatedLogs);
  };

  const addNewLog = (newLog) => {
    const updatedLogs = [...logs, newLog];
    sortAndFilterLogs(updatedLogs);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <Container style={{ maxWidth: "700px", fontFamily: "Open Sans" }}>
      <br />
      <Row className="justify-content-md-center mb-3">
        <Button
          style={{
            backgroundColor: "white",
            color: "black",
            borderColor: "white",
          }}
          onClick={() => setShowAddModal(true)}
        >
          Add New Log
        </Button>
      </Row>

      <Row className="justify-content-md-center mb-3">
        <TypeButtons setLogType={setLogType} />
      </Row>
      <br />

      {filteredLogs.map((log) => (
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
