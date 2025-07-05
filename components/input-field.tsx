'use client'

import React from 'react';
import {Field} from "formik";

export interface inputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

export default function inputField({label, id, ...rest}: inputFieldProps) {
  return (
    <div className="flex flex-col">
      {label &&
          (<label htmlFor={id} className="md-2 text-base color-gray-900">
        {label}
      </label>
      )}
      <Field
          {...rest}
          id={id}
          className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      />
    </div>
  );
};
