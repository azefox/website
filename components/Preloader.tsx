import React from "react"

const Preloader: React.FC = () => (
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#fff",
    zIndex: 9999,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw"
  }}>
    {/* Replace below SVG with your logo */}
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="36" stroke="#0070f3" strokeWidth="8" />
      <text x="50%" y="54%" textAnchor="middle" fontSize="24" fill="#0070f3" fontFamily="Arial" dy=".3em">A</text>
    </svg>
    <div style={{
      marginTop: 24,
      width: 40,
      height: 40,
      border: "4px solid #eee",
      borderTop: "4px solid #0070f3",
      borderRadius: "50%",
      animation: "spin 1s linear infinite"
    }} />
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}
    </style>
  </div>
)

export default Preloader
