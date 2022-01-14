import { combineReducers } from "redux";

import courseTrendingReducer from "store/courseTrending/reducer";
import courseFlashSaleReducer from "store/courseFlashSale/reducer";
import courseBusinessReducer from "store/courseBusiness/reducer";
import courseCareerReducer from "store/courseCareer/reducer";
// import authReducer from "store/auth/reducer";

const reducer = combineReducers({
  courseTrending: courseTrendingReducer,
  courseFlashSale: courseFlashSaleReducer,
  courseBusiness: courseBusinessReducer,
  courseCareer: courseCareerReducer,
  // auth: authReducer,
});

export default reducer;
