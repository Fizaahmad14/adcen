import { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { MdSort } from "react-icons/md";
import { LuArrowDown01, LuArrowUp10 } from "react-icons/lu";
import { FaRandom } from "react-icons/fa";

export default function Sort({ sortFunction }) {
  const [ascCheck, setascCheck] = useState(false);
  const [descCheck, setdescCheck] = useState(false);

  const [checkId, setcheckId] = useState(undefined);

  const sortItems = [
    {
      id: 0,
      name: "Cost (Low To High)",
      icon: <LuArrowDown01 className="text-lg" />,
      value: "asc",
    },
    {
      id: 1,
      name: "Cost (High To Low)",
      icon: <LuArrowUp10 className="text-lg" />,
      value: "desc",
    },
    {
      id: 2,
      name: "Random",
      icon: <FaRandom className="text-lg" />,
      value: "random",
    },
  ];

  const handleCheck = (id, value) => {
    setcheckId(id);
    sortFunction(value);
  };

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button
            endContent={<MdSort />}
            size="sm"
            variant="solid"
            className="bg-green-500 text-base text-white"
          >
            Sort
          </Button>
        </DropdownTrigger>
        {/* {checked && ( */}
        <DropdownMenu>
          {sortItems.map((item) => {
            return (
              <DropdownItem
                aria-label="dropdown-item"
                key={item.id}
                onClick={() => {
                  handleCheck(item.id, item.value);
                }}
              >
                <div
                  className={`flex gap-2 ${
                    item.id === checkId ? "text-green-500" : ""
                  }  w-full items-center justify-between`}
                >
                  <span>{item.name}</span> {item.icon}
                </div>
              </DropdownItem>
            );
          })}
          {/* <DropdownItem
            onClick={() => {
              handleCheck("asc");
            }}
          >
            <div
              className={`flex gap-2 ${
                ascCheck ? "text-green-500" : ""
              }  w-full items-center justify-between`}
            >
              <span>Cost (Low To High)</span>{" "}
              <LuArrowDown01 className="text-lg" />
            </div>
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              handleCheck("desc");
            }}
          >
            <div
              className={`flex gap-2 ${
                descCheck ? "text-green-500" : ""
              }  w-full items-center justify-between`}
            >
              <span>Cost (High To Low)</span>{" "}
              <LuArrowUp10 className="text-lg" />
            </div>
          </DropdownItem> */}
        </DropdownMenu>
        {/* // )} */}
      </Dropdown>
    </>
  );
}
