import Header from "@/components/header";
import { notFound } from "next/navigation";

export interface PageProps {
  params: { id: string[] }; // catch-all route
}

export default function Page({ params }: PageProps) {
  const id = params.id[params.id.length - 1];
  const numericId = Number.parseInt(id);

  if (Number.isNaN(numericId)) {
    notFound(); // працює на сервері
  }

  return <Header>Company({id})</Header>;
}
