import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./BookingForm.module.css";

const BookingDate = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <DatePicker
      selected={startDate}
      onChange={(dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
      }}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      dateFormat="dd/MM/yyyy"
      placeholderText="Booking dates*"
      className={style.field}
      minDate={new Date()}
    />
  );
};

export default BookingDate;
