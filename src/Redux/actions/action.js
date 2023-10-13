import { fetchData, } from '../../services/api';
import { actiontypes } from '../Constants/actiontypes';
const { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE , SELECTEDBREED } = actiontypes;
export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
export const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });
export const SelectedBreed = (Breed) => ({ type:SELECTEDBREED, payload: Breed });

export const fetchDataAsync = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const data = await fetchData();
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};
// export const fetchImageData = () => async (dispatch) => {
//   dispatch(fetchDataRequest());
//   try {
//     const Images = await ImageData();
//     console.log("data of images____", Images);

//     dispatch(ImagesFetchData(Images));
//   } catch (error) {
//     dispatch(fetchDataFailure(error.message));
//   }
// };


export default {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  fetchDataAsync,
  SelectedBreed,
};
