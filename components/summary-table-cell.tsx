import React from "react";
import clsx from "clsx";

export interface SummaryTableProps {
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
}

export default function SummaryTableCell({
  align = "left",
  children,
}: SummaryTableProps) {
  return (
    <td
      className={clsx(
        "py-2 px-5 border-gray-100 border-r first-of-type:border-1",
        `text-${align}`
      )}
    >
      {children}
    </td>
  );
}
