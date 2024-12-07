import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Loader from "./Components/Loader/Loader"; // Import Loader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or loading delay
    const timer = setTimeout(() => {
      setLoading(false); // After 2 seconds, loading will stop
    }, 2000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <Loader /> : null} {/* Show loader while loading */}
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
