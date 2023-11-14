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
