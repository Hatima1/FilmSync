import { useState } from "react";
import DatePicker from "tailwind-datepicker-react";

function DataPicker() {
  const [selectDate, setSelectDate] = useState(null);
  return <DatePicker label="Basic date picker" />;
}

export default DataPicker;
