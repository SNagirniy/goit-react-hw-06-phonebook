import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsSlice } from './contactsSlice';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedItemsReduser = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

/*export const store = configureStore({
  reducer: {
    contacts: persistedItemsReduser,
  },
});
*/
export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});
