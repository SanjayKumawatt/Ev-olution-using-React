import React, { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {

  const heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "Your passions" },
    { text1: "Given in to", text2: "Your passions" },
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

 useEffect(() => {
  const interval = setInterval(() => {
    setHeroCount((heroCount) => heroCount === 0 ? 2 : heroCount - 1);
  }, 3000);

  return () => clearInterval(interval); // Cleanup on unmount
}, []);



  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}

      />

    </>
  );
}

export default App;