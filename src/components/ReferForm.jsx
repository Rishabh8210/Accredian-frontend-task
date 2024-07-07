import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { referFormSchema } from "../schemas/referForm";

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
            validationSchema: referFormSchema,
            onSubmit: (values, action) => {
                // console.log(
                //     "file: Refer.jsx ~ line 11 ~ Registration ~ values",
                //     values
                // );
                action.resetForm();
            },
        });
    // console.log(
    //     "file: Refer.jsx ~ line 25 ~ Registration ~ errors",
    //     errors
    // );
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await axios.get('http://localhost:3000/api/v1/user/profile', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    console.log('User data:', response.data);
                    setUserData(response?.data?.data)
                    // setUserData(response.data); // Set user data in state
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    // Handle error cases or display error message to user
                }
            }
        };

        fetchUserData(); // Call fetchUserData function on component mount
    }, []);
    const handleForm = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
            if (token) {
                try {
                    const data = {emailTo: values.email, course: values.course, description: values.description}
                    const response = await axios.post('http://localhost:3000/api/v1/user/mail', data, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    console.log(response)
                    if(response.status === 200){
                        alert("Mail sended successfully")
                        setTrigger(false)
                        console.log(response.data);
                    }
                    
                } catch (error) {
                    console.error('Error sending mail', error);
                }
            }

    } 
    return (
        <div className='fixed z-20 top-0 left-0 h-screen w-full px-5 flex flex-col justify-center items-center bg-zinc-800 bg-opacity-50'>
            <div className='min-h-[60vh] max-h-[90vh] w-full bg-white shadow-lg flex flex-col items-center rounded-lg p-5'>
                <div className='h-10 w-full px-2 flex justify-between'>
                    <p className='font-semibold text-4xl border-b-4 border-blue-600'>Refer To !</p>
                    <button className='h-full w-10 text-base bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-bold' onClick={() => setTrigger(!trigger)}>X</button>
                </div>

                {!userData ? <p className="py-10 text-3xl ">Please sign in before refering</p> : (
                    <div className="w-full py-7">
                        <form onSubmit={(event) => handleForm(event)}>
                            <div className="flex flex-col py-1 px-2 border-x border-y border-black border-opacity-30 rounded-md transition-all mb-5 focus-within:border-blue-600 focus-within:border-opacity-100">
                                <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-widest">
                                    Name
                                </label>
                                <input
                                    className="px-0 outline-0 pl-2 text-base placeholder:text-black placeholder:text-opacity-50 focus-within:outline-none"
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
                                <label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest">
                                    To email
                                </label>
                                <input
                                    className="px-0 outline-0 pl-2 text-base placeholder:text-black placeholder:text-opacity-50 focus-within:outline-none"
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
                                <label htmlFor="course" className="text-[10px] uppercase font-bold tracking-widest">
                                    Course
                                </label>
                                <input
                                    className="px-0 outline-0 pl-2 text-base placeholder:text-black placeholder:text-opacity-50 focus-within:outline-none"
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
                                <label htmlFor="description" className="text-[10px] uppercase font-bold tracking-widest">
                                    Description
                                </label>
                                <input
                                    className="px-0 outline-0 pl-2 text-base placeholder:text-black placeholder:text-opacity-50 focus-within:outline-none"
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
                        )}
                </div>
        </div>
    )
};

export default ReferForm;