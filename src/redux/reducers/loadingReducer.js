// Again this idea was to put a nice loading screen for things that didnt load correctly

const initialState = true;

export default (state = initialState, action) => {
  switch(action.type){
    case 'FETCH_POSTS_PENDING':
      return state
    case 'FETCH_POSTS_FULFILLED':
      return action.payload.data
    case 'FETCH_POSTS_REJECTED':
      return state
    default:
      return state
  }
}