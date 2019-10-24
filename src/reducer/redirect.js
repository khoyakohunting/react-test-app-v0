import { HOME_PAGE_SUBMITED, MORE_PAGE_SUBMITTED } from '../constants/action-type';

const initialState = {
    name:'',
    isValidHome: false,
    isValidMore: false
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case HOME_PAGE_SUBMITED:
        return{
          ...state,
          name: action.payload.name,
          isValidHome: true
        }
      case MORE_PAGE_SUBMITTED:
        return{
          ...state,
          phone: action.payload.phone,
          email: action.payload.email
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
    console.log(phone);
    return dispatch => {
      dispatch({
        type: MORE_PAGE_SUBMITTED, payload: {phone, email}
      })
    }
  }