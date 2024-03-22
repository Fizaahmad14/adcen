import { Slider } from "@nextui-org/react";
import { useState } from "react";

export default function Filter({ handleValueChange, maxCost }) {
  const [tuitionValue, settuitionValue] = useState(maxCost.Tuition);
  const [hostelValue, sethostelValue] = useState(maxCost.Hostel);
  const [transportValue, settransportValue] = useState(
    maxCost.Transport
  );
  const [foodValue, setfoodValue] = useState(maxCost.Food);

  return (
    <>
      <div className="space-y-4">
        <h3 className="text-lg font-medium leading-tight font-poppins underline underline-offset-4 decoration-green-500">
          Filters
        </h3>
        <div className="space-y-6 ">
          {/* Tuition */}
          <Slider
            size="sm"
            color="success"
            label="Tuition"
            showTooltip={true}
            formatOptions={{ style: "currency", currency: "PKR" }}
            tooltipValueFormatOptions={{
              style: "currency",
              currency: "PKR",
            }}
            onChange={(e) => {
              settuitionValue(e);
              handleValueChange(
                e,
                hostelValue,
                transportValue,
                foodValue
              );
            }}
            maxValue={maxCost.Tuition}
            defaultValue={maxCost.Tuition}
          />
          {/* Hostel */}
          <Slider
            size="sm"
            color="success"
            label="Hostel"
            showTooltip={true}
            formatOptions={{ style: "currency", currency: "PKR" }}
            tooltipValueFormatOptions={{
              style: "currency",
              currency: "PKR",
            }}
            onChange={(e) => {
              sethostelValue(e);
              handleValueChange(
                tuitionValue,
                e,
                transportValue,
                foodValue
              );
            }}
            maxValue={maxCost.Hostel}
            defaultValue={maxCost.Hostel}
          />
          {/* Transport */}
          <Slider
            size="sm"
            color="success"
            label="Transport"
            showTooltip={true}
            formatOptions={{ style: "currency", currency: "PKR" }}
            tooltipValueFormatOptions={{
              style: "currency",
              currency: "PKR",
            }}
            onChange={(e) => {
              settransportValue(e);
              handleValueChange(
                tuitionValue,
                hostelValue,
                e,
                foodValue
              );
            }}
            maxValue={maxCost.Transport}
            defaultValue={maxCost.Transport}
          />
          {/* Food */}
          <Slider
            size="sm"
            color="success"
            label="Food"
            showTooltip={true}
            formatOptions={{ style: "currency", currency: "PKR" }}
            tooltipValueFormatOptions={{
              style: "currency",
              currency: "PKR",
            }}
            onChange={(e) => {
              setfoodValue(e);
              handleValueChange(
                tuitionValue,
                hostelValue,
                transportValue,
                e
              );
            }}
            maxValue={maxCost.Food}
            defaultValue={maxCost.Food}
          />
        </div>
      </div>
    </>
  );
}
