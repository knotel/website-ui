import { configureStore } from '@reduxjs/toolkit';
import promise from "redux-promise-middleware";

import reducer from "../reducers";

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }).concat(promise),
});