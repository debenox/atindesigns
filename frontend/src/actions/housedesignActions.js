import axios from 'axios';
import {
  HOUSEDESIGN_LIST_REQUEST,
  HOUSEDESIGN_LIST_SUCCESS,
  HOUSEDESIGN_LIST_FAIL,
  HOUSEDESIGN_DETAILS_REQUEST,
  HOUSEDESIGN_DETAILS_SUCCESS,
  HOUSEDESIGN_DETAILS_FAIL,
} from '../constants/housedesignConstant';

export const listDesigns = () => async (dispatch) => {
  try {
    dispatch({ type: HOUSEDESIGN_LIST_REQUEST });

    const { data } = await axios.get('/api/designs');

    dispatch({
      type: HOUSEDESIGN_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HOUSEDESIGN_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listDesignDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: HOUSEDESIGN_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/designs/${id}`);

    dispatch({
      type: HOUSEDESIGN_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HOUSEDESIGN_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
