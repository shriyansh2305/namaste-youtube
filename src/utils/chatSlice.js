import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_MAX_SIZE } from "./constants";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.unshift(action.payload);
      if (state.messages.length > LIVE_CHAT_MAX_SIZE) {
        state.messages.pop(); // Remove the oldest message
      }
    },
  },
});
export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
