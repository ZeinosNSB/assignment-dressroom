import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../feature/room/roomSlice.js";

export const store = configureStore({
  reducer: {
    room: roomReducer,
  }
})
