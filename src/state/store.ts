import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import eventSlice from './event';
import userListSlice from './home';
import userDetailSlice from './homedetails';
import userReducerSlice from './user';

// Redux Setting
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userReducer', 'userListSlice', 'userDetailSlice', 'eventSlice'],
};

const middleware = [thunk];
const rootReducers = combineReducers({
  userReducer: userReducerSlice,
  userListSlice: userListSlice,
  userDetailSlice: userDetailSlice,
  eventSlice: eventSlice,
});
// Configure the Redux store without a specific reducer
const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducers),
  middleware,
});
const persistor = persistStore(store);

export {persistor, store};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
