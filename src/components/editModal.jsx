import { Fragment, useEffect, useState, } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AppContext, useAppContext } from '../context/appContext'

export default function EditModal({open,  handelClose, setOpen, rowData}) {

const {updateUser} = useAppContext(AppContext)
  
const [formData, setFromData] = useState({
  id: "",
  name: "",
  age: ""
})

const handelSubmit = (e) => {
  e.preventDefault()
  updateUser(formData)
  setOpen(false)
}

const hangleOnChange = (key, value) => {
  setFromData({
    ...formData,
    [key]: value
  })
}

useEffect(()=>{
  setFromData(rowData)
},[rowData])

  const{name, age} = rowData
 
  return (
   <>
   
    <Transition.Root show={open} as={Fragment}>
        
      <Dialog as="div" className="relative z-10" initialFocus={handelClose} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900 text-center">
                        Update User
                      </Dialog.Title>
                      <div className="mt-2">
                       <form className='m-3'>
                       <input
                       defaultValue={name}
                       onChange={ e => hangleOnChange('name', e.target.value)}
                type="text"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 ring-slate-300"
                placeholder="Enter your name"
              />
            
              <input 
              defaultValue={age}
              onChange={ e => hangleOnChange('age', e.target.value)}
                type="number"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 ring-slate-300"
                placeholder="Enter your age"
              />
             
                       </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-center">
                 
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={handelClose}
                  >
                    Cancel
                  </button>
                  <button
                    onClick = {handelSubmit}
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                  >
                    Update
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  )
}
