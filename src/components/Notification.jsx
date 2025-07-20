import React, { useContext, useEffect, useState } from 'react';
import { CustomContext } from '../utils/Context';

const Notification = ({  }) => {
    const { notification, setNotification } = useContext(CustomContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setNotification({ active: false });
        }, 4000);

        return () => clearTimeout(timer);
    }, [notification]);

    return (
        <div id='notification' className={`notification ${notification.type} ${notification.active ? 'active' : ''}`}>
            <p className="notification__text">{notification.text}</p>
            <button className="notification__close" onClick={() => setNotification({ active: false })}>
                &times;
            </button>
        </div>
    );
};

export default Notification;