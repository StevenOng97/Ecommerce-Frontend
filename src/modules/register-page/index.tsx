import Form from '../../components/Form';
import Layout from '../main-layout';
import './style.scss';
import { useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput';
import { Pattern } from '../../constants/patterns';

const emailPattern = {
  value: Pattern.email,
  message: 'Enter a valid email address.',
};

const passwordPattern = {
  value: Pattern.password,
  message:
    'Your password should contains at least 8 characters, at least one letter and one number ',
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm<any>();

  const registrationForm = [
    {
      id: 'username',
      name: 'username',
      placeholder: 'Username',
      type: 'text',
      rules: {
        required: 'You must enter your username.',
        maxLength: {
          value: 20,
          message: 'Your username is too long',
        },
        minLength: {
          value: 6,
          message: 'Your username is too short',
        },
      },
    },
    {
      id: 'password',
      name: 'password',
      placeholder: 'Password',
      type: 'password',
      rules: {
        required: 'You must enter your password.',
        pattern: passwordPattern,
        maxLength: {
          value: 16,
          message: 'Your password is too long',
        },
      },
    },
    {
      id: 'confirmPassword',
      name: 'confirmPassword',
      placeholder: 'Confirm Password',
      type: 'password',
      rules: {
        required: 'You must enter your confirm password.',
        validate: {
          samePassword: (value: string) =>
            getValues().password === value || 'Your passwords are not matching',
        },
      },
    },
    {
      id: 'email',
      name: 'email',
      placeholder: 'Email',
      type: 'text',
      rules: {
        required: 'You must enter your email.',
        pattern: emailPattern,
      },
    },
    {
      id: 'phoneNumber',
      name: 'phoneNumber',
      placeholder: 'Phone Number',
      type: 'text',
      rules: {
        required: 'You must enter your phone number.',
        minLength: { value: 10, message: 'Phone Number is invalid' },
      },
    },
  ];

  const renderRegistrationForm = (): JSX.Element[] => {
    return registrationForm.map((field: any, i) => {
      const { placeholder, type, rules, name, id } = field;
      return (
        <FormInput<any>
          key={i}
          id={id}
          type={type}
          name={name}
          label={placeholder}
          className="mb-2 form-control"
          register={register}
          rules={rules}
          errors={errors}
          control={control}
        />
      );
    });
  };

  const onSubmit = handleSubmit((data) => {
    Object.keys(data).forEach((key, index) => {
      data[key] = data[key].trim();
    });

    console.log('data', data);
  });

  return (
    <div className="register-page__container overflow-hidden">
      <Layout>
        <div className="body__page">
          <div className="foreground container d-flex align-items-center justify-content-center flex-column w-100 h-100">
            <Form submit={onSubmit} btnText="Register">
              {renderRegistrationForm()}
            </Form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default RegisterPage;
