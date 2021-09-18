import {
  CURRENT_USER_REQUEST_ERROR,
  CURRENT_USER_REQUEST_SUCCESS,
  CURRENT_USER_FETCHING,
} from './actions';

const initialState = {
  loading: false,
  login: false,
  user: {},
}

export default function currentUserReducer(state = initialState,  { type, payload } = action) {
  switch (type) {
    // USER
    case CURRENT_USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        login: true,
        user: payload.user,
        errorGlobal: ''
      };
      break;
    case CURRENT_USER_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        errorGlobal: 'Không có thông tin user',
      };
      break;
    case CURRENT_USER_FETCHING:
      return {
        ...state,
        loading: true
      };
      break;

    // DEFAULT
    default:
      return state;
  }
}
