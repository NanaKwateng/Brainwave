import { useState } from "react";

import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Service from "./components/design/Service";
import Pricing from "./components/Pricing";
import Roadmaps from "./components/Roadmaps";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className='pt-[4.75rem] lg"pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Service />
        <Pricing />
        <Roadmaps />
        <Footer />

        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Button className="mt-10" href="#login">
            Something
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
