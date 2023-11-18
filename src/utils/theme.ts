import { THEMES_ENUM } from "./constants";

export const changeThemeDependingOnTime = (
  hourOfDay: number = new Date().getHours()
) => {
  if (hourOfDay >= 8 && hourOfDay < 18) {
    return THEMES_ENUM.LIGHT;
  } else {
    return THEMES_ENUM.DARK;
  }
};
