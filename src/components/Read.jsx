import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser, showuser } from '../features/userDetailsSlice';
import CustomModal from './CustomModal';
import { Link } from 'react-router-dom';
// import Update from './Update';

const Read = () => {
  const dispatch=useDispatch();
  const [id,setId]=useState();
  const[showPopup,setShowPopup]=useState(false);
  // const[showEditPage,setShowEditPage]=useState(false);
  const {users,loading}=useSelector((state)=>state.userDetails);
  // console.log(users)
  useEffect(()=>{
    dispatch(showuser())
  },[])
  if(loading){
    return <div>
      ...Loading
    </div>
  }
  return (
    <>
    {/* {showEditPage && <Update/>} */}
    {showPopup && <CustomModal id={id} setShowPopup={setShowPopup}/>}
    {
      users && 
      users.map((ele)=>(
        <div key={ele.id} className="card my-5">
          <div className="card-body">
            <h5 className="card-title">{ele.name}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>{ele.email}</h6>
            <p className='card-text'>{ele.gender}</p>
            <button href='#' className='card-link' onClick={()=>{
              [setId(ele.id)],[setShowPopup(true)]
            }}>View</button>
            <Link to={`/edit/${ele.id}`} href='#' className='card-link'>Edit</Link>
            <Link onClick={()=>{
              dispatch(deleteUser(ele.id))
            }} href='#' className='card-link'>Delete</Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default Read
