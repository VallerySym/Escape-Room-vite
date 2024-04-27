import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import BookingForm from '../../components/booking-form/booking-form';
import MapBooking from '../../components/map-booking/map-booking';
import { fetchBookingQuestInfo } from '../../store/api-actions';
import { setBookingQuestPlaceId, setFormPlaceId } from '../../store/booking-process/booking-process.slice';
import {
  getDetailedQuest, getIsWithChildrenFormData,
  getBookingQuestInfo, getSelectedQuestPlace
} from '../../store/booking-process/booking-process.selectors';

function BookingPage(): JSX.Element {
  const params = useParams();
  const questId = params.id;

  const dispatch = useAppDispatch();
  const detailedQuest = useAppSelector(getDetailedQuest);
  const isWithChildren = useAppSelector(getIsWithChildrenFormData);

  useEffect(() => {
    if (questId) {
      dispatch(fetchBookingQuestInfo(questId));
      dispatch(setBookingQuestPlaceId(questId));
      dispatch(setFormPlaceId(questId));
    }
  }, [questId, dispatch, detailedQuest.id]);

  const bookingQuestInfo = useAppSelector(getBookingQuestInfo);
  const selectedQuestPlace = useAppSelector(getSelectedQuestPlace);

  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape Room. Booking.</title>
      </Helmet>
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet={detailedQuest.coverImgWebp}
            />
            <img
              src={detailedQuest.coverImg}
              srcSet={detailedQuest.coverImgWebp}
              width={1366}
              height={1959}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">
              Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">
              {detailedQuest.title}
            </p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container">
                  <MapBooking
                    questLocations={bookingQuestInfo}
                    latitude={selectedQuestPlace.location.coords[0]}
                    longitude={selectedQuestPlace.location.coords[1]}
                  />
                </div>
              </div>
              <p className="booking-map__address">
              Вы&nbsp;выбрали:  {selectedQuestPlace.location.address}
              </p>
            </div>
          </div>
          <BookingForm
            bookingQuestInfo={bookingQuestInfo}
            selectedQuestPlace={selectedQuestPlace}
            isWithChildren={isWithChildren}
            detailedQuest={detailedQuest}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BookingPage;
