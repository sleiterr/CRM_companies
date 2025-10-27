"use client";

import React, { useState } from "react";
import Button from "../components/button";
import dynamic from "next/dynamic";
// import CompanyFormModal from '../components/company-form-modal'

const CompanyFormModal = dynamic(() => import("./company-form-modal"), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}
