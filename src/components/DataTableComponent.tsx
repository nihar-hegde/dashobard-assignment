import React from "react";
import AllBrandsDropDown from "./AllBrandsDropDown";
import DeskDropDown from "./DeskDropDown";
import TagsDropDown from "./TagsDropDown";
import { Button } from "./ui/button";

import { tableData } from "@/constants/tableData";
import {
  ArrowDownNarrowWide,
  Import,
  PlusSquare,
  SlidersHorizontal,
} from "lucide-react";
import TableData from "./Table/TableData";
import BottomBar from "./BottomBar";

const DataTableComponent = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full">
      <div className="w-full">
        <div className="flex justify-between gap-1 px-10 py-5">
          <div className="flex gap-1">
            <AllBrandsDropDown />
            <DeskDropDown />
            <TagsDropDown />
            <Button
              variant={"outline"}
              className="flex items-center gap-1"
              disabled
            >
              <ArrowDownNarrowWide size={20} /> Sort
            </Button>
            <Button
              variant={"outline"}
              className="flex items-center gap-1"
              disabled
            >
              <SlidersHorizontal size={20} /> Filter
            </Button>
          </div>
          <div className="flex gap-1 ">
            <Button variant={"outline"} className="flex items-center gap-1">
              <PlusSquare size={20} /> Meeting
            </Button>
            <Button variant={"outline"} className="flex items-center gap-1">
              <Import size={20} /> Import/Export
            </Button>
          </div>
        </div>
        <TableData />
      </div>
      <BottomBar />
    </div>
  );
};

export default DataTableComponent;
