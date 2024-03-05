import { Megaphone, PenTool } from "lucide-react";
import { ReactElement } from "react";

export interface TeamData {
  id: number;
  name: string;
  logo: string;
}

export const teamsData: TeamData[] = [
  { id: 1, name: "Desgin Team", logo: "pen.svg" },
  { id: 2, name: "Marketing Team", logo: "marketing.svg" },
  { id: 3, name: "Development Team", logo: "code.svg" },
];
