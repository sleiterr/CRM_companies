import React from 'react'
import clsx from 'clsx';
import styles from './styles.module.css'

export enum StatCardType {
    Dark = 'dark',
    Gradient = 'gradient',
}

export interface StatCardProps {
    type: StatCardType,
    label: string,
    counter: number,
    isEven?: boolean,
}

export default function StatCard({type, label, counter, isEven}: StatCardProps) {
    return (
        <div
            className={clsx(
                'rounded',
                type === StatCardType.Dark &&
                [
                    'pt-3 px-3 bg-gray-900 text-right',
                    isEven ? 'text-lime-200' : 'text-purple-200'],

                type === StatCardType.Gradient && [
                    styles.gradient,
                    'p-7 bg-purple-200 text-gray-900 text-left',
                ],
            )}
        >
            <p
                className={clsx(
                    'text-left before:w-4 before:h-0.5 before:rounded',
                    type === StatCardType.Dark &&
                    'text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50',
                    type === StatCardType.Gradient &&
                    'text-xs mb-5 before:inline-block before:mr-2 before:align-middle before:bg-gray-900',
                )}
            >
                {label}
            </p>
            <p className='text-6xl font-semibold'>{counter}</p>
        </div>
    )
}