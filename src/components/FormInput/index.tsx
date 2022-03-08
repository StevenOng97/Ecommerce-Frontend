import {
  RegisterOptions,
  DeepMap,
  FieldError,
  UseFormRegister,
  Path,
  Controller,
} from 'react-hook-form';
import Input, { InputProps } from '../Input';
import { ErrorMessage } from '@hookform/error-message';
import './style.scss';
import PhoneInput from 'react-phone-input-2';
import PasswordInput from '../PasswordInput';
export type FormInputProps<TFormValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
  label?: Path<TFormValues>;
  control?: any;
  type: any;
} & Omit<InputProps, 'name'>;

const FormInput = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors = {},
  className,
  control,
  label,
  type,
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {
  const errorMessages = errors[name];
  const hasError = !!(errors && errorMessages);

  const renderPhoneInput = () => (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <PhoneInput
            {...(register && register(name, rules))}
            country="vn"
            {...field}
            inputClass="form-control mb-2"
            placeholder="Phone Number"
            onChange={(v) => field.onChange(v)}
            inputProps={props}
          />
        );
      }}
    />
  );

  // const renderInput = () => (
  //   <Input
  //     name={name}
  //     aria-invalid={hasError}
  //     className={className}
  //     {...props}
  //     {...(register && register(name, rules))}
  //   />
  // );

  const renderInput = () => {
    if (type === 'password') {
      return (
        <PasswordInput
          name={name}
          aria-invalid={hasError}
          className={className}
          {...props}
          {...(register && register(name, rules))}
        />
      );
    } else {
      return (
        <Input
          name={name}
          aria-invalid={hasError}
          className={className}
          {...props}
          {...(register && register(name, rules))}
        />
      );
    }
  };

  return (
    <div aria-live="polite" className="mb-3 position-relative">
      {
        <p className="mb-1">
          <span className="text-secondary">{label}</span>
          {!rules?.required && (
            <span className="text-secondary"> - Optional</span>
          )}
        </p>
      }
      {name === 'phoneNumber' ? renderPhoneInput() : renderInput()}
      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => (
          <small className="mb-0 text-danger error-text">
            {message || 'Your password is not the same'}
          </small>
        )}
      />
    </div>
  );
};

export default FormInput;
