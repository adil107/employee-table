import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addAction } from '../redux/employData/action';
import { useHistory } from 'react-router';

const ValidateScheme = Yup.object({
    name: Yup.string()
        .min(3, 'Too Short!')
        .required('Required'),

    age: Yup.string()
        .required('Required'),

    stime: Yup.string()
        .required("Required"),
    etime: Yup.string()
        .required("Required"),
    salary: Yup.string().required("Requried")
});

function AddNewEmploy() {

    const dispatch = useDispatch()
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            name: "m Adil",
            age: "22",
            stime: "13:00",
            etime: "17:00",
            salary: "20000",
        },
        onSubmit: ((value) => {
            let ehour = value.etime.split(":")[0]
            let emin = value.etime.split(":")[1]
            let shour = value.stime.split(":")[0]
            let smin = value.stime.split(":")[1]
            let finalHour = Number(ehour) - Number(shour)
            let finalMin
            if (emin < smin) {
                finalMin = Number(smin) - Number(emin)
            } else {
                finalMin = Number(emin) - Number(smin)
            }
            if (finalMin < 10) finalMin = `0${finalMin}`
            if (finalHour < 10) { finalHour = `0${finalHour}` }
            let hours = `${finalHour}:${finalMin}`

            dispatch(addAction({ ...value, hours, id: Math.random().toLocaleString() }))
            history.push('/')

        }),

        validationSchema: ValidateScheme

    })

    return (
        <div className="w-75 mx-auto mt-5 p-3 shadow rounded p-4">
            <div className="mb-4 d-flex justify-content-between">
                <h1>Add Employ</h1>
            </div>

            <form onSubmit={formik.handleSubmit} >
                <div className="row form-group">
                    <div className="col-md-6">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text" name="name" id="name"
                            className="form-control shadow-none text-capitalize"
                            autoComplete="off"
                            {...formik.getFieldProps("name")}
                        />
                        {formik.errors.name && formik.touched.name ? <div className="errordiv text-danger m-0">{formik.errors.name}</div> : null}

                    </div>
                    <div className="col-md-6">
                        <label htmlFor="age">Age</label>
                        <input
                            type="number" name="age" id="age"
                            className="form-control shadow-none"
                            {...formik.getFieldProps("age")}
                        />
                        {formik.errors.age && formik.touched.age ? <div className="errordiv text-danger m-0">{formik.errors.age}</div> : null}
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-md-6">
                        <label htmlFor="stime">Start Time</label>
                        <input
                            type="time" name="stime" id="stime"
                            className="form-control shadow-none"
                            {...formik.getFieldProps("stime")}
                        />
                        {formik.errors.stime && formik.touched.stime ? <div className="errordiv text-danger m-0">{formik.errors.stime}</div> : null}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="etime">End Time</label>
                        <input
                            type="time" name="etime" id="etime"
                            className="form-control shadow-none"
                            {...formik.getFieldProps("etime")}
                        />
                        {formik.errors.etime && formik.touched.etime ? <div className="errordiv text-danger m-0">{formik.errors.etime}</div> : null}
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label htmlFor="salary">Salary</label>
                        <input
                            type="number" name="salary" id="salary"
                            className="form-control shadow-none"
                            {...formik.getFieldProps("salary")}
                        />
                        {formik.errors.salary && formik.touched.salary ? <div className="errordiv text-danger m-0">{formik.errors.salary}</div> : null}
                    </div>
                </div>

                <div className="text-right">

                    <button type="submit" className="btn btn-info px-3 py-2">
                        Add Employ
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddNewEmploy
