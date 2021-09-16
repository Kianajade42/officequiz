
export const fetchRequest = "FETCH_REQUEST"
export const fetchSuccess = "FETCH_SUCCESS"
export const fetchError = "FETCH_ERROR"

function fetchQuestionsRequest(){
  return {
    type: fetchRequest
  }
}
function fetchQuestionsError() {
  return {
    type: fetchError
  }
}

export function fetchQuestionsSuccess() {
  return {
    type: fetchSuccess, 
    
  }
}

export function fetchQuestions(){
    return function(dispatch){
        return fetch("http://localhost:3000/questions")
        .then(response => response.json())
        .then(json => {
            dispatch({ type: fetchSuccess, payload: json });
        })
    }
   
}



 