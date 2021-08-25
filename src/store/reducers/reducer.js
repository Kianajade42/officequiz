import { fetchSuccess, fetchRequest } from "../actions/action"


export default function quizReducer(state = {}, action) {
    switch (action.type){

        case fetchRequest:
             return state
        case fetchSuccess:
            console.log(action)
            return action.payload
            //{...state, questionBank: action.payload}
        default:
            return state
            
    }
}
