const url = "http://localhost:3000/questions"

function fetchQuestionsRequest(){
  return {
    type: "FETCH_REQUEST"
  }
}


// function fetchQuestionsSuccess(payload) {
//   return {
//     type: "FETCH_SUCCESS",
//     payload
//   }
// }

// function fetchQuestionsError() {
//   return {
//     type: "FETCH_ERROR"
//   }
//}

//export const getQuestion = (question) => ({type: "GOT_QUIZ", payload: question})
function fetchQuestions(){
    return fetch(url, {method: 'GET'})
}

export const fetchQuestionsWithRedux = () => {
    return (dispatch) => {
        dispatch(fetchQuestionsRequest())
     return fetchQuestions()
     //.then(response => response.json)
     .then(response => response.json())
    }
}

export const createQuestion = (question) => {
    return () => {
        const configObj = {
            method: 'POST',
            question: JSON.stringify(question)
        }

        fetch(url, configObj)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
        })
    }
}
