import { getDisplayTimeZone, getTimeInDisplayFormat } from "../dateTime";

describe("dateTime util tests", () => {
  it("tests time display function", () => {
    const actual = getTimeInDisplayFormat(new Date("11/09/2023 09:15:45"));
    const expected = "09:15";
    expect(actual).toStrictEqual(expected);
  });

  it("tests time display function 2", () => {
    const actual = getTimeInDisplayFormat(new Date("11/09/2023 23:59:59"));
    const expected = "23:59";
    expect(actual).toStrictEqual(expected);
  });

  it("tests time display function 3", () => {
    const actual = getTimeInDisplayFormat(new Date("12/12/2023 00:00:00"));
    const expected = "00:00";
    expect(actual).toStrictEqual(expected);
  });

  it("tests getDisplayTimeZone", () => {
    const actual = getDisplayTimeZone(new Date("11/09/2023 09:15:45"));
    const expected = "IST";
    expect(actual).toStrictEqual(expected);
  });

  it("tests getDisplayTimeZone 2", () => {
    const actual = getDisplayTimeZone();
    const expected = "IST";
    expect(actual).toStrictEqual(expected);
  });
});
