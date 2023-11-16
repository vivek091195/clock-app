import backgroundDayTimeImage from "../static/assets/desktop/bg-image-daytime.jpg";
import backgroundNightTimeImage from "../static/assets/desktop/bg-image-nighttime.jpg";
import { THEMES_ENUM } from "../utils/constants";

export const THEME_SCHEMA = {
  data: {
    [THEMES_ENUM.LIGHT]: {
      id: "T_001",
      name: THEMES_ENUM.LIGHT,
      backgroundImage: backgroundDayTimeImage,
      colors: {
        text: "#FFFFFF",
        button: {
          text: "#303030",
          background: "#FFFFFF",
        },
      },
    },
    [THEMES_ENUM.DARK]: {
      id: "T_002",
      name: THEMES_ENUM.DARK,
      backgroundImage: backgroundNightTimeImage,
      colors: {
        text: "#FFFFFF",
        button: {
          text: "#303030",
          background: "#FFFFFF",
        },
      },
    },
  },
};
