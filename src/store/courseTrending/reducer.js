import { GET } from "./type";

const initialState = {
  getCourseTrendingLoading: false,
  getCourseTrendingResult: false,
  getCourseTrendingError: false,
};

const courseTrendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        getCourseTrendingLoading: action.payload.loading,
        getCourseTrendingResult: action.payload.data,
        getCourseTrendingError: action.payload.error,
      };
    default:
      return state;
  }
};

export default courseTrendingReducer;
