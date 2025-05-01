import React, { useState } from "react";
import { FaBell } from "react-icons/fa";

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Now available: ",
      url: "https://react-books-base.netlify.app/book/9780767931557",
      read: false,
      title: "The Accidental Billionaires, by Ben Mezrich",
    },
    {
      id: 2,
      message: "A new recommendation for you: ",
      url: "https://react-books-base.netlify.app/book/9780307800985",
      read: false,
      title: "Cosmos, by Carl Sagan",
    },
    {
      id: 3,
      message: "Don't forget to rate: ",
      url: "https://react-books-base.netlify.app/book/9781473663763",
      read: false,
      title: "Camino Island, by John Grisham",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <div className="relative">
      <FaBell
        className="text-white ms-4 cursor-pointer hidden md:block text-xl"
        onClick={toggleNotifications}
      />
      {unreadCount > 0 && (
        <span className="notification-bg absolute top-[-8px] right-[-8px] text-white rounded-full text-xs px-2 py-1">
          {unreadCount}
        </span>
      )}

      {isOpen && (
        <div className="absolute top-[30px] right-0 bg-white text-gray-800 rounded-md shadow-lg overflow-hidden w-64 z-10">
          <h3
            className="p-3 border-b font-semibold"
            style={{ color: "#1f2937" }}
          >
            Notifications
          </h3>
          {notifications.length > 0 ? (
            <ul>
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`p-3 border-b hover:bg-gray-100 ${
                    notification.read ? "bg-gray-50" : ""
                  }`}
                >
                  {/* <p className="text-sm">{notification.message}</p> */}
                  {notification.message}
                  <br />
                  <a
                    href={notification.url}
                    className="text-blue-700 text-xs mt-1 hover:underline hover:text-blue-800"
                  >
                    {notification.title}
                  </a>
                  <br />
                  {!notification.read && (
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={() => markAsRead(notification.id)}
                      className="text-blue-500 text-xs mt-1 hover:underline hover:text-blue-600"
                    >
                      Mark as Read
                    </button>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-3 text-sm text-gray-500">No new notifications.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
