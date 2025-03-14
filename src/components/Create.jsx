import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/userDetailsSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const[users,setUsers]=useState({})
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const getUserData=(e)=>{
        setUsers({
            ...users,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(users)
        dispatch(createUser(users))
        navigate('/read');
    }

    return (
        <div>
          <form className="w-100 m-5" onSubmit={handleSubmit}>
            <div class="mb-3 ">
              <label class="form-label">Name</label>
              <input
                type="text"
                name="name"
                class="form-control"
                required
                onChange={getUserData}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                name="email"
                class="form-control"
                onChange={getUserData}
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Age</label>
              <input
                type="text"
                name="age"
                class="form-control"
                onChange={getUserData}
                required
              />
            </div>
            <div class="mb-3">
              <input
                class="form-check-input"
                name="gender"
                value="Male"
                type="radio"
                onChange={getUserData}
                required
              />
              <label class="form-check-label">Male</label>
            </div>
            <div class="mb-3">
              <input
                class="form-check-input"
                name="gender"
                value="Female"
                onChange={getUserData}
                type="radio"
              />
              <label class="form-check-label">Female</label>
            </div>
    
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      );
}

export default Create
