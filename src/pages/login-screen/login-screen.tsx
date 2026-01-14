import Logo from '../../components/logo/logo.tsx';
import {loginAction} from '../../store/api-actions.ts';
import {useAppDispatch} from '../../hooks';
import {FormEvent, useRef} from 'react';

function LoginScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginFormRef = useRef<HTMLFormElement | null>(null);
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginFormRef.current === null) {
      return;
    }
    const formData = new FormData(loginFormRef.current);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    dispatch(loginAction({
      email: email,
      password: password,
    }));


  };
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit} ref={loginFormRef}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>

  );
}

export default LoginScreen;
