import React from 'react'
import Routing from './components/Routing'
import { NotificationContainer } from "react-notifications"
import 'react-notifications/lib/notifications.css';
function App() {
    return (
        <div>
            <Routing />
            <NotificationContainer />
        </div >
    )
}

export default App
