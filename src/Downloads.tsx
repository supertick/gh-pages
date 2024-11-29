import React from "react"

const Downloads: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Downloads</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        <a href="/linux-app" target="_blank" rel="noopener noreferrer">
          <img src="/os-linux.png" width="48" alt="Download Linux App" style={{ width: "100px", height: "100px" }} />
        </a>
        <a href="/windows-app" target="_blank" rel="noopener noreferrer">
          <img src="/os-win.png" width="48" alt="Download Windows App" style={{ width: "100px", height: "100px" }} />
        </a>
        <a href="/mac-app" target="_blank" rel="noopener noreferrer">
          <img src="/os-mac.png" width="48" alt="Download Mac App" style={{ width: "100px", height: "100px" }} />
        </a>
      </div>
    </div>
  )
}

export default Downloads
