export interface FileItemI {
  name: string;
  type: "file" | "folder";
  children?: FileItemI[]; // For subfolders
}

export const folderData: FileItemI[] = [
  {
    name: "Products",
    type: "folder",
    children: [
      { name: "Roadmap", type: "file" },
      { name: "Feedback", type: "file" },
      { name: "Performance", type: "file" },
      { name: "Team", type: "file" },
      { name: "Analytics", type: "file" },
    ],
  },
  {
    name: "Sales",
    type: "folder",
    children: [
      { name: "Test", type: "file" },
      { name: "Test", type: "file" },
    ],
  },
  {
    name: "Design",
    type: "folder",
    children: [
      { name: "Test", type: "file" },
      { name: "Test", type: "file" },
    ],
  },
  {
    name: "Office",
    type: "folder",
    children: [],
  },
];
