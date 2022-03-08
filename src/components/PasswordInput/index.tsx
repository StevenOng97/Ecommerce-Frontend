import React, {
  FC,
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
export type InputType = 'text' | 'password';
export type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  className?: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
>;

const PasswordInput: FC<any> = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, name, label, type = 'password', className = '', placeholder, ...props },
    ref
  ) => {
    const [inputType, setInputType] = useState<string>(type);

    const handleClick = () => {
      if (inputType === 'password') {
        setInputType('text');
      } else {
        setInputType('password');
      }
    };

    return (
      <div className="input-wrapper position-relative">
        <input
          id={id}
          ref={ref}
          name={name}
          type={inputType}
          aria-label={label}
          placeholder={placeholder}
          className={className}
          {...props}
        />
        <FontAwesomeIcon className="position-absolute" icon={faEye} onClick={handleClick} />
      </div>
    );
  }
);

export default PasswordInput;
