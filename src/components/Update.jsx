import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from '../features/userDetailsSlice';
const Update = () => {
    const {id}=useParams();
    const allusers = useSelector((state) => state.userDetails.users);
    const singleUser = allusers.find((ele) => ele.id === id);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const[formData,setFormData]=useState({
        name: "",
        email: "",
        age: "",
        gender: "",
    })

    useEffect(()=>{
        setFormData({
            name:singleUser.name||"",
            email:singleUser.email||"",
            age:singleUser.age||"",
            gender:singleUser.gender||""
        })
    },[])
    const handleOnChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await dispatch(editUser({id,updatedData:formData})).unwrap();
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
                value={formData.name}
                onChange={handleOnChange}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                name="email"
                class="form-control"
                value={formData.email}
                onChange={handleOnChange}
                
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Age</label>
              <input
                type="text"
                name="age"
                class="form-control"
                value={formData.age}
                onChange={handleOnChange}
                
              />
            </div>
            <div class="mb-3">
              <input
                class="form-check-input"
                name="gender"
                value="Male"
                type="radio"
                checked={formData.gender === "Male"}
                onChange={handleOnChange}
                
              />
              <label class="form-check-label">Male</label>
            </div>
            <div class="mb-3">
              <input
                class="form-check-input"
                name="gender"
                value="Female"
                onChange={handleOnChange}
                checked={formData.gender === "Female"}
                type="radio"
              />
              <label class="form-check-label">Female</label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
  )
}

export default Update
