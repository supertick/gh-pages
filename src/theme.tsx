import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    background: {
      default: "#0c161c" // Black background
    },
    primary: {
      main: "#90caf9" // Light blue for primary elements
    },
    secondary: {
      main: "#f48fb1" // Light pink for secondary elements
    },
    text: {
      primary: "#c5c5c0", // White text for primary content
      secondary: "#90caf9" // Light blue text for secondary content
    }
  }
})

export default theme
