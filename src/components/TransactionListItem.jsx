import React from "react";
import { useSelector } from "react-redux";

const TransactionListItem = ({ data }) => {
  return (
    <div
      className={`h-9 w-full border-r-4 ${data.transaction > 0 ? "border-r-lightGreen" : "border-r-red-500"} border p-2 flex items-center justify-between bg-white`}
    >
      <span>{data?.text}</span>
      <span>{"$" + data?.transaction}</span>
    </div>
  );
};

export default TransactionListItem;
