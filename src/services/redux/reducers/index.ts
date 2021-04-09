import { combineReducers } from "redux";
import pictureOfDayReducer from "./pictureOfDayReducer";

const rootReducer = combineReducers({
    pictureOfDayState: pictureOfDayReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;