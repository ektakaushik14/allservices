import Landing from "./Components/Landing/Landing";
import "./App.css";
import Services from "./Components/Services/Services";
import Content from "./Components/Contents/Content";
import Footer from "./Components/Footer/Footer";
import AsAdvertisment from "./Components/ActAsAdvertisement/AsAdvertisment";

function App() {
  return (
    <div className="App">
      <Landing />
      <AsAdvertisment />
      <Services />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
