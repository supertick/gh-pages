import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import { Amplify } from "aws-amplify"
import React from "react"
import ReactDOM from "react-dom/client"
import outputs from "../amplify_outputs.json"
import App from "./App.tsx"
import "./index.css"
import theme from "./theme.tsx"

Amplify.configure(outputs)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
