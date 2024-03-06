import React from "react";
import Search from "../Search";
import { Button } from "../ui/button";
import { MessagesSquare, Settings } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full py-2 px-5 rounded-md shadow-md">
      <h1 className="font-semibold text-xl">Products</h1>
      <div className="flex items-center gap-2">
        <Search />
        <Button variant={"outline"}>
          <MessagesSquare size={20} />
        </Button>
        <Button variant={"outline"}>
          <Settings size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
