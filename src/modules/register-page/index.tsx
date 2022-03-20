import Form from '../../components/Form';
import Layout from '../main-layout';
import './style.scss';
import { useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput';
import { Pattern } from '../../constants/patterns';
import { useDispatch, useSelector } from 'react-redux';
import { register as registerApi } from '../../redux/actions/auth';
import ButtonLoader from '../../components/ButtonLoader';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const usernamePattern = {
  value: Pattern.username,
  message: `Username couldn't contain special character`,
};

const emailPattern = {
  value: Pattern.email,
  message: 'Enter a valid email address.',
};

const passwordPattern = {
  value: Pattern.password,
  message:
    'Your password should contains at least 8 characters, at least one captailize letter and one number',
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.auth.isLoading);
  const registerError = useSelector((state: any) => state.auth.registerErr);
  const registerSuccess = useSelector(
    (state: any) => state.auth.registerSuccess
  );
  const [btnContext, setBtnContext] = useState<any>();

  useEffect(() => {
    if (isLoading) {
      setBtnContext(<ButtonLoader />);
    } else {
      setBtnContext('Register');
    }
  }, [isLoading]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<any>({
    mode: 'all',
  });

  const registrationForm = [
    {
      id: 'username',
      name: 'username',
      placeholder: 'Username',
      type: 'text',
      rules: {
        required: 'You must enter your username.',
        pattern: usernamePattern,
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
            watch('password') === value || 'Your passwords are not matching',
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

    const finalData = JSON.parse(JSON.stringify(data));
    delete finalData.confirmPassword;

    dispatch(registerApi(finalData));
  });

  return (
    <div
      className={`register-page__container overflow-hidden${
        isLoading ? ` disabled-page` : ''
      }`}
    >
      <Layout>
        <div className="body__page">
          <div className="foreground container d-flex align-items-center justify-content-center flex-column w-100 h-100">
            <Form submit={onSubmit} btnText={btnContext}>
              {renderRegistrationForm()}
              {registerError && (
                <span className="text-danger mb-3 d-block">
                  {registerError}
                </span>
              )}
              {registerSuccess && (
                <span className="text-success mb-3 d-block">
                  You've registered successfully. Click here to {''}
                  <Link to="/login" className="text-success fw-bold">
                    Login
                  </Link>
                </span>
              )}
            </Form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default RegisterPage;
