import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EventItem, EventState} from './types';

const initialState: EventState = {
  events: [],
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, {payload}: PayloadAction<EventItem[]>) => {
      state.events = payload;
    },
    clearEvents: state => {
      state.events = [];
    },
    toggleFavorite: (state, {payload}: PayloadAction<number>) => {
      const event = state.events.find(e => e.event_id === payload);
      if (event) {
        event.isFavorite = event.isFavorite === 1 ? 0 : 1;
      }
    },
  },
});

export default eventSlice.reducer;

export const {
  actions: {setEvents, clearEvents, toggleFavorite},
} = eventSlice;
