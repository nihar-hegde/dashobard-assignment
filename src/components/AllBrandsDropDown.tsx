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

const AllBrandsDropDown = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            className="flex items-center justify-between w-full gap-2 text-sm "
          >
            <div className="flex gap-2">
              <LayoutGrid size={20} /> All Brands
            </div>
            <ChevronDown size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>All Brands</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Wix</DropdownMenuItem>
          <DropdownMenuItem>Shopify</DropdownMenuItem>
          <DropdownMenuItem>MailChimp</DropdownMenuItem>
          <DropdownMenuItem>Paypal</DropdownMenuItem>
          <DropdownMenuItem>Disny</DropdownMenuItem>
          <DropdownMenuItem>Google</DropdownMenuItem>
          <DropdownMenuItem>Microsoft</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AllBrandsDropDown;
