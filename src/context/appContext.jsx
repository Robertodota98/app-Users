import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import { CREATE, DELETE, UPDATE } from "./actions";
reducer

export const AppContext = createContext()

export const initialState = {
 user: [
  {id: 1, name: "Roberto Daniel", age: 25}
]}

export const AppProvider = ({children}) =>{

// reducer ( 1 )

const [state, dispatch] = useReducer(reducer, initialState)

const createUser = (user) => dispatch({type: CREATE, payload: user })
const updateUser = (user) => dispatch({type: UPDATE, payload: user })
const deleteUser = (id) => dispatch({type: DELETE, payload: id })


  return (
    <AppContext.Provider value = {{
      users: state.user,
      createUser,
      updateUser,
      deleteUser,
      dispatch
    }}>
     {children}
    </AppContext.Provider>
  )
}
export const useAppContext = () =>{
  return useContext(AppContext)
}
