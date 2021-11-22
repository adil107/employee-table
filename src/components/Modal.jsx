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

// export const EditEmployModal = ({ handleClose, editModal }) => {
//     return (
//         <>
//             <Modal show={editModal} onHide={handleClose} size="lg">
//                 <Modal.Header closeButton>
//                     <Modal.Title>Update Employ</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <form>
//                         <div className="row form-group">
//                             <div className="col-md-6">
//                                 <label htmlFor="name">Name</label>
//                                 <input type="text" name="name" id="name" className="form-control shadow-none" />
//                             </div>
//                             <div className="col-md-6">
//                                 <label htmlFor="age">Age</label>
//                                 <input type="number" name="age" id="age" className="form-control shadow-none" />
//                             </div>
//                         </div>

//                         <div className="row form-group">
//                             <div className="col-md-6">
//                                 <label htmlFor="stime">Start Time</label>
//                                 <input type="time" name="stime" id="stime" className="form-control shadow-none" />
//                             </div>
//                             <div className="col-md-6">
//                                 <label htmlFor="etime">End Time</label>
//                                 <input type="time" name="etime" id="etime" className="form-control shadow-none" />
//                             </div>
//                         </div>
//                         <div className="row form-group">
//                             <div className="col-md-6">
//                                 <label htmlFor="salary">Salary</label>
//                                 <input type="number" name="salary" id="salary" className="form-control shadow-none" />
//                             </div>
//                             <div className="col-md-6">
//                                 <label htmlFor="hours">No. of hours</label>
//                                 <input type="number" name="hours" id="hours" className="form-control shadow-none" />
//                             </div>
//                         </div>

//                         <div className="text-right">
//                             <Button variant="secondary" onClick={handleClose}>
//                                 Close
//                             </Button>
//                             <Button variant="info" type="submit">
//                                 Update
//                             </Button>
//                         </div>
//                     </form>
//                 </Modal.Body>

//             </Modal>
//         </>
//     )
// }

// export const AddEmployModal = ({ addEmployModal, handleClose }) => {
//     return (
//         <>
//             <Modal show={addEmployModal} onHide={handleClose} size="lg">
//                 <Modal.Header closeButton>
//                     <Modal.Title>Add Employ</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>

//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="info" onClick={handleClose}>
//                         Add
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// }


