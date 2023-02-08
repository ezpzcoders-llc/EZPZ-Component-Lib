import { ChangeEventHandler } from 'react';
declare const useForm: (initialState: any, validations: any) => {
    form: any;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleReset: () => void;
    handleImport: (payload: any) => void;
    isFormValid: boolean;
};
export default useForm;
