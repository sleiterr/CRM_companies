import React from "react";
import Link from "next/link";
import Button from "../components/button";

export default function dashboardLink() {
  return (
    <Link href="/companies" passHref>
      <Button>Go to Dashboard</Button>
    </Link>
  );
}
