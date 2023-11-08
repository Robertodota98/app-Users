import { CREATE, UPDATE, DELETE } from "./actions"

const reducer = (state, action) =>{
    switch(action.type){
        case CREATE: {
            return  {
                ...state,
                user:[...state.user, action.payload]
            }
            
        }
        case UPDATE: {
            return  {
                ...state,
                user: state.user.map((user) => {
                    return(user.id === action.payload.id) ? action.payload : user
                })
            }
        }
        case DELETE: {
            return  {
                ...state,
                user: state.user.filter( (user) =>{
                    return user.id !== action.payload
                })
            }
        }
    default:
          return state
    }
}

export default reducer