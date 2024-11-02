import { Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Hero from "./components/Hero";
import TopDestinations from "./components/TopDestinations";
import LatestStories from "./components/LatestStories";
import TrekkersHighlight from "./components/TrekkersHighlight";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App  bg-au-chico-700 bg-opacity-15 selection:text-white selection:bg-au-chico-500 ">
      <div className="px-2">
        {" "}
        <Header />
        <Hero />
        <TopDestinations />
        <LatestStories />
        <TrekkersHighlight />
      </div>
      <Newsletter />
      <Footer />

      <div className="bg-black h-20 w-full text-center pt-3 sm:pt-0 sm:flex items-center justify-center text-sm text-white ">Made With ❤ By <a href="https://github.com/excellar-BX" className=" underline mx-1 " >Excellence</a> and designed by Tisha Saha
      </div>

      {/* <Router>
      <Routes>
        <Route path='path' element={} />
        
      </Routes>
     </Router> */}
    </div>
  );
}

export default App;
