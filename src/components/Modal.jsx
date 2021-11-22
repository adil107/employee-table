import React from 'react'
import { Modal, Button } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { deleteAction } from '../redux/employData/action'
export const DeleteModal = ({ handleClose, deleteModal, deleteID, clearAllFn, slectedDelete }) => {

    const dispatch = useDispatch()
    return (
        <>
            <Modal show={deleteModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Employ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> Are you sure you want to delete!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {slectedDelete ?
                        <Button variant="danger" onClick={() => {
                            clearAllFn()
                            handleClose()
                        }}>
                            Delete All
                        </Button>
                        :

                        <Button variant="danger" onClick={() => {
                            handleClose()
                            dispatch(deleteAction(deleteID))
                        }}>
                            Delete
                        </Button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}



