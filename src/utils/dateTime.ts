import { COUNTRIES, TIME_ZONES } from "./constants";

const padWithZero = (num: number) => `0${num}`.slice(-2);

export const getTimeInDisplayFormat = (date: Date = new Date()) =>
  `${padWithZero(date.getHours())}:${padWithZero(date.getMinutes())}`;

export const getDisplayTimeZone = (date: Date = new Date()) => {
  try {
    const time = date.toTimeString();
    return time
      .slice(time.indexOf("(") + 1, time.indexOf(")"))
      .split(" ")
      .map((word) => word.charAt(0))
      .join("");
  } catch (e) {
    console.error("getDisplayTimeZone: Invalid date passed");
    return "";
  }
};

export const getDayOfTheWeek = () => {
  return new Date().getDay() + 1;
};

export const getDayOfYear = (
  currentDate: Date = new Date(),
  startYear: number = new Date().getFullYear()
) => {
  const start = new Date(startYear, 0, 0);
  const diffInMillis =
    currentDate.getTime() -
    start.getTime() +
    (start.getTimezoneOffset() - currentDate.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diffInMillis / oneDay);
  return day;
};

export const getWeekOfYear = (
  currentDate: Date = new Date(),
  startYear: number = new Date().getFullYear()
) => {
  const start = new Date(startYear, 0, 0);
  const diffInMillis =
    currentDate.getTime() -
    start.getTime() +
    (start.getTimezoneOffset() - currentDate.getTimezoneOffset()) * 60 * 1000;
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  const week = Math.floor(diffInMillis / oneWeek);
  return week;
};

export const getCurrentTimezone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export const getStateFromTimeZone = () => {
  const timezone = getCurrentTimezone();
  if (timezone === "" || !timezone) {
    return "";
  }

  const state = timezone.split("/")[1].replace("_", " ");
  return state;
};

export const getCountryFromTimeZone = () => {
  const timezone = getCurrentTimezone();
  if (timezone === "" || !timezone) {
    return "";
  }
  const timezoneObject: {
    u?: number;
    c?: string[];
    a?: string;
    r?: number;
  } = TIME_ZONES[timezone as keyof typeof TIME_ZONES];

  let _country = "";
  if (timezoneObject.c && timezoneObject.c.length > 0) {
    _country = COUNTRIES[timezoneObject.c[0] as keyof typeof COUNTRIES];
  }

  return _country;
};
