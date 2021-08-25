const url = "http://localhost:3000/questions"
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

function fetchQuestionsSuccess(payload) {
  return {
    type: fetchSuccess, 
    payload
  }
}

export function fetchQuestions(){
    return fetch(url, {method: 'GET'})
}

export const fetchQuestionsWithRedux = () => {
    return (dispatch) => {
        dispatch(fetchQuestionsRequest())
     return fetchQuestions()
     .then((response) => response.json())
     .then((response) => {
         dispatch(fetchQuestionsSuccess(response))
     })
    }
}

 