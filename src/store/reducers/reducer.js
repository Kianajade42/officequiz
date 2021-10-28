import { fetchSuccess, fetchRequest, fetchQuestions} from "../actions/action"
import useData from "../selectors/selector"

const quizReducer = (state = {}, action) => {

    switch (action.type){

        case fetchRequest:
             return state

        case fetchSuccess:
        
        return {...state, data:action.payload}


        default:
        return state
            
    }
    
}

   
export default quizReducer;
