import React from 'react';
import LogItem from './logitem';

const LogList = ({ logs }) => {
  return (
    <>
      {logs.map(log => <LogItem key={log._id} log={log} />)}
    </>
  );
};

export default LogList;
