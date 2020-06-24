import { 
  USER_POST_START,
  USER_POST_SUCCESS,
  USER_POST_FAILURE,
  USER_PUT_START,
  USER_PUT_SUCCESS,
  USER_PUT_FAILURE,
  USER_DELETE_START,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILURE,
  USER_LOG_OUT_START,
  USER_LOG_OUT_SUCCESS
 } from "../actions";
  // 1. create initial state
  const initialState = {
    //User State
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    id: '',
    roleId: null,
    // Class State
    title: '',
    instructorId: '',
    categoryId: '',
    scheduleTime: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    // Category State
    name: '',
    description: '',
    // utility state
    error: ''

}
  
  // 2. pass state
  export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_POST_START:
        console.log(action.type);
        return {
          ...state,
          error: ''
        }
      case USER_POST_SUCCESS:
        console.log(action.type, action.payload, state.token);
        return {
          ...state,
          // username: action.payload.username,
          // password: action.payload.password,
          // firstName: action.payload.firstName,
          // lastName: action.payload.lastName,
          // email: action.payload.email,
          roleId: action.payload.roleId,
          id: action.payload.id,
          error: '',
        }
      case USER_POST_FAILURE:
        console.log(action.type, action.payload);
        return {
          ...state,
          error: action.payload,
        }
        case USER_PUT_START:
        console.log(action.type);
        return {
          ...state,
          error: ''
        }
      case USER_PUT_SUCCESS:
        console.log(action.type, action.payload);
        return {
          ...state,
          roleId: action.payload.roleId,
          error: '',
        }
      case USER_PUT_FAILURE:
        console.log(action.type, action.payload);
        return {
          ...state,
          error: action.payload,
        }
        case USER_DELETE_START:
        console.log(action.type);
        return {
          ...state,
          error: ''
        }
      case USER_DELETE_SUCCESS:
        console.log(action.type, action.payload);
        return {
          ...initialState,
          error: '',
        }
      case USER_DELETE_FAILURE:
        console.log(action.type, action.payload);
        return {
          ...state,
        }
      case USER_LOG_OUT_START:
        console.log(action.type, action.payload);
        return {
          ...state,
          error: '',
        }
      case USER_LOG_OUT_SUCCESS:
        console.log(action.type, action.payload);
        return initialState 
      default:
        return state
    }
  }