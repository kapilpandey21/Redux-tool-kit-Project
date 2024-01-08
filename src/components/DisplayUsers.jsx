import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever } from 'react-icons/md'
import { removeUser } from '../store/slices/Userslice'

const DisplayUsers = () => {
    let dispatch = useDispatch()
    let data = useSelector((state)=>{
        return state.users;
    })
    console.log(data)
    let deleteUser=(id)=>{
dispatch(removeUser(id))
    }
  return (
    
data.map((user,id)=>{
    return <li key={id} >
{user}
<button  className=' btn-delete' onClick={()=>deleteUser()}>
    <MdDeleteForever className='delete-icon'/>
</button>
    </li>
})
    
  )
}

export default DisplayUsers