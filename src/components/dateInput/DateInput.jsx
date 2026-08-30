import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./DateInput.module.scss";

function DateInput({ id, field }) {
  return (
    <div className={styles.datePickerWrapper}>
      <DatePicker
        id={id}
        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 3)}
        selected={field.value}
        onChange={(date) => field.onChange(date)}
        showMonthDropdown={false}
        showYearDropdown={false}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => {
          const years = Array.from({ length: 80 }, (_, i) => 1950 + i);
          const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];

          return (
            <div className={styles.calendarContainer}>
              {/* GROUPE GAUCHE */}
              <div className={styles.leftGroup}>
                <button
                  type="button"
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  <FontAwesomeIcon icon={faCaretLeft} />
                </button>
                <button
                  type="button"
                  className={styles.homeIcon}
                  onClick={() => {
                    const today = new Date();
                    changeMonth(today.getMonth());
                    changeYear(today.getFullYear());
                  }}
                >
                  <FontAwesomeIcon icon={faHouse} />
                </button>
              </div>

              {/* GROUPE CENTRE */}
              <div className={styles.centerGroup}>
                <select
                  value={months[date.getMonth()]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <select
                  value={date.getFullYear()}
                  onChange={({ target: { value } }) =>
                    changeYear(Number(value))
                  }
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* GROUPE DROITE */}
              <div className={styles.rightGroup}>
                <button
                  type="button"
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  <FontAwesomeIcon icon={faCaretRight} />
                </button>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default DateInput;
