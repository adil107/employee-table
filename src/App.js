import React from 'react'
import Routing from './components/Routing'
import { NotificationContainer } from "react-notifications"
import 'react-notifications/lib/notifications.css';
function App() {
    return (
        <div style={{ width: '100%', padding: '0 20px' }}>
            <Routing />
            <NotificationContainer />
        </div >
    )
}

export default App
