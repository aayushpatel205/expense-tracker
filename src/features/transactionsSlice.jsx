import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const savedData = localStorage.getItem("transactions");

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: savedData ? JSON.parse(savedData) : [],
  reducers: {
    calcTransaction: (state, action) => {
      const trans = {
        transaction: action.payload.value,
        text: action.payload.text,
      };

      const exists = state.find(
        (t) => t.transaction === trans.transaction && t.text === trans.text
      );

      if (!exists) {
        state.push(trans);
      }
    },
  },
});

export const { calcTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
