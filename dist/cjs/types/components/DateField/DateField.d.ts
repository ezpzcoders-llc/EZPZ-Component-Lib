/// <reference types="react" />
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
export default DateField;
