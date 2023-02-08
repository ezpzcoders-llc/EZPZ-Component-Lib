/// <reference types="react" />
import { ChangeEventHandler } from 'react';

interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

type TextFieldProps = {
    field: {
        value: string;
        error: string;
    };
    type: 'text' | 'email' | 'password' | 'number' | 'textarea';
    id: string;
    name: string;
    label: string;
    onChange: any;
    disabled?: boolean;
};
declare const TextField: ({ field, type, id, name, label, onChange, disabled }: TextFieldProps) => JSX.Element;

interface props {
    field: {
        value: string;
        error: string;
    };
    id: string;
    name: string;
    label: string;
    onChange: any;
    disabled?: boolean;
    minDate?: Date;
}
declare const DateField: ({ field, label, onChange, name, id, minDate }: props) => JSX.Element;

declare const useForm: (initialState: any, validations: any) => {
    form: any;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleReset: () => void;
    handleImport: (payload: any) => void;
    isFormValid: boolean;
};

export { Button, DateField, TextField, useForm };
