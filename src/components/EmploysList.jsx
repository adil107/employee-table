import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { clearAllAction } from '../redux/employData/action';
import { DeleteModal } from './Modal';
function Empoloy() {
    //Begin for Modal
    const [deleteModal, setDeleteModal] = useState(false)
    const [slectedDelete, setSelectedDelete] = useState(false)
    //End for Modal

    const [deleteID, setDeleteID] = useState(null)
    const [checkedId, setCheckID] = useState([])

    const { data } = useSelector(state => state.employ)
    const dispatch = useDispatch()

    const handleClose = () => {
        setDeleteModal(false)
    }

    const handleChange = (e) => {
        let checked = e.target.checked
        if (checked) {
            setCheckID([...checkedId, e.target.id]);
        } else {
            let temp = [...checkedId];
            temp.splice(temp.length - 1);
            setCheckID([...temp]);
        }
    }

    const clearAllFn = () => {
        dispatch(clearAllAction([...checkedId]))
        setCheckID([]);
        setSelectedDelete(false)
    }
    return (
        <div className="mx-5 mt-5  shadow px-4 py-4 rounded">
            <div className="mb-4 d-flex justify-content-between">
                <h1>Employ Data</h1>
                <div className=" d-flex align-items-center ">
                    <NavLink to="/add-employ" className="text-white ">
                        <button className="btn btn-info ">
                            Add Employ
                        </button>
                    </NavLink>
                    {checkedId.length > 0 && <button className="btn btn-danger ml-2 " onClick={() => {
                        setSelectedDelete(true)
                        setDeleteModal(true)
                    }}>Clear All</button>}
                </div>
            </div>
            <table className="table table-striped text-center text-capitalize">
                <thead  >
                    <tr>
                        <th>Select</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                        <th scope="col">Salary</th>
                        <th scope="col">hours</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((ele, ind) => (
                        < tr key={ind}>
                            <td>
                                <input
                                    type="checkbox" name={ele.name} id={ele.id}
                                    className="ml-2" checked={checkedId.find(i => i === ele.id) ? true : false} onChange={handleChange} />
                            </td>
                            <td>{ele?.name}</td>
                            <td>{ele?.age}</td>
                            <td> {ele?.stime}</td>
                            <td> {ele?.etime}</td>
                            <td> {ele?.salary}</td>
                            <td> {ele?.hours}</td>
                            <td className="px-0 m-0">
                                <button className="btn btn-danger" onClick={() => {
                                    setDeleteID(ele.id)
                                    setDeleteModal(true)
                                    setSelectedDelete(false)
                                }}>
                                    Delete
                                </button>
                                <NavLink to={`/edit-employ/${ele.id}`} className=" text-white ">
                                    <button className="btn btn-info ml-2">
                                        Edit
                                    </button>
                                </NavLink>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table >
            {/* Begin  Modal */}
            <DeleteModal
                deleteID={deleteID}
                deleteModal={deleteModal}
                handleClose={handleClose}
                clearAllFn={clearAllFn}
                slectedDelete={slectedDelete}

            />
            {/* End  Modal */}

        </div >
    )
}

export default Empoloy

































   // const [deleModal, setDeleteModal] = useState(false);
    // const [editModal, setEditModal] = useState(false)
    // const [addEmployModal, setAddEmployModal] = useState(false)