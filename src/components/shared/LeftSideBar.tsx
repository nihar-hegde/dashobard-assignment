import React from "react";
import Logo from "../Logo";
import { teamsData } from "@/constants/teams";
import Teams from "../Teams";
import CreateTeam from "../CreateTeam";
import AddFolders from "../AddFolders";

const LeftSideBar = () => {
  return (
    <section className=" rounded-md  sticky left-0 top-0 flex flex-col  shadow-2xl max-sm:hidden lg:w-[266px] p-2">
      <Logo />
      <div>
        {teamsData.map((item) => (
          <div key={item.id} className="mb-2 ">
            <Teams item={item} />
          </div>
        ))}
        <CreateTeam />
        <AddFolders />
      </div>
    </section>
  );
};

export default LeftSideBar;
