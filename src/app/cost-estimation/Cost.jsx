"use client";
import { useState } from "react";
import Filter from "./Filter";
import CostItem from "./CostItem";
import Results from "./Results";
import Sort from "./Sort";

export default function Cost({ exploreItems, maxCost }) {
  const [result, setresult] = useState(exploreItems.length);
  const [tuitionValue, settuitionValue] = useState(maxCost.Tuition);
  const [hostelValue, sethostelValue] = useState(maxCost.Hostel);
  const [transportValue, settransportValue] = useState(
    maxCost.Transport
  );
  const [foodValue, setfoodValue] = useState(maxCost.Food);
  const [order, setorder] = useState("");

  const handleCostValue = (tuition, hostel, tranport, food) => {
    settuitionValue(tuition);
    sethostelValue(hostel);
    settransportValue(tranport);
    setfoodValue(food);
    setresult(
      exploreItems.filter((item) => {
        return (
          item.fees.Tuition <= tuition &&
          item.fees.Hostel <= hostel &&
          item.fees.Transport <= tranport &&
          item.fees.Food <= food
        );
      }).length
    );
  };

  const whichSort = (order) => {
    setorder(order);
  };

  const sortByTotalFees = (a, b) => {
    const totalFeesA =
      +a.fees.Tuition +
      +a.fees.Hostel +
      +a.fees.Transport +
      +a.fees.Food;
    const totalFeesB =
      +b.fees.Tuition +
      +b.fees.Hostel +
      +b.fees.Transport +
      +b.fees.Food;

    if (order === "asc") {
      return totalFeesA - totalFeesB;
    } else if (order === "desc") {
      return totalFeesB - totalFeesA;
    } else {
      return totalFeesA;
    }
  };

  return (
    <>
      <div className="text-gray-900 container pt-28 mx-auto px-5 ">
        <h2 className="text-3xl text-center leading-tight font-poppins underline underline-offset-4 decoration-green-500">
          Cost Estimation
        </h2>
        <div className="py-10 flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:gap-4">
          {/* Filters */}
          <div className="rounded-md space-y-4 h-max min-w-max sm:w-1/4  bg-white shadow-md p-3">
            <Filter
              maxCost={maxCost}
              handleValueChange={handleCostValue}
            />
            <hr />
            <div className="flex items-center justify-between ">
              <Results results={result} />
              <Sort sortFunction={whichSort} />
            </div>
          </div>

          <hr className="border h-[.5px] border-gray-400/50 sm:hidden" />
          <div className="sm:w-[75%] space-y-3">
            {exploreItems
              .filter((item) => {
                return (
                  item.fees.Tuition <= tuitionValue &&
                  item.fees.Hostel <= hostelValue &&
                  item.fees.Transport <= transportValue &&
                  item.fees.Food <= foodValue
                );
              })
              .sort(sortByTotalFees)
              .map((item) => {
                return <CostItem key={item.href} item={item} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}
