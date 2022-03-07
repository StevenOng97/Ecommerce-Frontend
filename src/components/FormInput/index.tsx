import React from 'react';

import {
  RegisterOptions,
  DeepMap,
  FieldError,
  UseFormRegister,
  Path,
} from 'react-hook-form';
import Input, { InputProps } from '../Input';
import { ErrorMessage } from '@hookform/error-message';

export type FormInputProps<TFormValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & Omit<InputProps, 'name'>;

const FormInput = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors = {},
  className,
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {
  const errorMessages = errors[name];
  const hasError = !!(errors && errorMessages);

  return (
    <div aria-live="polite">
      <Input
        name={name}
        aria-invalid={hasError}
        className={className}
        {...props}
        {...(register && register(name, rules))}
      />
      <ErrorMessage
        errors={errors}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={name as any}
        render={({ message }) => (
          <p className="mb-0 text-danger">{message}</p>
          // <FormErrorMessage className="mt-1">{message}</FormErrorMessage>
        )}
      />
    </div>
  );
};

export default FormInput;
