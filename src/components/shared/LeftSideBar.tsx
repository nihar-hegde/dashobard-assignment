import React from "react";
import Logo from "../Logo";
import { teamsData } from "@/constants/teams";
import Teams from "../Teams";
import CreateTeam from "../CreateTeam";
import AddFolders from "../AddFolders";
import FolderDropdown from "../FolderDropdown";
import { folderData } from "@/constants/files";
import { HelpCircle, UserPlus } from "lucide-react";
import { Badge } from "../ui/badge";
import Trial from "../Trial";

const LeftSideBar = () => {
  return (
    <section className="rounded-md sticky left-0 top-0 flex flex-col justify-between overflow-y-auto custom-scrollbar  shadow-md max-sm:hidden lg:w-[280px] p-2">
      <div>
        <Logo />
        <div>
          {teamsData.map((item) => (
            <div key={item.id} className="mb-2">
              <Teams item={item} />
            </div>
          ))}
          <CreateTeam />
          <AddFolders />
          <div className="p-2">
            {folderData.map((items) => (
              <FolderDropdown key={items.name} fileItem={items} />
            ))}
          </div>
        </div>
      </div>
      <div className="p-2 flex flex-col items-start gap-2">
        <div className="flex gap-2 text-sm font-semibold">
          <UserPlus size={20} /> <p>Invite teammates</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <HelpCircle size={20} />
            <p>Help and first steps</p>
          </div>
          <Badge variant={"outline"} className="bg-gray-100">
            0/6
          </Badge>
        </div>
        <Trial />
      </div>
    </section>
  );
};

export default LeftSideBar;
