import Landing from "./Components/Landing/Landing";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Login from "./Components/Login/Login";
import Support from "./Components/Support/Support";
import Pricing from "./Components/Pricing/Pricing";
import AboutUs from "./Components/AboutUs/AboutUs";
import Profile from "./Components/Profile/Profile";
import Privacy from "./Components/Privacy/Privacy";
import TermsAndConditions from "./Components/Terms&Conditions/TermsAndConditions";
import ActAs from "./Components/ActAsA/ActAs";
import PageNotFound from "./Components/404Page/404Page";
import Footer from "./Components/Footer/Footer";
import JoinCommunity from "./Components/JoinCommunity/JoinCommunity";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/support" element={<Support />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tAndC" element={<TermsAndConditions />} />
        <Route path="/actAsA" element={<ActAs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <JoinCommunity />
      <Footer />
    </div>
  );
}

export default App;
