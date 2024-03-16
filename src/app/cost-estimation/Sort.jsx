import { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { MdSort } from "react-icons/md";
import {
  IoIosArrowRoundUp,
  IoIosArrowRoundDown,
} from "react-icons/io";

export default function Sort({ sortFunction }) {
  const [checked, setChecked] = useState(false);

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
          <DropdownItem onClick={() => sortFunction("asc")}>
            <div className="flex gap-2 items-center">
              <span>Cost</span>{" "}
              <IoIosArrowRoundDown className="text-lg" />
            </div>
          </DropdownItem>
          <DropdownItem onClick={() => sortFunction("desc")}>
            <div className="flex gap-2 items-center">
              <span>Cost</span>{" "}
              <IoIosArrowRoundUp className="text-lg" />
            </div>
          </DropdownItem>
          <DropdownItem onClick={() => sortFunction("")}>
            None
          </DropdownItem>
        </DropdownMenu>
        {/* // )} */}
      </Dropdown>
    </>
  );
}
