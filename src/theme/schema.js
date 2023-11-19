import { COLORS } from "../static/styles/colors";
import { THEMES_ENUM } from "../utils/constants";
import desktopDayImage from "../static/assets/desktop/bg-image-daytime.jpg";
import desktopNightImage from "../static/assets/desktop/bg-image-nighttime.jpg";
import tabletDayImage from "../static/assets/tablet/bg-image-daytime.jpg";
import tabletNightImage from "../static/assets/tablet/bg-image-nighttime.jpg";
import mobileDayImage from "../static/assets/mobile/bg-image-daytime.jpg";
import mobileNightImage from "../static/assets/mobile/bg-image-nighttime.jpg";

export const THEME_SCHEMA = {
  data: {
    [THEMES_ENUM.LIGHT]: {
      id: "T_001",
      name: THEMES_ENUM.LIGHT,
      device: {
        desktop: {
          backgroundImage: desktopDayImage,
        },
        tablet: {
          backgroundImage: tabletDayImage,
        },
        mobile: {
          backgroundImage: mobileDayImage,
        },
      },
      colors: {
        text: `${COLORS.WHITE}`,
        quote: {
          text: `${COLORS.BLACK}`,
        },
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
      device: {
        desktop: {
          backgroundImage: desktopNightImage,
        },
        tablet: {
          backgroundImage: tabletNightImage,
        },
        mobile: {
          backgroundImage: mobileNightImage,
        },
      },
      colors: {
        text: `${COLORS.WHITE}`,
        quote: {
          text: `${COLORS.WHITE}`,
        },
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
