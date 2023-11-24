import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "bootstrap-icons/font/bootstrap-icons.css";
import Appbars from "./components/Appbars";
import { Route, Routes } from "react-router-dom";
import Homes from "./components/Homes";
import NavLayout from "./components/NavLayout";
import Search from "./components/Search";
import Explore from "./components/Explore";
import Reels from "./components/Reels";
import Message from "./components/Message";
import MessageLayout from "./components/MessageLayout";
import General from "./components/General";
import Primary from "./components/Primary";
import Request from "./components/Request";
import Notification from "./components/Notification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appbars" element={<Appbars />}>
          <Route index element={<NavLayout />} />
          <Route path="home" element={<Homes />} />
          <Route path="search" element={<Search />} />
          <Route path="explore" element={<Explore />} />
          <Route path="reels" element={<Reels />} />
          <Route path="messages" element={<Message />}>
            <Route index element={<MessageLayout />} />
            <Route path="primary" element={<Primary />} />
            <Route path="general" element={<General />} />
            <Route path="request" element={<Request />} />
          </Route>
          <Route path="notification" element={<Notification />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
