import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import BookingPage from '../../pages/booking-page/booking-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import LoginPage from '../../pages/login-page/login-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import QuestPage from '../../pages/quest-page/quest-page';
import { getAuthStatus } from '../../store/user-process/user-process.selectors';
import Spinner from '../spinner/spinner';
import { AuthorizationStatus } from '../../const';
import { getQuestIsLoading } from '../../store/quest-process/quest-process.selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isQuestsLoading = useAppSelector(getQuestIsLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isQuestsLoading) {
    return (
      <Spinner />
    );
  }


  return (
    <HelmetProvider>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Booking}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <BookingPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.MyQuests}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyQuestsPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Quest}
          element={<QuestPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Contacts}
          element={<ContactsPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
