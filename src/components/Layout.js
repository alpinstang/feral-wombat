// components/Layout.js
import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./Header";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
};

const Layout = (props) => (
  <ThemeProvider theme={darkTheme}>
    <div className="Layout">
      <Header />
      <div className="Content" style={contentStyle}>
        {props.children}
      </div>
    </div>
  </ThemeProvider>
);

export default Layout;
