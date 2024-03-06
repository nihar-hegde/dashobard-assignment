"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import { tableData } from "@/constants/tableData";
import MemberAvatar from "../MemberAvatar";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";

const TableData = () => {
  const [selectedRows, setSelectedRows] = useState<{ [key: string]: boolean }>(
    {}
  );

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Members</TableHead>
            <TableHead>Categories</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Next Meeting</TableHead>
            <TableHead>
              <Plus size={20} />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((tableItem) => (
            <TableRow key={tableItem.brand.name}>
              <TableCell className="px-4">
                <Checkbox />
              </TableCell>
              <TableCell className="px-4">{tableItem.brand.name}</TableCell>
              <TableCell className="px-4 max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                {tableItem.description}
              </TableCell>
              <TableCell className="px-4">
                <div className="flex -space-x-2 overflow-hidden">
                  {tableItem.members.map((item) => (
                    <div key={item.imgURL} className="inline-block">
                      <MemberAvatar
                        key={item.imgURL}
                        imgURL={item.imgURL}
                        name={item.name}
                      />
                    </div>
                  ))}
                </div>
              </TableCell>
              <TableCell className="max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap px-4">
                <div className="flex gap-2 ">
                  {tableItem.categories.map((item) => (
                    <div key={item} className="">
                      <Badge variant={"outline"} className="rounded-md">
                        {item}
                      </Badge>
                    </div>
                  ))}
                </div>
              </TableCell>
              <TableCell className="max-w-[120px] overflow-hidden px-4">
                <div className="flex items-center gap-2">
                  {tableItem.tags.map((item) => (
                    <Badge
                      variant={"secondary"}
                      key={item}
                      className="rounded-md"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell className="px-4">
                <Badge className="rounded-md">{tableItem.nextMeeting}</Badge>
              </TableCell>
              <TableCell> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableData;
