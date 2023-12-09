import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "./App";
import {ThemeProvider} from "@mui/material";
import {PurpleTheme} from "./Purpletheme.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={PurpleTheme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>
)
