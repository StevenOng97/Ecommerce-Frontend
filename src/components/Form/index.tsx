import './style.scss';

const Form = ({ children, submit }: any) => {
  return (
    <form className="form__container form-group" onSubmit={submit}>
      {children}
      <div className="w-100 text-center">
        <button className="btn main-btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
