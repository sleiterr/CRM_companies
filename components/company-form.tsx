'use client'

import React from "react";
import {Form, Formik} from 'formik'
import Button from "./button";
import LogoUploader from "./logo-uploader";
import InputField from "./input-field";

export type CompanyFieldValues = {
    name: string;
    placeholder: string;
    status: string;
    country: string;
    category: string;
    date: string;
    description: string;
}

const initialValues: CompanyFieldValues = {
    name: '',
    placeholder: '',
    status: '',
    country: '',
    category: '',
    date: '',
    description: '',
}

export interface CompanyFormProps {
    onSubmit: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyForm({onSubmit}: CompanyFormProps) {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form className='flex flex-col gap-10'>
                <p className='mb-0.5 text-xl'>Add new company</p>
                <div className='flex gap-6'>
                    <div className='flex flex-col flex-1 gap-5'>
                        <LogoUploader label="Logo" placeholder='Upload photo'/>
                        <InputField label='Status' placeholder='Status' name='status' />
                        <InputField label='Country' placeholder='Country' name='country' />
                    </div>
                    <div className='flex flex-col flex-1 gap-5'>
                        <InputField label='Name' placeholder='Name' name='name' />
                        <InputField label='Cetegory' placeholder='Cetegory' name='cetegory' />
                        <InputField label='Joined date' placeholder='date' name='date' />
                        <InputField label='Description' placeholder='Description' name='description' />
                    </div>
                </div>
                <Button type='submit'>Add company</Button>
            </Form>
        </Formik>
    )
}