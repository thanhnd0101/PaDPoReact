import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AccountPayLoad = {
  id: string;
  name: string;
};

const initialState: AccountPayLoad = {
  id: "",
  name: "",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    chooseAccountAC: (
      state: AccountPayLoad,
      action: PayloadAction<AccountPayLoad>
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});

export const { chooseAccountAC } = accountSlice.actions;

export default accountSlice.reducer;
