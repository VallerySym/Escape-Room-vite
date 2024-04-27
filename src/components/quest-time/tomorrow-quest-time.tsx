import { useAppDispatch } from '../../hooks';
import { setFormDate, setFormTime } from '../../store/booking-process/booking-process.slice';
import { BookingInfo } from '../../types/booking-info';

type TomorrowQuestTimeProps = {
  tomorrowQuestTimeProps: BookingInfo;
}

function TomorrowQuestTime({tomorrowQuestTimeProps}: TomorrowQuestTimeProps): React.JSX.Element {
  const dispatch = useAppDispatch();

  const tomorrowHours = tomorrowQuestTimeProps.slots?.tomorrow;

  const handleSetFormDateTime = (data: string) => {
    dispatch(setFormTime(data));
    dispatch(setFormDate('tomorrow'));
  };

  return(
    <div className="booking-form__date-inner-wrapper">
      {tomorrowHours?.map(({time, isAvailable}) => (
        <label className="custom-radio booking-form__date" key={time}>
          <input
            type="radio"
            id="tomorrow11h00m"
            name="date"
            required
            defaultValue="tomorrow11h00m"
            disabled={!isAvailable}
            onChange={() => handleSetFormDateTime(time)}
          />
          <span className="custom-radio__label">{time}</span>
        </label>
      ))}
    </div>
  );
}

export default TomorrowQuestTime;
