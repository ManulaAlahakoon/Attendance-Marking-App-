import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {

  const [newUser, setNewUser] = useState(
    {

      registration_id: "",
      name: "",
      city: "",
      phone_number: "",
      more_details: "",
      
    }
  )

  const navigate = useNavigate();

  const handleChange = (e) => {

    setNewUser((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  console.log(newUser)
  
  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/people",newUser)
      navigate("/people")
      
    } catch (error) {
      console.log(error)
    }
  }
  return (

    <div className="registrationForm">
      <h1>Registration</h1>
      <input type="text" placeholder="Enter registration ID" onChange={handleChange} name="registration_id"/>
      <input type="text" placeholder="Name" onChange={handleChange} name="name"/>
      <input type="text" placeholder="City" onChange={handleChange} name="city"/>
      <input type="text" placeholder="Phone number" onChange={handleChange} name="phone_number"/>
      <input type="text" placeholder="Enter other details" onChange={ handleChange} name="more_details" />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Registration