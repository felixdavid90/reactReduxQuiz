import axios from "axios"
export const getComments = () => {
  return {
    type: 'FETCH_COMMENTS',
    payload: axios("https://jsonplaceholder.typicode.com/comments")
  }
}

export const addComment = (comment) => {
  console.log("ASDGSD", comment)
  return {
    type: 'ADD_COMMENT',
    payload: axios.post("https://jsonplaceholder.typicode.com/comments",comment)
  }
}