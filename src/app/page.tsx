import DataTable from "@/components/DataTableComponent";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main className="rounded-md flex flex-col shadow-md  h-full">
      <Navbar />
      <DataTable />
    </main>
  );
}
