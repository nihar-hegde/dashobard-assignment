import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileItemI } from "@/constants/files";
import { Folder, PlusCircle } from "lucide-react";

const FolderDropdown = ({ fileItem }: { fileItem: FileItemI }) => {
  const fileItemChildren = fileItem.children;
  return (
    <Accordion type="single" collapsible className="text-sm">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex flex-row gap-2">
            <Folder size={20} /> {fileItem.name}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {fileItemChildren?.map((item) => (
            <div className="mb-2 ml-5 " key={item.name}>
              {item.name}
            </div>
          ))}
          <div className="flex gap-2 text-gray-400">
            <PlusCircle /> Add New Sub
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FolderDropdown;
