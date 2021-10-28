
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

// export function fetchQuestions(data) {
//  console.log("c")
//     return () => {
//         fetch("http://www.officeapi.dev/api/quotes")
//         .then(response=> response.json())
//         .then(data => console.log(data) ) 
//         } 
//         console.log(data)
        
//     }
 
// export function fetchQuestions() {
//    console.log("c")
//     return () => {
//          fetch("http://www.officeapi.dev/api/quotes", {
//             method: "GET",
//             headers: {}
//           })
//         .then(r=> r.json())
//         .then(data => console.log(data)
            
            
            
//         )
    
//     }
    
// }

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
  { method:"POST",
headers:{ "Content-Type":"application/json",
          "Accept":"application/json"
},body:JSON.stringify( {
    highscore: " ",
    name: " "
})
})
]).then(function (responses) {
	//  JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(data => {
   dispatch({ type: fetchSuccess, payload: data })
	console.log(data);
}).catch(function (error) {
	console.log(error);
})}};