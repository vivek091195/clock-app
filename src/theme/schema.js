import backgroundDayTimeImage from "../static/assets/desktop/bg-image-daytime.jpg";
import backgroundNightTimeImage from "../static/assets/desktop/bg-image-nighttime.jpg";
import { COLORS } from "../static/styles/colors";
import { THEMES_ENUM } from "../utils/constants";

export const THEME_SCHEMA = {
  data: {
    [THEMES_ENUM.LIGHT]: {
      id: "T_001",
      name: THEMES_ENUM.LIGHT,
      backgroundImage: backgroundDayTimeImage,
      colors: {
        text: `${COLORS.WHITE}`,
        button: {
          text: `${COLORS.DARK_GRAY}`,
          background: `${COLORS.WHITE}`,
        },
        panel: {
          background: "rgba(255, 255, 255, 0.75)",
          text: `${COLORS.DARK_GRAY}`,
        },
        divider: {
          background: `${COLORS.DARK_GRAY}`,
        },
      },
    },
    [THEMES_ENUM.DARK]: {
      id: "T_002",
      name: THEMES_ENUM.DARK,
      backgroundImage: backgroundNightTimeImage,
      colors: {
        text: `${COLORS.WHITE}`,
        button: {
          text: `${COLORS.DARK_GRAY}`,
          background: `${COLORS.WHITE}`,
        },
        panel: {
          background: "rgba(0, 0, 0, 0.75)",
          text: `${COLORS.WHITE}`,
        },
        divider: {
          background: `${COLORS.WHITE}`,
        },
      },
    },
  },
};
