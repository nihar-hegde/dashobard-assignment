import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const TagsDropDown = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            className="flex items-center justify-between w-full gap-2 text-sm "
          >
            Tags
            <ChevronDown size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Tags</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Tags 1</DropdownMenuItem>
          <DropdownMenuItem>Tags 2</DropdownMenuItem>
          <DropdownMenuItem>Tags 3</DropdownMenuItem>
          <DropdownMenuItem>Tags 4</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TagsDropDown;
