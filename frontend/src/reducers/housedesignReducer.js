import {
  HOUSEDESIGN_DETAILS_FAIL,
  HOUSEDESIGN_DETAILS_REQUEST,
  HOUSEDESIGN_DETAILS_SUCCESS,
  HOUSEDESIGN_LIST_FAIL,
  HOUSEDESIGN_LIST_REQUEST,
  HOUSEDESIGN_LIST_SUCCESS,
} from '../constants/housedesignConstant';

export const housedesignListReducer = (state = { designs: [] }, action) => {
  switch (action.type) {
    case HOUSEDESIGN_LIST_REQUEST:
      return { loading: true, designs: [] };
    case HOUSEDESIGN_LIST_SUCCESS:
      return { loading: false, designs: action.payload };
    case HOUSEDESIGN_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const housedesignDetailsReducer = (state = { design: {} }, action) => {
  switch (action.type) {
    case HOUSEDESIGN_DETAILS_REQUEST:
      return { loading: true, ...state };
    case HOUSEDESIGN_DETAILS_SUCCESS:
      return { loading: false, design: action.payload };
    case HOUSEDESIGN_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
