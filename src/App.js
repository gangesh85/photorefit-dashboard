import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
