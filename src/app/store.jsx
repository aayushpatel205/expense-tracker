import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactionsSlice";
import totalBalanceReducer from "../features/totalBalanceSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    totalBalance: totalBalanceReducer
  }
});
