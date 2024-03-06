import Image from "next/image";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex items-center gap-2 bg-white shadow-md px-1 rounded-md">
      <Image src={"/search.svg"} alt="Search Logo" width={20} height={20} />
      <Input
        type="search"
        placeholder="Search for..."
        className="md:w-[100px] lg:w-[300px] border-none  no-focus placeholder:font-semibold"
      />
    </div>
  );
};
export default Search;
