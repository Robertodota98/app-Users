import React, { useState } from "react";
import {AppContext, useAppContext} from "../context/appContext"

export function Create() {

const {createUser} = useAppContext(AppContext)

   const[name,setName] = useState('')
   const[age,setAge] = useState('')

   const HangleSubmit = (e) => {
    e.preventDefault()
    createUser({id: Date.now(), name, age })
    setName("")
    setAge("")
   }

  return (
    <form onSubmit={HangleSubmit}>
      <div className=" relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mt-6 flex justify-center mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our App.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">You can register at no cost, do it now.</p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label className="sr-only">address</label>
              <input
              value={name}
              onChange={(e) => setName(e.target.value)
              }
                id="name-address"
                name="name"
                type="name"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your name"
              />
              <input
              value={age}
              onChange={(e) => setAge(e.target.value)
              }
                id="Age-address"
                name="edad"
                type="number"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your age"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button> 
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
        </div>
      </dl>
    </div>
  </div>
</div>
    </form>
  );
}