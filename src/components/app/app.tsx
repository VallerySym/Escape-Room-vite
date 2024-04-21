import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import BookingPage from '../../pages/booking-page/booking-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import LoginPage from '../../pages/login-page/login-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import QuestPage from '../../pages/quest-page/quest-page';
import { Quests } from '../../types/quests';

type AppProps = {
 quests: Quests;
}

function App({quests}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage quests={quests}/>}
          />
          <Route
            path={AppRoute.Booking}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <BookingPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.MyQuests}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <MyQuestsPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Quest}
            element={<QuestPage quests={quests} />}
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
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
