/// <reference types="react" />
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
export default TextField;
