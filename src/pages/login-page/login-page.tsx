import { Helmet } from 'react-helmet-async';
import { useRef, FormEvent, useEffect, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthorizationStatus } from '../../const';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { getAuthStatus } from '../../store/user-process/user-process.selectors';
import { AuthInfo } from '../../types/auth-info';

const validateEmail = (email: string): boolean =>
  /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email);

const validatePassword = (password: string): boolean =>
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.{3,15}$)/.test(password);

const validate = (formData: AuthInfo): boolean => {
  if (!validateEmail(formData.email)) {
    return false;
  }
  if (!validatePassword(formData.password)) {
    return false;
  }

  return true;
};

function LoginPage(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  const authStatus = useAppSelector(getAuthStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(-2);
    }
  }, [authStatus, navigate]);

  const [isSubmitButtonOk, setIsSubmitButtonOk] = useState(false);
  const [formData, setFormData] = useState<AuthInfo>({
    email: '',
    password: '',
  });

  const handleTextChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    if (validate({ ...formData, [name]: value })) {
      setIsSubmitButtonOk(true);
    } else {
      setIsSubmitButtonOk(false);
    }
  };

  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape Room. Login.</title>
      </Helmet>
      <Header />
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-size-m.jpg"
              srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <form
              className="login-form"
              action="https://echo.htmlacademy.ru/"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">
                      E&nbsp;–&nbsp;mail
                    </label>
                    <input
                      onChange={handleTextChange}
                      value={formData.email}
                      ref={loginRef}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Адрес электронной почты"
                      required
                    />
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">
                      Пароль
                    </label>
                    <input
                      onChange={handleTextChange}
                      value={formData.password}
                      ref={passwordRef}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Пароль"
                      required
                    />
                  </div>
                </div>
                <button
                  className="btn btn--accent btn--general login-form__submit"
                  type="submit"
                  disabled={!isSubmitButtonOk}
                >
                  Войти
                </button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input
                  type="checkbox"
                  id="id-order-agreement"
                  name="user-agreement"
                  required
                />
                <span className="custom-checkbox__icon">
                  <svg width={20} height={17} aria-hidden="true">
                    <use xlinkHref="#icon-tick" />
                  </svg>
                </span>
                <span className="custom-checkbox__label">
                  Я&nbsp;согласен с
                  <a className="link link--active-silver link--underlined" href="#">
                    правилами обработки персональных данных
                  </a>
                  &nbsp;и пользовательским соглашением
                </span>
              </label>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default LoginPage;
