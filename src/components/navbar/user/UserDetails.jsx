
import DeleteAllUser from "./DeleteAllUser";
import './UserDetails.css'
import { fakeUserData } from "../../../../api/Index";
import { useDispatch } from 'react-redux';
import { addUser } from "../../../store/slices/Userslice";
import DisplayUsers from '../../DisplayUsers'




const UserDetails = () => {

    const dispatch = useDispatch()
   
    const addNewUser = (payload)=>{
       console.log(payload) 
       dispatch(addUser(payload))
       
    }
  return (
    <>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">list of Users</div>
          <button onClick={()=>addNewUser(fakeUserData())} className="btn add-btn">Add New Users</button>
        </div>
        <ul>
           <DisplayUsers/>
        </ul>
        <hr/>
        <DeleteAllUser/>
      </div>
    </>
  );
};

export default UserDetails;
