import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Signup = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({ firstName: "", lastName: "", email: "", password: "" });

    const handleField = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/auth/register', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                navigate("/login");
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
            // bg-[url('../assets/register.jpg')]
        <form method='POST' action='/auth/register' onSubmit={handleSubmit}>
            <div  className="w-full h-screen flex flex-col justify-center items-center">
                <h2 className='md:text-4xl text-3xl mb-4 font-light border-b-2 border-gray-400 '>Sign Up</h2>
                <div className="w-[20rem] md:w-[30rem] flex">
                    <input required placeholder='First Name' className=' md:w-1/2 w-1/2 p-2 my-3 rounded-full border border-gray-500 mx-2' name='firstName' onChange={handleField} value={data.firstName} />
                    <input required placeholder='Last Name' className=' md:w-1/2 w-1/2 p-2 my-3 rounded-full border border-gray-500' name='lastName' onChange={handleField} value={data.lastName} />
                </div>
                <input required placeholder='Email' className=' md:w-[30rem] w-[20rem] p-2 my-3 rounded-full border border-gray-500' name='email' onChange={handleField} value={data.email} />
                <input required type="password" placeholder='Password' className='md:w-[30rem] w-[20rem] p-2 my-3 rounded-full border border-gray-500' name='password' onChange={handleField} value={data.password} />
                <div className="mt-6">
                    <button className='md:w-80 w-40 p-2 bg-black text-white rounded-xl hover:opacity-90'>Signup</button>
                </div>
                <div className="mt-6">
                    <p className='font-thin md:text-base text-xs'>Already have an acoount! <Link to={"/login"} className="underline ml-1 text-blue-500">Log In</Link></p>
                </div>
            </div>
        </form>
    )
}

export default Signup
