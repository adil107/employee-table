import * as constant from "./constant"


export const addAction = (data) => {
    return {
        type: constant.ADD_DATA,
        payload: { ...data }
    }
}

export const deleteAction = (id) => {
    return {
        type: constant.DELETE_DATA,
        id: id
    }
}

export const updateAction = (data, id) => {
    return {
        type: constant.UPDATE_DATA,
        payload: { data, id }
    }
}

export const editAction = () => {
    return {
        type: constant.EDIT_DATA
    }
}

export const clearAllAction = (data) => {
    return {
        type: constant.CLEAR_ALL_DATA,
        payload: data
    }
}