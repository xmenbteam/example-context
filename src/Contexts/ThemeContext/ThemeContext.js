const colours = {
  darkest: "#001219",
  dark: "#005f73",
  primary: "#9b2226",
  secondary: "#ee9b00",
  textPrimary: "#001219",
  lighter: "#94d2bd",
  lightest: "#e9d8a6",
};

export const themes = {
  light: {
    type: "light",
    background: colours.lightest,
    primary: colours.primary,
    secondary: colours.secondary,
    text: colours.darkest,
  },
  dark: {
    type: "dark",
    background: colours.darkest,
    primary: colours.secondary,
    secondary: colours.primary,
    text: colours.lightest,
  },
};

export const initialState = {
  theme: themes.light,
};

export const themeRedFunc = (state, action) => {
  switch (action.type) {
    case "light":
      return { ...state, theme: themes.light };
    case "dark":
      return { ...state, theme: themes.dark };
    default:
      return;
  }
};
