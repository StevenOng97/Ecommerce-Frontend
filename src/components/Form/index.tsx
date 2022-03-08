import './style.scss';

const Form = ({ children, submit, btnText = "Submit" }: any) => {
  return (
    <form className="form__container form-group" onSubmit={submit}>
      {children}
      <div className="w-100 text-center">
        <button className="btn main-btn" type="submit">
          {btnText}
        </button>
      </div>
    </form>
  );
};

export default Form;
