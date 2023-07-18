import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/Users/User";

function App() {
  const token = useSelector((state) => state.signIn.token);
  console.log(token, "app");
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {token !== "" && <Route path="/user" element={<User />} />}
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
