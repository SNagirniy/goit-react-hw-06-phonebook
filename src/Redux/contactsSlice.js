import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    updateItems: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      const newItems = state.items.filter(item => item.id !== action.payload);
      state.items = newItems;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedItemsReduser = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { updateItems, deleteItem } = contactsSlice.actions;
