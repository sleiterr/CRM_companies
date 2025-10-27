import React, { useEffect } from "react";

import Header from "@/components/header";
import { notFound } from "next/navigation";

export interface PageProps {
  params: { id: string[] };
}

export default async function Page({ params }: PageProps) {
  const id = params.id[params.id.length - 1];
  const numericId = Number.parseInt(id);

  if (Number.isNaN(numericId)) {
    notFound();
  }

  return (
    <>
      <Header>Company({id})</Header>
    </>
  );
}
