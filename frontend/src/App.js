import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Portfolio from "./pages/Portfolio";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App noise" data-testid="app-root">
      <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
      </ReactLenis>
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0a0a0a",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#f5f5f5",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "12px",
          },
        }}
      />
    </div>
  );
}

export default App;
