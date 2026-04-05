import React from 'react';
import { FaCircle } from 'react-icons/fa';
import './StatusIndicator.css';

interface StatusIndicatorProps {
  status: 'online' | 'developing' | 'away';
  message: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, message }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'online': return '#10b981';
      case 'developing': return '#3b82f6';
      case 'away': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <div className="status-indicator">
      <FaCircle 
        className={`status-icon ${status}`} 
        style={{ color: getStatusColor() }}
      />
      <span className="status-message">{message}</span>
    </div>
  );
};

export default StatusIndicator;