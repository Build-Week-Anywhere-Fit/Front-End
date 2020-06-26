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
    USER_UPDATE_START,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILURE,
    USER_LOG_OUT_START,
    USER_LOG_OUT_SUCCESS,
    CLASS_POST_START,
    CLASS_POST_SUCCESS,
    CLASS_POST_FAILURE,
    CLASS_PUT_START,
    CLASS_PUT_SUCCESS,
    CLASS_PUT_FAILURE,
    CLASS_DELETE_START,
    CLASS_DELETE_SUCCESS,
    CLASS_DELETE_FAILURE,
    CLASS_GET_START,
    CLASS_GET_SUCCESS,
    CLASS_GET_FAILURE,
    USER_GET_CLASS_START,
    USER_GET_CLASS_SUCCESS,
    USER_GET_CLASS_FAILURE,
    USER_POST_CLASS_START,
    USER_POST_CLASS_SUCCESS,
    USER_POST_CLASS_FAILURE,
    USER_DELETE_CLASS_START,
    USER_DELETE_CLASS_SUCCESS,
    USER_DELETE_CLASS_FAILURE,
    CATEGORY_POST_START,
    CATEGORY_POST_SUCCESS,
    CATEGORY_POST_FAILURE,
    CATEGORY_PUT_START,
    CATEGORY_PUT_SUCCESS,
    CATEGORY_PUT_FAILURE,
    CATEGORY_DELETE_START,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_DELETE_FAILURE,
    CATEGORY_GET_START,
    CATEGORY_GET_SUCCESS,
    CATEGORY_GET_FAILURE,
    UP
 } from "../actions";
  // 1. create initial state
  const initialState = {
    //User State
    username: 'test',
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
    error: '',
    classes: [],
    enrolledClasses: [],
    categories: [],
    loggedIn: false,
    update: true

}
  
  // 2. pass state
  export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      case UP:
        console.log(action.type);
        return {
          ...state,
          update: action.payload
        }
      case USER_POST_START:
        console.log(action.type);
        return {
          ...state,
          error: ''
        }
      case USER_POST_SUCCESS:
        console.log(action.type, action.payload, state.loggedIn);
        return {
          ...state,
          // username: action.payload.username,
          // password: action.payload.password,
          // firstName: action.payload.firstName,
          // lastName: action.payload.lastName,
          // email: action.payload.email,
          roleId: action.payload.roleId,
          id: action.payload.id,
          loggedIn: true,
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
        console.log(action.type, 'Logged In -->',  state.loggedIn);
        return {...initialState}
      case CLASS_POST_START:
      console.log(action.type);
        return state
      case CLASS_POST_SUCCESS:
        console.log(action.type, action.payload);
        return state
      case CLASS_POST_FAILURE:
        console.log(action.type, action.payload);
        return state
      case CLASS_GET_START:
        console.log(action.type);
        return (state)
      case CLASS_GET_SUCCESS:
        console.log(action.type, action.payload);
        return{...state, classes:action.payload}
      case CLASS_GET_FAILURE:
          console.log(action.type, action.payload);
          return{...state, error:action.payload}
      case CLASS_DELETE_START:
        console.log(action.type);
        return (state)
      case CLASS_DELETE_SUCCESS:
        console.log(action.type, action.payload);
        return({...state, error:''})
      case CLASS_DELETE_FAILURE:
          console.log(action.type, action.payload);
          return({...state, error:action.payload})
      case CLASS_PUT_START:
        console.log(action.type);
        return (state)
      case CLASS_PUT_SUCCESS:
        console.log(action.type, action.payload);
        return({...state, error:''})
      case CLASS_PUT_FAILURE:
          console.log(action.type, action.payload);
          return({...state, error:action.payload})
      case USER_POST_CLASS_START:
        console.log(action.type);
          return state
      case USER_POST_CLASS_SUCCESS:
          console.log(action.type, action.payload);
          return state
      case USER_POST_CLASS_FAILURE:
          console.log(action.type, action.payload);
          return state
      case USER_DELETE_CLASS_START:
        console.log(action.type);
          return state
      case USER_DELETE_CLASS_SUCCESS:
          console.log(action.type, action.payload);
          return state
      case USER_DELETE_CLASS_FAILURE:
          console.log(action.type, action.payload);
          return state
      case USER_GET_CLASS_START:
        console.log(action.type);
          return state
      case USER_GET_CLASS_SUCCESS:
          console.log(action.type, action.payload);
          return {
            ...state,
            enrolledClasses: action.payload
          }
      case USER_GET_CLASS_FAILURE:
        console.log(action.type, action.payload);
        return {
          ...state,
          error: action.payload
        }
        case CATEGORY_GET_START:
          console.log(action.type, state.categories);
            return {state}
        case CATEGORY_GET_SUCCESS:
            console.log(action.type, action.payload, state.categories);
            return {
              ...state,
              categoies: action.payload
            }
        case CATEGORY_GET_FAILURE:
            console.log(action.type, action.payload);
            return {state}
      default:
        return state
    }
  }