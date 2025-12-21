"use client";

import Header from "@/components/header";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { id: string[] } }) {
  const id = Number(params.id?.[0]);

  if (isNaN(id)) {
    notFound();
  }
  return (
    <>
      <Header>Company({id})</Header>
    </>
  );
}
