import React from "react";
import Header from "@/components/header";
export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard / New companies</Header>
      <div>Some additional info</div>
    </>
  );
}
