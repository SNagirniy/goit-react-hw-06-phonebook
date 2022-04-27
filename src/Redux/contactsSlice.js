import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    updateItems: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      return state.items.filter(item => item.id !== action.payload);
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { updateItems, updateFilter, deleteItem } = contactsSlice.actions;
