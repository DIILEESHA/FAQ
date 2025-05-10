import React from "react";
import Header from "./components/header/Header";
import Details from "./components/details/Details";
import Story from "./components/story/Story";
import Itinerary from "./components/itinerary/Itinerary";
import Wedding from "./components/wedding/Wedding";
import Pre from "./components/wedding/Pre";
import Travel from "./components/wedding/Travel";
import Presence from "./components/details/Presence";
import Faq from "./components/faq/Faq";
import Two from "./components/details/Two";
import Savely from "./components/save/Savely";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Details />
      <Savely />
      <Story />
      <Itinerary />
      <Wedding />
      <Pre />
      <Travel />
      <Presence />
      <Two />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
