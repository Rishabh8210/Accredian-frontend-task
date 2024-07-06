import React from "react";

import { useFormik } from "formik";
import { signUpSchema } from "../schemas/index";

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

const Registration = ({ triggerRegistration, setTriggerRegistration }) => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            onSubmit: (values, action) => {
                console.log(
                    "file: Registration.jsx ~ line 11 ~ Registration ~ values",
                    values
                );
                action.resetForm();
            },
        });
    console.log(
        "file: Registration.jsx ~ line 25 ~ Registration ~ errors",
        errors
    );
    return (
        <div className='absolute z-10 top-0 left-0 h-screen w-full px-5 flex flex-col justify-center items-center bg-zinc-800 bg-opacity-50'>
            <div className='min-h-[60vh] max-h-[90vh] w-full bg-white shadow-lg flex flex-col items-center rounded-lg p-5'>
                <div className='h-10 w-full px-2 flex justify-between'>
                    <p className='font-semibold text-4xl border-b-4 border-blue-600'>Welcome !</p>
                    <button className='h-full w-10 text-base bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-bold' onClick={() => setTriggerRegistration(!triggerRegistration)}>X</button>
                </div>
                <div className="w-full py-7">
                    <form>
                        <div className="flex flex-col py-1 px-2 border-x border-y border-black border-opacity-50 rounded-md transition-all mb-5 focus-within:border-blue-600 focus-within:border-opacity-100">
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
                        <div className="flex flex-col py-1 px-2 border-x border-y border-black border-opacity-50 rounded-md transition-all mb-5 focus-within:border-blue-600 focus-within:border-opacity-100">
                            <label htmlFor="email" className="text-[10px] uppercase font-semibold transition-all">
                                Email
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
                        <div className="flex flex-col py-1 px-2 border-x border-y border-black border-opacity-50 rounded-md transition-all mb-5 focus-within:border-blue-600 focus-within:border-opacity-100">
                            <label htmlFor="password" className="text-[10px] uppercase font-semibold transition-all">
                                Password
                            </label>
                            <input
                                className="px-0 outline-0 pl-2 text-base placeholder:text-black placeholder:opacity: 1"
                                type="password"
                                autoComplete="off"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && touched.password ? (
                                 <p className="text-xs text-red-600">{errors.password}</p>
                            ) : null}
                        </div>
                        <div className="flex flex-col py-1 px-2 border-x border-y border-black border-opacity-50 rounded-md transition-all mb-5 focus-within:border-blue-600 focus-within:border-opacity-100">
                            <label htmlFor="confirm_password" className="text-[10px] uppercase font-semibold transition-all">
                                Confirm Password
                            </label>
                            <input
                                className="px-0 outline-0 pl-2 text-base placeholder:text-black placeholder:opacity: 1"
                                type="password"
                                autoComplete="off"
                                name="confirm_password"
                                id="confirm_password"
                                placeholder="Confirm Password"
                                value={values.confirm_password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.confirm_password && touched.confirm_password ? (
                                 <p className="text-xs text-red-600">{errors.confirm_password}</p>
                            ) : null}
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <a href="#" className="border-b-2 border-blue-500">
                                Want to register using Gmail?
                            </a>
                            <button className="py-3 px-4 outline-0 uppercase border-0 rounded-md text-white bg-blue-600 hover:bg-blue-800 transition-all" type="submit">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

// .modal-buttons {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
//   .modal-buttons a {
//     color: rgba(51, 51, 51, 0.6);
//     font-size: 14px;
//   }

export default Registration;

// .input-button {
//     padding: 1.2rem 3.2rem;
//     outline: none;
//     text-transform: uppercase;
//     border: 0;
//     color: #fff;
//     border-radius: 4px;
//     background: #8c7569;
//     transition: 0.3s;
//     cursor: pointer;
//     font-family: "Nunito", sans-serif;
//   }


//   .input-button:hover {
//     background: #55311c;
//   }

//   .input-label {
//     font-size: 11px;
//     text-transform: uppercase;
//     font-weight: 600;
//     letter-spacing: 0.7px;
//     color: #8c7569;
//     transition: 0.3s;
//   }

//   .input-block {
//     display: flex;
//     flex-direction: column;
//     padding: 10px 10px 8px;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     margin-bottom: 20px;
//     transition: 0.3s;
//   }
//   .input-block input {
//     outline: 0;
//     border: 0;
//     padding: 4px 0 0;
//     font-size: 14px;
//   }

//   .input-block input::-moz-placeholder {
//     color: #ccc;
//     opacity: 1;
//   }
//   .input-block input:-ms-input-placeholder {
//     color: #ccc;
//     opacity: 1;
//   }
//   .input-block input::placeholder {
//     color: #ccc;
//     opacity: 1;
//   }
//   .input-block:focus-within {
//     border-color: #8c7569;
//   }
//   .input-block:focus-within .input-label {
//     color: rgba(140, 117, 105, 0.8);
//   }