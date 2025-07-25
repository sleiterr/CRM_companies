import React from 'react';
import Link from 'next/link';
import {getSummaryStats} from "@/lib/api";
import StatCard, {StatCardType} from "@/components/stat-card";

export interface PageProps {}

const labelByStat = {
    promotions: 'Total promotions',
    categories: 'Total categorises',
    newCompanies: 'New companies',
    activeCompanies: 'Total active companies',
}

export default async function Page({}: PageProps) {
    const data = await getSummaryStats();

    return (
        <div className='grid grid-cols-12 gap-5'>
            {(Object.keys(labelByStat) as (keyof typeof data)[]).map((key) =>(
                <Link href={`/dashboard/${key}`} key={key} className='col-span-3'>
<StatCard
    type={StatCardType.Gradient}
    label={labelByStat[key]}
    counter={data[key]}
/>
                </Link>
            ))}
        </div>
    )
}