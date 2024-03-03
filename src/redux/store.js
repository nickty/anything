// store.js

import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Assuming you have reducers set up

const store = configureStore({
  reducer: rootReducer,
  // Optionally, you can configure middleware here
});

export default store;
