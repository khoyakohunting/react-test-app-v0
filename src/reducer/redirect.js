import { HOME_PAGE_SUBMITED, MORE_PAGE_SUBMITTED, INITIAL_STATE, PAGE_ERROR } from '../constants/action-type';

const initialState = {
    name:'',
    email:'',
    phone:'',
    timer:10,
    isValidHome: false,
    isValidMore: false,
    pageError:''
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case HOME_PAGE_SUBMITED:
        return{
          ...state,
          name: action.payload.name,
          isValidHome: true,
          pageError: ''
        }
      case MORE_PAGE_SUBMITTED:
        return{
          ...state,
          phone: action.payload.phone,
          email: action.payload.email,
          isValidMore: true,
          pageError: ''
        }
      case PAGE_ERROR:
        return{
          ...state,
          pageError: action.payload.message
        }
      case INITIAL_STATE:
        return{
          ...initialState
        }
      default:
        return state
    }
  }
  
  export const setName = (name) => {
    return dispatch => {
      dispatch({
        type: HOME_PAGE_SUBMITED, payload: {name}
      })
    }
  }
  export const setDetails = (phone, email) => {
    return dispatch => {
      dispatch({
        type: MORE_PAGE_SUBMITTED, payload: {phone, email}
      })
    }
  }
  
  export const resetState = () => {
    return dispatch => {
        dispatch({
          type: INITIAL_STATE, payload: {}
        })
      }
  }
  export const setPageError = (message) => {
      return dispatch =>{
          dispatch({
              type: PAGE_ERROR, payload:{message}
          })
      }
  }