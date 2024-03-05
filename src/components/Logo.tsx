import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const Logo = () => {
  return (
    <Card className="mb-4">
      <CardContent className="flex items-center p-2 justify-between ">
        <div className="flex items-center gap-2 ">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <div className="flex flex-col items-start">
            <p className="text-xs text-gray-400 ">INC</p>
            <p className="text-sm font-semibold ">InnovationHub</p>
          </div>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </CardContent>
    </Card>
  );
};

export default Logo;
