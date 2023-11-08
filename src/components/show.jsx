import React, {useRef, useState }from "react";
import { AppContext, useAppContext } from "../context/appContext";
import EditModal from "./editModal";

const Show = () => {
  const [open, setOpen] = useState(false)
  const handelClose = useRef(false)
 
  const[rowData, setrowData] = useState({})
 
  const handelShow = (user) => {
   setrowData(user)
    setOpen(true)};
  
 const {users, deleteUser } = useAppContext(AppContext)
 
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our user
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join our group of friends
            </p>
          </div>
          
          
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2" 
          >
     {users.map((user)=>(
            <li key={user.id}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src="https://i.pinimg.com/originals/aa/ba/42/aaba42255add379b48bd99541837277a.jpg"
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                   {user.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {user.age} years
                  </p>
                  <button
                  onClick={() => handelShow(user)}
                    type="submit"
                    className="m-2 py-1 rounded-md bg-indigo-500 px-3.5  text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button onClick={()=>{deleteUser(user.id)}}
                    type="submit"
                    className="py-1 rounded-md bg-indigo-500 px-3.5  text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </div>
              </div>
            </li>
            ))}
          </ul>
           
        </div>
      </div>

     <EditModal open = {open}  handelClose = {handelClose} setOpen = {setOpen} rowData = {rowData}/>
    </>
  );
}

export default Show