import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Event: localStorage.getItem("Event")
    ? JSON.parse(localStorage.getItem("Event"))
    : null,
  AllEvent: localStorage.getItem("AllEvent")
    ? JSON.parse(localStorage.getItem("AllEvent"))
    : null,
};

const EventSlice = createSlice({
  name: "Event",
  initialState,
  reducers: {
    setEvent: (state, action) => {
      state.Event = action.payload;
      state.loading = false;
      localStorage.setItem("Event", JSON.stringify(action.payload));
    },
    setAllEvent: (state, action) => {
      localStorage.setItem("AllEvent", JSON.stringify(action.payload));
    },
  },
});

export const { setEvent, setAllEvent } = EventSlice.actions;
export default EventSlice.reducer;
