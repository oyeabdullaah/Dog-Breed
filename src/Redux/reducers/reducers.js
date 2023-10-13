import { actiontypes } from '../Constants/actiontypes';

const { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, SELECTEDBREED } = actiontypes;


const initialState = {
  data: '',
  loading: false,
  error: null,
  Breed: '',
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null, };
    case SELECTEDBREED:
      return { ...state, loading: false, Breed: action.payload, error: null }
    // case FETCT_DATA_IMAGES:
    //   return { ...state, loading: false, Images: action.payload, error: null, };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};

export default dataReducer;
