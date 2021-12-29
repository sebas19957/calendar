import { ThemeProvider } from "@material-ui/core";

import theme from "./config/theme";

import GeneralAppRotes from "./routes/general-app-routes";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GeneralAppRotes />
    </ThemeProvider>
  );
};
