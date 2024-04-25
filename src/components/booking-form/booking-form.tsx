import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReservedQuests, postFormData } from '../../store/api-actions';
import { setFormChildren, setFormPeopleCount, setFormPerson, setFormPhone } from '../../store/booking-process/booking-process.slice';
import { getQuestFormData } from '../../store/booking-process/booking-process.selectors'
import { BookingInfo } from '../../types/booking-info';
import TodayQuestTime from '../quest-time/today-quest-time';
import TomorrowQuestTime from '../quest-time/tomorrow-quest-time';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AppRoute } from '../../const';
import { Quest } from '../../types/quest';

type BookingFormProps = {
  bookingQuestInfo: BookingInfo[];
  selectedQuestPlace: BookingInfo;
  isWithChildren: boolean;
  detailedQuest: Quest;
}

type FormValues = {
  name: string;
  tel: string;
  person: number;
}


function BookingForm(bookingFormProps: BookingFormProps): React.JSX.Element {

  const {bookingQuestInfo, selectedQuestPlace, isWithChildren, detailedQuest} = bookingFormProps;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formData = useAppSelector(getQuestFormData);

  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<FormValues>({mode: 'onChange'});

  const postData = {
    postData: formData,
    id: detailedQuest.id
  };

  const onSubmitForm: SubmitHandler<FormValues> = () => {
    dispatch(postFormData(postData));
    dispatch(fetchReservedQuests());
    reset();
    navigate(AppRoute.MyQuests);
  };

  const handleSetContactPersonName = (data: string) => {
    dispatch(setFormPerson(data));
  };

  const handleSetPhone = (data: string) => {
    dispatch(setFormPhone(data));
  };

  const handleSetPeopleCount = (data: number) => {
    dispatch(setFormPeopleCount(data));
  };

  const handleSetIsWhithChildren = () => {
    dispatch(setFormChildren());
  };

  return (
    <form
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      onSubmit={(evt) => void handleSubmit(onSubmitForm)(evt)}
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          {bookingQuestInfo.length && <TodayQuestTime todayQuestTimeProps={selectedQuestPlace}/>}
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          {bookingQuestInfo.length && <TomorrowQuestTime tomorrowQuestTimeProps={selectedQuestPlace}/>}
        </fieldset>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">
              Ваше имя
          </label>
          <input
            {...register('name', {
              required: 'Поле обязательно к заполнению',
              pattern: new RegExp('[А-Яа-яЁёA-Za-z]{1,}'),
              minLength: {
                value: 1,
                message: 'Минимум один символ',
              },
              maxLength: {
                value: 15,
                message: 'Имя должно быть не более 15-ти символов',
              },
            })}
            type="text"
            id="name"
            placeholder="Имя"
            onInput={(evt: React.ChangeEvent<HTMLInputElement>) => handleSetContactPersonName(evt.target.value)}
          />
          <div>{errors?.name && <p style={{color: 'red'}}>{errors.name.message}</p>}</div>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">
              Контактный телефон
          </label>
          <input
            {...register('tel', {
              required: 'Поле обязательно к заполнению',
              pattern: {
                value: new RegExp('[0-9]{10,}'),
                message: 'Неправильный формат номера',
              }
            })}
            type="tel"
            id="tel"
            placeholder="Телефон"
            onInput={(evt: React.ChangeEvent<HTMLInputElement>) => handleSetPhone(evt.target.value)}
          />
          <div>{errors?.tel && <p style={{color: 'red'}}>{errors.tel.message}</p>}</div>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">
              Количество участников
          </label>
          <input {...register('person', {
            required: 'Поле обязательно к заполнению',
            max: {
              value: detailedQuest.peopleMinMax[1],
              message: 'укажите корректное количество участников'
            },
            min: {
              value: detailedQuest.peopleMinMax[0],
              message: 'укажите корректное количество участников'
            }
          })}
          type="number"
          id="person"
          placeholder="Количество участников"
          onInput={(evt: React.ChangeEvent<HTMLInputElement>) => handleSetPeopleCount(Number(evt.target.value))}
          />
          <div>{errors?.person && <p style={{color: 'red'}}>{errors.person.message}</p>}</div>
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            type="checkbox"
            id="children"
            name="children"
            onChange={() => handleSetIsWhithChildren()}
            checked={isWithChildren}
          />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span>
          <span className="custom-checkbox__label">
              Со&nbsp;мной будут дети
          </span>
        </label>
      </fieldset>
      <button
        className="btn btn--accent btn--cta booking-form__submit"
        type="submit"
        disabled={!isValid}
      >
          Забронировать
      </button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
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
  );
}

export default BookingForm;
