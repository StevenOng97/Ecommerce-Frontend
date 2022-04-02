import Form from '../../components/Form';
import './style.scss';
import { useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth';
import { useEffect, useState } from 'react';
import ButtonLoader from '../../components/ButtonLoader';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.auth.isLoading);
  const loginError = useSelector((state: any) => state.auth.loginErr);
  const token = useSelector((state: any) => state.auth.token);
  const [btnContext, setBtnContext] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      setBtnContext(<ButtonLoader />);
    } else {
      setBtnContext('Login');
    }
  }, [isLoading]);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token])

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<any>({
    mode: 'all',
  });

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
  ];

  const renderloginForm = (): JSX.Element[] => {
    return loginForm.map((field: any, i) => {
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

    dispatch(login(data));
  });

  return (
    <div
      className={`login-page__container overflow-hidden${isLoading ? ` disabled-page` : ''
        }`}
    >
        <div className="body__page">
          <div className="foreground container d-flex align-items-center justify-content-center flex-column w-100 h-100">
            <Form submit={onSubmit} btnText={btnContext}>
              {renderloginForm()}
              {loginError && (
                <span className="text-danger mb-3 d-flex">{loginError}</span>
              )}
            </Form>
          </div>
        </div>
    </div>
  );
};

export default LoginPage;
