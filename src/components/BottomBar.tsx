import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Archive, ChevronDown, Trash } from "lucide-react";

const BottomBar = () => {
  return (
    <div className="flex items-center justify-center p-2 gap-2 rounded-md shadow-xl mb-2">
      <div className="text-sm flex items-center gap-1">
        <Badge className="rounded-md text-xs px-[4px]">3</Badge> Selected
      </div>
      <Button variant={"outline"} className="text-sm">
        <Archive size={20} /> Archive
      </Button>
      <Button variant={"outline"} className="text-red-500 text-sm">
        <Trash size={20} /> Delete
      </Button>
      <Button variant={"outline"}>
        Archive <ChevronDown />
      </Button>
    </div>
  );
};

export default BottomBar;
