import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const totalBalance = useSelector((state) => state.totalBalance);
  useEffect(() => {
    localStorage.setItem("totalBalance", JSON.stringify(totalBalance));
  }, [totalBalance]);

  return (
    <div className="flex flex-col items-center gap-5">
      <span className="font-medium text-2xl">Expense Tracker</span>

      <div className="flex flex-col self-start p-2">
        <span>YOUR BALANCE</span>
        <span
          className={`font-medium text-2xl ${
            totalBalance.income + totalBalance.expense < 0 ? (
              "text-red-500"
            ) : (
              <></>
            )
          }`}
        >
          ${totalBalance.income + totalBalance.expense}
        </span>
      </div>

      <div className="vertical-line self-start w-full h-[70px] flex p-2 shadow-md bg-white">
        <div className="h-full w-1/2 p-1 flex flex-col items-center">
          <span>INCOME</span>
          <span className="text-lg text-lightGreen">
            +${totalBalance.income}
          </span>
        </div>

        <div className="h-full w-1/2 p-1 flex flex-col items-center">
          <span>EXPENSE</span>
          <span className="text-lg text-red-500">
            -${Math.abs(totalBalance.expense)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
