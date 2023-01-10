import Landing from "./Components/Landing/Landing";
import "./App.css";
import Services from "./Components/Services/Services";
import Content from "./Components/Contents/Content";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Landing />
      <Services />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
