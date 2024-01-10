// DeleteLogItem.js
import axios from 'axios';
import backendurl from "../config/config";

const deleteLog = async (id, logs, setLogs) => {
  if (window.confirm("Are you sure you want to delete this log?")) {
    try {
      await axios.delete(`${backendurl}/log/${id}`);
      const updatedLogs = logs.filter((log) => log._id !== id);
      setLogs(updatedLogs);
      window.location.reload(); // Refresh the page after adding a log
    } catch (error) {
      console.error("Error deleting log:", error);
    }
  }
};

export default deleteLog;
