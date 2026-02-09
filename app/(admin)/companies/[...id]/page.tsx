"use client";

import Header from "@/components/header";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const { id } = await params;

  const companyId = Number.parseInt(id?.[0]);

  if (Number.isNaN(companyId)) {
    notFound();
  }
  return (
    <>
      <Header>Company({companyId})</Header>
    </>
  );
}
