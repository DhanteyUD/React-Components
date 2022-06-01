import * as React from 'react';
import '../App.css';
import SIGNUP from '../models/signup.model';

// SIGN UP FORM - useState
const SignUp = () => {
  const [passwordVisibility, setPasswordVisibility] =
    React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const [signup, setSignup] = React.useState<SIGNUP>({
    fullname: '',
    email: '',
    mobile: '',
    password: '',
  });

  const togglePasswordVisiblity = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      signup.fullname === '' ||
      signup.email === '' ||
      signup.mobile === '' ||
      signup.password === ''
    ) {
      return setError('All fields are required *');
    }
    setError('');
    console.log(signup);
    setSignup({ fullname: '', email: '', mobile: '', password: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignup((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <>
      <main className="signup-container">
        <h1 className="signup-title">SIGN UP</h1>
        <form className="signup-body" onSubmit={handleSubmit}>
          {error && <div className="signup-error">{error}</div>}
          {error && signup.fullname === '' ? (
            <label className="signup-label">
              Fullname<span className="signup-error-a">*</span>
            </label>
          ) : (
            <label className="signup-label">Fullname</label>
          )}
          <input
            className="signup-input"
            type="text"
            name="fullname"
            value={signup.fullname}
            onChange={handleChange}
            placeholder="enter your fullname"
          />
          {error && signup.email === '' ? (
            <label className="signup-label">
              Email<span className="signup-error-a">*</span>
            </label>
          ) : (
            <label className="signup-label">Email</label>
          )}
          <input
            className="signup-input"
            type="email"
            name="email"
            value={signup.email}
            onChange={handleChange}
            placeholder="enter your email"
          />
          {error && signup.mobile === '' ? (
            <label className="signup-label">
              Mobile<span className="signup-error-a">*</span>
            </label>
          ) : (
            <label className="signup-label">Mobile</label>
          )}
          <input
            className="signup-input"
            type="text"
            name="mobile"
            value={signup.mobile}
            onChange={handleChange}
            placeholder="enter your mobile"
          />
          {error && signup.password === '' ? (
            <label className="signup-label">
              Password<span className="signup-error-a">*</span>
            </label>
          ) : (
            <label className="signup-label">Password</label>
          )}
          <div className="signup-password-div">
            <input
              className="signup-input"
              type={passwordVisibility ? 'text' : 'password'}
              name="password"
              value={signup.password}
              onChange={handleChange}
            />
            <input
              className="signup-password-visibility"
              type="checkbox"
              onClick={togglePasswordVisiblity}
            />
          </div>
          <button className="signup-button" type="submit">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default SignUp;

///////////////////////PAGE BREAK///////////////////////////>
