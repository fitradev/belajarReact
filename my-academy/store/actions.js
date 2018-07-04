import { SET_NEWS, GET_NEWS } from './actionTypes'

export const setNews = (news) => {
  return {
    type: SET_NEWS,
    payload: news
  }
}

export const getNews = (item) => {
  return {
    type: GET_NEWS,
    payload: item
  }
}
