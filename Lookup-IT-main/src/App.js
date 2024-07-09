import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cloud from "./pages/cloud_solutions/Cloud";
import Offshore from "./pages/off_shore/Offshore";
import Home from "./pages/home/Home.jsx";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header.jsx";
import Testimonials from "./pages/testimonials/Testimonials";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio/Portfolio";
import Telicom from "./pages/telecom/Telicom";
import Contact from "./pages/contact/Contact";
 import Quote from "./pages/quote/Quote";
import Retail from "./pages/retail/Retail";
import Maintan from "./pages/maintanance/Maintan";
import Serv from "./pages/services/Serv";
import Tour from "./pages/tour/Tour";
import Blockchain from "./pages/BlockChain/BlockChainimages/Blockchain";
import Careers from "./pages/Careers/Careers";
import Ecommerce from "./pages/Ecommerce/Ecommerce";
import EcommerceDevelopment from "./pages/EcommerceDevelopment/EcommerceDevelopment";
import Jobportal from "./pages/Jobportal/Jobportal";
import Recentblogs from "./pages/Recentblogs/Recentblogs";
import Sports from "./pages/Sports/Sports";
import { About } from "./pages/home/About/About";
// import { Technologies } from "./pages/Technologies/Technologies";
import Entertainment from "./pages/entertainment/Entertainment";
import Hospatility from "./pages/hospatility/Hospatility";
import Manufacture from "./pages/manufacture/Manufacture";
import Map from "./pages/map/Map";
import Mobile from "./pages/mobileapp_development/Mobile";
import Professional from "./pages/professional_services/Professional";
import RealEstate from "./pages/real_estate/RealEstate";
import University from "./pages/university/University";
import { Technologies } from "./pages/home/Technologies/Technologies";
import Expertise from "./pages/Expertise/Expertise";
import 'bootstrap/dist/css/bootstrap.min.css';
import Redbox from "./pages/Redbox/Redbox";

const App = () => {
  return (
    <div>
      <Router>       
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/about" element={<About/>}></Route> */}
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/offshore" element={<Offshore />}></Route>
          <Route path="/cloud" element={<Cloud />}></Route>
          <Route path="/testimonials" element={<Testimonials />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/mobile" element={<Mobile />}></Route>
          <Route path="/blockchain" element={<Blockchain />}></Route>
          <Route path="/serv" element={<Serv />}></Route>
          <Route path="/ecomercedevelopment" element={<EcommerceDevelopment/>}></Route>
          <Route path="/ecommerce" element={<Ecommerce/>}></Route>
          <Route path="/jobportal" element={<Jobportal/>}></Route>
          <Route path="/professional" element={<Professional/>}></Route>
          <Route path="/sports" element={<Sports/>}></Route>
          <Route path="/university" element={<University/>}></Route>
          <Route path="/entertainment" element={<Entertainment/>}></Route>
          <Route path="/manufacture" element={<Manufacture/>}></Route>
          <Route path="/realEstate" element={<RealEstate/>}></Route>
          <Route path="/telicom" element={<Telicom/>}></Route>
          <Route path="/hospatility" element={<Hospatility/>}></Route>
          <Route path="/map" element={<Map/>}></Route>
          <Route path="/retail" element={<Retail/>}></Route>
          <Route path="/tour" element={<Tour/>}></Route>
          <Route path="/careers" element={<Careers/>}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/expertise" element={<Expertise/>}></Route>
          <Route path="/recentblogs" element={<Recentblogs/>}></Route>
          <Route path="/Maintan" element={<Maintan/>}></Route>
          <Route path="/Quote" element={<Quote/>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
};
export default App;
