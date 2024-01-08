import React from 'react'
import { clearALLUsers } from '../../../store/slices/Userslice'
import { useDispatch } from 'react-redux'
const DeleteAllUser = () => {
    let dispatch = useDispatch()
    let DeleteUsers =()=>{
        dispatch(clearALLUsers())
    }
  return (
    <div>
       <button onClick={DeleteUsers} style={{marginTop:'2rem' ,textTransform:'capitalize',backgroundColor:"#db338a"}}>DeleteAllUser</button>
    </div>
  )
}

export default DeleteAllUser