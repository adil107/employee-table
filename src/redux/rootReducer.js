import { combineReducers } from "redux"
import { employDataReduser } from "./employData/reduser"

export const rootReducer = combineReducers({
    employ: employDataReduser,
})