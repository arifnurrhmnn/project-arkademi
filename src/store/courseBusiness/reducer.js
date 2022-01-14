import { GET } from "./type";

const initialState = {
  getCourseBusinessLoading: false,
  getCourseBusinessResult: false,
  getCourseBusinessError: false,
};

const courseBusinessReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        getCourseBusinessLoading: action.payload.loading,
        getCourseBusinessResult: action.payload.data,
        getCourseBusinessError: action.payload.error,
      };
    default:
      return state;
  }
};

export default courseBusinessReducer;
