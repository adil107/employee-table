import React from 'react'
import { Switch, Route } from "react-router-dom"
import AddNewEmploy from './AddNewEmploy'
import EditEmploy from './EditEmploy'
import Empoloy from './EmploysList'
function Routing() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={() => <Empoloy />} />
                <Route path="/add-employ" component={() => <AddNewEmploy />} />
                <Route path="/edit-employ/:id" component={() => <EditEmploy />} />
            </Switch>
        </>
    )
}

export default Routing
