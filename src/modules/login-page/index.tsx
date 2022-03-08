import Form from '../../components/Form';
import Input from '../../components/Input';
import Layout from '../main-layout';
import './style.scss';
import { useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput';

export type RegistrationFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  bio?: string;
};

export const emailPattern = {
  value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  message: 'Enter a valid email address.',
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormFields>();

  const loginForm = [
    {
      id: 'username',
      name: 'username',
      placeholder: 'Username',
      type: 'text',
      rules: {
        required: 'You must enter your username.',
      },
    },
    {
      id: 'password',
      name: 'password',
      placeholder: 'Password',
      type: 'password',
      rules: {
        required: 'You must enter your password.',
      },
    },
    {
      id: 'email',
      name: 'email',
      placeholder: 'Email',
      type: 'text',
      rules: {
        required: 'You must enter your email.',
        pattern: emailPattern
      },
    },
    {
      id: 'phoneNumber',
      name: 'phoneNumber',
      placeholder: 'Phone',
      type: 'text',
      rules: {
        required: 'You must enter your phone number.',
      },
    },
  ];

  const renderLoginForm = (): JSX.Element[] => {
    return loginForm.map((field: any, i) => {
      const { placeholder, type, rules, name, id } = field;
      return (
        <FormInput<RegistrationFormFields>
          key={i}
          id={id}
          type={type}
          name={name}
          label={placeholder}
          placeholder={placeholder}
          className="mb-2 form-control"
          register={register}
          rules={rules}
          errors={errors}
        />
      );
    });
  };

  const onSubmit = handleSubmit((data) => {
    console.log('submitting...', data);
  });

  return (
    <div className="login-page__container overflow-hidden">
      <Layout>
        <div className="body__page">
          <div className="container d-flex align-items-center justify-content-center flex-column w-100 h-100">
            <Form submit={onSubmit}>
              <h6 className="text-center">Login Form</h6>
              {renderLoginForm()}
            </Form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default LoginPage;
