// import React from "react";
// import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
// import CatchyStatement from "./components/CatchyStatement";
// import Footer from "./components/Footer";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <SearchBar />
//       <CatchyStatement />
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
// import CatchyStatement from "./components/CatchyStatement";
// import Footer from "./components/Footer";
// import BackToTopButton from "./components/BackToTopButton";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <SearchBar />
//       <CatchyStatement />
//       <BackToTopButton />
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import FeatureCards from "./components/FeatureCards";
// import Footer from "./components/Footer";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <HeroSection />
//       <FeatureCards />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureCards from "./components/FeatureCards";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SearchBar />
      <FeatureCards />
      <Footer />
    </div>
  );
};

export default App;
