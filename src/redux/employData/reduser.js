
import { createNotification } from "../../common/Notification"
import * as constant from "./constant"


const initState = {
    data: [],
}

export const employDataReduser = (state = initState, action) => {
    const { type, payload, id } = action
    switch (type) {

        case constant.ADD_DATA:
            createNotification("success", "Success", "Successful Add")
            return {
                ...state,
                data: [...state.data, payload]
            }

        case constant.DELETE_DATA:
            const res = state.data.filter((ele) => ele.id !== id)
            createNotification("success", "Success", "Successfully Deleted")
            return {
                ...state,
                data: [...res]
            }

        case constant.UPDATE_DATA:
            createNotification("success", "Success", "Successfully Updated")
            const Res = state.data.filter(ele => ele.id !== payload.id)
            return {
                ...state,
                data: [...Res, payload.data]
            }
        case constant.CLEAR_ALL_DATA:
            createNotification("success", "Success", "Successfully Deleted")
            const newData = state.data.filter(ele => !payload.includes(ele.id))
            return {
                ...state,
                data: [...newData]
            }

        default: return state
    }
}