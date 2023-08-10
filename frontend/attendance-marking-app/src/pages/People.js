import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const People = () => {

  const [people, setPeople] = useState([])

  useEffect(() => {
    
    const fetchAllPeople = async () => {
      try {
        const res = await axios.get("http://localhost:8800/people")
        setPeople(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchAllPeople();
  },[])
  return (
    <div className="PeopleDetailPage">
      
      <div className="people">
        
        {people.map(person => (

          <div className="person" key={ person.registration_id}>

            <h3>{person.name}</h3>
            <h4>{person.registration_id}</h4>
            <p>{person.city}</p>
            <p>{ person.phone_number}</p>
            <button>Delete</button>
            <button>Update</button>
          </div>
          
        ))} 
        
      </div>
      <button><Link to="/registration">Register</Link></button>
    </div>
    
  )
}

export default People