import React, { useEffect } from "react";
import TransactionListItem from "./TransactionListItem";
import { useSelector } from "react-redux";

const History = () => {
  const transactions = useSelector((state) => state?.transactions);
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="flex flex-col gap-2">
      <div className="p-2 flex flex-col">
        <span className="text-xl font-medium">History</span>
        <div className="h-[1px] bg-darkGray"></div>
      </div>
      <div className="flex flex-col gap-2 overflow-y-scroll no-scrollbar scroll-smooth max-h-[85px]">
        {!(transactions.length === 0) ? (
          transactions.map((element) => {
            return <TransactionListItem data={element} />;
          })
        ) : (
          <span className="p-2 text-gray-500 font-medium">No History</span>
        )}
      </div>
    </div>
  );
};

export default History;
