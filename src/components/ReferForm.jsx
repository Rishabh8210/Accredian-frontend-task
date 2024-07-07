import React from "react";

import { useFormik } from "formik";
import { signUpSchema } from "../schemas/index";

const initialValues = {
    name: "",
    email: "",
    course: "",
    description: "",
};

const ReferForm = ({ trigger, setTrigger }) => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            onSubmit: (values, action) => {
                console.log(
                    "file: Refer.jsx ~ line 11 ~ Registration ~ values",
                    values
                );
                action.resetForm();
            },
        });
    console.log(
        "file: Refer.jsx ~ line 25 ~ Registration ~ errors",
        errors
    );
    return (
        <div className='fixed z-10 top-0 left-0 h-screen w-full px-5 flex flex-col justify-center items-center bg-zinc-800 bg-opacity-50'>
            <div className='min-h-[60vh] max-h-[90vh] w-full bg-white shadow-lg flex flex-col items-center rounded-lg p-5'>
                <div className='h-10 w-full px-2 flex justify-between'>
                    <p className='font-semibold text-4xl border-b-4 border-blue-600'>Refer To !</p>
                    <button className='h-full w-10 text-base bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-bold' onClick={() => setTrigger(!trigger)}>X</button>
                </div>
                <div className="w-full py-7">
                    <form>
                        <div className="flex flex-col py-1 px-2 border-x border-y border-black border-opacity-30 rounded-md transition-all mb-5 focus-within:border-blue-600 focus-within:border-opacity-100">
                            <label htmlFor="name" className="text-[10px] uppercase font-semibold transition-all">
                                Name
                            </label>
                            <input
                                className="px-0 outline-0 pl-2 text-base placeholder:text-black placeholder:opacity: 1"
                                type="name"
                                autoComplete="off"
                                name="name"
                                id="name"
                                placeholder="Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name ? (
                                <p className="text-xs text-red-600">{errors.name}</p>
                            ) : null}
                        </div>
                        <div className="flex flex-col py-1 px-2 border-x border-y border-black border-opacity-30 rounded-md transition-all mb-5 focus-within:border-blue-600 focus-within:border-opacity-100">
                            <label htmlFor="email" className="text-[10px] uppercase font-semibold transition-all">
                                To email
                            </label>
                            <input
                                className="px-0 outline-0 pl-2 text-base placeholder:text-black placeholder:opacity: 1"
                                type="email"
                                autoComplete="off"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email ? (
                                <p className="text-xs text-red-600">{errors.email}</p>
                            ) : null}
                        </div>
                        <div className="flex flex-col py-1 px-2 border-x border-y border-black border-opacity-30 rounded-md transition-all mb-5 focus-within:border-blue-600 focus-within:border-opacity-100">
                            <label htmlFor="course" className="text-[10px] uppercase font-semibold transition-all">
                                Course
                            </label>
                            <input
                                className="px-0 outline-0 pl-2 text-base placeholder:text-black placeholder:opacity: 1"
                                type="text"
                                autoComplete="off"
                                name="course"
                                id="course"
                                placeholder="Course"
                                value={values.course}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.course && touched.course ? (
                                 <p className="text-xs text-red-600">{errors.course}</p>
                            ) : null}
                        </div>
                        <div className="flex flex-col py-1 px-2 border-x border-y border-black border-opacity-30 rounded-md transition-all mb-5 focus-within:border-blue-600 focus-within:border-opacity-100">
                            <label htmlFor="description" className="text-[10px] uppercase font-semibold transition-all">
                                Description
                            </label>
                            <input
                                className="px-0 outline-0 pl-2 text-base placeholder:text-black placeholder:opacity: 1"
                                type="text"
                                autoComplete="off"
                                name="description"
                                id="description"
                                placeholder="Description"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.description && touched.description ? (
                                 <p className="text-xs text-red-600">{errors.description}</p>
                            ) : null}
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <button className="py-3 px-4 outline-0 uppercase border-0 rounded-md text-white bg-blue-600 hover:bg-blue-800 transition-all" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ReferForm;