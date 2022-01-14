import { GET } from "./type";

const initialState = {
  getCourseFlashSaleLoading: false,
  getCourseFlashSaleResult: false,
  getCourseFlashSaleError: false,
};

const courseFlashSaleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        getCourseFlashSaleLoading: action.payload.loading,
        getCourseFlashSaleResult: action.payload.data,
        getCourseFlashSaleError: action.payload.error,
      };
    default:
      return state;
  }
};

export default courseFlashSaleReducer;
