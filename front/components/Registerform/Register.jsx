import React, { useState } from 'react';
import './Register.css'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Register() {
        const navigate = useNavigate();
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
            symptoms: '',
            BloodPressure: '',
            Weight: '',
            Height: '',
            AnyMedicineCurrentTake: '',
            BodyTemperature: '',
            SleepTime: '',
            age:'',
            bloodgroup:'',
            gender:''
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
            axios.post('http://localhost:5500/createaccount',formData)
            .then((Response) => {
                if (Response.data == "0") {
                    navigate('/');
                }
                if (Response.data != "0") {
                    const id = Response.data._id
                    navigate(`/dashboard/${id}`);
                }
            })
        };

        return (
            <div>
                <form className='registerform' onSubmit={handleSubmit}>
                    <h2>Virtual Health Assistant Registration</h2>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        placeholder="Please Enter Your Name"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    /><br /><br />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    /><br /><br />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    /><br /><br />
                    <label htmlFor="symptoms">Symptoms:</label>
                    <input
                        type="text"
                        id="symptoms"
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleChange}
                    /><br /><br />
                    <label htmlFor="BloodPressure">Blood Pressure:</label>
                    <input
                        type="text"
                        id="BloodPressure"
                        name="BloodPressure"
                        value={formData.currentDoctor}
                        onChange={handleChange}
                    /><br /><br />
                    <label htmlFor="Weight">Weight:</label>
                    <input
                        type="text"
                        id="Weight"
                        name="Weight"
                        value={formData.insurance}
                        onChange={handleChange}
                    /><br /><br />
                    <label htmlFor="Height">Height:</label>
                    <input
                        type="text"
                        id="Height"
                        name="Height"
                        value={formData.insurance}
                        onChange={handleChange}
                    /><br /><br />
                    <label htmlFor="AnyMedicineCurrentTake">Any Medicine/Current Take:</label>
                    <input
                        type="text"
                        id="AnyMedicineCurrentTake"
                        name="AnyMedicineCurrentTake"
                        value={formData.insurance}
                        onChange={handleChange}
                    /><br /><br />
                    <label htmlFor="BodyTemperature">Body Temperature:</label>
                    <input
                        type="text"
                        id="BodyTemperature"
                        name="BodyTemperature"
                        value={formData.insurance}
                        onChange={handleChange}
                    /><br /><br />
                    <label htmlFor="SleepTime">Sleep Time(per day):</label>
                    <input
                        type="text"
                        id="SleepTime"
                        name="SleepTime"
                        value={formData.insurance}
                        onChange={handleChange}
                    /><br /><br />
                    <label htmlFor="age">Type your age:</label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        value={formData.insurance}
                        onChange={handleChange}
                    /><br /><br />
                    <label htmlFor="bloodgroup">Blood Group:</label>
                    <input
                        type="text"
                        id="bloodgroup"
                        name="bloodgroup"
                        value={formData.insurance}
                        onChange={handleChange}
                    /><br /><br />
                    <label htmlFor="gender">Your Gender:</label>
                    <input
                        type="text"
                        id="gender"
                        name="gender"
                        value={formData.insurance}
                        onChange={handleChange}
                    /><br /><br />
                    <input type="submit" value="Register" />
                <p className='already'>Already Regisered?
                <Link class="nav-link active options_class" aria-current="page" to="/login">Log In</Link>
                </p>
                </form>
            </div>
        )
    }

export default Register
