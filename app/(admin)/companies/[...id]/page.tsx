"use client";

import React, { useEffect, useState } from "react";

import Header from "@/components/header";
import { notFound } from "next/navigation";

export interface PageProps {
  params: { id: string[] };
}

export default function Page({ params }: PageProps) {
  const [validId, setValidId] = useState<string | null>(null);
  const id = params.id[params.id.length - 1];

  useEffect(() => {
    const numericId = Number.parseInt(id);
    if (Number.isNaN(numericId)) {
      notFound();
    } else {
      setValidId(id);
    }
  }, [id]);

  if (!validId) return null;

  return (
    <>
      <Header>Company({params.id})</Header>
    </>
  );
}
