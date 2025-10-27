"use client";

import React, { useEffect } from "react";

import Header from "@/components/header";
import { notFound } from "next/navigation";

export interface PageProps {
  params: { id: string[] };
}

export default function Page({ params }: PageProps) {
  const id = params.id[params.id.length - 1];

  useEffect(() => {
    const numericId = Number.parseInt(id);

    if (Number.isNaN(numericId)) {
      notFound();
    }
  }, [id]);
  return (
    <>
      <Header>Company({id})</Header>
    </>
  );
}
