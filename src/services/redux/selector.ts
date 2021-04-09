import { createSelector } from "reselect";

import { AppState } from "../redux/reducers";

const getPictureOfDay = (state: AppState) => state.pictureOfDayState['pictureOfDay'];

export const getPictureOfDaySelector = createSelector(getPictureOfDay, (picture) => picture);