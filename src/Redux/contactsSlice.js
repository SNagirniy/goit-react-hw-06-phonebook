import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
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

export const { addItems, deleteItem } = contactsSlice.actions;
