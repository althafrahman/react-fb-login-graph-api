import { DEFAULT_ACTION } from "./actionType";
const initState = {
    name: "",
    photo: "",
    email: "",
    userId: "",
    shortAccessToken : ""
}

const reducers = (state = initState, action) => {
    switch (action.type) {
        case DEFAULT_ACTION:
            return {
                ...state, 
                name : action.payload.name,
                photo : action.payload.picture,
                userId : action.payload.userID,
                email : action.payload.email,
                shortAccessToken : action.payload.accessToken,
          
            }
        default:
            return state
    }
}

export default reducers