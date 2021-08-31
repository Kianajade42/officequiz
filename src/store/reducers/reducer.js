import { fetchSuccess, fetchRequest, fetchQuestions} from "../actions/action"
import useData from "../selectors/selector"



// export default function 
const quizReducer = (state = {}, action) => {

    switch (action.type){

        case fetchRequest:
             return state

        case fetchSuccess:
           
        return {...state, data:action.payload}

        //    return Object.assign({}, state, {
        //   questionBank: console.log(action.payload)
        // });  
        //  console.log(action.payload)
        //  return action.payload

              //questionBank: action.questionBank
        
         // action.payload
            //return {...state, questionBank: action.payload}
        default:
        return state
            
    }
}


export default quizReducer;