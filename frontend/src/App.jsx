import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import Upload from "./pages/Upload";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import MyNotes from "./pages/MyNotes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/notes" element={<Notes />} />

      <Route path="/upload" element={<Upload />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />

      <Route path="/my-notes" element={<MyNotes />} />
    </Routes>
  );
}

export default App;