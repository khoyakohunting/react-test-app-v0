import { HOME_PAGE_SUBMITED } from '../constants/action-type';

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
  export const setDetails = (name) => {
    return dispatch => {
      dispatch({
        type: HOME_PAGE_SUBMITED, payload: {name}
      })
    }
  }