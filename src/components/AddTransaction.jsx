import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcTransaction } from "../features/transactionsSlice";
import { calcIncome, calcExpense } from "../features/totalBalanceSlice";

const AddTransaction = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [text, setText] = useState();
  const [click , setClick] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <div className="p-2 flex flex-col">
        <span className="text-xl font-medium">Add new Transaction</span>
        <div className="h-[1px] bg-darkGray"></div>
      </div>
      <div className="p-2 flex flex-col gap-4">
        <div className="flex flex-col gap-1 p-1">
          <span className="font-medium">Text</span>
          <input
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            maxLength={12}
            placeholder="Enter text..."
            type="text"
            className="border border-grey outline-none p-1 text-sm"
          />
        </div>
        <div className="flex flex-col p-1 gap-1">
          <span className="font-medium">
            Amount <br /> (negative - expense) & (positive - income)
          </span>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="Enter amount..."
            type="number"
            className="border border-grey outline-none p-1 text-sm"
          />
        </div>
      </div>
      <span className="text-sm text-center text-red-500">{click && (!text || !value) ? "Kindly enter both the values !!" : <></>}</span>
      <button
        onClick={() => {
          setClick(true);
          if (value && text) {
            dispatch(calcTransaction({ value, text }));
            if (value > 0) {
              dispatch(calcIncome(value));
            } else {
              dispatch(calcExpense(value));
            }
            setText("");
            setValue("");
            setClick(false);
          }
        }}
        className="font-medium text-white bg-purple-500 text-sm h-6 w-full"
      >
        Add Transaction
      </button>
    </div>
  );
};

export default AddTransaction;
