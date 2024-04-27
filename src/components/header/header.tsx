import Logo from '../logo/logo';
import { Link, NavLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AppRoute } from '../../const';
import { getAuthStatus } from '../../store/user-process/user-process.selectors';
import { AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { setAuthorizationStatusByDefault } from '../../store/user-process/user-process.slice';

function Header(): JSX.Element {
  const authorizationStatusLogged = useAppSelector(getAuthStatus);

  const isLogged = authorizationStatusLogged === AuthorizationStatus.Auth;

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(logoutAction());
    dispatch(setAuthorizationStatusByDefault());
  };

  return (
    <header className="header">
      {isLogged ? (
        <div className="container container--size-l">
          <Logo />
          <nav className="main-nav header__main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <NavLink className="link" to={AppRoute.Main}>Квесты</NavLink>
              </li>
              <li className="main-nav__item">
                <NavLink className="link" to={AppRoute.Contacts}>Контакты</NavLink>
              </li>
              <li className="main-nav__item">
                <NavLink className="link" to={AppRoute.MyQuests}>Мои бронирования</NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__side-nav">
            <a className="btn btn--accent header__side-item" href="#" onClick={handleClick} >Выйти</a>
            <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
          </div>
        </div>
      ) : (
        <div className="container container--size-l">
          <Logo />
          <nav className="main-nav header__main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <NavLink className="link" to={AppRoute.Main}>Квесты</NavLink>
              </li>
              <li className="main-nav__item">
                <NavLink className="link" to={AppRoute.Contacts}>Контакты</NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__side-nav">
            <Link
              className="btn header__side-item header__login-btn"
              to={AppRoute.Login}
            >
              Войти
            </Link>
            <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
