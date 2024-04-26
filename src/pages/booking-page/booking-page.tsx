import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import BookingForm from '../../components/booking-form/booking-form';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailedQuest,getIsWithChildrenFormData, getBookingQuestInfo, getSelectedQuestPlace} from '../../store/booking-process/booking-process.selectors';
import { fetchBookingQuestInfo } from '../../store/api-actions';
import { setQuestPlaceId,setFormPlaceId } from '../../store/booking-process/booking-process.slice';

function BookingPage(): JSX.Element {
  const {id} = useParams();

  const dispatch = useAppDispatch();
  const detailedQuest = useAppSelector(getDetailedQuest);
  const isWithChildren = useAppSelector(getIsWithChildrenFormData);

  useEffect(() => {
    if (id) {
      dispatch(fetchBookingQuestInfo(id));
      dispatch(setQuestPlaceId(id));
      dispatch(setFormPlaceId(id));
    }
  }, [id, dispatch, detailedQuest.id]);

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
                  {/* <Map locations={selectedQuestPlace.location.coords} /> */}
                </div>
              </div>
              <p className="booking-map__address">
                {selectedQuestPlace?.location.address}
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
