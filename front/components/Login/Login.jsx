import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5500/login',formData)
        .then((Response) => {
            if (Response.data == "0") {
                navigate('/');
            }
            if (Response.data != "0") {
                const id = Response.data._id;
                navigate(`/dashboard/${id}`);
            }
        })
    };
    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Username:</label>
                <input
                    type="text"
                    placeholder="Enter Your Username"
                    id="name"
                    name="name"
                    value={formData.username}
                    onChange={handleChange}
                /><br /><br />
                <label htmlFor="password">Password:</label>
                <input
                    className='emailinput'
                    type="password"
                    placeholder="Enter Your Password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                /><br /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
