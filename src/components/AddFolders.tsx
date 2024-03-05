import { Plus } from "lucide-react";
import React from "react";

const AddFolders = () => {
  return (
    <div className="flex items-center justify-between p-2 mt-2">
      <p className="text-sm text-gray-400 font-semibold">FOLDERS</p>
      <Plus size={20} className="text-gray-400" />
    </div>
  );
};

export default AddFolders;
