import React, { useState } from 'react'
import back from "../assets/back.jpeg"


function Login() {
    const [page, toggle] = useState('login')
    const [registeruser, setRegisterUser] = useState({
        name: "",
        username: "",
        password: ""
    })

    const togglepage = () => {
        page === 'register' ? toggle('login') : toggle('register')
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:9000/signup', registeruser, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })

        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error)
        }
        setRegisterUser({
            name: "",
            username: "",
            password: "",
        })
        toggle('login')
    }

    return (
        <div className='relative flex items-center h-screen m-0 bg-repeat'>
            <div className=''>
                <img src="https://st3.depositphotos.com/3591429/13269/i/450/depositphotos_132694218-stock-photo-woman-writing-notes-in-diary.jpg" className='h-screen w-[60vw]' />
            </div>
            {
                page === 'login' ?
                    <div>
                        <div className='bg-gray-300 w-[40vw] h-screen items-center relative z-30 flex flex-col content-center justify-center text-black bg-no-repeat border shadow-lg p-14 gap-9 '>
                            <div className='h-14'>
                                <h1 className='text-5xl font-bold text-center'>
                                    Sign In
                                </h1>
                            </div>
                            <div>
                                <form action="" className='flex flex-col gap-5'>
                                    <div className='flex justify-around gap-11'>
                                        <label className="flex items-center gap-2 bg-white input input-bordered w-96">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                className="w-4 h-4 opacity-70">
                                                <path
                                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                            </svg>
                                            <input type="text" className="grow" placeholder="Username" />
                                        </label>
                                    </div>
                                    <div className='flex justify-around gap-11'>
                                        <label className="flex items-center gap-2 bg-white input input-bordered w-96">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                className="w-4 h-4 opacity-70">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <input type="password" className="grow" placeholder="Password" />
                                        </label>
                                    </div>

                                    <div className='text-center underline cursor-pointer' onClick={() => togglepage()}>
                                        Don't have an account? Signup
                                    </div>
                                    <div className='flex justify-center'>
                                        <button type="submit" className="text-white btn btn-success">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className='bg-gray-300 w-[40vw] h-screen items-center relative z-30 flex flex-col content-center justify-center text-black bg-no-repeat border shadow-lg p-14 gap-9 '>
                            <div className='h-14'>
                                <h1 className='text-5xl font-bold text-center'>
                                    Sign Up
                                </h1>
                            </div>
                            <div>
                                <form action="" onSubmit={SignupSubmitHandler} className='flex flex-col gap-5'>
                                    <div className='flex justify-around gap-11'>
                                        <label className="flex items-center gap-2 bg-white input input-bordered w-96">
                                            <input type="text" className="grow" placeholder="Enter Full Name" onChange={(e) => setUser({ ...registeruser, name: e.target.value })} />
                                        </label>
                                    </div>
                                    <div className='flex justify-around gap-11'>
                                        <label className="flex items-center gap-2 bg-white input input-bordered w-96">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                className="w-4 h-4 opacity-70">
                                                <path
                                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                            </svg>
                                            <input type="text" className="grow" placeholder="Username " onChange={(e) => setUser({ ...registeruser, username: e.target.value })} />
                                        </label>
                                    </div>
                                    <div className='flex justify-around gap-11'>
                                        <label className="flex items-center gap-2 bg-white input input-bordered w-96">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                className="w-4 h-4 opacity-70">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <input type="password" className="grow" placeholder="Create a Password" onChange={(e) => setUser({ ...registeruser, password: e.target.value })} />
                                        </label>
                                    </div>

                                    <div className='text-center underline cursor-pointer' onClick={() => togglepage()}>
                                        Already have an Account? Sign in
                                    </div>
                                    <div className='flex justify-center'>
                                        <button type="submit" className="text-white btn btn-success">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Login

