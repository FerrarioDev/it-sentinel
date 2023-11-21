import React, { useState } from 'react';
import axios from 'axios';
import { API_URLS } from '../../constants'
const Register = () => {
    const url = `${API_URLS.USERS}register/`
    const [formData, setFormData] = useState({
        dnarID: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegistration = async () => {
        try { 
            const response = await axios.post(url, formData);
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <h1>Registration</h1>
            <input type='text' name='dnarID' onChange={handleInputChange} />
            <input type='password' name='password' onChange={handleInputChange} />
            <input type='email' name='email' onChange={handleInputChange} />
            <input type='first name' name='first name' onChange={handleInputChange} />
            <input type='last name' name='last name' onChange={handleInputChange} />
            <button onChange={handleRegistration}>Register</button>
        </div>
    )
}

export default Register