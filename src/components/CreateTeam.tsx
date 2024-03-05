import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

const CreateTeam = () => {
  return (
    <Card className="shadow-sm hover:bg-gray-200 ">
      <CardContent className=" p-2 flex items-center justify-between">
        <div className="flex gap-2">
          <PlusCircle size={20} className="text-gray-500" />
          <p className={" font-semibold text-gray-500 text-sm "}>
            Create A Team
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreateTeam;
