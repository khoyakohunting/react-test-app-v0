import { HOME_PAGE_SUBMITED } from '../constants/action-type';

const initialState = {
    name:'',
    isValidHome: false,
    isValidMore: false
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
        case HOME_PAGE_SUBMITED:
          return {
            ...state
          }

        default:
            return state
  }
}

export const setName = (payload) => {
    return dispatch => {
      dispatch({
        type: HOME_PAGE_SUBMITED, name:payload.name
      })
    }
  }