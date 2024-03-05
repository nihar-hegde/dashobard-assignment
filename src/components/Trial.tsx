import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Trial = () => {
  return (
    <Card className="shadow-sm bg-gray-100 text-sm w-full">
      <CardContent className=" p-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Badge variant={"outline"} className="text-xs bg-white rounded-md">
            7
          </Badge>
          <p className="text-xs font-semibold">Days left on trial</p>
        </div>
        <Button className="text-xs rounded-xl">Add billing</Button>
      </CardContent>
    </Card>
  );
};

export default Trial;
