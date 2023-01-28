import submitForm from "../utils/submitForm"

export default function EmailSignUp() {

  return (
    <div className="email-sign-up">
      <h2 className="email-sign-up__title">Get early access today</h2>

      <p className="email-sign-up__body">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>

      <form className="email-sign-up__form">
        <input
          type="email"
          aria-label="enter email"
          placeholder="email@example.com"
          className="form__input"
          id="form-input"
        />
        <small id="error-message"></small>
        <button type="submit" className="form__button" onClick={submitForm}>
          Get Started For Free
        </button>
      </form>
    </div>
  );
}
