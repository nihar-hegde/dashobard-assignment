import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, LayoutGrid } from "lucide-react";

const DeskDropDown = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            className="flex items-center justify-between w-full gap-2 text-sm "
          >
            Desk
            <ChevronDown size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Desk</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Desk 1</DropdownMenuItem>
          <DropdownMenuItem>Desk 2</DropdownMenuItem>
          <DropdownMenuItem>Desk 3</DropdownMenuItem>
          <DropdownMenuItem>Desk 4</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DeskDropDown;
