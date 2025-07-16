import React from 'react';
import {getSummaryPromotions} from "@/lib/api";
import SummaryTable from '@/components/summary-table';
import SummaryTableHeader from '@/components/summary-table-header';
import SummaryTableCell from '@/components/summary-table-cell';
import DashboardCard from '@/components/dashboard-card';

export interface PageProps {}

export default async function Page ({}: PageProps) {
    const data = await getSummaryPromotions()

    return (
        <DashboardCard label='Propmotions'>
            <SummaryTable
                headers={
                <>
                <SummaryTableHeader>Company</SummaryTableHeader>
                <SummaryTableHeader>Name</SummaryTableHeader>
                <SummaryTableHeader align='center'>%</SummaryTableHeader>
                </>
                }
            >
                {data.map(({promotionId, promotionName, companyTitle, discount}) => (
                    <tr key={promotionId}>
                        <SummaryTableCell>{companyTitle}</SummaryTableCell>
                        <SummaryTableCell>{promotionName}</SummaryTableCell>
                        <SummaryTableCell align='center'>{`-${discount}`}</SummaryTableCell>
                    </tr>
                ))}
            </SummaryTable>
        </DashboardCard>
    )
}