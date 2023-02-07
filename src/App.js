import Landing from "./Components/Landing/Landing";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
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
import Dashboard from "./Components/Dashboard/Dashboard";
import Features from "./Components/Features/Features";
import ExploreMore from "./Components/ExploreMore/ExploreMore";
import OurMission from "./Components/OurMission/OurMission";
import PptDashboard from "./Components/PptDashboard/PptDashboard";
import Createppt from "./Components/PptDashboard/Createppt";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* <PptDashboard /> */}
      {/* <OurMission /> */}
      {/* {location.pathname.startsWith("/dashboard") ? null : <Nav />} */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/support" element={<Support />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/features" element={<Features />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tAndC" element={<TermsAndConditions />} />
        <Route path="/actAsA" element={<ActAs />} />
        <Route path="/pptdashboard" element={<PptDashboard />} />
        <Route path="/createppt" element={<Createppt />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="home/:id" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {location.pathname.startsWith("/dashboard") ? null : (
        <>
          <ExploreMore />
          <Features />
          <JoinCommunity />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
