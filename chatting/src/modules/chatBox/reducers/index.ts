import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Conversation } from "../components/conversations";

const initialState: Conversation = {
  id: "",
  lastMessage: {
    id: "",
    text: "",
    sender: {
      id: "",
      name: "",
    },
    createdAt: new Date(),
  },
  participants: [],
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    optinConversationAC: (
      state: Conversation,
      action: PayloadAction<Conversation>
    ) => {
      state.id = action.payload.id;
      state.participants = action.payload.participants;
      state.lastMessage = action.payload.lastMessage;
    },
  },
});

export const { optinConversationAC } = conversationSlice.actions;

export default conversationSlice.reducer;
