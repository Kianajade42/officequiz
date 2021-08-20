
export default function quizReducer(state = {questionBank: []}, action) {
    switch (action.type){

        case "GOT_QUIZ":
            return {...state, questionBank: action.payload}

        default:
            return state
    }
}