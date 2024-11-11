import React, { useState } from 'react';
import './App.css';
import notificationsData from './notifications';

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  // Function to clear a single notification
  function clearNotification(id) {
    const filteredNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(filteredNotifications);
  }

  // Function to clear all notifications
  function clearAllNotifications() {
    setNotifications([]);
  }

  return (
    <div className="App">
      <h1>Notifications</h1>
      <p>Total Notifications: {notifications.length}</p>
      <button onClick={clearAllNotifications}>Clear All Notifications</button>
      <div className="notification-list">
        {notifications.map(notification => (
          <div key={notification.id} className="notification-item">
            <p><strong>{notification.name}</strong></p>
            <p>{notification.message}</p>
            <button onClick={() => clearNotification(notification.id)}>Clear</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
