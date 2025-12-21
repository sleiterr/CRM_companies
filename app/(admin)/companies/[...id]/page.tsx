"use client";

import Header from "@/components/header";
import { notFound } from "next/navigation";

export interface PageProps {
  params: { id: string[] };
}

export default function Page({ params }: PageProps) {
  const id = Number.parseInt(params.id?.[0]);

  if (Number.isNaN(id)) {
    notFound();
  }
  return (
    <>
      <Header>Company({id})</Header>
    </>
  );
}
