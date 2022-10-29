import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/GameHeader.js";
import SliderCardTops from "components/cards/ThreeColSliderTops.js";
import SliderCardBottoms from "components/cards/ThreeColSliderBottoms.js";
import SliderCardShoes from "components/cards/ThreeColSliderShoes.js";
import SliderCardAccessories from "components/cards/ThreeColSliderAccessories.js";
import ContactUsForm from "components/forms/SubmitOutfit.js";
import Footer from "components/footers/GameFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <SliderCardTops />
    <SliderCardBottoms />
    <SliderCardShoes />
    <SliderCardAccessories/>
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
