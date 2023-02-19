import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert message="This is working" />

          <Routes>
            <Route path="/Home" element={<Home />} />

            <Route path="About" element={<About />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
