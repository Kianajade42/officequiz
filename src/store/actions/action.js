
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


// export function fetchQuestions(){
//   console.log("c")
//     return function(dispatch){
//         return fetch("http://127.0.0.1:3000/questions")
//         .then(response => response.json())
//         .then(data => {
//          dispatch({ type: fetchSuccess, payload: data })
           
// })
//     }
//   }


export function fetchQuestions(){
  console.log("c")
  return function(dispatch){
  Promise.all([
	fetch("http://127.0.0.1:3000/questions"),
	fetch("http://127.0.0.1:3000/scores",
  { method:"GET",
headers:{ "Content-Type":"application/json",
          "Accept":"application/json"
}
})
]).then(function (responses) {

	return Promise.all(responses.map(function (response) {
		return response.json();
    
	}));
}).then(data => {
   dispatch({ type: fetchSuccess, payload: data })
	console.log(data);
}).catch(function (error) {
	console.log(error);
})}};