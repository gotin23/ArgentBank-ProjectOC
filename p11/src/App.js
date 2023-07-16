import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Users from "./pages/Users/Users";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SignIn /> */}
      {/* <Home /> */}
      {/* <Users /> */}\
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
