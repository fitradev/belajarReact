import { SET_NEWS, GET_NEWS } from './actionTypes'

const initialState = {
  news: [],
  item: {}
}

const reducers = (state = initialState, action) => {

  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.payload
      }
    case GET_NEWS:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state
  }
}

export default reducers
