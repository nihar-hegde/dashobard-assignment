import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TeamData } from "@/constants/teams";
import Image from "next/image";
import { Badge } from "./ui/badge";

const Teams = ({ item }: { item: TeamData }) => {
  return (
    <Card className="shadow-md hover:bg-gray-100">
      <CardContent className=" p-2 flex items-center justify-between">
        <div className="flex gap-2">
          <Image src={item.logo} alt={item.name} width={20} height={20} />
          <p>{item.name}</p>
        </div>
        <Badge
          variant={"outline"}
          className="flex items-center justify-center rounded-md bg-gray-100 text-gray-500"
        >
          ⌘ + {item.id}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default Teams;
