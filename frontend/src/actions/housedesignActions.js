import axios from 'axios';
import {
  HOUSEDESIGN_LIST_REQUEST,
  HOUSEDESIGN_LIST_SUCCESS,
  HOUSEDESIGN_LIST_FAIL,
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
