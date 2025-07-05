import React from "react";
import {headers} from "next/headers";

export interface ServerComponentProps {
    children?: React.ReactNode;
}

export default function ServerComponentCopy({children}: ServerComponentProps) {
    console.log('Server Component Copy')
    return (
    <div>
        <span>Server Component Copy</span>
        {children}
    </div>
    )
}