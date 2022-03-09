import Button from '../Button/Button';
import './style.scss';

const Form = ({ children, submit, btnText = "Submit" }: any) => {
  return (
    <form className="form__container form-group" onSubmit={submit}>
      {children}
      <div className="w-100 text-center">
        <Button
          className="main-btn"
          type="submit"
          context={btnText}
        />
      </div>
    </form>
  );
};

export default Form;
