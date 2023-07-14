import "./App.css";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SignIn /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
