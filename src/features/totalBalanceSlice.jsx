import { createSlice } from "@reduxjs/toolkit";

const savedData = localStorage.getItem("totalBalance");

export const totalBalanceSlice = createSlice({
  name: "totalBalance",
  initialState: savedData ? JSON.parse(savedData) : { income: 0, expense: 0 },
  reducers: {
    calcIncome: (state, action) => {
      state.income += parseInt(action.payload);
    },
    calcExpense: (state, action) => {
      state.expense += parseInt(action.payload);
    },
  },
});

export const { calcIncome, calcExpense } = totalBalanceSlice.actions;
export default totalBalanceSlice.reducer;
