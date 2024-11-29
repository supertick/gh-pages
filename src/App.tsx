import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Modal from "@mui/material/Modal"
import { ThemeProvider } from "@mui/material/styles"
import { useEffect, useState } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Downloads from "./Downloads" // Import the new Downloads component
import theme from "./theme"
import useFetchLatest from "./useFetchLatest"

const App: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState<string>("")
  const { latest } = useFetchLatest()

  useEffect(() => {
    console.log("latest:", latest)
  }, [latest])

  const handleOpen = (image: string) => {
    setCurrentImage(image)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setCurrentImage("")
  }

  const images = [
    { src: "rlx-ai-1.png", caption: "AI integration with your robot" },
    { src: "rlx-arduino.png", caption: "Microcontrollers" },
    { src: "rlx-cv.png", caption: "Easy wizard installations" },
    { src: "rlx-cv3.png", caption: "Vision" },
    { src: "rlx-vosk.png", caption: "Listening capabilities" },
    { src: "rlx-dash-1.png", caption: "Customizable dashboards" }
  ]

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/downloads" element={<Downloads />} />
          <Route
            path="/"
            element={
              <main
                style={{
                  backgroundColor: theme.palette.background.default,
                  color: theme.palette.text.primary,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "20px"
                }}
              >
                <img src="RobotLab-X.png" width="600px" alt="logo" />
                <p>Modern robotics framework with a focus on visualization</p>

                <p />
                <div style={{ display: "flex", gap: "20px" }}>
                  <a href="https://discord.gg/HGwBZdXs" target="_blank" rel="noopener noreferrer">
                    <img src="/discord.png" alt="Discord" width="48" />
                  </a>
                  <a href="https://github.com/RobotLab-X/robotlab-x" target="_blank" rel="noopener noreferrer">
                    <img src="/github.png" alt="GitHub" width="48" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCYYmk8y1_i5aRVI3rMcxIIg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/youtube.png" alt="YouTube" width="48" />
                  </a>
                  <a href="https://www.patreon.com/robotlabx" target="_blank" rel="noopener noreferrer">
                    <img src="/patreon.png" alt="Patreon" width="48" />
                  </a>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px"
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <img src="/os-linux.png" width="96" alt="Download Linux App" />
                    <div style={{ textAlign: "center", marginBottom: "20px" }}>
                      <a
                        href={`https://robotlab-x-repo.s3.us-east-1.amazonaws.com/robotlab-X-${latest.version}-linux-x86_64.zip`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <p>{`robotlab-X-${latest.version}-linux-x86_64.zip`}</p>
                      </a>
                    </div>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <img src="/os-win.png" width="96" alt="Download Windows App" />
                    <div style={{ textAlign: "center", marginBottom: "20px" }}>
                      <a
                        href={`https://robotlab-x-repo.s3.us-east-1.amazonaws.com/robotlab-x-${latest.version}-win.zip`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <p>{`robotlab-x-${latest.version}-win.zip`}</p>
                      </a>
                    </div>
                  </div>

                  {/*
                    <div style={{ textAlign: "center" }}>
                      <img src="/os-mac.png" width="96" alt="Download Mac App" />

                    </div>
                  */}
                  <div style={{ textAlign: "center" }}>
                    <img src="/os-raspi.png" width="96" alt="Download Raspberry Pi App" />
                    <div style={{ textAlign: "center", marginBottom: "20px" }}>
                      <a
                        href={`https://robotlab-x-repo.s3.us-east-1.amazonaws.com/robotlab-X-${latest.version}-linux-arm64.zip`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <p>{`robotlab-X-${latest.version}-linux-arm64.zip`}</p>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: "1200px",
                    marginTop: "40px"
                  }}
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "40px",
                        padding: "20px",
                        backgroundColor: theme.palette.background.default,
                        borderRadius: "8px",
                        boxShadow: theme.shadows[1]
                      }}
                      onClick={() => handleOpen(image.src)}
                    >
                      <img
                        src={image.src}
                        width="800px"
                        height="auto"
                        alt={`thumbnail-${index}`}
                        style={{ cursor: "pointer", objectFit: "cover", borderRadius: "8px" }}
                      />
                      <p style={{ marginTop: "10px" }}>{image.caption}</p>
                    </div>
                  ))}
                </div>

                <Modal open={open} onClose={handleClose}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "auto",
                      maxWidth: "90%",
                      maxHeight: "90%",
                      bgcolor: "background.paper",
                      boxShadow: 24,
                      p: 4,
                      overflow: "auto"
                    }}
                  >
                    <img src={currentImage} alt="full-size" style={{ width: "100%", height: "auto" }} />
                  </Box>
                </Modal>
              </main>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
