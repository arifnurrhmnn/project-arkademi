import { GET } from "./type";

const initialState = {
  getCourseCareerLoading: false,
  getCourseCareerResult: false,
  getCourseCareerError: false,
};

const courseCareerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        getCourseCareerLoading: action.payload.loading,
        getCourseCareerResult: action.payload.data,
        getCourseCareerError: action.payload.error,
      };
    default:
      return state;
  }
};

export default courseCareerReducer;
