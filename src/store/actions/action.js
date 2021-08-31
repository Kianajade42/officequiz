

//const url = "http://localhost:3000/questions"

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
     //payload url, {method: 'GET'}
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
    // return {
    //     type: fetchSuccess,
    //     payload: [{data: "hi"}]
    // }
}

// export const fetchQuestionsWithRedux = () => {
//     return (dispatch) => {
//     dispatch({type: fetchRequest})
//     fetch(url, {method: 'GET'}).then(response => {
//         return response.json()
//     }).then(responseJSON => {
//         dispatch({type: fetchSuccess, questionBank: responseJSON.text})
//     })
//  }
    // return (dispatch) => {
    //     dispatch(fetchQuestionsRequest())
    //   fetchQuestions()
    //  .then((data) => data.json())
    //  .then((data) => {
    //      dispatch(fetchQuestionsSuccess(data))
    //  })
    // }
//}

 